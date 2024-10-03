import prisma from '../../lib/prisma';

async function getTransactions(walletId: number){
    return await prisma.transaction.findMany({
        where:{
            walletId: walletId
        }
    })
}