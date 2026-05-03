import { writeFileSync } from "fs";

// Import the SSR server built by vite
const { default: server } = await import("../dist/server/server.js");

const request = new Request("http://localhost/");
const response = await server.fetch(request);
const html = await response.text();

writeFileSync("dist/client/index.html", html, "utf8");
console.log("Pre-rendered index.html written to dist/client/");
