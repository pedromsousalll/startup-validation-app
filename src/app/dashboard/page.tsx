"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [user, setUser] = useState({
    name: "João Silva",
    role: "creator",
    email: "joao@exemplo.com"
  });
  
  // Dados simulados para o dashboard
  const ideas = [
    {
      id: "1",
      title: "App de Sustentabilidade",
      shortDescription: "Aplicativo que ajuda usuários a rastrear e reduzir sua pegada de carbono através de desafios diários e recompensas.",
      category: "Sustentabilidade",
      progress: 70,
      aiScore: 85,
      createdAt: "15/03/2025"
    },
    {
      id: "2",
      title: "Marketplace Local",
      shortDescription: "Plataforma que conecta consumidores a pequenos produtores locais, promovendo comércio sustentável e fortalecendo a economia local.",
      category: "E-commerce",
      progress: 45,
      aiScore: 78,
      createdAt: "02/04/2025"
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Dashboard do Criador</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Bem-vindo à Plataforma de Validação de Startups</h2>
              <p className="mb-4 text-gray-300">
                Login realizado com sucesso! Esta é a sua área de criador, onde você pode gerenciar suas ideias e acompanhar o processo de validação.
              </p>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">Minhas Ideias</h3>
                  <p className="text-gray-300 mb-4">
                    Gerencie suas ideias de startup e acompanhe seu progresso.
                  </p>
                  <Link 
                    href="/ideas" 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Ver Ideias
                  </Link>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2 text-green-400">Nova Ideia</h3>
                  <p className="text-gray-300 mb-4">
                    Registre uma nova ideia de startup para validação.
                  </p>
                  <Link 
                    href="/ideas/new" 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                  >
                    Criar Ideia
                  </Link>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">Análise de Mercado</h3>
                  <p className="text-gray-300 mb-4">
                    Acesse análises de mercado e concorrentes para suas ideias.
                  </p>
                  <Link 
                    href="/market-analysis" 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                  >
                    Ver Análises
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Progresso de Validação</h3>
                
                {ideas.length > 0 ? (
                  <div className="space-y-6">
                    {ideas.map(idea => (
                      <div key={idea.id} className="bg-gray-700/50 p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="text-lg font-medium">{idea.title}</h4>
                            <p className="text-sm text-gray-400">{idea.category}</p>
                          </div>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            idea.aiScore >= 80 ? 'bg-green-900 text-green-200' :
                            idea.aiScore >= 60 ? 'bg-yellow-900 text-yellow-200' :
                            'bg-red-900 text-red-200'
                          }`}>
                            Score IA: {idea.aiScore}
                          </span>
                        </div>
                        
                        <div className="mb-2">
                          <div className="flex justify-between text-xs text-gray-400 mb-1">
                            <span>Progresso de Validação</span>
                            <span>{idea.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-600 rounded-full h-2.5">
                            <div 
                              className="h-2.5 rounded-full bg-blue-500"
                              style={{width: `${idea.progress}%`}}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center mt-4">
                          <span className="text-xs text-gray-400">Criado em: {idea.createdAt}</span>
                          <Link 
                            href={`/ideas/${idea.id}`}
                            className="text-sm text-blue-400 hover:text-blue-300"
                          >
                            Ver Detalhes →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <svg className="mx-auto h-12 w-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <p className="mt-2 text-gray-400">Você ainda não tem ideias cadastradas.</p>
                    <Link 
                      href="/ideas/new"
                      className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                    >
                      Criar Primeira Ideia
                    </Link>
                  </div>
                ) }
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Recursos Úteis</h3>
                
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="text-lg font-medium mb-2">Guia de Validação</h4>
                    <p className="text-gray-300 mb-3">
                      Aprenda o processo completo de validação de ideias de startup, desde a concepção até o MVP.
                    </p>
                    <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
                      Acessar Guia →
                    </a>
                  </div>
                  
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="text-lg font-medium mb-2">Webinars e Workshops</h4>
                    <p className="text-gray-300 mb-3">
                      Participe de eventos online com especialistas em empreendedorismo e inovação.
                    </p>
                    <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
                      Ver Agenda →
                    </a>
                  </div>
                  
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="text-lg font-medium mb-2">Comunidade de Criadores</h4>
                    <p className="text-gray-300 mb-3">
                      Conecte-se com outros empreendedores, troque experiências e receba feedback.
                    </p>
                    <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
                      Participar →
                    </a>
                  </div>
                  
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="text-lg font-medium mb-2">Mentoria Personalizada</h4>
                    <p className="text-gray-300 mb-3">
                      Agende sessões de mentoria com especialistas em diferentes áreas de negócios.
                    </p>
                    <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
                      Agendar Mentoria →
                    </a>
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

