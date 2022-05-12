import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    id: null,
    opened: false
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setOpened: (state, action) => {
      state.opened = !state.opened
    }
  }
});

export const { setId, setOpened } = detailSlice.actions;

export default detailSlice.reducer;
