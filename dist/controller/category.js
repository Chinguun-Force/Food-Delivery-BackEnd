"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoriesWithFoods = exports.updateCategory = exports.deleteCategory = exports.getCategories = exports.createCategory = void 0;
const FoodCategory_1 = require("../schema/FoodCategory");
const createCategory = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(request.headers);
        const created = yield FoodCategory_1.foodCategory.create(request.body);
        response.status(201).json({ success: true, created });
    }
    catch (err) {
        response.status(500).json({ success: false, message: err.message });
    }
});
exports.createCategory = createCategory;
const getCategories = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield FoodCategory_1.foodCategory.find({});
        response.status(200).json({ success: true, categories });
    }
    catch (err) {
        response.status(500).json({ success: false, message: err.message });
    }
});
exports.getCategories = getCategories;
const deleteCategory = (Request, Response) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield FoodCategory_1.foodCategory.findByIdAndDelete(Request.params.id);
    Response.json({ success: true, category });
});
exports.deleteCategory = deleteCategory;
const updateCategory = (Request, Response) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield FoodCategory_1.foodCategory.findByIdAndUpdate(Request.params.id, Request.body, { new: true });
    Response.json({ success: true, category });
});
exports.updateCategory = updateCategory;
const getCategoriesWithFoods = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield FoodCategory_1.foodCategory.aggregate([
            {
                $lookup: {
                    from: "foods",
                    localField: "_id",
                    foreignField: "category",
                    as: "foods"
                }
            }
        ]);
        response.status(200).json({ success: true, categories });
    }
    catch (err) {
        response.status(500).json({ success: false, message: err.message });
    }
});
exports.getCategoriesWithFoods = getCategoriesWithFoods;
//# sourceMappingURL=category.js.map