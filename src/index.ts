import { Server } from "socket.io";
import { SocketServer } from "./socket.handler";

const io = new Server(5000, { cors: { origin: "*" } });

const server = new SocketServer(io);

server.listen();
