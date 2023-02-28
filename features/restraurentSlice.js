import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restraurent: {
    id: null,
    imagelink: null,
    name: null,
    rating: null,
    genre: null,
    adress: null,
    short_description: null,
    dishesh1: null,
    lang: null,
    lat: null,
  },
};

export const restraurentSlice = createSlice({
  name: " restraurent",
  initialState,
  reducers: {
    setRestraurent: (state, action) => {
      state.restraurent = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestraurent } = restraurentSlice.actions;

export const selectRestraurent = (state) => state.restraurent.restraurent;

export default restraurentSlice.reducer;
