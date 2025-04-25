"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header/Navigation */}
      <header className="bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">StartupValidator</h1>
          </div>
          <nav className="flex space-x-4">
            <Link href="/auth" className="px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors">
              Entrar
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Valide suas ideias de startup
            </h2>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Transforme suas ideias em planos de negócios validados e conecte-se com investidores interessados em projetos inovadores.
            </p>
            <div className="mt-10 flex justify-center">
              <Link href="/auth?mode=register" className="px-8 py-3 text-lg font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors">
                Comece Gratuitamente
              </Link>
              <Link href="#como-funciona" className="ml-4 px-8 py-3 text-lg font-medium rounded-md text-gray-300 bg-gray-800 hover:bg-gray-700 transition-colors">
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="como-funciona" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Como Funciona
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Um processo simples para validar suas ideias e conectar-se com investidores.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-gray-700 rounded-lg p-6 text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-purple-600 text-white text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-medium mb-2">Submeta sua Ideia</h3>
              <p className="text-gray-300">
                Descreva sua ideia de startup, o problema que resolve e o mercado-alvo.
              </p>
            </div>

            <div className="bg-gray-700 rounded-lg p-6 text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-purple-600 text-white text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-medium mb-2">Receba Análise de IA</h3>
              <p className="text-gray-300">
                Nossa IA analisa sua ideia, fornecendo insights sobre viabilidade, mercado e pontos de melhoria.
              </p>
            </div>

            <div className="bg-gray-700 rounded-lg p-6 text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-purple-600 text-white text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-medium mb-2">Conecte-se com Investidores</h3>
              <p className="text-gray-300">
                Ideias validadas são apresentadas a investidores interessados em seu setor de mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Recursos Principais
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Ferramentas poderosas para validar e desenvolver suas ideias de startup.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="h-12 w-12 rounded-md bg-purple-600 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Análise de IA</h3>
              <p className="text-gray-300">
                Análise automática de ideias com feedback detalhado sobre pontos fortes, fracos e oportunidades de melhoria.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="h-12 w-12 rounded-md bg-purple-600 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Análise de Mercado</h3>
              <p className="text-gray-300">
                Dados em tempo real sobre tendências de mercado, concorrentes e oportunidades em seu setor.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="h-12 w-12 rounded-md bg-purple-600 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Rede de Investidores</h3>
              <p className="text-gray-300">
                Acesso a uma rede de investidores interessados em startups inovadoras em diversos setores.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="h-12 w-12 rounded-md bg-purple-600 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Plano de Validação</h3>
              <p className="text-gray-300">
                Guia passo a passo para validar sua ideia, desde a concepção até o protótipo e testes com usuários.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="h-12 w-12 rounded-md bg-purple-600 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Acompanhamento de Progresso</h3>
              <p className="text-gray-300">
                Ferramentas para acompanhar o progresso de validação da sua ideia e receber feedback contínuo.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="h-12 w-12 rounded-md bg-purple-600 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Estimativa de Capital</h3>
              <p className="text-gray-300">
                Cálculo automático do capital inicial necessário para desenvolver e lançar sua startup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-700">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Pronto para validar sua ideia?
          </h2>
          <p className="mt-4 text-lg text-purple-100 max-w-2xl mx-auto">
            Junte-se a milhares de empreendedores que estão transformando ideias em startups de sucesso.
          </p>
          <div className="mt-8">
            <Link href="/auth?mode=register" className="px-8 py-3 text-lg font-medium rounded-md text-purple-900 bg-white hover:bg-gray-100 transition-colors">
              Criar Conta Gratuita
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">StartupValidator</h3>
              <p className="text-gray-400">
                Plataforma de validação de ideias de startup com análise de IA e conexão com investidores.
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Análise de IA</a></li>
                <li><a href="#" className="hover:text-white">Análise de Mercado</a></li>
                <li><a href="#" className="hover:text-white">Rede de Investidores</a></li>
                <li><a href="#" className="hover:text-white">Plano de Validação</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Carreiras</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Termos de Serviço</a></li>
                <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date() .getFullYear()} StartupValidator. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

