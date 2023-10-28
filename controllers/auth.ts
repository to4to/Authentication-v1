

import { Request,Response } from "express"

const registerUser = (req : Request, res:Response) => {
    const{name,email,password}= req.body
    //validate email if it exists or not
       



    //if exists raise error already exists 




    //encrypt password



    //save user info in mongodb 



    //return status code 201 with user information




}


const loginUser = (req:Request, res:Response) => {


const{email,password}=req.body


//valid email or not



//password valid or not


//generate access token



//set access token in cookie 



// send status code 200 with user info  along with access token




}

const logout = (req:Request, res:Response) => {
//delete cookie or make it empty


//send status code 200 with message logout

}



export {
    registerUser,
    loginUser,
    logout
}