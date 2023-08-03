import { createSlice } from "@reduxjs/toolkit";
import { User, userList } from "./Data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const updateUser = state.find((user: User) => user.id === id);
      if (updateUser) {
        updateUser.name = name;
        updateUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const findUser = state.find((user: User) => user.id === id);
      if (findUser) {
        return state.filter((user: User) => user.id != id);
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
