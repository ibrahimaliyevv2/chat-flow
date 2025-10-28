import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        const con = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB is connected: ${con.connection.host}`);
    }
    catch(err){
        console.log(`MongoDB connection error happened: ${err}`);
    }
}