import { NextResponse } from "next/server";

// Simulação de serviço de análise de IA
// Em uma implementação real, isso seria conectado a um modelo de IA como GPT-4 ou similar
async function analyzeIdeaWithAI(ideaData) {
  // Simulação de análise de IA
  // Em produção, isso enviaria os dados para um modelo de IA e receberia a análise
  
  // Calcular pontuação com base em vários fatores
  const marketTrendScore = Math.floor(Math.random() * 30) + 60; // 60-90
  const innovationScore = Math.floor(Math.random() * 30) + 60; // 60-90
  const feasibilityScore = Math.floor(Math.random() * 30) + 60; // 60-90
  
  // Pontuação final ponderada
  const finalScore = Math.round(
    (marketTrendScore * 0.4) + (innovationScore * 0.3) + (feasibilityScore * 0.3)
  );
  
  // Gerar pontos fortes com base na categoria e descrição
  const strengths = [];
  if (ideaData.category === "Sustentabilidade") {
    strengths.push("Aborda um problema crescente e relevante globalmente");
    strengths.push("Potencial para parcerias com empresas sustentáveis");
  } else if (ideaData.category === "Fintech") {
    strengths.push("Mercado em expansão com forte demanda por soluções inovadoras");
    strengths.push("Potencial para escalabilidade global");
  } else if (ideaData.category === "Saúde") {
    strengths.push("Setor com alta demanda e necessidade de inovação");
    strengths.push("Potencial para impacto social significativo");
  } else {
    strengths.push("Proposta de valor clara e bem definida");
    strengths.push("Potencial para crescimento rápido");
  }
  
  if (ideaData.shortDescription.toLowerCase().includes("app") || 
      ideaData.shortDescription.toLowerCase().includes("aplicativo")) {
    strengths.push("Baixo custo inicial de desenvolvimento");
    strengths.push("Potencial para monetização através de múltiplos canais");
  }
  
  if (ideaData.shortDescription.toLowerCase().includes("ia") || 
      ideaData.shortDescription.toLowerCase().includes("inteligência artificial")) {
    strengths.push("Utilização de tecnologia de ponta com alto potencial disruptivo");
    strengths.push("Possibilidade de criar vantagem competitiva sustentável");
  }
  
  // Gerar pontos fracos
  const weaknesses = [
    "Necessidade de validação mais aprofundada com usuários reais",
    "Potencial competição de grandes players do mercado"
  ];
  
  if (ideaData.category === "E-commerce" || ideaData.category === "Fintech") {
    weaknesses.push("Mercado altamente competitivo com baixas barreiras de entrada");
  }
  
  if (!ideaData.currentResources || ideaData.currentResources.trim() === "") {
    weaknesses.push("Falta de recursos iniciais claramente definidos");
  }
  
  // Gerar próximos passos recomendados
  const nextSteps = [
    "Realizar pesquisa de mercado mais aprofundada",
    "Desenvolver um MVP (Produto Mínimo Viável) para validação",
    "Identificar potenciais parceiros estratégicos"
  ];
  
  // Análise de viabilidade de mercado
  let marketViability = "";
  if (finalScore >= 85) {
    marketViability = "Alta - O mercado para esta solução está em crescimento acelerado, com forte demanda e poucos concorrentes estabelecidos.";
  } else if (finalScore >= 70) {
    marketViability = "Média-Alta - Existe um mercado claro para esta solução, com crescimento constante e oportunidades de diferenciação.";
  } else if (finalScore >= 60) {
    marketViability = "Média - O mercado existe, mas apresenta desafios de competição e diferenciação que precisam ser superados.";
  } else {
    marketViability = "Baixa - O mercado é altamente competitivo ou ainda não está maduro o suficiente para esta solução.";
  }
  
  // Análise de nível de inovação
  let innovationLevel = "";
  if (innovationScore >= 85) {
    innovationLevel = "Alto - Solução altamente inovadora com potencial disruptivo no mercado.";
  } else if (innovationScore >= 70) {
    innovationLevel = "Médio-Alto - Abordagem inovadora que oferece melhorias significativas sobre soluções existentes.";
  } else if (innovationScore >= 60) {
    innovationLevel = "Médio - Combina elementos existentes de forma nova, com alguns diferenciais competitivos.";
  } else {
    innovationLevel = "Baixo - Solução similar a outras já existentes no mercado, com poucos diferenciais.";
  }
  
  // Estimativa de capital inicial
  const capitalEstimate = {
    development: Math.round((Math.random() * 30000) + 20000), // 20-50k
    marketing: Math.round((Math.random() * 20000) + 10000),   // 10-30k
    operations: Math.round((Math.random() * 15000) + 5000),   // 5-20k
  };
  capitalEstimate.total = capitalEstimate.development + capitalEstimate.marketing + capitalEstimate.operations;
  
  // Retornar análise completa
  return {
    score: finalScore,
    strengths,
    weaknesses,
    marketViability,
    innovationLevel,
    nextSteps,
    capitalEstimate,
    marketTrendScore,
    innovationScore,
    feasibilityScore
  };
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validar dados de entrada
    if (!body.title || !body.shortDescription || !body.category) {
      return NextResponse.json(
        { error: "Dados insuficientes para análise" },
        { status: 400 }
      );
    }
    
    // Realizar análise de IA
    const analysis = await analyzeIdeaWithAI(body);
    
    return NextResponse.json(analysis, { status: 200 });
  } catch (error) {
    console.error("Erro na análise de IA:", error);
    return NextResponse.json(
      { error: "Erro ao processar análise de IA" },
      { status: 500 }
    );
  }
}
