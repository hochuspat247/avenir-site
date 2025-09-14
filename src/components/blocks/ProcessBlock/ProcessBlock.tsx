import React from 'react';
import './ProcessBlock.css';
import FotoBanner from '../../../assets/foto-banner.svg';

const ProcessBlock: React.FC = () => {
  const processSteps = [
    {
      number: '01',
      title: 'КОНСУЛЬТАЦИЯ',
      description: 'Расскажите нам о целях бизнеса и ожиданиях от проекта'
    },
    {
      number: '02',
      title: 'ДЕТАЛИЗАЦИЯ ПРОЕКТА И КОМАНДЫ',
      description: 'Определяем параметры и формируем команду'
    },
    {
      number: '03',
      title: 'ЗАПУСК И ГИБКОЕ УПРАВЛЕНИЕ',
      description: 'Оперативный старт, постоянная информированность, корректировки по ходу работы'
    }
  ];

  return (
    <div className="process-container">
      {/* Баннер с изображением команды */}
      <div className="process-banner">
        <img 
          src={FotoBanner} 
          alt="Наша команда" 
          className="team-photo"
        />
      </div>
      
      {/* Контент с процессом */}
      <div className="process-content">
        <div className="process-header">
          <h2 className="process-title">НАШ ПРОЦЕСС СОТРУДНИЧЕСТВА</h2>
          <p className="process-subtitle">
            Мы сотрудничаем со всеми и с радостью выполняем разные работы вот
          </p>
        </div>
        
        <div className="process-steps">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < processSteps.length - 1 && <div className="step-divider"></div>}
            </div>
          ))}
        </div>
        
   
      </div>
    </div>
  );
};

export default ProcessBlock;
