// import { createSelector } from '@reduxjs/toolkit';

const getModes = state => state.presets.modes;

const getGrid = state => state.presets.grid;

// const getCalculatedGrid = createSelector([getModes], modes => {
//   const gridSize = modes[mode].field;
//   return gridSize;
// });

const getIsModeSelected = state => state.presets.isModeSelected;

const getIsStarted = state => state.presets.isStarted;

const status = state => state.presets.status;

const error = state => state.presets.error;

const presetsSelectors = {
  getModes,
  getGrid,
  // getCalculatedGrid,
  getIsModeSelected,
  getIsStarted,
  status,
  error,
};

export default presetsSelectors;
