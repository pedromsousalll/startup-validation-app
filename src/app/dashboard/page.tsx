"use client";

import React from 'react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard do Criador</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg p-6 bg-white dark:bg-gray-800">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Bem-vindo à Plataforma de Validação de Startups</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Login realizado com sucesso! Esta é a sua área de criador, onde você pode gerenciar suas ideias e acompanhar o processo de validação.
              </p>
              
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300">Minhas Ideias</h3>
                  <p className="mt-2 text-sm text-blue-700 dark:text-blue-400">Gerencie suas ideias de startup e acompanhe seu progresso.</p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Ver Ideias
                  </button>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium text-green-800 dark:text-green-300">Nova Ideia</h3>
                  <p className="mt-2 text-sm text-green-700 dark:text-green-400">Registre uma nova ideia de startup para validação.</p>
                  <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                    Criar Ideia
                  </button>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium text-purple-800 dark:text-purple-300">Análise de Mercado</h3>
                  <p className="mt-2 text-sm text-purple-700 dark:text-purple-400">Acesse análises de mercado e concorrentes para suas ideias.</p>
                  <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                    Ver Análises
                  </button>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">Progresso de Validação</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Ideia 1: App de Sustentabilidade</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">70%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '70%' as any}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Ideia 2: Marketplace Local</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '45%' as any}}></div>
                    </div>
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
