import Express from "express";

const authRouter= Express.Router()



authRouter.get("/test",(req,res)=>{

    res.send("Test Api Route Working Fine")
})





export default authRouter