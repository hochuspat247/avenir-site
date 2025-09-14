import React, { useState, useEffect, useRef } from 'react';
import './WhyUsBlock.css';

const WhyUsBlock: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ weeks: 0, specialists: 0, projects: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Анимация счетчиков
          animateCount(3, 'weeks');
          animateCount(30, 'specialists');
          animateCount(10, 'projects');
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCount = (target: number, type: 'weeks' | 'specialists' | 'projects') => {
    let current = 0;
    const increment = target / 60; // 60 кадров за 1 секунду
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCounts(prev => ({ ...prev, [type]: Math.floor(current) }));
    }, 16); // ~60 FPS
  };

  return (
    <div className="why-us-container" ref={containerRef}>
      <div className="why-us-content">
        <h2 className="why-us-title">ПОЧЕМУ МЫ?</h2>
        
        <div className="why-us-grid">
          {/* Первый ряд */}
          <div className="grid-item">
            <h3 className="item-title">Запуск продукта</h3>
            <div className="item-content">
              <span className="highlight-text">от</span>
              <span className="big-number">{isVisible ? counts.weeks : 0}</span>
              <span className="unit-text">НЕДЕЛЬ</span>
            </div>
          </div>
          
          <div className="grid-item">
            <h3 className="item-title">Полный цикл разработки</h3>
            <div className="item-content">
              <span className="tech-stack">Дизайн + Backend + Frontend + DevOps</span>
            </div>
          </div>
          
          <div className="grid-item">
            <h3 className="item-title">Интеграции</h3>
            <div className="item-content">
              <span className="integrations">API, CRM</span>
            </div>
          </div>
          
          {/* Второй ряд */}
          <div className="grid-item">
            <h3 className="item-title">Число специалистов</h3>
            <div className="item-content">
              <span className="big-number">{isVisible ? counts.specialists : 0}+</span>
            </div>
          </div>
          
          <div className="grid-item">
            <h3 className="item-title">Кол-во реализованных проектов</h3>
            <div className="item-content">
              <span className="big-number">{isVisible ? counts.projects : 0}+</span>
            </div>
          </div>
          
          <div className="grid-item">
            <h3 className="item-title">Прозрачность процессов</h3>
            <div className="item-content">
              <ul className="transparency-list">
                <li>подробные расчеты</li>
                <li>отслеживание задач</li>
                <li>показ демо каждые 2 недели</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsBlock;


