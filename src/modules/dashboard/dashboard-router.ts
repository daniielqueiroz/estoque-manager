import { Router } from "express";
import * as DashboardContoller from "./dashboard-controller";

export const dashboardRouter = Router();

dashboardRouter.get("/", DashboardContoller.getDashboardData);
