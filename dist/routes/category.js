"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = __importDefault(require("express"));
const category_1 = require("../controller/category");
const category_2 = require("../controller/category");
const checktoken_1 = require("../middleware/checktoken");
const categoryRouter = express_1.default.Router();
exports.categoryRouter = categoryRouter;
categoryRouter
    .post('/', checktoken_1.checkToken, category_1.createCategory)
    .get('/with-foods', category_2.getCategoriesWithFoods)
    .get('/', category_1.getCategories)
    .delete('/:id', checktoken_1.checkToken, category_1.deleteCategory)
    .put('/:id', checktoken_1.checkToken, category_1.updateCategory);
//# sourceMappingURL=category.js.map