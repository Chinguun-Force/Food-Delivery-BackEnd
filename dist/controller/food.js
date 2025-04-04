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
exports.updateFood = exports.deleteFood = exports.getFood = exports.createFood = void 0;
const Food_1 = require("../schema/Food");
const createFood = (Request, Response) => __awaiter(void 0, void 0, void 0, function* () {
    const food = yield Food_1.Food.create(Request.body);
    console.log(Request.body);
    Request.json({ success: true, food });
});
exports.createFood = createFood;
const getFood = (Request, Response) => __awaiter(void 0, void 0, void 0, function* () {
    const foods = yield Food_1.Food.find();
    Response.json({ success: true, foods });
});
exports.getFood = getFood;
const deleteFood = (Request, Response) => __awaiter(void 0, void 0, void 0, function* () {
    const food = yield Food_1.Food.findByIdAndDelete(Request.params.id);
    Response.json({ success: true, food });
});
exports.deleteFood = deleteFood;
const updateFood = (Request, Response) => __awaiter(void 0, void 0, void 0, function* () {
    const food = yield Food_1.Food.findByIdAndUpdate(Request.params.id, Request.body, { new: true });
    Response.json({ success: true, food });
});
exports.updateFood = updateFood;
//# sourceMappingURL=food.js.map