import React from 'react';
import './Hallplatser.css';

const Hallplatser = ({ clickedLineNumber, amountOfStops  }) => {

  return (
    <div>
      <header className="headerBar">
      {clickedLineNumber ?  <h3 className="HeaderTitle">Linje {clickedLineNumber} har {amountOfStops} hållplatser</h3> : <h3 className="HeaderTitle">Hallplatser</h3>}
      </header>
  
      {clickedLineNumber ? 
        <p>Clicked lineNumber: {clickedLineNumber}</p>
       :     <h1>Hållplatserna kommer här...</h1>}
    </div>
  );
};

export default Hallplatser;
