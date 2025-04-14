import { User } from "../schema/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds =12;

export const signUp = async (req, res) => 
{
    try {
        const { password } = req.body
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const user = await User.create({...req.body, password: hash})
        res.status(200).json({ success: true, message: "User created successfully", user })
} catch (error) {
    console.log(error);
    if(error.code === 11000){
        res.status(400).json({success:false, message:"User already exists"})
    }
}
}
export const login = async (res, req) => {
    const {email, password} = req.body;

    const user = await User.findOne({email: email});
    if(!user) { 
        res.status(404).json({success: false, message: "Username or password is incorrect"})
        return;
    }
    const isPair = bcrypt.compareSync(password, user.password);
    if(!isPair) {
        res.status(404).json({success: false, message: "Хэтэрхий хурдан бичээд бид хүлээж авж чадахгүй байна"})
        return;
    }
    const token = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET_KEY, {expiresIn: "1d"});
    res.status(200).json({success: true, message: "User logged in successfully", token})
}