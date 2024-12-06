import express, { Request, Response } from "express";
import { Application } from "express";
import cors from "cors";
import config from "./config";
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/user", async (req: Request, res: Response) => {
  const new_user = {
    name: req.body.name,
    email: req.body.email,
  };
  const result = await config.prisma.user.create({
    data: new_user,
  });
  res.send(result);
});

export default app;
