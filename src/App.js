import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { presetsOperations, presetsSelectors } from 'redux/presets';
import ModePicker from 'components/ModePicker';
import Button from 'components/Button';
import GameField from 'components/GameField';
import SquaresLogger from 'components/SquaresLogger/SquaresLogger';
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const modes = useSelector(presetsSelectors.getModes);
  const [appMode, setAppMode] = useState();
  const [fieldSize, setFieldSize] = useState();
  const [isStarted, setStarted] = useState(false);
  const [field, setField] = useState([]);
  const [logs, setLogs] = useState([]);
  const stateRef = useRef([]);

  stateRef.current = logs;

  const createField = () => {
    setField(
      <GameField
        size={fieldSize}
        onCellHover={logMessage => {
          if (stateRef.current.includes(logMessage)) {
            setLogs(stateRef.current.filter(el => el !== logMessage));
          } else {
            setLogs([logMessage, ...stateRef.current]);
          }
        }}
      />,
    );
    setLogs([]);
  };

  useEffect(() => {
    dispatch(presetsOperations.fetchPresets());
  }, [dispatch]);

  useEffect(() => {
    if (appMode) {
      setFieldSize(appMode.size);
    }
  }, [appMode, fieldSize]);

  const handleModePickerChange = selectedMode => {
    const newMode = modes.find(({ mode }) => mode === selectedMode);
    setAppMode(newMode);
  };

  const toggleStart = () => {
    setStarted(!isStarted);
  };

  const handleBtnClick = () => {
    if (appMode) {
      setFieldSize(appMode.size);
      createField();
      toggleStart();
    }
  };

  return (
    <div className={styles.app}>
      <section className={styles.playground}>
        <div className={styles.optionsContainer}>
          <ModePicker options={modes} onChange={handleModePickerChange} />
          <Button
            text={isStarted ? 'STOP' : 'START'}
            onClick={handleBtnClick}
            isDisabled={!fieldSize}
          />
        </div>
        {isStarted && <div>{field}</div>}
      </section>
      <section className={styles.logger}>
        {logs.length > 0 && isStarted && <SquaresLogger logMessages={logs} />}
      </section>
    </div>
  );
}

export default App;
