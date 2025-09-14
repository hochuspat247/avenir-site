import React from 'react';
import './BodyContent.css';

const BodyContent: React.FC = () => {
  return (
    <div className="body-content">
      <div className="body-background">
        <div className="body-overlay">
          <div className="body-content-inner">
            <h2 className="body-title">Добро пожаловать в Avenir Team</h2>
            <p className="body-description">
              Мы специализируемся на разработке VK Mini Apps и создании современных цифровых решений. 
              Наша команда готова воплотить ваши идеи в жизнь.
            </p>
            <div className="body-actions">
              <button className="body-cta-btn">
                Начать проект
              </button>
              <button className="body-secondary-btn">
                Узнать больше
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyContent;




