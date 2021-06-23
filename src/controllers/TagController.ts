import { Request, Response } from "express";
import { TagService } from "@services/TagService"
import { AppError } from "@errors/AppError"


class TagController {
    async create(request: Request, response: Response) {
        const { name } = request.body;

        try {
            const createTag = new TagService()

            const user = await createTag.execute(name)

            return response.json(user).status(200)

        } catch (error) {

            throw new AppError(error)

        }
    }
}
export { TagController }