import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { IntentsBitField, Partials } from 'discord.js';
import { NecordModule } from 'necord';
import { PrismaModule } from './modules/prisma/prisma.module';
import { SimulatorModule } from './modules/simulators/simulator.module';

@Module({
	imports: [
		NecordModule.forRootAsync({
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
				token: configService.get<string>('DISCORD_TOKEN')!,
				intents: [
					IntentsBitField.Flags.Guilds,
					IntentsBitField.Flags.GuildVoiceStates,
					IntentsBitField.Flags.GuildMembers,
				],
				partials: [Partials.GuildMember, Partials.Channel],
				skipRegistration: true,
			}),
		}),
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		PrismaModule,
		SimulatorModule,
	],
})
export class AppModule {}
