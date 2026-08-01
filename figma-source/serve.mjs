import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";

const root = new URL(".", import.meta.url);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
};

createServer(async (request, response) => {
  const pathname = request.url === "/" ? "index.html" : request.url.slice(1);
  try {
    const file = new URL(pathname, root);
    const body = await readFile(file);
    response.writeHead(200, { "content-type": mime[extname(pathname)] ?? "application/octet-stream" });
    response.end(body);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
}).listen(4173, "127.0.0.1");
