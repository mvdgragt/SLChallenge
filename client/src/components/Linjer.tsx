import React, { useEffect, useState } from 'react';
import './Linjer.css';

interface LinjerProps {
  onLineNumberClick: (lineNumber: string, stops: number, stopPointNames: string[]) => void;
}

interface BusLine {
  lineNumber: string;
  stops: number;
  stopPointNames: string[];
}

const Linjer: React.FC<LinjerProps> = ({ onLineNumberClick }) => {
  const [busLines, setBusLines] = useState<BusLine[]>([]);
  const [selectedLine, setSelectedLine] = useState<string | null>(null);

  useEffect(() => {
    const getBuslinjer = async () => {
      try {
        const res = await fetch('https://localhost:5000/api');
        const data = await res.json();
        setBusLines(data);
        console.log(data);
      } catch (error: any) {
        console.error(error.message);
      }
    };
    getBuslinjer();
  }, []);

  const handleLineClick = (lineNumber: string, stops: number, stopPointNames: string[]) => {
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