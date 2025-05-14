import {
	ChannelType,
	type Collection,
	type VoiceBasedChannel,
} from "discord.js";
import type { Request, Response } from "express";
import { racemanager } from "..";
import { wait } from "../utils/wait";
import type { Config } from "../@types/config";

const configPath = "config.json";
const configFile = Bun.file(configPath);

// Check if config file exists
if (!(await Bun.file(configPath).exists())) {
	throw new Error(
		`Config file not found at ${configPath}. Please create a config file.`,
	);
}

const sessionsCache: Map<
	string,
	{
		simulatorsIds: number[];
		voiceChannelId: string;
		startedAt: number;
	}
> = new Map();

// Clear sessions started more than 1 hour ago
setInterval(() => {
	const now = Date.now();
	for (const [sessionId, session] of sessionsCache.entries()) {
		if (now - session.startedAt > 60 * 60 * 1000) {
			sessionsCache.delete(sessionId);
		}
	}
}, 60 * 1000);

export default {
	getSimulators: async (req: Request, res: Response): Promise<void> => {
		const config = await configFile.json();
		const { simulators } = config;

		if (!simulators) {
			res.status(500).json({
				error: "Simulators not found",
			});
			return;
		}

		res.status(200).json({
			simulators,
		});
	},
	stopSession: async (req: Request, res: Response): Promise<void> => {
		const config = (await configFile.json()) as Config;
		const { waitingRoomChannelId } = config;
		const { sessionId } = req.body;

		if (!sessionId) {
			res.status(400).json({
				error: "Session id not found",
			});
			return;
		}

		if (!waitingRoomChannelId) {
			res.status(500).json({
				error: "Waiting room channel id not found",
			});
			return;
		}

		const session = sessionsCache.get(sessionId);
		if (!session) {
			res.status(400).json({
				error: "Session not found",
			});
			return;
		}

		const guild = racemanager.guilds.cache.get(
			// biome-ignore lint/style/noNonNullAssertion: <explanation>
			process.env.DISCORD_GUILD_ID!,
		);
		if (!guild) {
			res.status(500).json({
				error: "Guild not found",
			});
			return;
		}

		const voiceChannel = guild.channels.cache.get(
			session.voiceChannelId,
		) as VoiceBasedChannel;
		if (!voiceChannel) {
			res.status(500).json({
				error: "Voice channel not found",
			});
			return;
		}

		const waitingRoomChannel = guild.channels.cache.get(
			waitingRoomChannelId,
		) as VoiceBasedChannel;
		if (!waitingRoomChannel) {
			res.status(500).json({
				error: "Waiting room channel not found",
			});
			return;
		}

		const simulatorsMembers = session.simulatorsIds.map((simulatorId) => {
			const simulatorConfig = config.simulators.find(
				(simulator) => simulator.id === simulatorId,
			);
			if (!simulatorConfig) return null;

			return guild.members.cache.find((member) => {
				return member.user.id === simulatorConfig.discordId;
			});
		});

		const simulatorsNotFoundAsMembers = session.simulatorsIds.filter(
			(simulatorId) => {
				const simulatorConfig = config.simulators.find(
					(simulator) => simulator.id === simulatorId,
				);
				if (!simulatorConfig) return true;

				return !guild.members.cache.some((member) => {
					return member.user.id === simulatorConfig.discordId;
				});
			},
		);
		if (simulatorsNotFoundAsMembers.length > 0) {
			res.status(400).json({
				error: "Simulators not found as members",
				simulatorsNotFoundAsMembers,
			});
			return;
		}

		for (const simulator of simulatorsMembers) {
			if (!simulator) {
				res.status(400).json({
					error: "Simulator not found",
				});
				return;
			}
			await simulator.voice
				.setChannel(waitingRoomChannel)
				.catch((err) => {
					res.status(500).json({
						error: "Error moving simulator to waiting room channel",
						err,
					});
				});

			await wait(500); // Wait to avoid rate limit
		}

		sessionsCache.delete(sessionId);
		res.status(200).json({
			message: "Session stopped",
			sessionId,
			simulatorsIds: session.simulatorsIds,
		});
	},
	newSession: async (req: Request, res: Response): Promise<void> => {
		const config = (await configFile.json()) as Config;
		const { simulators } = config;
		const { simulatorsIds, sessionId } = req.body;

		if (!simulators) {
			res.status(500).json({
				error: "Simulators not found",
			});
			return;
		}

		if (!simulatorsIds) {
			res.status(400).json({
				error: "Simulators ids not found",
			});
			return;
		}

		if (!sessionId) {
			res.status(400).json({
				error: "Session id not found",
			});
			return;
		}

		if (!Array.isArray(simulatorsIds)) {
			res.status(400).json({
				error: "Simulators ids must be an array",
			});
			return;
		}

		// find simulators ids in config
		const foundSimulators = simulators.filter((simulator) => {
			return simulatorsIds.includes(simulator.id);
		});

		const notFoundSimulatorsIds = simulatorsIds.filter((simulatorId) => {
			return !simulators.some(
				(simulator) => simulator.id === simulatorId,
			);
		});
		if (notFoundSimulatorsIds.length > 0) {
			res.status(400).json({
				error: "Simulators ids not found",
				notFoundSimulatorsIds,
			});
			return;
		}

		const guild = racemanager.guilds.cache.get(
			// biome-ignore lint/style/noNonNullAssertion: <explanation>
			process.env.DISCORD_GUILD_ID!,
		);
		if (!guild) {
			res.status(500).json({
				error: "Guild not found",
			});
			return;
		}

		const voiceChannels: Collection<string, VoiceBasedChannel> =
			guild.channels.cache.filter(
				(channel): channel is VoiceBasedChannel => {
					return (
						channel.type === ChannelType.GuildVoice &&
						config.voiceChannelsIds.includes(channel.id)
					);
				},
			);

		if (voiceChannels.size === 0) {
			res.status(500).json({
				error: "No voice channels found",
			});
			return;
		}

		const voiceChannel = voiceChannels.find((channel) => {
			return channel.members.size === 0;
		});

		if (!voiceChannel) {
			res.status(500).json({
				error: "No voice channel found",
			});
			return;
		}

		// get simulator as guildMember
		const simulatorsMembers = foundSimulators.map((simulator) => {
			return guild.members.cache.find((member) => {
				return member.user.id === simulator.discordId;
			});
		});
		const simulatorsNotFoundAsMembers = foundSimulators.filter(
			(simulator) => {
				return !guild.members.cache.some((member) => {
					return member.user.id === simulator.discordId;
				});
			},
		);
		if (simulatorsNotFoundAsMembers.length > 0) {
			res.status(400).json({
				error: "Simulators not found as members",
				simulatorsNotFoundAsMembers,
			});
			return;
		}

		for (const simulator of simulatorsMembers) {
			if (!simulator) {
				res.status(400).json({
					error: "Simulator not found",
				});
				return;
			}

			await simulator.voice.setChannel(voiceChannel).catch((err) => {
				res.status(500).json({
					error: "Error moving simulator to voice channel",
					err,
				});
			});

			await wait(500); // Wait to avoid rate limit
		}

		sessionsCache.set(sessionId, {
			simulatorsIds,
			voiceChannelId: voiceChannel.id,
			startedAt: Date.now(),
		});

		res.status(200).json({
			message: "Session created",
			sessionId,
			simulatorsIds,
			voiceChannelName: voiceChannel.name,
		});
	},
};
