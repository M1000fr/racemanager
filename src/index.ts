import { Client, IntentsBitField, Partials } from "discord.js";
import express from "express";
import { MainRouter } from "./routes";
import { type Request, type Response, type NextFunction } from "express";

const expressApp = express();
const PORT = process.env.PORT || 3000;

export const racemanager = new Client({
	intents: [
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildVoiceStates,
		IntentsBitField.Flags.GuildMembers,
	],
	partials: [Partials.GuildMember, Partials.Channel],
});

racemanager.once("ready", () => {
	console.log("[Discord] Racemanager is ready!");
});

racemanager.login(process.env.DISCORD_TOKEN).catch((err) => {
	console.error("[Discord] Error logging in:", err);
});

expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: true }));
expressApp.disable("x-powered-by");

expressApp.use(MainRouter);

expressApp.use((req, res, next) => {
	res.status(404).json({
		message: "Not Found !",
	});
	next();
});

expressApp.use(
	(err: Error, req: Request, res: Response, next: NextFunction) => {
		console.error(err.message);
		res.status(500).json({
			message: "Internal Server Error !",
		});
		next();
	},
);

expressApp.listen(PORT, () => {
	console.log(`[API] Server is running on port ${PORT}`);
});
