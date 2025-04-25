"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function InvestorDashboardPage() {
  const [user, setUser] = useState({
    name: "Investidor Teste",
    role: "investor",
    email: "investidor@exemplo.com"
  });
  
  // Dados simulados para o dashboard
  const trendingIdeas = [
    {
      id: "1",
      title: "App de Sustentabilidade",
      shortDescription: "Aplicativo que ajuda usuários a rastrear e reduzir sua pegada de carbono através de desafios diários e recompensas.",
      category: "Sustentabilidade",
      aiScore: 85,
      creatorName: "João Silva",
      likes: 12,
      investorInterest: 3
    },
    {
      id: "2",
      title: "Marketplace Local",
      shortDescription: "Plataforma que conecta consumidores a pequenos produtores locais, promovendo comércio sustentável e fortalecendo a economia local.",
      category: "E-commerce",
      aiScore: 78,
      creatorName: "Maria Oliveira",
      likes: 8,
      investorInterest: 2
    },
    {
      id: "3",
      title: "Plataforma de Educação Financeira",
      shortDescription: "Solução gamificada para ensinar educação financeira para jovens adultos através de simulações realistas e desafios.",
      category: "Educação",
      aiScore: 82,
      creatorName: "Pedro Santos",
      likes: 15,
      investorInterest: 5
    }
  ];
  
  const marketTrends = [
    {
      category: "Sustentabilidade",
      growth: "+28%",
      sentiment: "Muito Positivo",
      opportunities: 12
    },
    {
      category: "Fintech",
      growth: "+22%",
      sentiment: "Positivo",
      opportunities: 8
    },
    {
      category: "Saúde Digital",
      growth: "+35%",
      sentiment: "Muito Positivo",
      opportunities: 15
    },
    {
      category: "E-commerce",
      growth: "+18%",
      sentiment: "Neutro",
      opportunities: 6
    }
  ];
  
  const investmentOpportunities = [
    {
      id: "1",
      title: "App de Sustentabilidade",
      creatorName: "João Silva",
      fundingGoal: "€100.000",
      equityOffered: "15%",
      category: "Sustentabilidade",
      aiScore: 85
    },
    {
      id: "3",
      title: "Plataforma de Educação Financeira",
      creatorName: "Pedro Santos",
      fundingGoal: "€150.000",
      equityOffered: "12%",
      category: "Educação",
      aiScore: 82
    }
  ];
  
  // Estado para controlar as categorias de interesse
  const [interestedCategories, setInterestedCategories] = useState([
    "Sustentabilidade",
    "Educação",
    "Fintech"
  ]);
  
  // Função para alternar interesse em uma categoria
  const toggleCategoryInterest = (category) => {
    if (interestedCategories.includes(category)) {
      setInterestedCategories(interestedCategories.filter(c => c !== category));
    } else {
      setInterestedCategories([...interestedCategories, category]);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard do Investidor</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
                <span className="sr-only">Notificações</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
              </button>
            </div>
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center">
                <span className="text-sm font-medium">{user.name.charAt(0) }</span>
              </div>
              <span className="ml-2 text-sm font-medium">{user.name}</span>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Seção de boas-vindas */}
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-2">Bem-vindo à Plataforma de Validação de Startups</h2>
            <p className="text-gray-300 mb-4">
              Esta é a sua área de investidor, onde você pode descobrir ideias inovadoras, analisar oportunidades de investimento e conectar-se com criadores.
            </p>
          </div>
          
          {/* Seção de estatísticas */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-6">
            <div className="bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-purple-600 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-400 truncate">
                        Ideias em Alta
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-white">
                          {trendingIdeas.length}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-green-600 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-400 truncate">
                        Oportunidades de Investimento
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-white">
                          {investmentOpportunities.length}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-600 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-400 truncate">
                        Tendências de Mercado
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-white">
                          {marketTrends.length}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-600 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-400 truncate">
                        Categorias de Interesse
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-white">
                          {interestedCategories.length}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Seção de ideias em alta */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Ideias em Alta</h2>
              <Link href="/investor/ideas" className="text-sm text-indigo-400 hover:text-indigo-300">
                Ver todas →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {trendingIdeas.map(idea => (
                <div key={idea.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-medium text-white">{idea.title}</h3>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        idea.aiScore >= 80 ? 'bg-green-900 text-green-200' :
                        idea.aiScore >= 60 ? 'bg-yellow-900 text-yellow-200' :
                        'bg-red-900 text-red-200'
                      }`}>
                        Score IA: {idea.aiScore}
                      </span>
                    </div>
                    
                    <p className="mt-2 text-sm text-gray-300 line-clamp-3">{idea.shortDescription}</p>
                    
                    <div className="mt-4 flex items-center text-sm text-gray-400">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
                        {idea.category}
                      </span>
                    </div>
                    
                    <div className="mt-4 flex justify-between items-center">
                      <div className="text-sm text-gray-400">
                        Por: {idea.creatorName}
                      </div>
                      <div className="flex space-x-2 text-sm text-gray-400">
                        <div className="flex items-center">
                          <svg className="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          {idea.likes}
                        </div>
                        <div className="flex items-center">
                          <svg className="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {idea.investorInterest}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Link
                        href={`/investor/ideas/${idea.id}`}
                        className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                      >
                        Ver Detalhes
                      </Link>
                    </div>
                  </div>
                </div>
              ) )}
            </div>
          </div>
          
          {/* Seção de oportunidades de investimento e tendências de mercado */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Oportunidades de investimento - ocupa 2/3 do espaço em telas grandes */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-white mb-4">Oportunidades de Investimento</h3>
                  
                  {investmentOpportunities.length > 0 ? (
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-700">
                        <thead className="bg-gray-700">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                              Ideia
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                              Criador
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                              Meta
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                              Equity
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                              Score
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                              <span className="sr-only">Ação</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-gray-800 divide-y divide-gray-700">
                          {investmentOpportunities.map((opportunity) => (
                            <tr key={opportunity.id}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-white">{opportunity.title}</div>
                                <div className="text-xs text-gray-400">{opportunity.category}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-300">{opportunity.creatorName}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-300">{opportunity.fundingGoal}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-300">{opportunity.equityOffered}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  opportunity.aiScore >= 80 ? 'bg-green-900 text-green-200' :
                                  opportunity.aiScore >= 60 ? 'bg-yellow-900 text-yellow-200' :
                                  'bg-red-900 text-red-200'
                                }`}>
                                  {opportunity.aiScore}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <Link href={`/investor/ideas/${opportunity.id}`} className="text-indigo-400 hover:text-indigo-300">
                                  Detalhes
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <svg className="mx-auto h-12 w-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="mt-2 text-gray-400">Nenhuma oportunidade de investimento disponível no momento.</p>
                    </div>
                  ) }
                  
                  {investmentOpportunities.length > 0 && (
                    <div className="mt-4 text-center">
                      <Link href="/investor/opportunities" className="text-sm text-indigo-400 hover:text-indigo-300">
                        Ver todas as oportunidades →
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Tendências de mercado - ocupa 1/3 do espaço em telas grandes */}
            <div>
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-white mb-4">Tendências de Mercado</h3>
                  
                  <div className="space-y-4">
                    {marketTrends.map((trend, index) => (
                      <div key={index} className="bg-gray-700 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <h4 className="text-md font-medium text-white">{trend.category}</h4>
                          <span className="text-green-400 font-medium">{trend.growth}</span>
                        </div>
                        <div className="mt-2 flex justify-between items-center text-sm">
                          <span className="text-gray-300">Sentimento: {trend.sentiment}</span>
                          <span className="text-gray-300">{trend.opportunities} ideias</span>
                        </div>
                        <div className="mt-2">
                          <button
                            onClick={() => toggleCategoryInterest(trend.category)}
                            className={`text-xs px-2 py-1 rounded ${
                              interestedCategories.includes(trend.category)
                                ? 'bg-purple-900 text-purple-200 hover:bg-purple-800'
                                : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                            }`}
                          >
                            {interestedCategories.includes(trend.category) ? 'Seguindo' : 'Seguir'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 text-center">
                    <Link href="/market-analysis" className="text-sm text-indigo-400 hover:text-indigo-300">
                      Ver análise completa →
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Categorias de interesse */}
              <div className="mt-6 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-white mb-4">Suas Categorias de Interesse</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {interestedCategories.map((category, index) => (
                      <div key={index} className="bg-purple-900 text-purple-200 rounded-full px-3 py-1 text-sm flex items-center">
                        {category}
                        <button
                          onClick={() => toggleCategoryInterest(category)}
                          className="ml-2 text-purple-200 hover:text-white"
                        >
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ) )}
                    
                    {interestedCategories.length === 0 && (
                      <p className="text-gray-400 text-sm">Nenhuma categoria selecionada. Adicione categorias para receber notificações sobre novas ideias.</p>
                    )}
                  </div>
                  
                  <div className="mt-4">
                    <button className="text-sm text-indigo-400 hover:text-indigo-300">
                      Gerenciar preferências →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
