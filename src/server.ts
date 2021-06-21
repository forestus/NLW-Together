import express from "express";
const PORT = 3333;
import "reflect-metadata";
const app = express();
import "./database"
import { router } from "@routes/routes";
app.use(router);

app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
})