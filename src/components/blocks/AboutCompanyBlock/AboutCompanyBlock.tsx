import React from 'react';
import './AboutCompanyBlock.css';
import Logo from '../../../assets/Logo2.svg';

const AboutCompanyBlock: React.FC = () => {
  return (
    <div className="about-company-container">
      <div className="about-company-content">
        <div className="about-company-header">
          <div className="header-left">
            <h2 className="about-company-title">О КОМПАНИИ</h2>
          </div>
        </div>
        
        <div className="about-company-main">
          {/* Левая часть - фиолетовая карточка с логотипом */}
          <div className="logo-card">
            <img 
              src={Logo}
              alt="Avenir Team Logo" 
              className="logo-image"
            />
          </div>
          
          {/* Правая часть - описание компании */}
          <div className="company-description">
            <h3 className="company-name">Avenir Team</h3>
            
            <p className="company-text">
              Avenir – команда разработчиков, дизайнеров и аналитиков, создающих цифровые продукты{' '}
              <strong>нового стандарта качества</strong>.
            </p>
            
            <p className="company-text">
              За 4+ года мы реализовали проекты для малого и среднего бизнеса, e-commerce и технологичных стартапов.
            </p>
            
            <p className="company-text">
              В нашем штате – 30+ специалистов, которые берут на себя полный цикл разработки: от бизнес-анализа и проектирования до внедрения и поддержки.
            </p>
            
            <p className="company-text">
              Мы строим работу по <strong>прозрачным Agile-процессам</strong>, обеспечиваем быструю обратную связь и предсказуемые сроки.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompanyBlock;



