"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

export default function AuthPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mode, setMode] = useState(searchParams.get('mode') || 'login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [userType, setUserType] = useState('creator');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      if (mode === 'login') {
        // Simulação de login bem-sucedido
        // Em uma implementação real, isso faria uma chamada à API
        console.log('Login com:', { email, password });
        
        // Redirecionar com base no tipo de usuário
        // Em uma implementação real, isso seria determinado pela resposta da API
        if (email.includes('investor')) {
          router.push('/investor/dashboard');
        } else {
          router.push('/dashboard');
        }
      } else {
        // Simulação de registro bem-sucedido
        console.log('Registro com:', { name, email, password, userType });
        
        // Redirecionar para verificação de email
        router.push('/verify-email?email=' + encodeURIComponent(email));
      }
    } catch (err) {
      console.error('Erro de autenticação:', err);
      setError('Falha na autenticação. Por favor, verifique suas credenciais.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const toggleMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
    setError('');
  };
  
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          {mode === 'login' ? 'Entre na sua conta' : 'Crie sua conta'}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-400">
          {mode === 'login' ? 'Novo na plataforma?' : 'Já tem uma conta?'}{' '}
          <button
            onClick={toggleMode}
            className="font-medium text-purple-400 hover:text-purple-300 focus:outline-none"
          >
            {mode === 'login' ? 'Crie uma conta' : 'Entre aqui'}
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 bg-red-900/50 text-red-200 p-3 rounded">
              {error}
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            {mode === 'register' && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Nome completo
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 bg-gray-700 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  />
                </div>
              </div>
            )}
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 bg-gray-700 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Senha
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 bg-gray-700 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                />
              </div>
            </div>
            
            {mode === 'register' && (
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Tipo de conta
                </label>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  <div
                    className={`border rounded-md p-3 flex items-center justify-center cursor-pointer ${
                      userType === 'creator'
                        ? 'bg-purple-900/50 border-purple-500'
                        : 'border-gray-600 hover:border-gray-400'
                    }`}
                    onClick={() => setUserType('creator')}
                  >
                    <span className="text-sm font-medium text-gray-200">Criador</span>
                  </div>
                  <div
                    className={`border rounded-md p-3 flex items-center justify-center cursor-pointer ${
                      userType === 'investor'
                        ? 'bg-purple-900/50 border-purple-500'
                        : 'border-gray-600 hover:border-gray-400'
                    }`}
                    onClick={() => setUserType('investor')}
                  >
                    <span className="text-sm font-medium text-gray-200">Investidor</span>
                  </div>
                </div>
              </div>
            )}

            {mode === 'login' && (
              <div className="flex items-center justify-end">
                <div className="text-sm">
                  <Link href="/auth/reset-password" className="font-medium text-purple-400 hover:text-purple-300">
                    Esqueceu sua senha?
                  </Link>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )  : mode === 'login' ? 'Entrar' : 'Criar conta'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-800 text-gray-400">Ou continue com</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <button
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-600"
                >
                  <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335"/>
                    <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4"/>
                    <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05"/>
                    <path d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z" fill="#34A853"/>
                  </svg>
                </button>
              </div>

              <div>
                <button
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-600"
                >
                  <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.5977 2.26027C13.2904 1.48059 14.3867 0.881468 15.4273 0.881468C15.4826 0.881468 15.5379 0.882956 15.5932 0.88593C15.6006 0.978784 15.6043 1.07461 15.6043 1.17043C15.6043 2.14362 15.1579 3.07392 14.5023 3.71033C13.8245 4.40867 12.8124 5.05449 11.7718 5.05449C11.7128 5.05449 11.6538 5.05301 11.5948 5.05004C11.5874 4.95719 11.5837 4.86136 11.5837 4.76554C11.5837 3.83821 12.0116 2.90494 12.5977 2.26027ZM7.90682 7.89674C7.93598 7.89674 7.96514 7.89674 7.9943 7.89674C8.78022 7.89674 9.47559 7.60477 10.1267 7.31577C10.9126 6.96519 11.6538 6.63239 12.5977 6.63239C12.6714 6.63239 12.7451 6.63387 12.8188 6.63684C12.8124 6.66896 12.8097 6.70405 12.8097 6.73914C12.8097 7.71233 13.2562 8.64263 13.9118 9.27904C14.5896 9.97738 15.6017 10.6232 16.6423 10.6232C16.7013 10.6232 16.7603 10.6217 16.8193 10.6188C16.8119 10.7116 16.8082 10.8074 16.8082 10.9032C16.8082 13.3251 14.8249 16.9739 12.5977 19.1184C11.4841 20.1902 10.1267 21.1188 8.78022 21.1188C7.43375 21.1188 6.07637 20.1902 4.96276 19.1184C3.84915 18.0466 2.49176 16.1894 2.49176 14.3322C2.49176 12.4751 3.84915 11.5465 4.96276 10.4747C6.07637 9.40289 7.43375 7.89674 7.90682 7.89674ZM19.6174 15.9023C20.3101 15.1226 21.4064 14.5235 22.447 14.5235C22.5023 14.5235 22.5576 14.525 22.6129 14.528C22.6203 14.6208 22.624 14.7167 22.624 14.8125C22.624 15.7857 22.1776 16.716 21.522 17.3524C20.8442 18.0507 19.8321 18.6966 18.7915 18.6966C18.7325 18.6966 18.6735 18.6951 18.6145 18.6921C18.6071 18.5993 18.6034 18.5035 18.6034 18.4076C18.6034 17.4803 19.0313 16.547 19.6174 15.9023Z" fill="white"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
