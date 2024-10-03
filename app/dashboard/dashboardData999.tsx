"use client"

import prisma from '../../lib/prisma';
import { getSessionAndEnsureAuthenticated } from "../api/auth/[...nextauth]/route";

interface dashboardProp{
    walletId: number;
}

async function categoryExpenses(walletId: number){
    const expensesGroupedByCategory = await prisma.transaction.groupBy({
        by: ['categoryId'],
        where: {
          walletId: walletId,          
          type: "expense"
        },
        _sum: {
          amount: true
        },
    });

    const categoryIds = expensesGroupedByCategory.map(group => group.categoryId);

    const categories = await prisma.category.findMany({
    where: {
        id: { in: categoryIds }
    }
    });

    const resultWithCategories = expensesGroupedByCategory.map(group => {
        const category = categories.find(cat => cat.id === group.categoryId);
        return {
            categoryName: category?.name,
            totalExpense: group._sum.amount
        };
    });

    return resultWithCategories;
}

async function monthlyExpenses(walletId: number) {
    try {
        const result = await prisma.$queryRaw`
            SELECT 
                EXTRACT(YEAR FROM "date") AS year, 
                EXTRACT(MONTH FROM "date") AS month, 
                SUM("amount") AS totalExpense
            FROM 
                "Transaction" 
            WHERE 
                "walletId" = ${walletId} 
                AND "type" = ${"expense"}
            GROUP BY 
                year, month 
            ORDER BY 
                year ASC, month ASC;
        `;

        return result;
    } catch (error) {
        console.error('Error fetching monthly expenses:', error);
        throw new Error('Could not fetch monthly expenses.');
    }
}

async function categoryIncome(walletId: number){
    const expensesGroupedByCategory = await prisma.transaction.groupBy({
        by: ['categoryId'],
        where: {
          walletId: walletId,          
          type: "income"
        },
        _sum: {
          amount: true
        },
    });

    const categoryIds = expensesGroupedByCategory.map(group => group.categoryId);

    const categories = await prisma.category.findMany({
    where: {
        id: { in: categoryIds }
    }
    });

    const resultWithCategories = expensesGroupedByCategory.map(group => {
        const category = categories.find(cat => cat.id === group.categoryId);
        return {
            categoryName: category?.name,
            totalExpense: group._sum.amount
        };
    });

    return resultWithCategories;
}

async function monthlyIncome(walletId: number) {
    try {
        const result = await prisma.$queryRaw`
            SELECT 
                EXTRACT(YEAR FROM "date") AS year, 
                EXTRACT(MONTH FROM "date") AS month, 
                SUM("amount") AS totalExpense
            FROM 
                "Transaction" 
            WHERE 
                "walletId" = ${walletId} 
                AND "type" = ${"income"}
            GROUP BY 
                year, month 
            ORDER BY 
                year ASC, month ASC;
        `;

        return result;
    } catch (error) {
        console.error('Error fetching monthly expenses:', error);
        throw new Error('Could not fetch monthly expenses.');
    }
}

async function projectProgress(walletId: number){
    try{
        const expensesGroupedByProjectId = await prisma.transaction.groupBy({
            by: ['projectId'],
            where: {
              walletId: walletId,          
              type: "expense",
            },
            _sum: {
              amount: true
            },
        });

        const projects = await prisma.project.findMany({
            where:{
                walletId: walletId
            }
        })

        const result = expensesGroupedByProjectId.map(group => {
            const project = projects.find(cat => cat.id === group.projectId);
            return {
                projectId: group.projectId,
                totalExpense: group._sum.amount,
                expenseLimit: project?.maxBudget
            };
        });
    
        return result;
    } catch (error){
        console.error('Error fetching project progresses:', error);
        throw new Error('Could not fetch project progresses.');
    }
}

export default async function Dashboard(prop: dashboardProp) {
    const session = await getSessionAndEnsureAuthenticated();
    const walletId = prop.walletId;
    const categoryExp = await categoryExpenses(walletId);
    const monthlyExp = await monthlyExpenses(walletId);
    const categoryInc = await categoryIncome(walletId);
    const monthlyInc = await monthlyIncome(walletId);
    const projectProg = await projectProgress(walletId);

    const wallet = await prisma.wallet.findUnique({
        where:{
            id: walletId
        },
        include:{
            shared: true
        }
    })
    const users = wallet?.shared

    return <button></button>
}