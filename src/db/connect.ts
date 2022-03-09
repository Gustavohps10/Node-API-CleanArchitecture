import mongoose from "mongoose";
import config from  '../../config/default';

export default async function connect(){
    try {
        await mongoose
            .connect(config.dbUrl);
        console.log("Database connected");
    } catch (error) {
        console.log("Database error", error);
    }
}