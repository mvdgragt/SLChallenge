import React, { useEffect, useState } from 'react';
import './Linjer.css';

const Linjer = ({ onLineNumberClick }) => {
  const [busLines, setBusLines] = useState([]);
  const [selectedLine, setSelectedLine] = useState(null);

  useEffect(() => {
    const getBuslinjer = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/buslinjer');
        const data = await res.json();
        setBusLines(data);
        console.log(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    getBuslinjer();
  }, []);

  const handleLineClick = (lineNumber, stops, stopPointNames) => {
    onLineNumberClick(lineNumber, stops, stopPointNames);
    setSelectedLine(lineNumber);
  };

  return (
    <div className="lineNumber">
      {busLines.length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h3>Välj Buslinje för att se alla hållplatser</h3>
          {busLines.map((line, index) => (
            <span
              key={index}
              className={`bus-line-number ${selectedLine === line.lineNumber ? 'selected' : ''}`}
              onClick={() => handleLineClick(line.lineNumber, line.stops, line.stopPointNames)}
            >
              {line.lineNumber}
            </span>
          ))}
        </>
      )}
    </div>
  );
};

export default Linjer;
