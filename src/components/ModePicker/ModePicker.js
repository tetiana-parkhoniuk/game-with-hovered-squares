import React from 'react';
import Select from 'react-select';
import styles from './ModePicker.module.css';

export default function ModePicker({ options, onChange }) {
  const modeOptions = options.map(({ mode }) => ({
    value: mode,
    label: mode.replace('Mode', ''),
  }));

  const handleModelChange = selectedMode => {
    console.log('value:', selectedMode.value);
    onChange(selectedMode.value);
  };

  return (
    <Select
      className={styles.select}
      placeholder="Pick me"
      options={modeOptions}
      onChange={handleModelChange}
    />
  );
}
