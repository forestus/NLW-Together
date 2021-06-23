import { Request, Response } from "express";
import { UserService } from "@services/UserService"

class UserController {
    async create(request: Request, response: Response) {
        const { name, email, admin } = request.body;
        try {
            const createUser = new UserService()
            const user = await createUser.execute({ name, email, admin })
            console.log(user);
            return response.json(user).status(200)
        } catch (error) {

            return response.json(error).status(400)
        }
    }
}
export { UserController }