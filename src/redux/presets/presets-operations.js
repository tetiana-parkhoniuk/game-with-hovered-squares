import { createAsyncThunk } from '@reduxjs/toolkit';
import * as presetsAPI from 'services/fetchAPI';

const fetchPresets = createAsyncThunk(
  'presets/fetchPresets',
  async (_, { rejectWithValue }) => {
    try {
      const presets = await presetsAPI.fetchPresets();
      return presets;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  },
);

const presetsOperations = {
  fetchPresets,
};

export default presetsOperations;
