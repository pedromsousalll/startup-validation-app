// app/verify-email/page.tsx
export const dynamic = 'force-dynamic'; // 👈 adiciona esta linha no topo

import { Suspense } from 'react';
import { VerifyEmailProcessor } from './_components/VerifyEmailProcessor';

export default function VerifyEmailPage() {
  const loadingFallback = (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <svg className="animate-spin h-10 w-10 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
      <p className="text-gray-300 mb-6">Verificando seu email...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Verificação de Email
        </h2>
        <Suspense fallback={loadingFallback}>
          <VerifyEmailProcessor />
        </Suspense>
      </div>
    </div>
  );
}
