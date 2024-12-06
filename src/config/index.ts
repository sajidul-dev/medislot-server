import dotenv from "dotenv";
import path from "path";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

dotenv.config({ path: path.join(process.cwd(), ".env") });
export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  prisma: prisma,
};
