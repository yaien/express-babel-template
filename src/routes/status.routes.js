import { getStatusHandler } from "../controllers/status.controller";

export function useStatusRoutes(app) {
  app.get("/v1/status", getStatusHandler);
}
