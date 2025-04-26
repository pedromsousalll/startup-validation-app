import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      description,
      category,
      targetAudience = "",
      problemSolved = "",
      currentResources = "",
      progress = 0,
      image = null,
    } = body;

    // Validação básica (podes evoluir para uma lib tipo zod depois se quiseres)
    if (!name || !description || !category) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const idea = await prisma.idea.create({
      data: {
        name,
        description,
        category,
        targetAudience,
        problemSolved,
        currentResources,
        progress,
        image,
      },
    });

    return NextResponse.json(idea, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
