import User from "../schemas/User";
import { Request, Response } from "express";

class UserController {
    public async index(req: Request, res: Response): Promise<Response> {
        const users = await User.find()

        return res.json(users)
    }

    public async store(req: Request, res: Response): Promise<Response> {
        const user = await User.create(req.body);
        console.log(user.fullName())
        return res.json(user)
    }
}

export default new UserController()