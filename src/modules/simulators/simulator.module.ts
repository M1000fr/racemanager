import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SimulatorController } from './simulator.controller';
import { SimulatorService } from './simulator.service';
import { VoiceSimulatorController } from './voiceSimulator.controller';
import { VoiceSimulatorService } from './voiceSimulator.service';

@Module({
	controllers: [VoiceSimulatorController, SimulatorController],
	providers: [VoiceSimulatorService, SimulatorService, PrismaService],
})
export class SimulatorModule {}
