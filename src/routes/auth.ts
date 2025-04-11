import {Router} from "express"
import { signUp } from "../controller/auth";

const authRouter = Router();

authRouter.post ('/sign-up', signUp)

export { authRouter };