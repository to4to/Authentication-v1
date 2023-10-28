import Express from "express";
import { loginUser,registerUser,logout } from "../controllers/auth";

const authRouter= Express.Router()



authRouter.post("/signup",registerUser)

authRouter.post("/login",loginUser)

authRouter.post("/logout",logout)



export default authRouter