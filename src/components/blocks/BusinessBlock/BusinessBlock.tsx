import React from 'react';
import './BusinessBlock.css';

const BusinessBlock: React.FC = () => {
  return (
    <section className="business-block">
      <div className="business-container">
        <div className="business-content">
          <h2 className="business-title">
            <span className="business-title-line1">ПРОКАЧАЙ СВОЙ</span>
            <span className="business-title-line2">
              <span className="business-word">БИЗНЕС</span>
              <button className="business-button">
                Запустить проект
                <span className="button-arrow">→</span>
              </button>
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default BusinessBlock;
