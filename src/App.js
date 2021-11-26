import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { presetsOperations, presetsSelectors } from 'redux/presets';
import ModePicker from 'components/ModePicker';
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const modes = useSelector(presetsSelectors.getModes);
  const [appMode, setAppMode] = useState();
  const [fieldSize, setFieldSize] = useState();

  useEffect(() => {
    dispatch(presetsOperations.fetchPresets());
  }, [dispatch]);

  useEffect(() => {
    if (appMode) {
      setFieldSize(appMode.size);
      console.log('appMode2:', appMode);
      console.log('fieldSize:', fieldSize);
    }
  }, [appMode, fieldSize]);

  const handleModePickerChange = selectedMode => {
    // console.log('handleChangeModes:', modes);
    const newMode = modes.find(({ mode }) => mode === selectedMode);
    // console.log('newMode:', newMode);
    setAppMode(newMode);
    // console.log('appMode1:', appMode);
  };

  return (
    <div className={styles.app}>
      <ModePicker options={modes} onChange={handleModePickerChange} />
    </div>
  );
}

export default App;
