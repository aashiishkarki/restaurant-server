import mongoose from "mongoose";    

 export const dbconnection =  () => {
    mongoose
   .connect(process.env.MONGO_URL, {

        dbName: "restaurant-app",

    })
    .then (() => {
        console.log("MongoDB connected")
    }).catch((err) => {
        console.log(`MongoDB connection error! ${err}`)
    })
};



