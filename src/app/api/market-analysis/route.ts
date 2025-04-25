import { NextResponse } from "next/server";

// Simulação de serviço de análise de mercado
// Em uma implementação real, isso seria conectado a APIs de dados de mercado e modelos de IA
async function analyzeMarket(category: string) {
  // Dados simulados de análise de mercado
  const marketData = {
    "Sustentabilidade": {
      sectorGrowth: "28% ao ano",
      trendDirection: "Crescente",
      targetMarketSize: "€4.5 bilhões",
      sentiment: "Muito Positivo",
      keyInsights: [
        "Aplicativos de rastreamento de pegada de carbono mostram crescimento de 35% ano a ano",
        "Investimentos em startups de sustentabilidade aumentaram 42% no último trimestre",
        "Consumidores estão dispostos a pagar até 20% a mais por produtos sustentáveis"
      ],
      relatedStocks: [
        { symbol: "ENPH", name: "Enphase Energy", change: "+2.4%" },
        { symbol: "SEDG", name: "SolarEdge", change: "+1.8%" },
        { symbol: "NEE", name: "NextEra Energy", change: "+0.5%" }
      ]
    },
    "Fintech": {
      sectorGrowth: "22% ao ano",
      trendDirection: "Crescente",
      targetMarketSize: "€8.2 bilhões",
      sentiment: "Positivo",
      keyInsights: [
        "Soluções de pagamento sem contato cresceram 50% desde 2023",
        "Aplicativos de educação financeira atraíram 3 milhões de novos usuários",
        "Regulamentações Open Banking abriram novas oportunidades para startups"
      ],
      relatedStocks: [
        { symbol: "SQ", name: "Block Inc", change: "+1.7%" },
        { symbol: "PYPL", name: "PayPal", change: "-0.3%" },
        { symbol: "AFRM", name: "Affirm", change: "+3.2%" }
      ]
    },
    "Saúde Digital": {
      sectorGrowth: "35% ao ano",
      trendDirection: "Crescente",
      targetMarketSize: "€6.8 bilhões",
      sentiment: "Muito Positivo",
      keyInsights: [
        "Consultas por telemedicina representam agora 30% de todas as consultas médicas",
        "Dispositivos wearables de saúde cresceram 65% em vendas no último ano",
        "Investimentos em startups de saúde mental aumentaram 85% desde 2023"
      ],
      relatedStocks: [
        { symbol: "TDOC", name: "Teladoc Health", change: "+4.2%" },
        { symbol: "AMWL", name: "American Well", change: "+2.8%" },
        { symbol: "LVGO", name: "Livongo Health", change: "+1.5%" }
      ]
    },
    "E-commerce": {
      sectorGrowth: "18% ao ano",
      trendDirection: "Estável",
      targetMarketSize: "€12.5 bilhões",
      sentiment: "Neutro",
      keyInsights: [
        "Compras via redes sociais aumentaram 40% no último ano",
        "Marketplaces de nicho crescem 25% mais rápido que plataformas generalistas",
        "Soluções de logística de última milha atraíram €1.2 bilhões em investimentos"
      ],
      relatedStocks: [
        { symbol: "SHOP", name: "Shopify", change: "+0.8%" },
        { symbol: "AMZN", name: "Amazon", change: "+0.3%" },
        { symbol: "MELI", name: "MercadoLibre", change: "+1.2%" }
      ]
    },
    "Educação": {
      sectorGrowth: "25% ao ano",
      trendDirection: "Crescente",
      targetMarketSize: "€3.7 bilhões",
      sentiment: "Positivo",
      keyInsights: [
        "Plataformas de microlearning cresceram 55% em usuários ativos",
        "Cursos de habilidades tecnológicas têm demanda 3x maior que outros temas",
        "Soluções B2B para empresas representam 40% do mercado de edtech"
      ],
      relatedStocks: [
        { symbol: "CHGG", name: "Chegg", change: "+1.5%" },
        { symbol: "TWOU", name: "2U", change: "+2.1%" },
        { symbol: "COUR", name: "Coursera", change: "+3.4%" }
      ]
    }
  };
  
  // Retornar dados para a categoria específica ou dados padrão
  return marketData[category] || {
    sectorGrowth: "20% ao ano",
    trendDirection: "Estável",
    targetMarketSize: "€5.0 bilhões",
    sentiment: "Neutro",
    keyInsights: [
      "Mercado em desenvolvimento com oportunidades emergentes",
      "Investimentos moderados no setor nos últimos 12 meses",
      "Tendência de crescimento alinhada com a média do mercado"
    ],
    relatedStocks: [
      { symbol: "SPY", name: "S&P 500 ETF", change: "+0.5%" },
      { symbol: "QQQ", name: "Nasdaq ETF", change: "+0.7%" },
      { symbol: "VGT", name: "Vanguard IT ETF", change: "+0.6%" }
    ]
  };
}

// Função para analisar concorrentes
async function analyzeMarket(category: string) {
  // Dados simulados de concorrentes por categoria
  const competitorsData = {
    "Sustentabilidade": [
      {
        name: "EcoTrack",
        description: "Aplicativo focado em rastreamento de pegada de carbono com visualizações detalhadas",
        strengths: "Interface intuitiva, comunidade ativa",
        weaknesses: "Sem sistema de recompensas, foco limitado em transporte",
        marketShare: "15%",
        fundingAmount: "€2.5M"
      },
      {
        name: "GreenStep",
        description: "Plataforma de gamificação para ações sustentáveis com sistema de pontos",
        strengths: "Gamificação avançada, parcerias com marcas",
        weaknesses: "Cálculos imprecisos, foco excessivo em compras",
        marketShare: "8%",
        fundingAmount: "€1.2M"
      }
    ],
    "Fintech": [
      {
        name: "MoneyWise",
        description: "Aplicativo de educação financeira com simulações e desafios",
        strengths: "Conteúdo de alta qualidade, parcerias com bancos",
        weaknesses: "Interface complexa, falta de personalização",
        marketShare: "12%",
        fundingAmount: "€3.8M"
      },
      {
        name: "InvestEdu",
        description: "Plataforma de simulação de investimentos com dados reais de mercado",
        strengths: "Dados em tempo real, comunidade de investidores",
        weaknesses: "Curva de aprendizado íngreme, foco limitado em ações",
        marketShare: "7%",
        fundingAmount: "€2.1M"
      }
    ]
  };
  
  // Retornar concorrentes para a categoria específica ou array vazio
  return competitorsData[category] || [];
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  
  if (!category) {
    return NextResponse.json(
      { error: "Categoria não especificada" },
      { status: 400 }
    );
  }
  
  try {
    // Obter análise de mercado
    const marketAnalysis = await analyzeMarket(category);
    
    // Obter análise de concorrentes
    const competitors = await analyzeCompetitors(category: string) {
    
    // Combinar resultados
    const result = {
      marketAnalysis,
      competitors
    };
    
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Erro na análise de mercado:", error);
    return NextResponse.json(
      { error: "Erro ao processar análise de mercado" },
      { status: 500 }
    );
  }
}
