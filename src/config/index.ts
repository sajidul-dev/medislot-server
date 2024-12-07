/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import dotenv from "dotenv";
import path from "path";
// import { PrismaClient } from "@prisma/client";
// import { PrismaClient } from "../../prisma/generated/client";
import { PrismaClient } from "../../prisma/generated/client";

// const prisma = new PrismaClient();

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

// export default prisma;

dotenv.config({ path: path.join(process.cwd(), ".env") });
export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  prisma: prisma,
};
