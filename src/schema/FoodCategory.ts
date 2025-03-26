import mongoose from "mongoose";

const FoodCategory = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    categoryName : String,
    createdAt : Date,
    updatedAt : Date
})