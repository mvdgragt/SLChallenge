import React, { useState } from 'react';
import Nav from './components/Nav';
import Linjer from './components/Linjer';
import Hallplatser from './components/Hallplatser';

interface AppProps {}

function App(props: AppProps) {
  const [clickedLineNumber, setClickedLineNumber] = useState<string | null>(null);
  const [stopPointNames, setStopPointNames] = useState<string[] | null>(null);

  const handleLineNumberClick = (lineNumber: string, stops: number, stopPointNames: string[]) => {
    setClickedLineNumber(lineNumber);
    setStopPointNames(stopPointNames);
  };

  return (
    <div className="App">
      <Nav />
      <Linjer onLineNumberClick={handleLineNumberClick} />
      <Hallplatser
  clickedLineNumber={clickedLineNumber}
  stopPointNames={stopPointNames}
/>
    </div>
  );
}

export default App;
