//console.log("Starting");
import Express from "express";

import dotenv from 'dotenv';
import authRouter from "../routes/authentication";

dotenv.config();

const app = Express()


app.listen(process.env.PORT, () => {
    console.log(`Server Started At port: ${process.env.PORT}`);

})


app.use("/auth",authRouter)