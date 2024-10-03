"use client"

import { ColumnDef } from "@tanstack/react-table"

type Transaction = {
    id: string
    date: string
    category: string
    person: string
    desc: string
    amount: number
    type: "Expense" | "Income"
}

export const Transactions: Transaction[] = [
    {
        id: "07",
        date: "12-07-2024",
        category: "FnB",
        person: "daniel",
        desc: "kowa kowa",
        amount: 150,
        type: "Expense"
    },
    {
        id: "01",
        date: "12-07-2024",
        category: "FnB",
        person: "daniel",
        desc: "kowa kowa",
        amount: 100,
        type: "Income"
    },
    {
        id: "01",
        date: "12-07-2024",
        category: "FnB",
        person: "daniel",
        desc: "kowa kowa",
        amount: 100,
        type: "Income"
    },
    {
        id: "01",
        date: "12-07-2024",
        category: "FnB",
        person: "daniel",
        desc: "kowa kowa",
        amount: 100,
        type: "Income"
    },
    {
        id: "01",
        date: "12-07-2024",
        category: "FnB",
        person: "daniel",
        desc: "kowa kowa",
        amount: 100,
        type: "Income"
    },
    {
        id: "01",
        date: "12-07-2024",
        category: "FnB",
        person: "daniel",
        desc: "kowa kowa",
        amount: 100,
        type: "Income"
    },
    {
        id: "01",
        date: "12-07-2024",
        category: "FnB",
        person: "daniel",
        desc: "kowa kowa",
        amount: 100,
        type: "Income"
    },
    {
        id: "01",
        date: "12-07-2024",
        category: "FnB",
        person: "daniel",
        desc: "kowa kowa",
        amount: 100,
        type: "Income"
    },
    {
        id: "01",
        date: "12-07-2024",
        category: "FnB",
        person: "daniel",
        desc: "kowa kowa",
        amount: 100,
        type: "Income"
    },
    {
        id: "01",
        date: "12-07-2024",
        category: "FnB",
        person: "daniel",
        desc: "kowa kowa",
        amount: 100,
        type: "Income"
    },
    {
        id: "01",
        date: "12-07-2024",
        category: "FnB",
        person: "daniel",
        desc: "kowa kowa",
        amount: 100,
        type: "Income"
    },
    {
        id: "01",
        date: "12-07-2024",
        category: "FnB",
        person: "daniel",
        desc: "kowa kowa",
        amount: 100,
        type: "Income"
    },
    {
        id: "01",
        date: "12-07-2024",
        category: "FnB",
        person: "daniel",
        desc: "kowa kowa",
        amount: 100,
        type: "Income"
    },
    {
        id: "01",
        date: "12-07-2024",
        category: "FnB",
        person: "daniel",
        desc: "kowa kowa",
        amount: 100,
        type: "Income"
    },
    {
        id: "01",
        date: "12-07-2024",
        category: "FnB",
        person: "daniel",
        desc: "kowa kowa",
        amount: 100,
        type: "Income"
    },
    {
        id: "01",
        date: "12-07-2024",
        category: "FnB",
        person: "daniel",
        desc: "kowa kowa",
        amount: 100,
        type: "Income"
    },
]

export const columns: ColumnDef<Transaction>[] = [
    {
        accessorKey:"id",
        header: "ID",
    },
    {
        accessorKey:"date",
        header: "Date",
    },
    {
        accessorKey:"category",
        header: "Category",
    },
    {
        accessorKey:"person",
        header: "Person",
    },
    {
        accessorKey:"desc",
        header: "Desc",
    },
    {
        accessorKey:"amount",
        header: "Amount",
    },
    {
        accessorKey:"type",
        header: "Type",
        cell: ({row}) => {
            const type = row.getValue("type")
            if (type === "Income"){
                return (
                    <div className="flex justify-center items-center">
                        <div className="text-green-200 bg-green-100 font-Inter rounded-full w-[95px] h-[23px]">
                            Income
                        </div>
                    </div>
                )
            } else if (type === 'Expense'){
                return (
                    <div className="flex justify-center items-center">
                        <div className="text-orange-400 bg-[#F8F1E4] font-Inter rounded-full w-[95px] h-[23px]">
                            Expense
                        </div>
                    </div>
                )
            }
        }
    },
]