"use client";

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function AuthPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') || 'login';
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    try {
      // Simulação de login bem-sucedido para demonstração
      // Em produção, isso seria uma chamada real à API
      console.log('Login com:', email, password);
      
      // Simular um pequeno atraso para mostrar o estado de carregamento
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirecionar para o dashboard com base no papel do usuário
      // Neste exemplo, redirecionamos todos para o dashboard de criador
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Erro ao fazer login. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-4">
        <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Validação de Startups</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Conectando criadores e investidores para validar ideias inovadoras
            </p>
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          
          <div className="mb-4">
            <div className="flex border-b">
              <button 
                className={`py-2 px-4 w-1/2 ${tab === 'login' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
                onClick={() => router.push('/auth?tab=login')}
              >
                Login
              </button>
              <button 
                className={`py-2 px-4 w-1/2 ${tab === 'register' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
                onClick={() => router.push('/auth?tab=register')}
              >
                Registro
              </button>
            </div>
          </div>
          
          {tab === 'login' ? (
            <form className="space-y-4" onSubmit={handleLogin}>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input 
                  id="email" 
                  type="email" 
                  placeholder="seu@email.com" 
                  required 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  defaultValue="usuario@exemplo.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium">Senha</label>
                <input 
                  id="password" 
                  type="password" 
                  required 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  defaultValue="Senha123!"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md"
                disabled={isLoading}
              >
                {isLoading ? 'Processando...' : 'Entrar'}
              </button>
            </form>
          ) : (
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">Nome</label>
                <input 
                  id="name" 
                  placeholder="Seu nome completo" 
                  required 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="register-email" className="block text-sm font-medium">Email</label>
                <input 
                  id="register-email" 
                  type="email" 
                  placeholder="seu@email.com" 
                  required 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="register-password" className="block text-sm font-medium">Senha</label>
                <input 
                  id="register-password" 
                  type="password" 
                  required 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="role" className="block text-sm font-medium">Perfil</label>
                <select 
                  id="role" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="creator">Criador</option>
                  <option value="investor">Investidor</option>
                </select>
              </div>
              <button 
                type="submit" 
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md"
              >
                Registrar
              </button>
            </form>
          )}
          
          <div className="mt-6 text-center text-sm text-gray-500">
            Valide suas ideias e conecte-se com investidores
          </div>
        </div>
      </div>
    </div>
  );
}
