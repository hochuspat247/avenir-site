import React, { useEffect, useState, useRef } from 'react';
import './ServicesBlock.css';

const ServicesBlock: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const services = [
    { text: 'Разработка ПО на заказ', type: 'purple' },
    { text: 'Веб-разработка', type: 'white' },
    { text: 'UX/UI дизайн', type: 'purple' },
    { text: 'Поддержка продукта/ПО', type: 'purple' },
    { text: 'Тестирование и QA', type: 'white' },
    { text: 'Модернизация устаревших систем', type: 'outline' },
    { text: 'Миграция в облако', type: 'outline' },
    { text: 'Разработка мобильных приложений', type: 'purple' }
  ];

  return (
    <div className="services-container" ref={containerRef}>
      <div className="services-content">
        <div className="services-header">
          <h2 className="services-title">ОТ ИДЕИ ДО ПОДДЕРЖКИ ПРОДУКТА</h2>
          <p className="services-subtitle">Avenir заботится обо всём</p>
        </div>
        
        <div className="services-tags-container">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-tag service-tag-${service.type} ${isVisible ? 'visible' : ''}`}
              style={{
                animationDelay: `${index * 0.15}s`
              }}
            >
              {service.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesBlock;