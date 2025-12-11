import mongoose from "mongoose";

const mongodbUri =  process.env.MONGODB_URI as string
const mongodbName = process.env.MONGODB_NAME as string

if(!mongodbUri){
    throw new Error("Mongodb uri not set")
}

if(!mongodbName){
    throw new Error("Mongodb name not set")
}

export default async function connectDb(){
    try{
        await mongoose.connect(mongodbUri ,{dbName:mongodbName})
        console.log("Database Connection Successful")
    }catch(err){
    
        console.error("Error connecting to MongoDB:", err)

}
}

