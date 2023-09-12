import { configureStore } from "@reduxjs/toolkit";
import { PostSlice } from "./slices/Posts";
import { AuthSlice } from "./slices/Auth";

const store = configureStore({
  reducer: {
    post: PostSlice,
    auth: AuthSlice
  }
})

export default store