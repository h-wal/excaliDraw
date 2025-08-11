import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import db from "@repo/db"
const {prismaClient} = db

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const existingUser = await prismaClient.user.findUnique({
        where:{
            email: email
        }
      });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists, Kindly SignIn" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prismaClient.user.create({ 
        data:{
            email: email,
            password: hashedPassword 
        },
        });

    return NextResponse.json({ success: true, user: newUser });
  } catch (err) {
    return NextResponse.json({ error: err?.message || "Internal Server Error" }, { status: 500 });
  }
}
