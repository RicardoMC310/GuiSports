import { hash } from "@/utils/password.helper";
import createUserDTO from "./dtos/create-user-dto";
import IUserRepository from "./user.respository.interface";

export default class UserService {
    constructor(
        private readonly userRepository: IUserRepository
    ) { }

    async register(createUserDTO: createUserDTO): Promise<void> {
        const passwordHash = await hash(createUserDTO.password);

        await this.userRepository.register(createUserDTO.name, createUserDTO.email, passwordHash);
    }
}