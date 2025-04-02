import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    Name : String,
    price : Number,
    image : String,
    ingredients : String,
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "FoodCategory"
    },
} , {timestamps : true })
export const Food = mongoose.model("Food", foodSchema)