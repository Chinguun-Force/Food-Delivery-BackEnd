import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    foodName : String,
    price : Number,
    image : String,
    ingredients : String,
    category : String,
    createdAt : Date,
    updatedAt : Date
})
export const Food = mongoose.model("Food", foodSchema)