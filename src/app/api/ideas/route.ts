import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
// Importar a função real que busca o ID do usuário logado
import { getCurrentUserId } from "@/lib/sessionUtils"; // Ajuste o caminho se necessário

// --- POST (Criar Nova Idea - ATUALIZADO) ---
export async function POST(request: NextRequest) {
  try {
    // --- Passo 1.3 Início: Obter ID do Usuário ---
    const userId = await getCurrentUserId(); // <--- CHAMA A FUNÇÃO REAL
    if (!userId) {
      // Se não houver usuário logado, retorna erro 401 Unauthorized
      return NextResponse.json({ error: "Unauthorized: User must be logged in." }, { status: 401 });
    }
    // --- Passo 1.3 Fim ---

    const body = await request.json();

    // Usar 'title' se o frontend enviar 'title', senão usar 'name' e mapear
    // Usar os campos que existem no schema (problem, solution, etc.)
    const {
      name, // Recebe 'name' da requisição (ou pode ser 'title')
      description,
      category,
      targetAudience = "",
      problem = "",     // Campo do schema
      solution = "",    // Campo do schema
      marketSize = "",
      competition = "",
      businessModel = "",
      stage = "concept",
      progress = 0,
      image = null,
      // Remover/ignorar 'problemSolved', 'currentResources' se não existem no schema
    } = body;

    // Validação básica (usando 'name' ou 'title' conforme recebido)
    const ideaTitle = name ?? body.title; // Garante que temos um título (prioriza 'name' se existir)
    if (!ideaTitle || !description || !category) {
      return NextResponse.json({ error: "Missing required fields (title/name, description, category)." }, { status: 400 });
    }

    // Criar a ideia no banco de dados
    const idea = await prisma.idea.create({
      data: {
        // --- RESOLVED VERSION ---
        title: ideaTitle, // Use the variable that handles both 'name' and 'title' inputs
        // --- END RESOLVED VERSION ---
        description,
        category,
        targetAudience,
        problem,
        solution,
        marketSize,
        competition,
        businessModel,
        stage,
        progress,
        image,
        creatorId: userId, // Association with the logged-in user
      },
    });

    // Retornar a ideia criada com status 201 Created
    return NextResponse.json(idea, { status: 201 });

  } catch (error) {
    console.error("Error creating idea:", error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return NextResponse.json({ error: `Database error: ${error.code}` }, { status: 409 });
    }
    // Retornar erro genérico 500 Internal Server Error
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}


// --- GET (Listar Ideas com Filtro e Paginação - Mantido como antes) ---
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;

    // Parâmetros de Paginação
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    // Parâmetro de Filtragem Opcional (por ID do criador)
    const filterUserIdStr = searchParams.get("userId");
    const filterUserId = filterUserIdStr ? parseInt(filterUserIdStr) : null;

    // Construir cláusula Where
    const whereClause: Prisma.IdeaWhereInput = {};
    if (filterUserId !== null && !isNaN(filterUserId)) {
      whereClause.creatorId = filterUserId;
    }

    // Buscar ideias e a contagem total para paginação
    const [ideas, totalIdeas] = await prisma.$transaction([
      prisma.idea.findMany({
        where: whereClause,
        skip: skip,
        take: limit,
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          creator: {
            select: { id: true, name: true, image: true }
          }
        }
      }),
      prisma.idea.count({ where: whereClause })
    ]);

    const totalPages = Math.ceil(totalIdeas / limit);

    // Retornar dados paginados
    return NextResponse.json({
      data: ideas,
      pagination: {
        totalIdeas,
        totalPages,
        currentPage: page,
        pageSize: limit,
      }
     }, { status: 200 });

  } catch (error) {
    console.error("Error fetching ideas:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}