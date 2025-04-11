import { User } from "../schema/User";
import bcrypt from "bcrypt";
export const signUp = async (req, res) => {
    const { password } = req.body
    const saltRounds =12;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const user = await User.create({...req.body, password: hash})
    // console.log(hash)
    res.status(200).json({ success: true, message: "User created successfully", user })
}