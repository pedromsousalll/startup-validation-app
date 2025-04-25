"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function IdeaDetailPage() {
  const params = useParams();
  const ideaId = params.ideaId as string;
  
  // Estado para armazenar os dados da ideia
  const [idea, setIdea] = useState({
    id: ideaId,
    title: "App de Sustentabilidade",
    shortDescription: "Aplicativo que ajuda usuários a rastrear e reduzir sua pegada de carbono através de desafios diários e recompensas.",
    longDescription: "O App de Sustentabilidade é uma plataforma móvel inovadora que permite aos usuários monitorar e reduzir sua pegada de carbono diária. Através de uma interface intuitiva, os usuários podem registrar suas atividades diárias (transporte, alimentação, consumo de energia, etc.) e receber feedback imediato sobre seu impacto ambiental. O aplicativo utiliza gamificação para incentivar mudanças de comportamento, oferecendo desafios diários, recompensas virtuais e um sistema de ranking que promove a competição saudável entre amigos. Além disso, o app conecta usuários a empresas sustentáveis locais, oferecendo descontos exclusivos como incentivo para escolhas mais ecológicas.",
    category: "Sustentabilidade",
    currentState: "Em Validação",
    targetAudience: "Jovens adultos (18-35 anos) preocupados com questões ambientais, principalmente em áreas urbanas",
    problemSolved: "Dificuldade em quantificar o impacto ambiental individual e falta de incentivos práticos para adotar um estilo de vida mais sustentável",
    currentResources: "Equipe de 2 desenvolvedores e 1 designer, protótipo funcional em desenvolvimento",
    progress: 70,
    createdAt: "15/03/2025",
    updatedAt: "20/04/2025",
    creatorName: "João Silva",
    image: null,
    aiAnalysis: {
      score: 85,
      strengths: [
        "Aborda um problema crescente e relevante globalmente",
        "Modelo de gamificação aumenta engajamento e retenção",
        "Potencial para parcerias com empresas sustentáveis",
        "Baixo custo inicial de desenvolvimento"
      ],
      weaknesses: [
        "Mercado competitivo com soluções similares",
        "Desafio na precisão do cálculo da pegada de carbono",
        "Necessidade de massa crítica de usuários para funcionalidades sociais"
      ],
      marketViability: "Alta - O mercado de aplicativos de sustentabilidade está em crescimento, com aumento de 28% ao ano. A preocupação ambiental é uma tendência crescente, especialmente entre millennials e Geração Z.",
      innovationLevel: "Médio-Alto - Embora existam aplicativos similares, a combinação de gamificação, recompensas reais e conexão com negócios locais oferece um diferencial significativo.",
      nextSteps: [
        "Realizar testes de usabilidade com grupo de potenciais usuários",
        "Desenvolver algoritmo mais preciso para cálculo de pegada de carbono",
        "Iniciar conversas com empresas locais para parcerias",
        "Criar MVP para validação de mercado"
      ]
    },
    competitors: [
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
    capitalEstimate: {
      development: 50000,
      marketing: 30000,
      operations: 20000,
      total: 100000
    },
    marketAnalysis: {
      sectorGrowth: "28% ao ano",
      trendDirection: "Crescente",
      targetMarketSize: "€4.5 bilhões",
      relatedStocks: [
        { symbol: "ENPH", name: "Enphase Energy", change: "+2.4%" },
        { symbol: "SEDG", name: "SolarEdge", change: "+1.8%" },
        { symbol: "NEE", name: "NextEra Energy", change: "+0.5%" }
      ]
    }
  });
  
  // Estado para controlar a aba ativa
  const [activeTab, setActiveTab] = useState('overview');
  
  // Estado para controlar o modal de colaboração
  const [showCollaborationModal, setShowCollaborationModal] = useState(false);
  const [collaborationMessage, setCollaborationMessage] = useState('');
  
  // Função para enviar mensagem de colaboração
  const sendCollaborationRequest = () => {
    // Simulação de envio para API
    console.log('Enviando solicitação de colaboração:', collaborationMessage);
    
    // Fechar modal e mostrar mensagem de sucesso
    setShowCollaborationModal(false);
    setCollaborationMessage('');
    
    // Aqui você adicionaria código para mostrar uma notificação de sucesso
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold truncate">{idea.title}</h1>
          <Link href="/dashboard" className="text-sm text-indigo-400 hover:text-indigo-300">
            Voltar ao Dashboard
          </Link>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Cabeçalho da ideia */}
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-6">
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h2 className="text-2xl font-bold text-white mr-3">{idea.title}</h2>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      idea.aiAnalysis.score >= 80 ? 'bg-green-900 text-green-200' :
                      idea.aiAnalysis.score >= 60 ? 'bg-yellow-900 text-yellow-200' :
                      'bg-red-900 text-red-200'
                    }`}>
                      Score IA: {idea.aiAnalysis.score}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{idea.shortDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
                      {idea.category}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
                      {idea.currentState}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
                      Criado em: {idea.createdAt}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2 mt-4 md:mt-0">
                  <Link
                    href={`/ideas/${idea.id}/edit`}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Editar Ideia
                  </Link>
                  <button
                    onClick={()  => setShowCollaborationModal(true)}
                    className="inline-flex items-center px-4 py-2 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Buscar Colaboradores
                  </button>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-400">Progresso de Validação</span>
                  <span className="text-sm font-medium text-gray-400">{idea.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="h-2.5 rounded-full bg-blue-500"
                    style={{width: `${idea.progress}%`}}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navegação por abas */}
          <div className="border-b border-gray-700 mb-6">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={()  => setActiveTab('overview')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-indigo-500 text-indigo-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
                }`}
              >
                Visão Geral
              </button>
              <button
                onClick={() => setActiveTab('ai-analysis')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'ai-analysis'
                    ? 'border-indigo-500 text-indigo-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
                }`}
              >
                Análise IA
              </button>
              <button
                onClick={() => setActiveTab('market')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'market'
                    ? 'border-indigo-500 text-indigo-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
                }`}
              >
                Análise de Mercado
              </button>
              <button
                onClick={() => setActiveTab('competitors')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'competitors'
                    ? 'border-indigo-500 text-indigo-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
                }`}
              >
                Concorrentes
              </button>
            </nav>
          </div>
          
          {/* Conteúdo da aba selecionada */}
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              {/* Visão Geral */}
              {activeTab === 'overview' && (
                <div>
                  <h3 className="text-lg font-medium text-white mb-4">Detalhes da Ideia</h3>
                  
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Descrição Detalhada</h4>
                      <p className="text-gray-300">{idea.longDescription}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-1">Problema Resolvido</h4>
                        <p className="text-gray-300">{idea.problemSolved}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-1">Público-Alvo</h4>
                        <p className="text-gray-300">{idea.targetAudience}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-1">Recursos Atuais</h4>
                        <p className="text-gray-300">{idea.currentResources || "Não especificado"}</p>
                      </div>
                    </div>
                  </div>
                  
                  {idea.image && (
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Imagem/Mockup</h4>
                      <div className="bg-gray-700 rounded-lg p-2">
                        <img src={idea.image} alt={idea.title} className="max-h-96 mx-auto rounded" />
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Estimativa de Capital Inicial</h4>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                        <div>
                          <p className="text-sm text-gray-400">Desenvolvimento</p>
                          <p className="text-lg font-semibold text-white">€{idea.capitalEstimate.development.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Marketing</p>
                          <p className="text-lg font-semibold text-white">€{idea.capitalEstimate.marketing.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Operações</p>
                          <p className="text-lg font-semibold text-white">€{idea.capitalEstimate.operations.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Total</p>
                          <p className="text-lg font-semibold text-indigo-400">€{idea.capitalEstimate.total.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Análise IA */}
              {activeTab === 'ai-analysis' && (
                <div>
                  <div className="flex items-center mb-4">
                    <h3 className="text-lg font-medium text-white">Análise de IA</h3>
                    <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      idea.aiAnalysis.score >= 80 ? 'bg-green-900 text-green-200' :
                      idea.aiAnalysis.score >= 60 ? 'bg-yellow-900 text-yellow-200' :
                      'bg-red-900 text-red-200'
                    }`}>
                      Score: {idea.aiAnalysis.score}/100
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-6">
                    <div className="bg-gray-700/50 rounded-lg p-4">
                      <h4 className="text-md font-medium text-green-400 mb-2">Pontos Fortes</h4>
                      <ul className="space-y-2">
                        {idea.aiAnalysis.strengths.map((strength, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-200">{strength}</span>
                          </li>
                        ) )}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-700/50 rounded-lg p-4">
                      <h4 className="text-md font-medium text-red-400 mb-2">Pontos Fracos</h4>
                      <ul className="space-y-2">
                        {idea.aiAnalysis.weaknesses.map((weakness, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span className="text-gray-200">{weakness}</span>
                          </li>
                        ) )}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-6">
                    <div>
                      <h4 className="text-md font-medium text-indigo-400 mb-2">Viabilidade de Mercado</h4>
                      <p className="text-gray-300">{idea.aiAnalysis.marketViability}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-md font-medium text-indigo-400 mb-2">Nível de Inovação</h4>
                      <p className="text-gray-300">{idea.aiAnalysis.innovationLevel}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-md font-medium text-indigo-400 mb-2">Próximos Passos Recomendados</h4>
                    <div className="bg-gray-700/50 rounded-lg p-4">
                      <ul className="space-y-2">
                        {idea.aiAnalysis.nextSteps.map((step, index) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-indigo-600 text-white text-xs font-medium mr-2 mt-0.5">
                              {index + 1}
                            </span>
                            <span className="text-gray-200">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Análise de Mercado */}
              {activeTab === 'market' && (
                <div>
                  <h3 className="text-lg font-medium text-white mb-4">Análise de Mercado</h3>
                  
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-6">
                    <div className="bg-gray-700/50 rounded-lg p-4">
                      <h4 className="text-md font-medium text-indigo-400 mb-2">Tamanho do Mercado</h4>
                      <p className="text-2xl font-bold text-white">{idea.marketAnalysis.targetMarketSize}</p>
                    </div>
                    
                    <div className="bg-gray-700/50 rounded-lg p-4">
                      <h4 className="text-md font-medium text-indigo-400 mb-2">Crescimento do Setor</h4>
                      <p className="text-2xl font-bold text-white">{idea.marketAnalysis.sectorGrowth}</p>
                    </div>
                    
                    <div className="bg-gray-700/50 rounded-lg p-4">
                      <h4 className="text-md font-medium text-indigo-400 mb-2">Tendência</h4>
                      <p className="text-2xl font-bold text-green-400">{idea.marketAnalysis.trendDirection}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-md font-medium text-indigo-400 mb-2">Ações Relacionadas</h4>
                    <div className="bg-gray-700/50 rounded-lg overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-600">
                        <thead className="bg-gray-700">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                              Símbolo
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                              Empresa
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                              Variação
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-gray-800 divide-y divide-gray-700">
                          {idea.marketAnalysis.relatedStocks.map((stock, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                                {stock.symbol}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                {stock.name}
                              </td>
                              <td className={`px-6 py-4 whitespace-nowrap text-sm text-right ${
                                stock.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                              }`}>
                                {stock.change}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-2 text-xs text-gray-400">Dados de mercado atualizados em tempo real. Fonte: Yahoo Finance</p>
                  </div>
                  
                  <div className="flex justify-center">
                    <Link
                      href="/market-analysis"
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Ver Análise de Mercado Completa
                    </Link>
                  </div>
                </div>
              ) }
              
              {/* Concorrentes */}
              {activeTab === 'competitors' && (
                <div>
                  <h3 className="text-lg font-medium text-white mb-4">Análise de Concorrentes</h3>
                  
                  {idea.competitors.length > 0 ? (
                    <div className="space-y-6">
                      {idea.competitors.map((competitor, index) => (
                        <div key={index} className="bg-gray-700/50 rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <h4 className="text-md font-medium text-white">{competitor.name}</h4>
                            <div className="flex items-center">
                              <span className="text-xs text-gray-400 mr-2">Market Share:</span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-900 text-indigo-200">
                                {competitor.marketShare}
                              </span>
                            </div>
                          </div>
                          <p className="mt-2 text-gray-300">{competitor.description}</p>
                          
                          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                              <h5 className="text-sm font-medium text-green-400 mb-1">Pontos Fortes</h5>
                              <p className="text-sm text-gray-300">{competitor.strengths}</p>
                            </div>
                            <div>
                              <h5 className="text-sm font-medium text-red-400 mb-1">Pontos Fracos</h5>
                              <p className="text-sm text-gray-300">{competitor.weaknesses}</p>
                            </div>
                          </div>
                          
                          <div className="mt-4 flex items-center">
                            <span className="text-xs text-gray-400 mr-2">Financiamento:</span>
                            <span className="text-sm font-medium text-white">{competitor.fundingAmount}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <svg className="mx-auto h-12 w-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <p className="mt-2 text-gray-400">Nenhum concorrente identificado para esta ideia.</p>
                    </div>
                  ) }
                  
                  <div className="mt-6 flex justify-center">
                    <Link
                      href={`/ideas/${idea.id}/add-competitor`}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Adicionar Concorrente
                    </Link>
                  </div>
                </div>
              ) }
            </div>
          </div>
        </div>
      </main>
      
      {/* Modal de Colaboração */}
      {showCollaborationModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            </div>
            
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
            <div className="inline-block align-bottom bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-white">
                      Buscar Colaboradores
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-300">
                        Descreva as habilidades ou experiências que você está buscando em potenciais colaboradores para esta ideia.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Ex: Procuro um desenvolvedor com experiência em React Native e um designer de UX para colaborar no desenvolvimento do MVP..."
                    value={collaborationMessage}
                    onChange={(e)  => setCollaborationMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={sendCollaborationRequest}
                  disabled={!collaborationMessage.trim()}
                >
                  Publicar Solicitação
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-600 shadow-sm px-4 py-2 bg-gray-800 text-base font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowCollaborationModal(false)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
