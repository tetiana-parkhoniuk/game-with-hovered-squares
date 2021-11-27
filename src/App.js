import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { presetsOperations, presetsSelectors } from 'redux/presets';
import ModePicker from 'components/ModePicker';
import Button from 'components/Button';
import Fields from 'components/Fields';
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const modes = useSelector(presetsSelectors.getModes);
  const [appMode, setAppMode] = useState();
  const [fieldSize, setFieldSize] = useState();
  const [isStarted, setStarted] = useState(false);

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

  const toggleStart = () => {
    setStarted(!isStarted);
  };

  const handleBtnClick = () => {
    if (appMode) {
      setFieldSize(appMode.size);
    }
    toggleStart();
    console.log('isStarted:', isStarted);
    console.log('handleBtnClick:', fieldSize);
  };

  return (
    <div className={styles.app}>
      <ModePicker options={modes} onChange={handleModePickerChange} />
      <Button
        text={isStarted ? 'STOP' : 'START'}
        onClick={handleBtnClick}
        isDisabled={!fieldSize}
      />
      {isStarted && <Fields size={fieldSize} />}
    </div>
  );
}

export default App;
