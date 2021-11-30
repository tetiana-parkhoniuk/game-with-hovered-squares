import { createSelector } from '@reduxjs/toolkit';

const getPresets = state => state.presets.modes;

const getModes = createSelector(getPresets, modes => {
  return Object.keys(modes).map(mode => ({
    mode,
    size: modes[mode].field,
  }));
});

const presetsSelectors = {
  getPresets,
  getModes,
};

export default presetsSelectors;
