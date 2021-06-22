import "reflect-metadata";
import "./database"
import express from "express";
const PORT = 3333;
const app = express();
import { router } from "@routes/routes";
import { errorMiddleware } from "@middlewares/errorMiddleware"
app.use(express.json());
app.use(router);
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
})