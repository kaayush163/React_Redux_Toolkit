import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Aayush" },
  { id: "1", name: "Shaayu" },
  { id: "2", name: "Shaanu" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
