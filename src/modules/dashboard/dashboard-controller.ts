import { Request, Response } from "express";
import * as DashboardService from "./dashboard-service";

export const getDashboardData = async (req: Request, res: Response) => {
  const data = await DashboardService.getDashboardData();
  res.status(200).json(data);
};
