import React from 'react';
import './CooperationModelsBlock.css';
import Logo from '../../../assets/Logo.svg';

const CooperationModelsBlock: React.FC = () => {
  return (
    <div className="cooperation-models-container">
      <div className="cooperation-models-content">
        <h2 className="cooperation-models-title">МОДЕЛИ СОТРУДНИЧЕСТВА</h2>
        
        <div className="models-cards">
          {/* Первая карточка - Выделенная команда */}
          <div className="model-card model-card-purple">
            <h3 className="card-title">ВЫДЕЛЕННАЯ КОМАНДА</h3>
            <p className="card-description">
              Специализированная команда наших ИТ-экспертов, работающая над вашим проектом под вашим руководством
            </p>
          </div>

          {/* Вторая карточка - Оставить заявку (в середине) */}
          <div className="model-card model-card-white">
            <div className="card-logo">
              <img src={Logo} alt="Avenir Team" className="card-logo-image" />
            </div>
            <div className="card-action">
              <span className="action-text">ОСТАВИТЬ ЗАЯВКУ</span>
              <svg className="action-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/> {/* Right arrow */}
              </svg>
            </div>
          </div>

          {/* Третья карточка - Аутсорсинг разработки */}
          <div className="model-card model-card-purple">
            <h3 className="card-title">АУТСОРСИНГ РАЗРАБОТКИ ПО</h3>
            <p className="card-description">
              Полный цикл разработки вашего ПО на стороне Avenir
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CooperationModelsBlock;