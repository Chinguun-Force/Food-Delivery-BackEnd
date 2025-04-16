"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodRouter = void 0;
const express_1 = __importDefault(require("express"));
const food_1 = require("../controller/food");
const checktoken_1 = require("../middleware/checktoken");
const foodRouter = express_1.default.Router();
exports.foodRouter = foodRouter;
foodRouter.post('/', checktoken_1.checkToken, food_1.createFood);
foodRouter.get('/', food_1.getFood);
foodRouter.delete('/:id', checktoken_1.checkToken, food_1.deleteFood);
foodRouter.put('/:id', checktoken_1.checkToken, food_1.updateFood);
foodRouter.patch('/:id', checktoken_1.checkToken, food_1.updateFood);
//# sourceMappingURL=food.js.map