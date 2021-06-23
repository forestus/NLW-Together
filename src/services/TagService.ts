import { TagsRepository } from "@repositories/TagsRepository"
import { getCustomRepository } from "typeorm"
import { AppError } from "@errors/AppError"

class TagService {
    async execute(name: string) {
        const userRepository = getCustomRepository(TagsRepository)

        if (!name) {
            throw new AppError("Incorrect Tag Name!")
        }

        const tagAlreadyExists = await userRepository.findOne({ name })

        if (tagAlreadyExists) {
            throw new AppError("User Already Exists!")
        }

        const tagData = userRepository.create({
            name
        })

        const user = await userRepository.save(tagData)

        return user
    }
}
export { TagService }