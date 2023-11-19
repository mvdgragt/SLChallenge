import React, { useEffect, useState } from 'react';
import './Linjer.css';  // Import the CSS file where you define the styles

const Linjer = () => {
  const [busLines, setBusLines] = useState([]);

  useEffect(() => {
    const getBuslinjer = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/buslinjer');
        const data = await res.json();
        setBusLines(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    getBuslinjer();
  }, []);

  const handleLineNumberClick = (lineNumber) => {
    console.log('Clicked on lineNumber:', lineNumber);
  };

  return (
    <div className="lineNumber">
      <h3>Välj Buslinje för att se alla hållplatser</h3>
      {busLines.map((line, index) => (
        
          
        <span className="bus-line-number" onClick={() => handleLineNumberClick(line.lineNumber)}>{line.lineNumber}</span>
     
        
        
      ))}
    </div>
  );
};

export default Linjer;
