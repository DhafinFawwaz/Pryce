import { NextResponse } from "next/server";
import prisma from '../../../lib/prisma';

export async function POST(req: Request) {
    try {
        const information = await req.json();

        const category = await prisma.category.findFirst({
            where: {
                name: information.category,
            },
        });

        const categoryId = category?.id || 0;

        const subId = ((await prisma.transaction.aggregate({
            _max: {
                subId: true,
            },
            where: {
                walletId: information.walletId,
            },
        }))._max.subId || 0) + 1;

        const transaction = await prisma.transaction.create({
            data: {
                walletId: information.walletId,
                date: information.date,
                description: information.description,
                authorId: information.personId,
                amount: information.amount,
                categoryId: categoryId,
                type: information.status,
                subId: subId,
            },
        });

        return NextResponse.json(transaction);
    } catch (error) {
        console.error('Error in API route:', error);
        return NextResponse.json({ error: 'Error adding transaction' }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const information = await req.json();

        const original = await prisma.transaction.findFirst({
            where:{
                walletId: information.walletId,
                subId: information.subId,
            }
        })
        const originalId = original?.id || 0

        const category = await prisma.category.findFirst({
            where: {
                name: information.category,
            },
        });

        const categoryId = category?.id || 0;

        const transaction = await prisma.transaction.update({
            where: {
                id: originalId
            },
            data: {
                description: information.description,
                amount: information.amount,
                categoryId: categoryId,
                type: information.status,
            },
        });

        return NextResponse.json(transaction);
    } catch (error) {
        console.error('Error in API route:', error);
        return NextResponse.json({ error: 'Error editing transaction' }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const information = await req.json();

        const original = await prisma.transaction.findFirst({
            where:{
                walletId: information.walletId,
                subId: information.subId,
            }
        })
        const originalId = original?.id || 0

        const transaction = await prisma.transaction.delete({
            where: {
                id: originalId
            },
        });

        return NextResponse.json(transaction);
    } catch (error) {
        console.error('Error in API route:', error);
        return NextResponse.json({ error: 'Error deleting transaction' }, { status: 500 });
    }
}
