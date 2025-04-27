// Serviço de email usando SendGrid
import sgMail from '@sendgrid/mail';

// Configurar a API key do SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function sendVerificationEmail(email: string, token: string) {
  const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
  const verificationUrl = `${baseUrl}/verify-email?token=${token}`;
  
  const msg = {
    to: email,
    from: process.env.EMAIL_FROM || 'noreply@startupvalidation.app',
    subject: 'Verifique seu email - Startup Validation App',
    text: `Por favor, verifique seu email clicando no link a seguir: ${verificationUrl}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <h2 style="color: #6366F1;">Startup Validation App</h2>
        <p>Olá,</p>
        <p>Obrigado por se registrar no Startup Validation App. Para completar seu registro, por favor verifique seu email clicando no botão abaixo:</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${verificationUrl}" style="background-color: #6366F1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; font-weight: bold;">Verificar Email</a>
        </div>
        <p>Ou copie e cole o link a seguir no seu navegador:</p>
        <p style="word-break: break-all; color: #6366F1;">${verificationUrl}</p>
        <p>Este link expirará em 24 horas.</p>
        <p>Se você não solicitou este email, por favor ignore-o.</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 12px; color: #666;">© ${new Date() .getFullYear()} Startup Validation App. Todos os direitos reservados.</p>
      </div>
    `,
  };

  try {
    await sgMail.send(msg);
    return { success: true };
  } catch (error) {
    console.error('Erro ao enviar email de verificação:', error);
    return { success: false, error };
  }
}

export async function sendWelcomeEmail(email: string, name: string) {
  const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
  
  const msg = {
    to: email,
    from: process.env.EMAIL_FROM || 'noreply@startupvalidation.app',
    subject: 'Bem-vindo ao Startup Validation App',
    text: `Olá ${name || 'usuário'}, bem-vindo ao Startup Validation App! Sua conta foi verificada com sucesso.`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <h2 style="color: #6366F1;">Startup Validation App</h2>
        <p>Olá ${name || 'usuário'},</p>
        <p>Bem-vindo ao Startup Validation App! Sua conta foi verificada com sucesso.</p>
        <p>Agora você pode começar a usar nossa plataforma para validar suas ideias de startup ou descobrir oportunidades de investimento.</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${baseUrl}/dashboard" style="background-color: #6366F1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; font-weight: bold;">Acessar Dashboard</a>
        </div>
        <p>Se tiver alguma dúvida, não hesite em entrar em contato conosco.</p>
        <p>Atenciosamente,<br>Equipe Startup Validation App</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 12px; color: #666;">© ${new Date() .getFullYear()} Startup Validation App. Todos os direitos reservados.</p>
      </div>
    `,
  };

  try {
    await sgMail.send(msg);
    return { success: true };
  } catch (error) {
    console.error('Erro ao enviar email de boas-vindas:', error);
    return { success: false, error };
  }
}
