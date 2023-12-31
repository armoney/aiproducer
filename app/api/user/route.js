import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const json = await request.json();

    const user = await prisma.user.create({
      data: json,
      include: {
        jobProfiles: true,
      },
    });
    return new NextResponse(JSON.stringify(user), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    const newerror = JSON.stringify(error);
    console.log("newerror******", newerror);
    if (error.code === "P2002") {
      return new NextResponse(
        JSON.stringify({
          message: `User with this ${error.meta.target[0]} already exists`,
          status: 409,
          name: error.meta.target[0],
        }),
        { status: 409 }
      );
    }
    return new NextResponse(error.message, { status: 500 });
  }
}
