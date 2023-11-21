import dotenv from "dotenv";

dotenv.config();

export const envs = {
    port: process.env.PORT,
    mongoURI: process.env.MONGO_URI,
}