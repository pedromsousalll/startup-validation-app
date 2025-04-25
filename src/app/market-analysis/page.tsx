"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MarketAnalysisPage() {
  const [marketTrends, setMarketTrends] = useState([
    {
      category: "Sustentabilidade",
      growth: "+28%",
      sentiment: "Muito Positivo",
      opportunities: 12,
      description: "O mercado de soluções sustentáveis continua em forte crescimento, impulsionado pela crescente conscientização ambiental e políticas governamentais favoráveis.",
      keyInsights: [
        "Aplicativos de rastreamento de pegada de carbono mostram crescimento de 35% ano a ano",
        "Investimentos em startups de sustentabilidade aumentaram 42% no último trimestre",
        "Consumidores estão dispostos a pagar até 20% a mais por produtos sustentáveis"
      ],
      relatedIdeas: [1, 5, 8]
    },
    {
      category: "Fintech",
      growth: "+22%",
      sentiment: "Positivo",
      opportunities: 8,
      description: "O setor de tecnologia financeira mantém crescimento constante, com foco em soluções de inclusão financeira e serviços bancários alternativos.",
      keyInsights: [
        "Soluções de pagamento sem contato cresceram 50% desde 2023",
        "Aplicativos de educação financeira atraíram 3 milhões de novos usuários",
        "Regulamentações Open Banking abriram novas oportunidades para startups"
      ],
      relatedIdeas: [3, 7]
    },
    {
      category: "Saúde Digital",
      growth: "+35%",
      sentiment: "Muito Positivo",
      opportunities: 15,
      description: "A telemedicina e soluções de saúde digital continuam em expansão acelerada, com forte demanda por serviços de monitoramento remoto e prevenção.",
      keyInsights: [
        "Consultas por telemedicina representam agora 30% de todas as consultas médicas",
        "Dispositivos wearables de saúde cresceram 65% em vendas no último ano",
        "Investimentos em startups de saúde mental aumentaram 85% desde 2023"
      ],
      relatedIdeas: [2, 9]
    },
    {
      category: "E-commerce",
      growth: "+18%",
      sentiment: "Neutro",
      opportunities: 6,
      description: "O comércio eletrônico mantém crescimento estável, com saturação em alguns segmentos mas novas oportunidades em nichos específicos e comércio social.",
      keyInsights: [
        "Compras via redes sociais aumentaram 40% no último ano",
        "Marketplaces de nicho crescem 25% mais rápido que plataformas generalistas",
        "Soluções de logística de última milha atraíram €1.2 bilhões em investimentos"
      ],
      relatedIdeas: [4, 6]
    },
    {
      category: "Educação",
      growth: "+25%",
      sentiment: "Positivo",
      opportunities: 10,
      description: "Tecnologias educacionais continuam em expansão, com foco em aprendizado personalizado, desenvolvimento de habilidades profissionais e educação continuada.",
      keyInsights: [
        "Plataformas de microlearning cresceram 55% em usuários ativos",
        "Cursos de habilidades tecnológicas têm demanda 3x maior que outros temas",
        "Soluções B2B para empresas representam 40% do mercado de edtech"
      ],
      relatedIdeas: [3, 10]
    }
  ]);
  
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filtrar tendências com base no termo de pesquisa
  const filteredTrends = marketTrends.filter(trend => 
    trend.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trend.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Função para selecionar uma categoria
  const selectCategory = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Análise de Mercado</h1>
          <div className="flex space-x-4">
            <Link href="/dashboard" className="text-sm text-indigo-400 hover:text-indigo-300">
              Dashboard do Criador
            </Link>
            <Link href="/investor/dashboard" className="text-sm text-purple-400 hover:text-purple-300">
              Dashboard do Investidor
            </Link>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Introdução */}
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-2">Análise de Tendências de Mercado</h2>
            <p className="text-gray-300 mb-4">
              Nossa análise de mercado utiliza inteligência artificial para processar dados de múltiplas fontes, incluindo relatórios de investimento, 
              tendências de busca, análise de sentimento em redes sociais e dados econômicos para identificar oportunidades de mercado em tempo real.
            </p>
            
            <div className="relative mt-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Pesquisar tendências de mercado..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={searchTerm}
                onChange={(e)  => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {/* Visão geral das tendências */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-6">
            {marketTrends.map((trend, index) => (
              <div 
                key={index} 
                className={`bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-200 ${
                  selectedCategory === trend.category ? 'ring-2 ring-indigo-500 transform scale-105' : 'hover:bg-gray-750'
                }`}
                onClick={() => selectCategory(trend.category)}
              >
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-medium text-white">{trend.category}</h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      trend.growth.startsWith('+3') ? 'bg-green-900 text-green-200' :
                      trend.growth.startsWith('+2') ? 'bg-green-800/70 text-green-200' :
                      trend.growth.startsWith('+1') ? 'bg-blue-800/70 text-blue-200' :
                      'bg-yellow-800/70 text-yellow-200'
                    }`}>
                      {trend.growth}
                    </span>
                  </div>
                  
                  <div className="mt-2 flex items-center">
                    <div className={`h-3 w-3 rounded-full mr-2 ${
                      trend.sentiment === 'Muito Positivo' ? 'bg-green-500' :
                      trend.sentiment === 'Positivo' ? 'bg-green-400' :
                      trend.sentiment === 'Neutro' ? 'bg-yellow-400' :
                      trend.sentiment === 'Negativo' ? 'bg-red-400' :
                      'bg-red-500'
                    }`}></div>
                    <span className="text-sm text-gray-300">{trend.sentiment}</span>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-400">{trend.opportunities} oportunidades</span>
                    <svg className={`h-5 w-5 text-indigo-400 transform transition-transform ${selectedCategory === trend.category ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            ) )}
          </div>
          
          {/* Detalhes da categoria selecionada */}
          {selectedCategory && (
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-6 animate-fadeIn">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-white">{selectedCategory}</h3>
                  <button 
                    onClick={() => setSelectedCategory(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {marketTrends.filter(trend => trend.category === selectedCategory) .map((trend, index) => (
                  <div key={index}>
                    <p className="text-gray-300 mb-6">{trend.description}</p>
                    
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-6">
                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <h4 className="text-md font-medium text-indigo-400 mb-2">Principais Insights</h4>
                        <ul className="space-y-2">
                          {trend.keyInsights.map((insight, idx) => (
                            <li key={idx} className="flex items-start">
                              <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-gray-200">{insight}</span>
                            </li>
                          ) )}
                        </ul>
                      </div>
                      
                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <h4 className="text-md font-medium text-indigo-400 mb-2">Métricas de Mercado</h4>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-gray-400">Taxa de Crescimento</span>
                              <span className="text-sm font-medium text-green-400">{trend.growth}</span>
                            </div>
                            <div className="w-full bg-gray-600 rounded-full h-2">
                              <div 
                                className="bg-green-500 h-2 rounded-full" 
                                style={{width: `${parseInt(trend.growth.replace(/[^0-9]/g, ''))}%`}}
                              ></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-gray-400">Sentimento de Mercado</span>
                              <span className="text-sm font-medium text-gray-300">{trend.sentiment}</span>
                            </div>
                            <div className="w-full bg-gray-600 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${
                                  trend.sentiment === 'Muito Positivo' ? 'bg-green-500 w-[90%]' :
                                  trend.sentiment === 'Positivo' ? 'bg-green-400 w-[75%]' :
                                  trend.sentiment === 'Neutro' ? 'bg-yellow-400 w-[50%]' :
                                  trend.sentiment === 'Negativo' ? 'bg-red-400 w-[25%]' :
                                  'bg-red-500 w-[10%]'
                                }`}
                              ></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-gray-400">Saturação de Mercado</span>
                              <span className="text-sm font-medium text-gray-300">
                                {trend.category === 'E-commerce' ? 'Alta (75%)' : 
                                 trend.category === 'Fintech' ? 'Média (55%)' : 
                                 trend.category === 'Saúde Digital' ? 'Baixa (30%)' : 
                                 trend.category === 'Sustentabilidade' ? 'Baixa (25%)' : 
                                 'Média (50%)'}
                              </span>
                            </div>
                            <div className="w-full bg-gray-600 rounded-full h-2">
                              <div 
                                className="bg-yellow-500 h-2 rounded-full" 
                                style={{
                                  width: trend.category === 'E-commerce' ? '75%' : 
                                         trend.category === 'Fintech' ? '55%' : 
                                         trend.category === 'Saúde Digital' ? '30%' : 
                                         trend.category === 'Sustentabilidade' ? '25%' : 
                                         '50%'
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700/50 rounded-lg p-4">
                      <h4 className="text-md font-medium text-indigo-400 mb-4">Ideias Relacionadas</h4>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {trend.category === 'Sustentabilidade' && (
                          <>
                            <div className="bg-gray-700 rounded-lg p-4">
                              <h5 className="font-medium text-white mb-1">App de Sustentabilidade</h5>
                              <p className="text-sm text-gray-300 mb-2">Aplicativo que ajuda usuários a rastrear e reduzir sua pegada de carbono através de desafios diários e recompensas.</p>
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-400">Score IA: 85</span>
                                <Link href="/ideas/1" className="text-xs text-indigo-400 hover:text-indigo-300">
                                  Ver detalhes →
                                </Link>
                              </div>
                            </div>
                            <div className="bg-gray-700 rounded-lg p-4">
                              <h5 className="font-medium text-white mb-1">Marketplace de Produtos Sustentáveis</h5>
                              <p className="text-sm text-gray-300 mb-2">Plataforma que conecta consumidores a produtos eco-friendly verificados, com sistema de rastreamento de impacto ambiental.</p>
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-400">Score IA: 78</span>
                                <Link href="/ideas/5" className="text-xs text-indigo-400 hover:text-indigo-300">
                                  Ver detalhes →
                                </Link>
                              </div>
                            </div>
                          </>
                        )}
                        
                        {trend.category === 'Fintech' && (
                          <>
                            <div className="bg-gray-700 rounded-lg p-4">
                              <h5 className="font-medium text-white mb-1">Plataforma de Educação Financeira</h5>
                              <p className="text-sm text-gray-300 mb-2">Solução gamificada para ensinar educação financeira para jovens adultos através de simulações realistas e desafios.</p>
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-400">Score IA: 82</span>
                                <Link href="/ideas/3" className="text-xs text-indigo-400 hover:text-indigo-300">
                                  Ver detalhes →
                                </Link>
                              </div>
                            </div>
                            <div className="bg-gray-700 rounded-lg p-4">
                              <h5 className="font-medium text-white mb-1">App de Investimentos Fracionados</h5>
                              <p className="text-sm text-gray-300 mb-2">Aplicativo que permite investimentos fracionados em ativos premium com valores acessíveis e educação financeira integrada.</p>
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-400">Score IA: 79</span>
                                <Link href="/ideas/7" className="text-xs text-indigo-400 hover:text-indigo-300">
                                  Ver detalhes →
                                </Link>
                              </div>
                            </div>
                          </>
                        )}
                        
                        {trend.category === 'Saúde Digital' && (
                          <>
                            <div className="bg-gray-700 rounded-lg p-4">
                              <h5 className="font-medium text-white mb-1">Plataforma de Telemedicina Mental</h5>
                              <p className="text-sm text-gray-300 mb-2">Solução de telemedicina focada em saúde mental, com terapia online, monitoramento de humor e recursos de autoajuda.</p>
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-400">Score IA: 88</span>
                                <Link href="/ideas/2" className="text-xs text-indigo-400 hover:text-indigo-300">
                                  Ver detalhes →
                                </Link>
                              </div>
                            </div>
                            <div className="bg-gray-700 rounded-lg p-4">
                              <h5 className="font-medium text-white mb-1">Wearable de Monitoramento de Saúde</h5>
                              <p className="text-sm text-gray-300 mb-2">Dispositivo wearable com IA para monitoramento contínuo de sinais vitais e detecção precoce de problemas de saúde.</p>
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-400">Score IA: 84</span>
                                <Link href="/ideas/9" className="text-xs text-indigo-400 hover:text-indigo-300">
                                  Ver detalhes →
                                </Link>
                              </div>
                            </div>
                          </>
                        )}
                        
                        {trend.category === 'E-commerce' && (
                          <>
                            <div className="bg-gray-700 rounded-lg p-4">
                              <h5 className="font-medium text-white mb-1">Marketplace Local</h5>
                              <p className="text-sm text-gray-300 mb-2">Plataforma que conecta consumidores a pequenos produtores locais, promovendo comércio sustentável e fortalecendo a economia local.</p>
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-400">Score IA: 78</span>
                                <Link href="/ideas/4" className="text-xs text-indigo-400 hover:text-indigo-300">
                                  Ver detalhes →
                                </Link>
                              </div>
                            </div>
                            <div className="bg-gray-700 rounded-lg p-4">
                              <h5 className="font-medium text-white mb-1">Plataforma de Social Commerce</h5>
                              <p className="text-sm text-gray-300 mb-2">Solução que integra compras e redes sociais, permitindo compras diretas de conteúdo de influenciadores com recomendações personalizadas.</p>
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-400">Score IA: 76</span>
                                <Link href="/ideas/6" className="text-xs text-indigo-400 hover:text-indigo-300">
                                  Ver detalhes →
                                </Link>
                              </div>
                            </div>
                          </>
                        )}
                        
                        {trend.category === 'Educação' && (
                          <>
                            <div className="bg-gray-700 rounded-lg p-4">
                              <h5 className="font-medium text-white mb-1">Plataforma de Educação Financeira</h5>
                              <p className="text-sm text-gray-300 mb-2">Solução gamificada para ensinar educação financeira para jovens adultos através de simulações realistas e desafios.</p>
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-400">Score IA: 82</span>
                                <Link href="/ideas/3" className="text-xs text-indigo-400 hover:text-indigo-300">
                                  Ver detalhes →
                                </Link>
                              </div>
                            </div>
                            <div className="bg-gray-700 rounded-lg p-4">
                              <h5 className="font-medium text-white mb-1">Plataforma de Microlearning Profissional</h5>
                              <p className="text-sm text-gray-300 mb-2">Sistema de aprendizado em pequenos módulos focado em habilidades profissionais com certificações reconhecidas pelo mercado.</p>
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-400">Score IA: 80</span>
                                <Link href="/ideas/10" className="text-xs text-indigo-400 hover:text-indigo-300">
                                  Ver detalhes →
                                </Link>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Lista de tendências filtradas */}
          {!selectedCategory && (
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">Todas as Tendências de Mercado</h3>
                
                {filteredTrends.length > 0 ? (
                  <div className="space-y-6">
                    {filteredTrends.map((trend, index) => (
                      <div key={index} className="bg-gray-700/50 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <h4 className="text-md font-medium text-white">{trend.category}</h4>
                          <div className="flex items-center">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              trend.growth.startsWith('+3') ? 'bg-green-900 text-green-200' :
                              trend.growth.startsWith('+2') ? 'bg-green-800/70 text-green-200' :
                              trend.growth.startsWith('+1') ? 'bg-blue-800/70 text-blue-200' :
                              'bg-yellow-800/70 text-yellow-200'
                            }`}>
                              {trend.growth}
                            </span>
                          </div>
                        </div>
                        <p className="mt-2 text-gray-300">{trend.description}</p>
                        
                        <div className="mt-4 flex justify-between items-center">
                          <div className="flex items-center">
                            <div className={`h-3 w-3 rounded-full mr-2 ${
                              trend.sentiment === 'Muito Positivo' ? 'bg-green-500' :
                              trend.sentiment === 'Positivo' ? 'bg-green-400' :
                              trend.sentiment === 'Neutro' ? 'bg-yellow-400' :
                              trend.sentiment === 'Negativo' ? 'bg-red-400' :
                              'bg-red-500'
                            }`}></div>
                            <span className="text-sm text-gray-300">{trend.sentiment}</span>
                          </div>
                          <span className="text-sm text-gray-400">{trend.opportunities} oportunidades</span>
                        </div>
                        
                        <div className="mt-4">
                          <button
                            onClick={() => selectCategory(trend.category)}
                            className="text-sm text-indigo-400 hover:text-indigo-300"
                          >
                            Ver análise detalhada →
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <svg className="mx-auto h-12 w-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <p className="mt-2 text-gray-400">Nenhuma tendência encontrada para "{searchTerm}".</p>
                    <button
                      onClick={()  => setSearchTerm('')}
                      className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-400 bg-gray-700 hover:bg-gray-600"
                    >
                      Limpar Pesquisa
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
