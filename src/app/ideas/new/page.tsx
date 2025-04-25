"use client";

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NewIdeaPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio para API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Redirecionar para a página de ideias após "salvar"
    router.push('/ideas');
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Nova Ideia</h1>
          <Link href="/dashboard" className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">
            Voltar ao Dashboard
          </Link>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-gray-800 rounded-lg p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-300">Título da Ideia</label>
                  <input
                    type="text"
                    id="title"
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Ex: App de Sustentabilidade"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="problem" className="block text-sm font-medium text-gray-300">Problema a Resolver</label>
                  <textarea
                    id="problem"
                    rows={3}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Descreva o problema que sua ideia resolve..."
                    required
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="solution" className="block text-sm font-medium text-gray-300">Solução Proposta</label>
                  <textarea
                    id="solution"
                    rows={3}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Descreva como sua ideia resolve o problema..."
                    required
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="target" className="block text-sm font-medium text-gray-300">Público-Alvo</label>
                  <input
                    type="text"
                    id="target"
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Ex: Consumidores conscientes, 25-45 anos"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="market" className="block text-sm font-medium text-gray-300">Tamanho do Mercado</label>
                  <select
                    id="market"
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value="small">Pequeno (nicho)</option>
                    <option value="medium">Médio (regional)</option>
                    <option value="large">Grande (nacional)</option>
                    <option value="global">Global</option>
                  </select>
                </div>
                
                <div className="flex justify-end space-x-3">
                  <Link href="/ideas" className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500">
                    Cancelar
                  </Link>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Salvando...' : 'Salvar Ideia'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

