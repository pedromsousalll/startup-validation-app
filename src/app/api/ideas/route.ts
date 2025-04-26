import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input data
    if (!body.title || !body.shortDescription || !body.category || !body.creatorId) {
      return NextResponse.json(
        {
          error: "Dados insuficientes para criar ideia"
        },
        {
          status: 400
        }
      );
    }

    // Create the idea in the database
    const idea = await prisma.idea.create({
      data: {
        title: body.title,
        shortDescription: body.shortDescription,
        longDescription: body.longDescription || "",
        category: body.category,
        targetAudience: body.targetAudience || "",
        problemSolved: body.problemSolved || "",
        currentResources: body.currentResources || "",
        progress: body.progress || 0,
        image: body.image || null,
        creatorId: body.creatorId,
      }
    });

    // Create initial progress log
    await prisma.progressLog.create({
      data: {
        ideaId: idea.id,
        progressValue: idea.progress,
        description: "Ideia criada",
        milestone: "Início",
      }
    });

    return NextResponse.json(idea, {
      status: 201
    });
  } catch (error) {
    console.error("Erro ao criar ideia:", error);
    return NextResponse.json(
      {
        error: "Erro ao criar ideia"
      },
      {
        status: 500
      }
    );
  }
}
