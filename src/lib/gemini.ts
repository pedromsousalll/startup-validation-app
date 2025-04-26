import { GoogleGenerativeAI } from "@google/generative-ai";

// Inicializar a API do Google Generative AI
// Nota: Em produção, esta chave deve ser armazenada em variáveis de ambiente
// e não diretamente no código
export const getGeminiAPI = () => {
  // Verificar se a chave de API está definida
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY não está definida nas variáveis de ambiente");
  }
  
  // Inicializar e retornar a instância da API
  const genAI = new GoogleGenerativeAI(apiKey);
  return genAI;
};

// Função para obter o modelo Gemini Advanced
export const getGeminiAdvancedModel = () => {
  const genAI = getGeminiAPI();
  // Usar o modelo Gemini Advanced (gemini-1.5-pro)
  return genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
};

// Função para analisar uma ideia de startup com o Gemini Advanced
export async function analyzeIdeaWithGemini(ideaData: {
  title: string;
  shortDescription: string;
  category: string;
  currentResources?: string;
}) {
  try {
    const model = getGeminiAdvancedModel();
    
    // Construir o prompt para o Gemini
    const prompt = `
    Analise a seguinte ideia de startup e forneça uma avaliação detalhada:
    
    Título: ${ideaData.title}
    Descrição: ${ideaData.shortDescription}
    Categoria: ${ideaData.category}
    Recursos Atuais: ${ideaData.currentResources || "Não especificado"}
    
    Por favor, forneça uma análise completa no seguinte formato JSON:
    {
      "score": (número entre 0-100 representando a pontuação geral),
      "strengths": [lista de 3-5 pontos fortes da ideia],
      "weaknesses": [lista de 2-3 pontos fracos ou desafios],
      "marketViability": "descrição detalhada da viabilidade de mercado",
      "innovationLevel": "descrição do nível de inovação",
      "nextSteps": [lista de 3-4 próximos passos recomendados],
      "marketTrendScore": (número entre 0-100),
      "innovationScore": (número entre 0-100),
      "feasibilityScore": (número entre 0-100),
      "capitalEstimate": {
        "development": (estimativa em euros para desenvolvimento),
        "marketing": (estimativa em euros para marketing),
        "operations": (estimativa em euros para operações),
        "total": (soma total das estimativas)
      }
    }
    
    Responda apenas com o JSON, sem texto adicional.
    `;
    
    // Gerar a resposta do Gemini
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Analisar a resposta JSON
    try {
      const analysisData = JSON.parse(text);
      return analysisData;
    } catch (error) {
      console.error("Erro ao analisar resposta JSON do Gemini:", error);
      throw new Error("Formato de resposta inválido do Gemini");
    }
  } catch (error) {
    console.error("Erro ao analisar ideia com Gemini:", error);
    throw error;
  }
}

// Função para analisar o mercado com o Gemini Advanced
export async function analyzeMarketWithGemini(category: string) {
  try {
    const model = getGeminiAdvancedModel();
    
    // Construir o prompt para o Gemini
    const prompt = `
    Analise o mercado para startups na categoria "${category}" e forneça uma análise detalhada.
    
    Por favor, forneça uma análise completa no seguinte formato JSON:
    {
      "marketAnalysis": {
        "sectorGrowth": "taxa de crescimento anual",
        "trendDirection": "direção da tendência (Crescente, Estável, Decrescente)",
        "targetMarketSize": "tamanho do mercado-alvo em euros",
        "sentiment": "sentimento geral do mercado",
        "keyInsights": [lista de 3 insights chave sobre o mercado],
        "relatedStocks": [
          { "symbol": "símbolo da ação", "name": "nome da empresa", "change": "variação percentual" },
          { "symbol": "símbolo da ação", "name": "nome da empresa", "change": "variação percentual" },
          { "symbol": "símbolo da ação", "name": "nome da empresa", "change": "variação percentual" }
        ]
      },
      "competitors": [
        {
          "name": "nome do concorrente 1",
          "description": "descrição breve",
          "strengths": "pontos fortes",
          "weaknesses": "pontos fracos",
          "marketShare": "participação de mercado estimada",
          "fundingAmount": "montante de financiamento"
        },
        {
          "name": "nome do concorrente 2",
          "description": "descrição breve",
          "strengths": "pontos fortes",
          "weaknesses": "pontos fracos",
          "marketShare": "participação de mercado estimada",
          "fundingAmount": "montante de financiamento"
        }
      ]
    }
    
    Responda apenas com o JSON, sem texto adicional.
    `;
    
    // Gerar a resposta do Gemini
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Analisar a resposta JSON
    try {
      const marketData = JSON.parse(text);
      return marketData;
    } catch (error) {
      console.error("Erro ao analisar resposta JSON do Gemini:", error);
      throw new Error("Formato de resposta inválido do Gemini");
    }
  } catch (error) {
    console.error("Erro ao analisar mercado com Gemini:", error);
    throw error;
  }
}

// Função para obter recomendações para investidores com o Gemini Advanced
export async function getInvestorRecommendationsWithGemini(ideaData: {
  title: string;
  shortDescription: string;
  category: string;
  aiAnalysis: any;
  marketAnalysis: any;
}) {
  try {
    const model = getGeminiAdvancedModel();
    
    // Construir o prompt para o Gemini
    const prompt = `
    Como consultor de investimentos, analise a seguinte ideia de startup e forneça recomendações detalhadas para potenciais investidores:
    
    Título: ${ideaData.title}
    Descrição: ${ideaData.shortDescription}
    Categoria: ${ideaData.category}
    
    Análise de IA:
    - Pontuação geral: ${ideaData.aiAnalysis.score}/100
    - Pontos fortes: ${JSON.stringify(ideaData.aiAnalysis.strengths)}
    - Pontos fracos: ${JSON.stringify(ideaData.aiAnalysis.weaknesses)}
    - Viabilidade de mercado: ${ideaData.aiAnalysis.marketViability}
    - Nível de inovação: ${ideaData.aiAnalysis.innovationLevel}
    
    Análise de Mercado:
    - Crescimento do setor: ${ideaData.marketAnalysis.sectorGrowth}
    - Direção da tendência: ${ideaData.marketAnalysis.trendDirection}
    - Tamanho do mercado-alvo: ${ideaData.marketAnalysis.targetMarketSize}
    
    Por favor, forneça recomendações detalhadas no seguinte formato JSON:
    {
      "investmentRecommendation": "recomendação geral (Altamente Recomendado, Recomendado, Neutro, Não Recomendado)",
      "potentialReturn": "estimativa de retorno potencial (Alto, Médio-Alto, Médio, Médio-Baixo, Baixo)",
      "riskLevel": "nível de risco (Alto, Médio-Alto, Médio, Médio-Baixo, Baixo)",
      "investmentTimeframe": "prazo recomendado de investimento em anos",
      "fundingStageRecommendation": "estágio de financiamento recomendado (Pré-seed, Seed, Série A, etc.)",
      "suggestedInvestmentAmount": "montante de investimento sugerido em euros",
      "keyRisks": [lista de 3 riscos principais para investidores],
      "keyOpportunities": [lista de 3 oportunidades principais para investidores],
      "dueDiligenceQuestions": [lista de 4-5 perguntas que investidores devem fazer antes de investir],
      "comparableExits": [lista de 2-3 exemplos de saídas bem-sucedidas em setores similares]
    }
    
    Responda apenas com o JSON, sem texto adicional.
    `;
    
    // Gerar a resposta do Gemini
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Analisar a resposta JSON
    try {
      const recommendationsData = JSON.parse(text);
      return recommendationsData;
    } catch (error) {
      console.error("Erro ao analisar resposta JSON do Gemini:", error);
      throw new Error("Formato de resposta inválido do Gemini");
    }
  } catch (error) {
    console.error("Erro ao obter recomendações para investidores com Gemini:", error);
    throw error;
  }
}

