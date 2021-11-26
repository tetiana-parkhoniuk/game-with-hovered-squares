import React from 'react';
import { useSelector } from 'react-redux';
import { presetsSelectors } from 'redux/presets';

export default function ModePicker() {
  const modes = useSelector(presetsSelectors.getModes);
  return ()
}
