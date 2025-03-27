import mongoose from "mongoose";

const FoodCategorySchema = new mongoose.Schema({
    categoryName : String,
    createdAt : Date,
    updatedAt : Date
})
export const foodCategory = mongoose.model("FoodCategory", FoodCategorySchema)