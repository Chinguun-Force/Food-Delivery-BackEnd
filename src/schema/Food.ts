import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    Name : {
        type : String,
        require : true,
    },
    price : {
        type : Number,
        default : 0
    },
    image : {
        type : String,
        require : true,
    },
    ingredients : [
        {
            type: String
        }
    ],
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "FoodCategory"
    },
} , {timestamps : true })
export const Food = mongoose.model("Food", foodSchema)