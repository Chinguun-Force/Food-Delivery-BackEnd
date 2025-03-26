import mongoose from "mongoose";
import UserRoleEnum from "./UserRoleEnum";

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: String,
    password: String,
    phoneNumber : String,
    address: String,
    role: UserRoleEnum,
    orderedFoods: [mongoose.Schema.Types.ObjectId],
    isVerified: Boolean,
    createdAt: Date,
    updatedAt: Date
})
export default mongoose.model("User", userSchema);