import mongoose from "mongoose";


const FoodOrderItem = new mongoose.Schema({
   food : String,
   quantity : Number
})
export default FoodOrderItem;