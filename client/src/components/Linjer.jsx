import React, { useEffect, useState } from 'react';
import './Linjer.css';

const Linjer = ({ onLineNumberClick }) => {
  const [busLines, setBusLines] = useState([]);

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

  return (
    <div className="lineNumber">
      <h3>Välj Buslinje</h3>
      {busLines.map((line, index) => (
        <span
          key={index}
          className="bus-line-number"
          onClick={() => onLineNumberClick(line.lineNumber, line.stops, line.stopPointNames)}
        >
          {line.lineNumber}
        </span>
      ))}
    </div>
  );
};

export default Linjer;