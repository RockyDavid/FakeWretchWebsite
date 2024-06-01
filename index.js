import { createServer } from "vite";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// Define __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 5173;
async function startServer() {
  // Create Vite server in middleware mode.
  const server = await createServer({
    root: resolve(__dirname),
    server: {
      port: port, // You can specify the port here
    },
  });

  // Use Vite's connect instance as middleware
  server.middlewares.use((req, res, next) => {
    // Custom middleware logic (if needed)
    next();
  });

  // Start the server
  await server.listen();

  console.log(`Vite server is running at http://localhost:${port}`);
}

startServer();
