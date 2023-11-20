import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

//get
export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();

    let result = await prisma.user.findMany();
    // let result = await prisma.user.findMany({
    // where: { name: { contains: "s" } },
    // include: { profile: true },
    // select: { email: true, profile: { select: { city: true } } },
    // skip: 1,
    // });

    // result = await prisma.user.findFirst();

    return NextResponse.json({ status: true, result });
  } catch (error) {
    return NextResponse.json({ status: false, msg: error.message });
  }
}
//post
export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();

    const data = await req.json();
    let result = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        // profile: {
        //   create: {
        //     fristName: data.profile.fristName,
        //     lastName: data.profile.lastName,
        //     city: data.profile.city,
        //   },
        // },
      },
    });

    return NextResponse.json({ status: true, data });
  } catch (error) {
    return NextResponse.json({ status: false, msg: error.message });
  }
}
//put
export async function PUT(req, res) {
  try {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));

    const data = await req.json();

    const updateData = await prisma.user.update({ where: { id }, data });

    return NextResponse.json({ status: true, updateData });
  } catch (error) {
    return NextResponse.json({ status: false, msg: error.message });
  }
}
//delete
export async function DELETE(req, res) {
  try {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));
    console.log("id");

    const deleteData = await prisma.product.delete({ where: { id } });

    return NextResponse.json({ status: true, result: deleteData });
  } catch (error) {
    return NextResponse.json({ status: false, msg: error.message });
  }
}
