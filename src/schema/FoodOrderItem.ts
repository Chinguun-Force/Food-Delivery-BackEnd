import mongoose from "mongoose";


const FoodOrderItem = new mongoose.Schema({
   food : {
         type : mongoose.Schema.Types.ObjectId,
         ref : "Food"
   },
   quantity : Number
})
export default FoodOrderItem;