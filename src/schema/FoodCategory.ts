import mongoose from "mongoose";

const FoodCategorySchema = new mongoose.Schema({
    categoryName : String,
} , {timestamps : true})
export const foodCategory = mongoose.model("FoodCategory", FoodCategorySchema)