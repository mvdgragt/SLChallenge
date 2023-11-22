import React from 'react';
import './Hallplatser.css';

const Hallplatser = ({ clickedLineNumber, stopPointNames }) => {
  const stopPointNamesLength = stopPointNames ? stopPointNames.length : 0;

  return (
    <div>
      <header className="headerBar">
        {clickedLineNumber ? (
          <h3 className="HeaderTitle">Linje {clickedLineNumber} har {stopPointNamesLength} olika hållplatser</h3>
        ) : (
          <h3 className="HeaderTitle">Hallplatser</h3>
        )}
      </header>

      {clickedLineNumber ? (
        <div className="columns-container">
          {stopPointNames.map((stopPointName, index) => (
            <div key={index} className="column">
              <div className="vertical-line"></div>
              <p>{stopPointName}</p>
            </div>
          ))}
        </div>
      ) : (
        <h1>Hållplatserna kommer här...</h1>
      )}
    </div>
  );
};

export default Hallplatser;
