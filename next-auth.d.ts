// /next-auth.d.ts  (na raiz do projeto)

import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

// Define a estrutura das propriedades que você adiciona ao JWT
declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    // Adicione as propriedades que você coloca no token dentro do callback 'jwt'
    id?: string;
    role?: string;
  }
}

// Define a estrutura das propriedades que você adiciona ao User e Session
declare module "next-auth" {
  interface User extends DefaultUser {
    // Adicione as propriedades que você retorna na função 'authorize' ou 'profile'
    // Certifique-se que os tipos aqui correspondem ao que você realmente retorna
    id: string; // Você usa user.id nos callbacks, então precisa estar aqui
    role?: string; // 'role' é a propriedade que estava a causar problemas
    // Adicione outras propriedades personalizadas se tiver (ex: emailVerified, etc.)
  }

  interface Session extends DefaultSession {
    // O objeto 'user' dentro da 'session' terá as propriedades definidas acima
    user?: User;
  }
}
