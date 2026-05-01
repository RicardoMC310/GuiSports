export default interface IUserRepository {
    register(name: string, email: string, passwordHash: string): Promise<void>
};