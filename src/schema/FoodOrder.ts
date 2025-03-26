import mongoose from "mongoose";
import FoodOrderStatusEnum from "./FoodOrderStatusEnum";
import FoodOrderItem from "./FoodOrderItem";
import User from "./User";

const FoodOrder = new mongoose.Schema({
    // _id : mongoose.Schema.Types.ObjectId,
    // user : User.userShema._id,
    // foodOrderItems : [FoodOrderItem],
    // status : FoodOrderStatusEnum,
    createdAt : Date,
    updatedAt : Date
})