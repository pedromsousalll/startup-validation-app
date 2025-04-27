import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
import crypto from 'crypto';

const prisma = new PrismaClient();

// Função existente
export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}

// Novas funções para gerenciar usuários e verificação de email
export async function createUser({ name, email, password, role = 'creator' }: { 
  name?: string; 
  email: string; 
  password: string;
  role?: string;
}) {
  // Verificar se o usuário já existe
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    throw new Error('Email já está em uso');
  }

  // Hash da senha
  const hashedPassword = await hash(password, 10);

  // Criar o usuário (não verificado)
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role,
      // emailVerified é null por padrão
    },
  });

  // Criar token de verificação
  const verificationToken = await createVerificationToken(user.id);

  return {
    user,
    verificationToken: verificationToken.token,
  };
}

export async function createVerificationToken(userId: number) {
  // Gerar token aleatório
  const token = crypto.randomBytes(32).toString('hex');
  
  // Definir data de expiração (24 horas)
  const expires = new Date();
  expires.setHours(expires.getHours() + 24);

  // Remover tokens antigos para este usuário
  await prisma.verificationToken.deleteMany({
    where: {
      userId,
      type: 'email',
    },
  });

  // Criar novo token
  return prisma.verificationToken.create({
    data: {
      token,
      userId,
      expires,
      type: 'email',
    },
  });
}

export async function verifyEmail(token: string) {
  // Buscar o token
  const verificationToken = await prisma.verificationToken.findUnique({
    where: {
      token,
    },
    include: {
      user: true,
    },
  });

  // Verificar se o token existe
  if (!verificationToken) {
    throw new Error('Token inválido');
  }

  // Verificar se o token expirou
  if (verificationToken.expires < new Date()) {
    // Remover token expirado
    await prisma.verificationToken.delete({
      where: {
        id: verificationToken.id,
      },
    });
    throw new Error('Token expirado');
  }

  // Atualizar o usuário como verificado
  const user = await prisma.user.update({
    where: {
      id: verificationToken.userId,
    },
    data: {
      emailVerified: new Date(),
    },
  });

  // Remover o token usado
  await prisma.verificationToken.delete({
    where: {
      id: verificationToken.id,
    },
  });

  return user;
}

export async function resendVerificationEmail(email: string) {
  // Buscar o usuário
  const user = await getUserByEmail(email);
  
  // Verificar se o usuário existe
  if (!user) {
    throw new Error('Usuário não encontrado');
  }

  // Verificar se o email já foi verificado
  if (user.emailVerified) {
    throw new Error('Email já verificado');
  }

  // Criar novo token de verificação
  const verificationToken = await createVerificationToken(user.id);

  return {
    user,
    verificationToken: verificationToken.token,
  };
}
