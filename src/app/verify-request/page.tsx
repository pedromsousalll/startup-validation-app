'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function VerifyRequestPage() {
  const [email, setEmail] = useState('');
  const [isResending, setIsResending] = useState(false);
  const [resendStatus, setResendStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  // Recuperar o email da sessão de armazenamento, se disponível
  useEffect(() => {
    const storedEmail = sessionStorage.getItem('pendingVerificationEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleResendVerification = async () => {
    if (!email || isResending) return;

    setIsResending(true);
    setResendStatus('idle');
    setMessage('');

    try {
      const response = await fetch('/api/auth/resend-verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setResendStatus('success');
        setMessage('Email de verificação reenviado com sucesso!');
      } else {
        setResendStatus('error');
        setMessage(data.error || 'Erro ao reenviar email de verificação.');
      }
    } catch (error) {
      console.error('Erro ao reenviar verificação:', error);
      setResendStatus('error');
      setMessage('Erro ao reenviar email de verificação. Tente novamente.');
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Verifique seu Email
        </h2>
        
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <svg className="h-16 w-16 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          <p className="text-gray-300 mb-4">
            Enviamos um link de verificação para:
          </p>
          
          <p className="text-white font-medium mb-6">
            {email || 'seu endereço de email'}
          </p>
          
          <p className="text-gray-400 text-sm mb-8">
            Por favor, verifique sua caixa de entrada e clique no link de verificação para ativar sua conta. 
            Se não encontrar o email, verifique também sua pasta de spam.
          </p>
          
          <div className="mb-6">
            <button
              onClick={handleResendVerification}
              disabled={isResending || !email}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isResending ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Reenviando...
                </>
              ) : 'Reenviar Email de Verificação'}
            </button>
          </div>
          
          {resendStatus !== 'idle' && (
            <div className={`text-sm mb-6 ${resendStatus === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {message}
            </div>
          )}
          
          <div className="mt-4">
            <Link href="/auth" className="text-purple-400 hover:text-purple-300">
              Voltar para a página de login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
