"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodCategory = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const FoodCategorySchema = new mongoose_1.default.Schema({
    categoryName: String,
}, { timestamps: true });
exports.foodCategory = mongoose_1.default.model("FoodCategory", FoodCategorySchema);
//# sourceMappingURL=FoodCategory.js.map