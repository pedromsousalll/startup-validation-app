"use client";

import React from 'react';
import Link from 'next/link';

export default function MarketAnalysisPage() {
  // Dados de exemplo - em uma aplicação real, estes viriam de uma API
  const marketAnalyses = [
    {
      id: 1,
      ideaTitle: 'App de Sustentabilidade',
      marketSize: '€4.5 bilhões',
      growthRate: '12.3% ao ano',
      competitors: [
        { name: 'EcoTrack', marketShare: '15%', strengths: 'Interface intuitiva, comunidade ativa' },
        { name: 'GreenStep', marketShare: '8%', strengths: 'Gamificação, parcerias com marcas' }
      ],
      opportunities: 'Crescente conscientização ambiental, regulamentações mais rígidas sobre emissões',
      threats: 'Concorrência de grandes empresas de tecnologia, baixa adoção em mercados emergentes'
    },
    {
      id: 2,
      ideaTitle: 'Marketplace Local',
      marketSize: '€2.8 bilhões',
      growthRate: '8.7% ao ano',
      competitors: [
        { name: 'LocalEats', marketShare: '12%', strengths: 'Forte presença em áreas urbanas, app móvel popular' },
        { name: 'FarmConnect', marketShare: '6%', strengths: 'Foco em produtos orgânicos, logística eficiente' }
      ],
      opportunities: 'Aumento da demanda por produtos locais, tendência de consumo consciente',
      threats: 'Grandes varejistas adotando estratégias similares, margens reduzidas'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Análise de Mercado</h1>
          <Link href="/dashboard" className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">
            Voltar ao Dashboard
          </Link>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="space-y-8">
              {marketAnalyses.map(analysis => (
                <div key={analysis.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-purple-300 mb-4">{analysis.ideaTitle}</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-700/50 p-4 rounded-lg">
                        <h3 className="text-lg font-medium text-purple-200 mb-2">Visão Geral do Mercado</h3>
                        <div className="space-y-2">
                          <p><span className="text-gray-400">Tamanho do Mercado:</span> {analysis.marketSize}</p>
                          <p><span className="text-gray-400">Taxa de Crescimento:</span> {analysis.growthRate}</p>
                        </div>
                      </div>
                      
                      <div className="bg-gray-700/50 p-4 rounded-lg">
                        <h3 className="text-lg font-medium text-purple-200 mb-2">Análise SWOT</h3>
                        <div className="space-y-2">
                          <p><span className="text-gray-400">Oportunidades:</span> {analysis.opportunities}</p>
                          <p><span className="text-gray-400">Ameaças:</span> {analysis.threats}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-purple-200 mb-3">Principais Concorrentes</h3>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-600">
                          <thead className="bg-gray-700">
                            <tr>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                Empresa
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                Participação
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                Pontos Fortes
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-gray-800 divide-y divide-gray-700">
                            {analysis.competitors.map((competitor, index) => (
                              <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                                  {competitor.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                                  {competitor.marketShare}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-200">
                                  {competitor.strengths}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
