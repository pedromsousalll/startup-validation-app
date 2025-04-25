"use client";

import React from 'react';
import Link from 'next/link';

export default function IdeasPage() {
  // Dados de exemplo - em uma aplicação real, estes viriam de uma API
  const ideas = [
    {
      id: 1,
      title: 'App de Sustentabilidade',
      description: 'Aplicativo que ajuda usuários a rastrear e reduzir sua pegada de carbono através de desafios diários e recompensas.',
      progress: 70,
      createdAt: '2025-03-15'
    },
    {
      id: 2,
      title: 'Marketplace Local',
      description: 'Plataforma que conecta consumidores a pequenos produtores locais, promovendo comércio sustentável e fortalecendo a economia local.',
      progress: 45,
      createdAt: '2025-04-02'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Minhas Ideias</h1>
          <Link href="/dashboard" className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">
            Voltar ao Dashboard
          </Link>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex justify-between mb-6">
              <h2 className="text-xl font-semibold">Ideias Registradas</h2>
              <Link href="/ideas/new" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Nova Ideia
              </Link>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {ideas.map(idea => (
                <div key={idea.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-blue-300 mb-2">{idea.title}</h3>
                    <p className="text-gray-300 mb-4">{idea.description}</p>
                    <div className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-400">Progresso</span>
                        <span className="text-sm font-medium text-gray-400">{idea.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{width: `${idea.progress}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Criado em: {idea.createdAt}</span>
                      <Link href={`/ideas/${idea.id}`} className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                        Ver Detalhes
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {ideas.length === 0 && (
              <div className="text-center py-12 bg-gray-800 rounded-lg">
                <p className="text-gray-300">Você ainda não tem ideias registradas.</p>
                <Link href="/ideas/new" className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 inline-block">
                  Criar Primeira Ideia
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
