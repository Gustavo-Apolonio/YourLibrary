import { UserDatabase } from "../databases";
import { IUser } from "../models";

export const UserService = {
  createUser: async (username: string, email: string, password: string): Promise<IUser> => {
    if (!username || !email || !password) throw new Error('Campos obrigatórios não preenchidos...');

    const userCreated = await UserDatabase.createUser(username, email, password);

    return userCreated;
  },

  getUserById: async (id: number): Promise<IUser> => {
    if (!id || isNaN(id)) throw new Error('ID não reconhecido...');;

    const user = await UserDatabase.getUserById(id);

    return user;
  },

  updateUser: async (user: any, username: string, email: string, password: string): Promise<IUser> => {
    if (!username || !email || !password) throw new Error('Campos obrigatórios não preenchidos...');;

    user.username = username;
    user.email = email;
    user.password = password;

    user = await UserDatabase.updateUser(user);

    return user;
  },

  deleteUser: async (userId: number): Promise<IUser> => {
    return await UserDatabase.deleteUser(userId);
  },

  getUserByEmailAndPassword: async (email: string, password: string): Promise<IUser> => {
    return await UserDatabase.getUserByEmailAndPassword(email, password);
  }
}