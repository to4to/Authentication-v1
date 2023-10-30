//console.log("Starting");
import Express from "express";

import dotenv from 'dotenv';
import authRouter from "../routes/authentication";
import mongoose from "mongoose";

dotenv.config();

const app = Express()


app.listen(process.env.PORT, () => {
    console.log(`Server Started At port: ${process.env.PORT}`);

})


app.use("/auth",authRouter)

mongoose.
 connect(process.env.MONGODB_URL as string).then(()=>{
    console.log("Mongo Db Connected Successfully");
    
}).catch((error)=>{
    console.error(error)
    
})

