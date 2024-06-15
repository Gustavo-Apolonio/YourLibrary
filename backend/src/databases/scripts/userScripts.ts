import { PrismaClient } from "@prisma/client"
import { IUser } from "../../models";

const prisma = new PrismaClient();

export const UserScripts = {
  createUser: async (username: string, email: string, password: string) => {
    return Promise.resolve({
      id: 1,
      nome: username,
      email: email,
      senha: password,
    });

    // Real implementation with database
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
    return Promise.resolve({
      id: 1,
      nome: 'Mock User',
      email: 'mock@user.dev',
      senha: '123456',
    });

    // Real implementation with database
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
    return Promise.resolve({
      id: user.id,
      nome: user.username,
      email: user.email,
      senha: user.password,
    });

    // Real implementation with database
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
    return Promise.resolve({
      id: 1,
      nome: 'Mock User',
      email: 'mock@user.dev',
      senha: '123456'
    });

    // Real implementation with database
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
    return Promise.resolve({
      id: 1,
      nome: 'Mock User',
      email: email,
      senha: password,
    });

    // Real implementation with database
    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (user?.senha === password) return user;

      return null;
    } catch (error) {
      throw error
    } finally {
      await prisma.$disconnect();
    }
  }
}
