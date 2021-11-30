import { createSlice } from '@reduxjs/toolkit';
import { presetsOperations } from '.';

const presetsSlice = createSlice({
  name: 'presets',
  initialState: {
    modes: [],
    status: null,
    error: null,
  },
  extraReducers: {
    [presetsOperations.fetchPresets.pending]: state => {
      state.status = 'loading';
      state.error = null;
    },
    [presetsOperations.fetchPresets.fulfilled]: (state, { payload }) => {
      state.modes = payload;
      state.status = 'fulfilled';
      state.error = null;
    },
    [presetsOperations.fetchPresets.rejected]: (state, { payload }) => {
      state.status = 'rejected';
      state.error = payload;
    },
  },
});

export default presetsSlice.reducer;
