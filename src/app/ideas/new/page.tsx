"use client";

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NewIdeaPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    longDescription: '',
    category: '',
    targetAudience: '',
    problemSolved: '',
    currentResources: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulação de envio para API
      console.log('Enviando ideia:', formData);
      
      // Simulação de análise de IA
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirecionar para a página de ideias após "salvar"
      router.push('/ideas');
    } catch (error) {
      console.error('Erro ao enviar ideia:', error);
      // Aqui você adicionaria código para mostrar uma mensagem de erro
    } finally {
      setIsSubmitting(false);
    }
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
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-300">
                    Título da Ideia *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Ex: App de Sustentabilidade"
                  />
                </div>
                
                <div>
                  <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-300">
                    Descrição Curta *
                  </label>
                  <input
                    type="text"
                    id="shortDescription"
                    name="shortDescription"
                    required
                    value={formData.shortDescription}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Resumo da sua ideia em uma frase"
                  />
                </div>
                
                <div>
                  <label htmlFor="longDescription" className="block text-sm font-medium text-gray-300">
                    Descrição Detalhada *
                  </label>
                  <textarea
                    id="longDescription"
                    name="longDescription"
                    rows={4}
                    required
                    value={formData.longDescription}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Descreva sua ideia em detalhes, incluindo como ela funciona e qual valor ela entrega"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-300">
                    Categoria *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="">Selecione uma categoria</option>
                    <option value="Sustentabilidade">Sustentabilidade</option>
                    <option value="Fintech">Fintech</option>
                    <option value="Saúde Digital">Saúde Digital</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Educação">Educação</option>
                    <option value="Mobilidade">Mobilidade</option>
                    <option value="Alimentação">Alimentação</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-300">
                    Público-Alvo *
                  </label>
                  <input
                    type="text"
                    id="targetAudience"
                    name="targetAudience"
                    required
                    value={formData.targetAudience}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Ex: Jovens adultos (18-35 anos) preocupados com questões ambientais"
                  />
                </div>
                
                <div>
                  <label htmlFor="problemSolved" className="block text-sm font-medium text-gray-300">
                    Problema Resolvido *
                  </label>
                  <textarea
                    id="problemSolved"
                    name="problemSolved"
                    rows={3}
                    required
                    value={formData.problemSolved}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Descreva o problema que sua ideia resolve e por que é importante"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="currentResources" className="block text-sm font-medium text-gray-300">
                    Recursos Atuais
                  </label>
                  <textarea
                    id="currentResources"
                    name="currentResources"
                    rows={2}
                    value={formData.currentResources}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Ex: Equipe de 2 desenvolvedores, protótipo inicial, etc."
                  ></textarea>
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

