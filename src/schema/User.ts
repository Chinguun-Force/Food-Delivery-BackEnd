import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    phoneNumber : String,
    address: String,
    role: String,
    orderedFoods: String,
    isVerified: Boolean,
})
export const User =  mongoose.model("User", userSchema);