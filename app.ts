import dotenv from "dotenv";
import { Server } from "./src/server";

// Load environment variables
dotenv.config();

// Start server or instancies
const server = new Server();
server.listen();