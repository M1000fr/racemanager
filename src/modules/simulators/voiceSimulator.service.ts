import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ChannelType, Client } from 'discord.js';
import { PrismaService } from '../prisma/prisma.service';
import { SimulatorService } from './simulator.service';

@Injectable()
export class VoiceSimulatorService {
	constructor(
		private readonly client: Client,
		private readonly config: ConfigService,
		private readonly prisma: PrismaService,
		private readonly simulatorService: SimulatorService,
	) {}

	async moveSimulator(simulatorId: number, newVoiceChanneLId: string) {
		const guildId = this.config.get<string>('DISCORD_GUILD_ID')!;

		const guild = this.client.guilds.cache.get(guildId);
		if (!guild) throw new HttpException('Guild not found', 404);

		const simulatorDiscordAccount =
			await this.simulatorService.getSimulatorDiscordAccountId(
				simulatorId,
			);

		const simulator =
			guild.members.cache.get(simulatorDiscordAccount.discordId) ||
			(await guild.members.fetch(simulatorDiscordAccount.discordId));
		if (!simulator)
			throw new HttpException('Simulator not found on the guild', 404);

		const voiceChannel = guild.channels.cache.find(
			(channel) =>
				channel.type === ChannelType.GuildVoice &&
				channel.members.has(simulator.id),
		);
		if (!voiceChannel)
			throw new HttpException('Simulator not in a voice channel', 404);

		const newVoiceChannel = guild.channels.cache.get(newVoiceChanneLId);
		if (!newVoiceChannel)
			throw new HttpException('New voice channel not found', 404);

		if (newVoiceChannel.type !== ChannelType.GuildVoice)
			throw new HttpException(
				'New voice channel is not a voice channel',
				400,
			);

		await simulator.voice.setChannel(newVoiceChannel.id);
	}

	async bulkMoveSimulator(simulatorIds: number[], newVoiceChanneLId: string) {
		const guildId = this.config.get<string>('DISCORD_GUILD_ID')!;

		const guild = this.client.guilds.cache.get(guildId);
		if (!guild) throw new HttpException('Guild not found', 404);

		const newVoiceChannel = guild.channels.cache.get(newVoiceChanneLId);
		if (!newVoiceChannel)
			throw new HttpException('New voice channel not found', 404);

		if (newVoiceChannel.type !== ChannelType.GuildVoice)
			throw new HttpException(
				'New voice channel is not a voice channel',
				400,
			);

		const simulatorsDiscordAccounts =
			await this.simulatorService.getSimulatorsDiscordAccountIds(
				simulatorIds,
			);

		const simulatorIdsFound = simulatorIds.filter((id) =>
			simulatorsDiscordAccounts.some((simulator) => simulator.id === id),
		);

		if (simulatorIdsFound.length === 0) {
			throw new HttpException('No simulators found', 404);
		}

		const simulators = await Promise.all(
			simulatorsDiscordAccounts.map(async (simulator) => {
				const member = guild.members.cache.get(simulator.discordId);
				if (member) return member;
				return await guild.members.fetch(simulator.discordId);
			}),
		);

		if (simulators.length === 0) {
			throw new HttpException('No discord simulators found', 404);
		}

		const simulatorsInVoiceChannel = simulators.filter(
			(simulator) => simulator.voice.channel,
		);

		for (const simulator of simulatorsInVoiceChannel) {
			await simulator.voice.setChannel(newVoiceChannel.id);
		}

		return {
			message: 'Simulators moved',
			simulatorsInexistent: simulatorIds.filter(
				(id) => !simulatorIdsFound.includes(id),
			),
			simulatorsNotInVoiceChannel: simulators
				.filter((simulator) => !simulator.voice.channel)
				.map(
					(simulator) =>
						simulatorsDiscordAccounts.find(
							(s) => s.discordId === simulator.id,
						)?.id,
				),
		};
	}
}
