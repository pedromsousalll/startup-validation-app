import { NextResponse, NextRequest } from "next/server";
import { getInvestorRecommendationsWithGemini } from "@/lib/gemini";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar dados de entrada
    if (!body.title || !body.shortDescription || !body.category || !body.aiAnalysis || !body.marketAnalysis) {
      return NextResponse.json(
        { error: "Dados insuficientes para análise" },
        { status: 400 }
      );
    }
    
    try {
      // Obter recomendações para investidores com o Gemini Advanced
      const recommendations = await getInvestorRecommendationsWithGemini(body);
      
      return NextResponse.json(recommendations, { status: 200 });
    } catch (error: any) {
      console.error("Erro ao obter recomendações com Gemini:", error);
      
      // Se houver um erro com o Gemini, usar a simulação como fallback
      console.log("Usando simulação como fallback devido a erro na API do Gemini");
      const fallbackRecommendations = getInvestorRecommendationsFallback(body);
      
      return NextResponse.json(fallbackRecommendations, { status: 200 });
    }
  } catch (error) {
    console.error("Erro nas recomendações para investidores:", error);
    return NextResponse.json(
      { error: "Erro ao processar recomendações para investidores" },
      { status: 500 }
    );
  }
}

// Simulação de recomendações para investidores como fallback
function getInvestorRecommendationsFallback(ideaData: any) {
  // Determinar recomendação com base na pontuação da análise de IA
  let investmentRecommendation = "Neutro";
  let potentialReturn = "Médio";
  let riskLevel = "Médio";
  
  if (ideaData.aiAnalysis.score >= 85) {
    investmentRecommendation = "Altamente Recomendado";
    potentialReturn = "Alto";
    riskLevel = "Médio-Baixo";
  } else if (ideaData.aiAnalysis.score >= 70) {
    investmentRecommendation = "Recomendado";
    potentialReturn = "Médio-Alto";
    riskLevel = "Médio";
  } else if (ideaData.aiAnalysis.score < 60) {
    investmentRecommendation = "Não Recomendado";
    potentialReturn = "Baixo";
    riskLevel = "Alto";
  }
  
  // Determinar prazo de investimento com base na categoria
  let investmentTimeframe = 3; // padrão: 3 anos
  
  if (ideaData.category === "Fintech" || ideaData.category === "E-commerce") {
    investmentTimeframe = 2; // setores de rápido crescimento
  } else if (ideaData.category === "Saúde" || ideaData.category === "Sustentabilidade") {
    investmentTimeframe = 5; // setores de crescimento mais lento mas sustentável
  }
  
  // Determinar estágio de financiamento recomendado
  let fundingStageRecommendation = "Seed";
  
  if (ideaData.aiAnalysis.score >= 85) {
    fundingStageRecommendation = "Série A";
  } else if (ideaData.aiAnalysis.score < 60) {
    fundingStageRecommendation = "Pré-seed";
  }
  
  // Determinar montante de investimento sugerido
  let suggestedInvestmentAmount = "€250.000";
  
  if (ideaData.aiAnalysis.score >= 85) {
    suggestedInvestmentAmount = "€500.000";
  } else if (ideaData.aiAnalysis.score < 60) {
    suggestedInvestmentAmount = "€100.000";
  }
  
  // Riscos e oportunidades padrão
  const keyRisks = [
    "Execução inadequada da estratégia de go-to-market",
    "Competição de grandes players estabelecidos",
    "Mudanças regulatórias no setor"
  ];
  
  const keyOpportunities = [
    "Potencial para expansão internacional",
    "Possibilidade de aquisição por empresa maior",
    "Crescimento acelerado em mercado emergente"
  ];
  
  // Perguntas de due diligence
  const dueDiligenceQuestions = [
    "Qual é a estratégia de aquisição de clientes e quanto custa adquirir cada cliente?",
    "Como a equipe planeja utilizar o capital investido nos próximos 12-18 meses?",
    "Quais são os principais indicadores de desempenho (KPIs) que a equipe monitora?",
    "Qual é o plano para escalar o negócio nos próximos 3-5 anos?",
    "Como a equipe se diferencia dos concorrentes atuais e potenciais?"
  ];
  
  // Exemplos de saídas bem-sucedidas
  const comparableExits = [
    { company: "TechStartup", exitValue: "€50M", acquirer: "BigTech Inc." },
    { company: "InnovateCo", exitValue: "€75M", acquirer: "Global Solutions" },
    { company: "NextGen", exitValue: "€120M", acquirer: "IPO" }
  ];
  
  return {
    investmentRecommendation,
    potentialReturn,
    riskLevel,
    investmentTimeframe,
    fundingStageRecommendation,
    suggestedInvestmentAmount,
    keyRisks,
    keyOpportunities,
    dueDiligenceQuestions,
    comparableExits
  };
}

