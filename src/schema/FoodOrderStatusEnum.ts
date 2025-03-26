import mongoose from "mongoose";

const FoodOrderStatusEnum = {
    PENDING: "PENDING",
    CANCELED : "CANCELED",
    DELIVERED : "DELIVERED"
}
export default FoodOrderStatusEnum;