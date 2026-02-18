import { NextApiResponse } from "next";
import { Server as NetServer } from "http";
import { Server as IOServer } from "socket.io";

export type NextApiResponseServerIo = NextApiResponse & {
  socket: {
    server: NetServer & {
      io?: IOServer;
    };
  };
};
