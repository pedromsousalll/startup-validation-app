// app/verify-email/_components/VerifyEmailProcessor.tsx
'use client'; // This component MUST be a client component

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

// This component now holds all the logic and state from your original page
export function VerifyEmailProcessor() {
  const router = useRouter();
  const searchParams = useSearchParams(); // Hook is used here
  const token = searchParams.get('token');

  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Verificando seu email...');

  useEffect(() => {
    // The effect runs client-side after the component mounts and searchParams are available
    if (!token) {
      setStatus('error');
      setMessage('Token não fornecido. Verifique o link no seu email.');
      return;
    }

    async function verifyEmail() {
      // Make sure the status is still loading before fetching
      // This prevents re-fetching if the component re-renders for other reasons
      if (status !== 'loading') return; 
      
      try {
        const response = await fetch(`/api/auth/verify-email?token=${token}`);
        const data = await response.json();

        if (response.ok && data.success) {
          setStatus('success');
          setMessage('Email verificado com sucesso! Você será redirecionado para a página de login.');
          // Redirect after 3 seconds
          setTimeout(() => {
            router.push('/auth?verified=true');
          }, 3000);
        } else {
          setStatus('error');
          setMessage(data.error || 'Erro ao verificar email. Tente novamente.');
        }
      } catch (error) {
        console.error('Erro ao verificar email:', error);
        setStatus('error');
        setMessage('Erro ao verificar email. Tente novamente.');
      }
    }

    verifyEmail();
    // Only run the effect if the token changes. Adding 'router' is usually safe but often not necessary
    // unless the router instance itself could change in a way relevant to the effect.
    // Adding 'status' dependency to prevent re-fetch as mentioned above.
  }, [token, router, status]); 

  // Render the UI based on the status
  return (
    <div className="text-center">
      {status === 'loading' && (
        <div className="flex justify-center mb-4">
          <svg className="animate-spin h-10 w-10 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      )}
      
      {status === 'success' && (
        <div className="flex justify-center mb-4">
          <svg className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
      
      {status === 'error' && (
        <div className="flex justify-center mb-4">
          <svg className="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      )}
      
      <p className="text-gray-300 mb-6">{message}</p>
      
      {status === 'error' && (
        <div className="mt-4">
          <Link href="/auth" className="text-purple-400 hover:text-purple-300">
            Voltar para a página de login
          </Link>
        </div>
      )}
    </div>
  );
}