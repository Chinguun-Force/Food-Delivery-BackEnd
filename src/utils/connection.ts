import mongoose from "mongoose";

export const connection = async () => {
    await mongoose.connect("mongodb+srv://chinguunbats9:Chinguung*oo7@cluster0.f1s8hns.mongodb.net/");
    console.log("Connected to database");
};