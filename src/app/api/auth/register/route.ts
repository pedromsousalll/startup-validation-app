import { NextResponse } from 'next/server';
import { createUser } from '@/lib/db/user-service';
import { sendVerificationEmail } from '@/lib/email/email-service';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password, role } = body;

    // Validação básica
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email e senha são obrigatórios' },
        { status: 400 }
      );
    }

    // Criar usuário e token de verificação
    const { user, verificationToken } = await createUser({
      name,
      email,
      password,
      role,
    });

    // Enviar email de verificação
    const emailResult = await sendVerificationEmail(email, verificationToken);

    if (!emailResult.success) {
      console.error('Erro ao enviar email de verificação:', emailResult.error);
      // Mesmo com erro no email, retornamos sucesso para o usuário
      // mas logamos o erro para investigação
    }

    return NextResponse.json({
      success: true,
      message: 'Usuário criado com sucesso. Por favor, verifique seu email.',
      userId: user.id,
    });
  } catch (error: any) {
    console.error('Erro ao registrar usuário:', error);
    return NextResponse.json(
      { error: error.message || 'Erro ao criar usuário' },
      { status: 500 }
    );
  }
}
