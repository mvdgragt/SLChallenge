import React from 'react';
import './Hallplatser.css';

const Hallplatser = ({ clickedLineNumber, amountOfStops, stopPointNames }) => {
  
  const stopPointNamesLength = stopPointNames ? stopPointNames.length : null;

  return (
    <div>
      <header className="headerBar">
        {clickedLineNumber ?  <h3 className="HeaderTitle">Linje {clickedLineNumber} har {stopPointNamesLength} olika hållplatser</h3> : <h3 className="HeaderTitle">Hallplatser</h3>}
      </header>
  
      {clickedLineNumber ? 
        <div>
          
          
            {stopPointNames.map((stopPointName, index) => (
              <p key={index}>{stopPointName}</p>
            ))}
          
        </div>
        : <h1>Hållplatserna kommer här...</h1>}
    </div>
  );
};

export default Hallplatser;
