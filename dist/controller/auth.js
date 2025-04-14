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
exports.login = exports.signUp = void 0;
const User_1 = require("../schema/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const saltRounds = 12;
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password } = req.body;
        const salt = bcrypt_1.default.genSaltSync(saltRounds);
        const hash = bcrypt_1.default.hashSync(req.body.password, salt);
        const user = yield User_1.User.create(Object.assign(Object.assign({}, req.body), { password: hash }));
        res.status(200).json({ success: true, message: "User created successfully", user });
    }
    catch (error) {
        console.log(error);
        if (error.code === 11000) {
            res.status(400).json({ success: false, message: "User already exists" });
        }
    }
});
exports.signUp = signUp;
const login = (res, req) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield User_1.User.findOne({ email: email });
    if (!user) {
        res.status(404).json({ success: false, message: "Username or password is incorrect" });
        return;
    }
    const isPair = bcrypt_1.default.compareSync(password, user.password);
    if (!isPair) {
        res.status(404).json({ success: false, message: "Хэтэрхий хурдан бичээд бид хүлээж авж чадахгүй байна" });
        return;
    }
    const token = jsonwebtoken_1.default.sign({ user }, process.env.ACCESS_TOKEN_SECRET_KEY, { expiresIn: "1d" });
    res.status(200).json({ success: true, message: "User logged in successfully", token });
});
exports.login = login;
//# sourceMappingURL=auth.js.map