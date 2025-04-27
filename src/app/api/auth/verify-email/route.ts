import { NextResponse } from 'next/server';
import { verifyEmail } from '@/lib/db/user-service';
import { sendWelcomeEmail } from '@/lib/email/email-service';

export async function GET(request: Request) {
  try {
    // Obter o token da URL
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.json(
        { error: 'Token não fornecido' },
        { status: 400 }
      );
    }

    // Verificar o email usando o token
    const user = await verifyEmail(token);

    // Enviar email de boas-vindas
    if (user.name) {
      await sendWelcomeEmail(user.email, user.name);
    } else {
      await sendWelcomeEmail(user.email, 'usuário');
    }

    // Redirecionar para a página de sucesso
    return NextResponse.json({
      success: true,
      message: 'Email verificado com sucesso',
      userId: user.id,
    });
  } catch (error: any) {
    console.error('Erro ao verificar email:', error);
    return NextResponse.json(
      { error: error.message || 'Erro ao verificar email' },
      { status: 500 }
    );
  }
}
