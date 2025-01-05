import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://rayavellurijagadeesh:33858627@cluster0.8fxoc.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}