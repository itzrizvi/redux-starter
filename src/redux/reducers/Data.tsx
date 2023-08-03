export interface User {
  name: string;
  email: string;
  id: string;
}

export interface RootState {
  users: User[];
}

export const userList: User[] = [
  {
    name: "Yousef Khan",
    email: "yousefkhan@gmail.com",
    id: "1",
  },
  {
    name: "Khallil Khan",
    email: "khalilkhan@gmail.com",
    id: "2",
  },
  {
    name: "Khalid Khan",
    email: "khalidkhan@gmail.com",
    id: "3",
  },
];
