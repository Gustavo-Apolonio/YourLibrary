import { PrismaClient } from "@prisma/client"
import { IUser } from "../../models";

const prisma = new PrismaClient();

export const UserScripts = {
  createUser: async (username: string, email: string, password: string) => {
    try {
      const user = await prisma.user.create({
        data: {
          nome: username,
          email,
          senha: password
        }
      });
      return user;
    } catch (error) {
      throw error
    } finally {
      await prisma.$disconnect();
    }
  },

  getUserById: async (userId: number) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });
      return user;
    } catch (error) {
      throw error
    } finally {
      await prisma.$disconnect();
    }
  },

  updateUser: async (user: IUser) => {
    try {
      const { id, username: nome, email, password: senha } = user;
      const updatedUser = await prisma.user.update({
        where: { id },
        data: {
          id,
          nome,
          email,
          senha,
        }
      });
      return updatedUser;
    } catch (error) {
      throw error
    } finally {
      await prisma.$disconnect();
    }
  },

  deleteUser: async (userId: number) => {
    try {
      const user = await prisma.user.delete({
        where: { id: userId },
      });
      return user;
    } catch (error) {
      throw error
    } finally {
      await prisma.$disconnect();
    }
  },

  getUserByEmailAndPassword: async (email: string, password: string) => {
    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (user && user.senha === password) return user;

      return null;
    } catch (error) {
      throw error
    } finally {
      await prisma.$disconnect();
    }
  }
}
