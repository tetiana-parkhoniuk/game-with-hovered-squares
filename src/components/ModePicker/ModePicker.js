import React from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { presetsSelectors } from 'redux/presets';
import styles from './ModePicker.module.css';

export default function ModePicker() {
  const modes = useSelector(presetsSelectors.getModes);

  const options = modes
    ? Object.keys(modes).map(mode => ({
        value: mode,
        label: mode.replace('Mode', ''),
      }))
    : [];

  const handleModeChange = event => {
    const selectedMode = event.value;
    console.log(selectedMode);
  };

  return (
    <Select
      className={styles.select}
      placeholder="Pick mode"
      options={options}
      onChange={handleModeChange}
    />
  );
}
