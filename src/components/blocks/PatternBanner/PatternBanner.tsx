import React from 'react';
import './PatternBanner.css';

const PatternBanner: React.FC = () => {
  // Создаем массив для повторения "AVENIR TEAM ✴" без пробелов
  const createPattern = (count: number) => {
    const pattern = [];
    for (let i = 0; i < count; i++) {
      pattern.push(
        <React.Fragment key={i}>
          <span className="pattern-text">AVENIR TEAM</span>
          <span className="star-symbol">✴</span>
        </React.Fragment>
      );
    }
    return pattern;
  };

  return (
    <div className="pattern-banner">
      <div className="pattern-container">
        {/* Первый ряд */}
        <div className="pattern-row pattern-row-1">
          {createPattern(20)}
        </div>
        
        {/* Второй ряд со смещением */}
        <div className="pattern-row pattern-row-2">
          {createPattern(20)}
        </div>
      </div>
    </div>
  );
};

export default PatternBanner;



