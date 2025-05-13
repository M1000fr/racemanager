import { Body, Controller, Patch } from '@nestjs/common';
import { VoiceSimulatorService } from './voiceSimulator.service';

@Controller('simulator/voice')
export class VoiceSimulatorController {
	constructor(
		private readonly voiceSimulatorService: VoiceSimulatorService,
	) {}

	@Patch('move')
	async moveSimulator(
		@Body('simulatorId') simulatorId: number,
		@Body('newVoiceChannelId') newVoiceChannelId: string,
	) {
		return this.voiceSimulatorService.moveSimulator(
			simulatorId,
			newVoiceChannelId,
		);
	}

	@Patch('moveBulk')
	async moveBulkSimulator(
		@Body('simulatorIds') simulatorIds: number[],
		@Body('newVoiceChannelId') newVoiceChannelId: string,
	) {
		return await this.voiceSimulatorService.bulkMoveSimulator(
			simulatorIds,
			newVoiceChannelId,
		);
	}
}
