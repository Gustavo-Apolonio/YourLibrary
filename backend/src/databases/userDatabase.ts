export const UserDatabase = {
  createUser: (username: string, email: string, password: string): any => {
    console.log('user created');

    return { username, email, password, id: '123' };
  },

  getUserById: (id: number): any => {
    console.log('user getted');

    return { username: '', email: '', password: '', id: '123' };
  },

  updateUser: (user: any): any => {
    console.log('user updated');

    return user;
  },

  deleteUser: (user: any): any => {
    console.log('user deleted');

    return user;
  }
}
