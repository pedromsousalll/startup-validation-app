"use client";

import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Validação de Startups</h1>
          <Link href="/auth" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Entrar
          </Link>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight">
              Valide suas ideias de startup
            </h2>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 dark:text-gray-400 sm:text-xl md:mt-5 md:max-w-3xl">
              Conectando criadores e investidores para transformar ideias inovadoras em negócios de sucesso.
            </p>
            <div className="mt-10 flex justify-center">
              <Link href="/auth?tab=register" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                Começar agora
              </Link>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
              Como funciona
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-5">
                    1
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Registre sua ideia</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    Descreva sua ideia de startup, o problema que resolve e o mercado-alvo.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-5">
                    2
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Valide com o mercado</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    Utilize nossas ferramentas de validação baseadas na metodologia Lean Startup.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-5">
                    3
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Conecte-se com investidores</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    Apresente sua ideia validada para investidores interessados em projetos promissores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
