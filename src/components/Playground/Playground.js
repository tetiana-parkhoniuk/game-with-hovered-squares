import React, { useState } from 'react';
import ModePicker from 'components/ModePicker';

export default function Playground() {
  const modes = useSelector(presetsSelectors.getModes);

  const [appMode, setAppMode] = useState();
  const [fieldSize, setFieldSise] = useState();

  return <ModePicker />;
}
