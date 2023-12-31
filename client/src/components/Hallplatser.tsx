import React from 'react';
import './Hallplatser.css';

interface HallplatserProps {
  clickedLineNumber: string | null;
  stopPointNames: string[] | null;
}

const Hallplatser: React.FC<HallplatserProps> = ({ clickedLineNumber, stopPointNames }) => {
  const stopPointNamesLength = stopPointNames ? stopPointNames.length : 0;

  return (
    <div>
      <header className="headerBar">
        {clickedLineNumber && (
          <h3 className="HeaderTitle">
            Linje {clickedLineNumber} har {stopPointNamesLength} olika hållplatser
          </h3>
        )}
      </header>

      {clickedLineNumber ? (
        <div className="columns-container">
          {stopPointNames?.map((stopPointName, index) => (
            <div key={index} className="column">
              <div className="vertical-line"></div>
              <p>{stopPointName}</p>
            </div>
          ))}
        </div>
      ) : (
        <img className="loadingImage" src="./bus.gif" alt="Loading..." />
      )}
    </div>
  );
};

export default Hallplatser;