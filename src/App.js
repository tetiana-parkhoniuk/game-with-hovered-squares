import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { presetsOperations } from 'redux/presets';
import ModePicker from 'components/ModePicker/ModePicker';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(presetsOperations.fetchPresets());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <ModePicker />
      </header>
    </div>
  );
}

export default App;
