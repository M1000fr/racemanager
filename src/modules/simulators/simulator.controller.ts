import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SimulatorService } from './simulator.service';

@Controller('simulator')
export class SimulatorController {
	constructor(private readonly simulatorService: SimulatorService) {}

	@Get()
	async getSimulators(){
		return await this.simulatorService.getSimulators();
	}

	@Post()
	async createSimulatorAccount(
		@Body('name') name: string,
		@Body('discordId') discordId: string,
	) {
		const simulatorAccount =
			await this.simulatorService.createSimulatorAccount(name, discordId);

		return simulatorAccount;
	}

	@Delete(':id')
	async deleteSimulatorAccount(@Param('id') id: string) {
		const simulatorAccount =
			await this.simulatorService.deleteSimulatorAccount(
				Number.parseInt(id),
			);

		return simulatorAccount;
	}
}
