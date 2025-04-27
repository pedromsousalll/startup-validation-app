import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Middleware para redirecionamento baseado na função do usuário
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Rotas públicas que não precisam de autenticação
  const publicPaths = ['/auth', '/verify-email', '/verify-request'];
  const isPublicPath = publicPaths.some(publicPath => path.startsWith(publicPath));
  
  // Se for uma rota pública, permitir acesso
  if (isPublicPath) {
    return NextResponse.next();
  }
  
  // Verificar se o usuário está autenticado
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  
  // Se não estiver autenticado, redirecionar para login
  if (!token) {
    const url = new URL('/auth', request.url);
    url.searchParams.set('callbackUrl', encodeURI(request.url));
    return NextResponse.redirect(url);
  }
  
  // Verificar a função do usuário e redirecionar para o dashboard apropriado
  const userRole = token.role as string;
  
  // Redirecionar para o dashboard apropriado após o login
  if (path === '/dashboard') {
    if (userRole === 'investor') {
      return NextResponse.redirect(new URL('/investor/dashboard', request.url));
    } else {
      // Padrão para criadores ou outras funções
      return NextResponse.redirect(new URL('/ideas', request.url));
    }
  }
  
  // Proteger rotas específicas para investidores
  if (path.startsWith('/investor') && userRole !== 'investor') {
    return NextResponse.redirect(new URL('/ideas', request.url));
  }
  
  // Permitir acesso a outras rotas para usuários autenticados
  return NextResponse.next();
}

// Configurar quais caminhos o middleware deve ser executado
export const config = {
  matcher: [
    // Rotas que precisam de autenticação
    '/dashboard',
    '/ideas/:path*',
    '/investor/:path*',
    // Rotas públicas (para verificar redirecionamento após login)
    '/auth',
    '/verify-email',
    '/verify-request'
  ],
};
