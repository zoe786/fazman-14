import express from "express";
import platformBlueprint from "../../../shared/platformBlueprint.js";

export function createApp() {
  const app = express();

  app.use(express.json());

  app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  app.get("/api/platform-blueprint", (_req, res) => {
    res.json(platformBlueprint);
  });

  app.get("/api/procedures", (_req, res) => {
    res.json(platformBlueprint.procedures);
  });

  app.get("/api/security", (_req, res) => {
    res.json({
      auth: ["JWT", "Google OAuth", "Apple OAuth"],
      accessControl: "Role-based access control for patients, practices, dentists, and admins",
      storage: platformBlueprint.infrastructure.mediaStorage,
      compliance: platformBlueprint.compliance,
    });
  });

  return app;
}

export default createApp;
