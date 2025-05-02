// src/lib/sessionUtils.ts (Exemplo)
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth/auth-options";

export async function getCurrentUserId(): Promise<number | null> {
  try {
    const session = await getServerSession(authOptions);
    if (session?.user?.id) {
      // ASSUMINDO que 'session.user.id' é STRING (como definido em next-auth.d.ts)
      // Convertemos para NÚMERO para usar com o Prisma
      const userId = parseInt(session.user.id, 10);
      return isNaN(userId) ? null : userId;
    }
  } catch (error) {
    console.error("Error getting session/user ID:", error);
  }
  return null; // Retorna null se não houver sessão ou ID
}