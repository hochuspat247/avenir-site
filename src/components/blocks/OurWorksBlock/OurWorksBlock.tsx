import React, { useState, useEffect } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import './OurWorksBlock.css';
import Proj1 from '../../../assets/Projeck1.png';
import Proj2 from '../../../assets/Projeck2.png';
import Proj3 from '../../../assets/Projeck3.png';

const OurWorksBlock: React.FC = () => {
  const images = [
    { src: Proj1, title: 'САЙТ МАНИКЮРА', type: 'Сайт' },
    { src: Proj2, title: 'САЙТ ПАНИКЮРА', type: 'Приложение' },
    { src: Proj3, title: 'САЙТ МАНИКЮРА', type: 'Сайт' },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  const handleSlideClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  return (
    <div className="our-works-container">
      <div className="our-works-content">
        <div className="works-header">
          <div className="header-left">
            <h2 className="works-title">НАШИ РАБОТЫ</h2>
            <p className="works-subtitle">СОВРЕМЕННО, ПРАКТИЧНО, БЫСТРО</p>
          </div>
          <div className="header-right">
            <button className="all-works-btn">
              ВСЕ РАБОТЫ
              {FiArrowUpRight({ className: "arrow-icon" })}
            </button>
          </div>
        </div>
        {/* STR8FIRE Style Carousel */}
        <div className="carousel">
          <div className="carousel-container">
            <div className="track">
              {images.map((item, i) => {
                const isActive = i === currentIndex;
                const isPrev = i === (currentIndex - 1 + images.length) % images.length;
                const isNext = i === (currentIndex + 1) % images.length;
                
                let className = 'slide';
                if (isActive) className += ' active';
                if (isPrev) className += ' prev';
                if (isNext) className += ' next';
                
                return (
                  <div 
                    key={i} 
                    className={className}
                    onClick={() => handleSlideClick(i)}
                  >
                    <img src={item.src} alt={`Проект ${i + 1}`} className="slide-image" />
                    <div className="slide-caption">
                      <div className="slide-title">{item.title}</div>
                      <div className="slide-type">{item.type}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="nav-btn prev" onClick={prev} aria-label="Предыдущая работа">‹</button>
            <button className="nav-btn next" onClick={next} aria-label="Следующая работа">›</button>
            <div className="slide-indicators">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`indicator ${i === currentIndex ? 'active' : ''}`}
                  onClick={() => handleSlideClick(i)}
                  aria-label={`Перейти к слайду ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Ползунок прогресса убран по требованию */}
      </div>
    </div>
  );
};

export default OurWorksBlock;
