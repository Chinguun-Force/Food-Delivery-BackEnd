import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    // _id : mongoose.Schema.Types.ObjectId,
    foodName : String,
    price : Number,
    image : String,
    ingredients : String,
    category : mongoose.Schema.Types.ObjectId,
    createdAt : Date,
    updatedAt : Date
})
export const Food = mongoose.model("Food", foodSchema)