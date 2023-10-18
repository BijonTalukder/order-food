import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "../../../utility/utility";
interface IUser {
  name: string;
  email: string;
  password: string;
}
interface ILoginUser {
  email: string;
  password: string;
}
export const createUser = createAsyncThunk(
  "user/createUser",
  async (payload: IUser) => {
    const data = await axios.post(`${BaseUrl}/user/create`, payload);
    console.log(data.data.data, "thunk");

    return data.data.data.email;
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (payload: ILoginUser) => {
    const data = await axios.post(`${BaseUrl}/auth/login`);
    console.log(data);
    
  }
);

const initialState = {
  userData: {
    email: null,
  },
  //   email:null,
  isLoading: false,
  isError: false,
  error: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userData.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        console.log(state, "fullfiled");

        state.userData.email = action.payload;
        state.isLoading = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.userData.email = null;
        state.isError = true;
        state.error = action.error.message!;
      });
  },
});
// export const {} = userSlice.actions
export default userSlice.reducer;
