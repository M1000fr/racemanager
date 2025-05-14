export interface Config {
	simulators: {
		id: number;
		discordId: string;
	}[];
	waitingRoomChannelId: string;
	voiceChannelsIds: string[];
}
