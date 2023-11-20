import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';
import Linjer from './components/Linjer';
import Hallplatser from './components/Hallplatser';



function App() {
  
  const [clickedLineNumber, setClickedLineNumber] = useState(null);
  const [amountOfStops, setAmountOfStops] = useState(null);

  const handleLineNumberClick = (lineNumber, stops) => {
    setClickedLineNumber(lineNumber);
    setAmountOfStops(stops);
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
          
      />
    </div>
  );
}

export default App;
