import { NextRequest, NextResponse, userAgent } from "next/server";
import prisma from "@/lib/prisma";

type RegisterProps = {
    name: string;
    email: string;
    password: string;
}

export async function POST(req: Request) {
    const newUser: RegisterProps = await req.json();
    console.log(newUser);

    try {
        await prisma.user.create({
            data: newUser
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({"error": "Failed to create user"}, {status: 400});
    }

    return NextResponse.json({"message": "User created successfully"}, {status: 200});
}