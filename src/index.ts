import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import webRouter from "./routes/web";

const app = new Hono();

app.use("*", async (c, next) => {
  console.log(`Log: ${c.req.method} ${c.req.url}`);
  await next();
});

app.use("/public/*", serveStatic({ root: "./" }));


app.route("/", webRouter);

// 4. Jalankan Server
export default {
  port: 3000,
  fetch: app.fetch,
};

console.log("🚀 Server jalan di http://localhost:3000");