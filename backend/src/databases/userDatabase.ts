import { IUser } from "../models";
import { UserScripts } from "./scripts";

export const UserDatabase = {
  createUser: async (username: string, email: string, password: string): Promise<IUser> => {
    const insertedUser = await UserScripts.createUser(username, email, password);

    const user: IUser = {
      id: insertedUser.id,
      username: insertedUser.nome,
      email: insertedUser.email,
      password: insertedUser.senha,
    };

    return user;
  },

  getUserById: async (id: number): Promise<IUser> => {
    const fetchedUser = await UserScripts.getUserById(id);

    if (!fetchedUser) throw new Error('Usuário não encontrado...');

    const user: IUser = {
      id: fetchedUser.id,
      username: fetchedUser.nome,
      email: fetchedUser.email,
      password: fetchedUser.senha,
    };

    return user;
  },

  updateUser: async (toUpdateUser: IUser): Promise<IUser> => {
    const updatedUser = await UserScripts.updateUser(toUpdateUser);

    const user: IUser = {
      id: updatedUser.id,
      username: updatedUser.nome,
      email: updatedUser.email,
      password: updatedUser.senha,
    };

    return user;
  },

  deleteUser: async (userId: number): Promise<IUser> => {
    const deletedUser = await UserScripts.deleteUser(userId);

    const user: IUser = {
      id: deletedUser.id,
      username: deletedUser.nome,
      email: deletedUser.email,
      password: deletedUser.senha,
    };

    return user;
  },

  getUserByEmailAndPassword: async (email: string, password: string): Promise<IUser> => {
    const fetchedUser = await UserScripts.getUserByEmailAndPassword(email, password);

    if (!fetchedUser) throw new Error('Login não encontrado...');

    const user: IUser = {
      id: fetchedUser.id,
      username: fetchedUser.nome,
      email: fetchedUser.email,
      password: fetchedUser.senha,
    };

    return user;
  }
}
