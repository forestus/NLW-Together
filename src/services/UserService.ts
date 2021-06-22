import { UsersRepository } from "@repositories/UsersRepository"
import { getCustomRepository } from "typeorm"
import { AppError } from "@errors/AppError"
interface IUserRequest {
    name: string,
    email: string,
    admin?: boolean
}
class UserService {
    async execute({ name, email, admin }: IUserRequest) {
        const userRepository = getCustomRepository(UsersRepository)
        const userAlreadyExists = await userRepository.findOne({ email })
        if (!email) {
            throw new AppError("Incorrect User Email!")
        }
        if (userAlreadyExists) {
            throw new AppError("User Already Exists!")
        }
        const userData = userRepository.create({
            name, email, admin
        })
        const user = await userRepository.save(userData)
        return user
    }
}
export { UserService }