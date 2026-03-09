import * as DashboardRepository from "./dashboard-repository";

export const getDashboardData = async () => {
  const data = await DashboardRepository.getSummaryMetrics();
  return data;
};
