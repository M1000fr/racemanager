import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SimulatorService {
	constructor(private readonly prisma: PrismaService) {}

	async getSimulators() {
		const simulators = await this.prisma.simulatorAccount.findMany();

		return simulators;
	}

	async createSimulatorAccount(name: string, discordId: string) {
		const alreadyExist = await this.prisma.simulatorAccount.findUnique({
			where: { discordId },
		});
		if (alreadyExist)
			throw new HttpException('Simulator already exists', 409);

		const simulatorAccount = await this.prisma.simulatorAccount.create({
			data: {
				name,
				discordId,
			},
		});

		return simulatorAccount;
	}

	async deleteSimulatorAccount(id: number) {
		const exist = await this.prisma.simulatorAccount.findUnique({
			where: { id },
		});
		if (!exist) throw new HttpException('Simulator not found', 404);

		const simulatorAccount = await this.prisma.simulatorAccount.delete({
			where: { id },
		});

		if (!simulatorAccount)
			throw new HttpException('Simulator not found', 404);

		return simulatorAccount;
	}

	async getSimulatorDiscordAccountId(simulatorId: number) {
		const simulatorDiscordAccount =
			await this.prisma.simulatorAccount.findUnique({
				where: { id: simulatorId },
			});

		if (!simulatorDiscordAccount)
			throw new HttpException('Simulator not found', 404);

		return simulatorDiscordAccount;
	}

	async getSimulatorsDiscordAccountIds(simulatorIds: number[]) {
		const simulatorsDiscordAccounts =
			await this.prisma.simulatorAccount.findMany({
				where: { id: { in: simulatorIds } },
			});

		if (!simulatorsDiscordAccounts)
			throw new HttpException('Simulators not found', 404);

		return simulatorsDiscordAccounts;
	}
}
