import { PrismaClient } from '@prisma/client'

// export const connectDB = async() => {
//     try{
//         await prisma.$connect();
//     }catch(error){
//         console.log(error);
//         throw new Error("Unable to connect to DB")
//     }
// }


let globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export const db = prisma;