import { PrismaClient, User } from "@prisma/client";
import { cpf } from "cpf-cnpj-validator";
import AppError from "../error/AppError";

const prisma = new PrismaClient()

abstract class UserValidations {
    public static async CreateNewUser(cpfUser: string, name: string): Promise<User> {

        const cpfFormatado = cpf.strip(cpfUser)
        if (!cpf.isValid(cpfFormatado)) {
            throw new AppError('CPF Inválido')
        }
        const temCPF = await prisma.user.findUnique({
            where: {
                user_cpf: cpfFormatado
            }
        })
        if (temCPF?.user_cpf === cpfFormatado) {
            throw new AppError('CPF já existente')
        }
        const user = await prisma.user.create({
            data: {
                user_cpf: cpfUser,
                username: name
            }
        })

        return user
    }
}

export default UserValidations