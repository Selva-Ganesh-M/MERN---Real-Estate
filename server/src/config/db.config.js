import mongoose from "mongoose";
import { envs } from "./env.config.js";

export const connectToDb = function(){
    mongoose.connect(envs.mongoURI)
    console.log(`connection to database successful.`)
}