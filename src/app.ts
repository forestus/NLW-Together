import "reflect-metadata";
import express from "express";
import { router } from "@routes/routes";
import { errorMiddleware } from "@middlewares/errorMiddleware"
import createConnection from './database';

createConnection();
const app = express();
app.use(express.json());
app.use(router);
app.use(errorMiddleware);


export default app