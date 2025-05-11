import { User } from "@/util/db"
import { NextResponse } from "next/server"

export async function GET() {
    const data = User
    return NextResponse.json(data, { status: 200 })
}