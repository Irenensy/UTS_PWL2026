import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import webRoutes from "./routes/web";

const app = new Hono();

// Melayani file statis (CSS)
app.use("/public/*", serveStatic({ root: "./src" }));

// Menggunakan routes
app.route("/", webRoutes);

console.log("Server running at http://localhost:3000");

export default {
  port: 3000,
  fetch: app.fetch,
};