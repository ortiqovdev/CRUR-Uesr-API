import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

export type User = {
    name: string
    email: string
    status: string
}


export function createAcc(user: User) {
    return prisma.users.create({
        data: user
    })
}
export function getAll() {
    return prisma.users.findMany()
}
export function deleteUser(id: number) {
    return prisma.users.delete({
        where: {
            id
        }
    })
}
export function updateStatus(id:number, status: string) {
    return prisma.users.update({
        where: {
            id
        },
        data:{
            status
        }
    })
}