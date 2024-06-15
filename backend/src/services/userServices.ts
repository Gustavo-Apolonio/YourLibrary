import { UserDatabase } from "../databases";

export const UserService = {
  createUser: (username: string, email: string, password: string): any => {
    if (!username || !email || !password) return;

    const userCreated = UserDatabase.createUser(username, email, password);

    return userCreated;
  },

  getUserById: (id: number): any => {
    if (!id || isNaN(id)) return;

    const user = UserDatabase.getUserById(id);

    return user;
  },

  updateUser: (user: any, username: string, email: string, password: string): any => {
    if (!username || !email || !password) return;

    user.username = username;
    user.email = email;
    user.password = password;

    user = UserDatabase.updateUser(user);

    return user;
  },

  deleteUser: (user: any): any => {
    return UserDatabase.deleteUser(user);
  },

  getUserByEmailAndPassword: (email: string, password: string): any => {
    return UserDatabase.getUserByEmailAndPassword(email, password);
  }
}