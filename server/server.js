import express from "express";
import { connectToDb } from "./src/config/db.config.js";
import { startServer } from "./src/config/server.config.js";

const server = express();

const start = () => {
    try{
        connectToDb();
        startServer(server);
    }catch(err){
        console.log(`starting server failed: ${err.message}`)
    }
}

start();