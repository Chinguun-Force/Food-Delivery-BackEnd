import mongoose from "mongoose";
import { FoodSchema } from "./Food";

const FoodOrderItem = new mongoose.Schema({
   // food : FoodSchema._id,
   quantity : Number
})
export default FoodOrderItem;