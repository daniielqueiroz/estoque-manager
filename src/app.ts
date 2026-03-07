import express from "express";
import "dotenv/config";
import { router } from "./routers";
import { errorHandler } from "./shared/middlewares/errorHandler";

function createApp() {
  const app = express();

  app.use(express.json());
  app.use("/api", router);
  app.use(errorHandler);

  return app;
}

export default createApp;
