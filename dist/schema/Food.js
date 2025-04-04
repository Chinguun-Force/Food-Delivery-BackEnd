"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const foodSchema = new mongoose_1.default.Schema({
    Name: String,
    price: Number,
    image: String,
    ingredients: [
        {
            type: String
        }
    ],
    category: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "FoodCategory"
    },
}, { timestamps: true });
exports.Food = mongoose_1.default.model("Food", foodSchema);
//# sourceMappingURL=Food.js.map