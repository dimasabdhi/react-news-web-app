import { configureStore, createSlice } from "@reduxjs/toolkit";

const savedNewsSlice = createSlice({
  name: "savedNews",
  initialState: [],
  reducers: {
    saveNews: (state, action) => {
      // Menambahkan berita ke list saved
      state.push(action.payload);
    },
    unsaveNews: (state, action) => {
      // Menghapus berita dari list saved
      return state.filter((news) => news._id !== action.payload._id);
    },
  },
});

export const { saveNews, unsaveNews } = savedNewsSlice.actions;

const store = configureStore({
  reducer: {
    savedNews: savedNewsSlice.reducer,
  },
});

export default store;
