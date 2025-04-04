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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const FoodCategory_1 = require("./schema/FoodCategory");
const User_1 = require("./schema/User");
const food_1 = require("./routes/food");
const connection_1 = require("./utils/connection");
const port = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/foodCategory', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const FoodCategory = yield FoodCategory_1.foodCategory.create(req.body);
    res.json({ success: true, FoodCategory });
}));
app.post('/user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userMock = yield User_1.User.create(req.body);
    res.json({ success: true, userMock });
}));
app.use('/api/v1/food', food_1.foodRouter);
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    const connectDb = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield (0, connection_1.connection)();
        }
        catch (err) {
            console.error(err);
        }
    });
    connectDb();
    console.log(`Server is running on port ${port}`);
}));
//# sourceMappingURL=index.js.map