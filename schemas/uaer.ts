import mongoose from "mongoose";

const userSchema = new mongoose.Schema(

    {

        name: String,
        email: String,
        authentication: {

            password: { type: String },
            access_tpoken: {type: String }
        }


    }
);


