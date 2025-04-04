"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const FoodOrderItem = new mongoose_1.default.Schema({
    food: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Food"
    },
    quantity: Number
});
exports.default = FoodOrderItem;
//# sourceMappingURL=FoodOrderItem.js.map