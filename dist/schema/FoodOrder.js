"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const FoodOrder = new mongoose_1.default.Schema({
    user: String,
    foodOrderItems: String,
    status: String,
    createdAt: Date,
    updatedAt: Date
});
//# sourceMappingURL=FoodOrder.js.map