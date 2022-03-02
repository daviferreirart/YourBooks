import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from 'express'
import UserValidations from '../services/userServices'

const prisma = new PrismaClient()
const app = express()

app.post('/user', async (req: Request, res: Response) => {
    const { cpf, name } = req.body

    const user = await UserValidations.CreateNewUser(cpf,name)
    return res.status(201).json(user)
})

app.get('/user', async (req: Request, res: Response) => {
    const users = await prisma.user.findMany()
    return res.status(200).json(users)
})

export default app