import { useState } from 'react';
import Nav from './components/Nav';
import Linjer from './components/Linjer';
import Hallplatser from './components/Hallplatser';

function App() {
  const [clickedLineNumber, setClickedLineNumber] = useState(null);
  const [amountOfStops, setAmountOfStops] = useState(null);
  const [stopPointNames, setStopPointNames] = useState(null); // Corrected line

  const handleLineNumberClick = (lineNumber, stops, stopPointNames) => {
    setClickedLineNumber(lineNumber);
    setAmountOfStops(stops);
    setStopPointNames(stopPointNames); // Corrected line
  };

  return (
    <div className="App">
      <Nav />   
      <Linjer 
          onLineNumberClick={handleLineNumberClick}
      />
      <Hallplatser 
          clickedLineNumber={clickedLineNumber}
          amountOfStops={amountOfStops}
          stopPointNames={stopPointNames}
      />
    </div>
  );
}

export default App;
