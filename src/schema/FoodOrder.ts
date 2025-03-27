import mongoose from "mongoose";


const FoodOrder = new mongoose.Schema({
    user: String,
    foodOrderItems: String,
    status: String,
    createdAt: Date,
    updatedAt: Date
})