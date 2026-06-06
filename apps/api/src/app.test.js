import test from "node:test";
import assert from "node:assert/strict";
import request from "supertest";
import { createApp } from "./app.js";

test("health endpoint reports ok", async () => {
  const response = await request(createApp()).get("/health");

  assert.equal(response.status, 200);
  assert.deepEqual(response.body, { status: "ok" });
});

test("platform blueprint exposes private VPS media storage", async () => {
  const response = await request(createApp()).get("/api/platform-blueprint");

  assert.equal(response.status, 200);
  assert.match(response.body.brand.positioning, /Airbnb/i);
  assert.match(response.body.infrastructure.mediaStorage, /private VPS/i);
});

test("security endpoint summarizes auth and compliance choices", async () => {
  const response = await request(createApp()).get("/api/security");

  assert.equal(response.status, 200);
  assert.deepEqual(response.body.auth, ["JWT", "Google OAuth", "Apple OAuth"]);
  assert.match(response.body.accessControl, /Role-based access control/i);
  assert.ok(response.body.compliance.length >= 3);
});
