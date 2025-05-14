import { Router } from "express";
import SimulatorsController from "../controllers/simulators";

export const MainRouter = Router();

MainRouter.get("/simulators", SimulatorsController.getSimulators);
MainRouter.post(
    "/simulators/new-session",
    SimulatorsController.newSession,
);
MainRouter.post(
    "/simulators/stop-session",
    SimulatorsController.stopSession,
);