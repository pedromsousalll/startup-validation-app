import { NextResponse } from 'next/server';
import { resendVerificationEmail } from '@/lib/db/user-service';
import { sendVerificationEmail } from '@/lib/email/email-service';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email é obrigatório' },
        { status: 400 }
      );
    }

    // Reenviar verificação
    const { user, verificationToken } = await resendVerificationEmail(email);

    // Enviar email de verificação
    const emailResult = await sendVerificationEmail(email, verificationToken);

    if (!emailResult.success) {
      console.error('Erro ao reenviar email de verificação:', emailResult.error);
      return NextResponse.json(
        { error: 'Erro ao enviar email de verificação' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Email de verificação reenviado com sucesso',
    });
  } catch (error: any) {
    console.error('Erro ao reenviar verificação:', error);
    return NextResponse.json(
      { error: error.message || 'Erro ao reenviar verificação' },
      { status: 500 }
    );
  }
}
