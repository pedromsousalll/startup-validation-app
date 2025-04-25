"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function IdeaDetailPage() {
  const params = useParams();
  const ideaId = params.ideaId as string;
  
  const [idea, setIdea] = useState({
    id: ideaId,
    title: "App de Sustentabilidade",
    shortDescription: "Aplicativo que ajuda usuários a rastrear e reduzir sua pegada de carbono através de desafios diários e recompensas.",
    longDescription: "O App de Sustentabilidade é uma plataforma móvel inovadora que permite aos usuários monitorar e reduzir sua pegada de carbono diária...",
    category: "Sustentabilidade",
    currentState: "Em Validação",
    targetAudience: "Jovens adultos (18-35 anos) preocupados com questões ambientais, principalmente em áreas urbanas",
    problemSolved: "Dificuldade em quantificar o impacto ambiental individual e falta de incentivos práticos...",
    currentResources: "Equipe de 2 desenvolvedores e 1 designer, protótipo funcional em desenvolvimento",
    progress: 70,
    createdAt: "15/03/2025",
    updatedAt: "20/04/2025",
    creatorName: "João Silva",
    image: null,
    aiAnalysis: {
      score: 85,
      strengths: ["Aborda um problema crescente e relevante globalmente", "Modelo de gamificação aumenta engajamento"],
      weaknesses: ["Mercado competitivo", "Desafio na precisão do cálculo da pegada de carbono"],
      marketViability: "Alta",
      innovationLevel: "Médio-Alto",
      nextSteps: ["Realizar testes de usabilidade", "Desenvolver algoritmo de pegada de carbono", "Iniciar conversas com empresas locais"]
    },
    competitors: [
      {
        name: "EcoTrack",
        description: "Aplicativo focado em rastreamento de pegada de carbono",
        strengths: "Interface intuitiva, comunidade ativa",
        weaknesses: "Sem sistema de recompensas",
        marketShare: "15%",
        fundingAmount: "€2.5M"
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
        { symbol: "SEDG", name: "SolarEdge", change: "+1.8%" }
      ]
    }
  });

  const [activeTab, setActiveTab] = useState('overview');
  const [showCollaborationModal, setShowCollaborationModal] = useState(false);
  const [collaborationMessage, setCollaborationMessage] = useState('');

  const sendCollaborationRequest = () => {
    console.log('Enviando solicitação de colaboração:', collaborationMessage);
    setShowCollaborationModal(false);
    setCollaborationMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold truncate">{idea.title}</h1>
          <Link href="/dashboard" className="text-sm text-indigo-400 hover:text-indigo-300">Voltar ao Dashboard</Link>
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
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-300">{idea.category}</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-300">{idea.currentState}</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-300">Criado em: {idea.createdAt}</span>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 mt-4 md:mt-0">
                  <Link
                    href={`/ideas/${idea.id}/edit`}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Editar Ideia
                  </Link>
                  <button
                    onClick={() => setShowCollaborationModal(true)}
                    className="inline-flex items-center px-4 py-2 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-600"
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
                  <div className="h-2.5 rounded-full bg-blue-500" style={{width: `${idea.progress}%`}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Abas de navegação */}
          <div className="border-b border-gray-700 mb-6">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-indigo-500 text-indigo-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                Visão Geral
              </button>
              <button
                onClick={() => setActiveTab('ai-analysis')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'ai-analysis'
                    ? 'border-indigo-500 text-indigo-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                Análise IA
              </button>
              <button
                onClick={() => setActiveTab('market')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'market'
                    ? 'border-indigo-500 text-indigo-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                Análise de Mercado
              </button>
              <button
                onClick={() => setActiveTab('competitors')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'competitors'
                    ? 'border-indigo-500 text-indigo-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                Concorrentes
              </button>
            </nav>
          </div>

          {/* Conteúdo das abas */}
          <div className="space-y-6">
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-xl font-semibold text-white">Descrição Longa</h3>
                <p className="text-gray-400">{idea.longDescription}</p>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-white">Público-Alvo</h4>
                  <p className="text-gray-400">{idea.targetAudience}</p>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-white">Problema Resolvido</h4>
                  <p className="text-gray-400">{idea.problemSolved}</p>
                </div>
              </div>
            )}

            {activeTab === 'ai-analysis' && (
              <div>
                <h3 className="text-xl font-semibold text-white">Análise da IA</h3>
                <p className="text-gray-400">Foram identificadas forças e fraquezas para a ideia, incluindo a viabilidade de mercado e o nível de inovação.</p>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-white">Pontos Fortes</h4>
                  <ul className="text-gray-400">
                    {idea.aiAnalysis.strengths.map((strength, index) => (
                      <li key={index}>- {strength}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-white">Pontos Fracos</h4>
                  <ul className="text-gray-400">
                    {idea.aiAnalysis.weaknesses.map((weakness, index) => (
                      <li key={index}>- {weakness}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'market' && (
              <div>
                <h3 className="text-xl font-semibold text-white">Análise de Mercado</h3>
                <p className="text-gray-400">O setor está crescendo a uma taxa de {idea.marketAnalysis.sectorGrowth}. O mercado tem potencial de €{idea.marketAnalysis.targetMarketSize}.</p>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-white">Ações Relacionadas</h4>
                  <ul className="text-gray-400">
                    {idea.marketAnalysis.relatedStocks.map((stock, index) => (
                      <li key={index}>
                        {stock.name} ({stock.symbol}) - {stock.change}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'competitors' && (
              <div>
                <h3 className="text-xl font-semibold text-white">Concorrentes</h3>
                <div className="space-y-4">
                  {idea.competitors.map((competitor, index) => (
                    <div key={index} className="p-4 bg-gray-800 rounded-lg">
                      <h4 className="text-lg font-semibold text-white">{competitor.name}</h4>
                      <p className="text-gray-400">{competitor.description}</p>
                      <p className="text-gray-400">Forças: {competitor.strengths}</p>
                      <p className="text-gray-400">Fraquezas: {competitor.weaknesses}</p>
                      <p className="text-gray-400">Participação de Mercado: {competitor.marketShare}</p>
                      <p className="text-gray-400">Investimento: {competitor.fundingAmount}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Modal de colaboração */}
      {showCollaborationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-6 rounded-lg max-w-lg w-full">
            <h3 className="text-xl font-semibold text-white mb-4">Enviar Solicitação de Colaboração</h3>
            <textarea
              value={collaborationMessage}
              onChange={(e) => setCollaborationMessage(e.target.value)}
              className="w-full h-32 p-2 text-gray-900 rounded-md"
              placeholder="Escreva uma mensagem para colaborar..."
            />
            <div className="mt-4 flex justify-end gap-4">
              <button
                onClick={() => setShowCollaborationModal(false)}
                className="px-4 py-2 bg-gray-700 text-white rounded-md"
              >
                Cancelar
              </button>
              <button
                onClick={sendCollaborationRequest}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
