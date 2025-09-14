import React from 'react';
import './HeroBlock.css';
import Logo from '../../../assets/Logo.svg';
import VkMiniImg from '../../../assets/vkmini.svg';
import Navigation from '../../Navigation/Navigation';

const HeroBlock: React.FC = () => {
  return (
    <div className="hero-container">
      {/* SVG Background Lines */}
      <svg className="background-lines" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        
        {/* Верхняя изогнутая линия - от левого верхнего угла к правому центру */}
        <path 
          d="M 0 50 Q 300 100 600 80 T 1200 120" 
          stroke="url(#lineGradient1)" 
          strokeWidth="1" 
          fill="none"
          opacity="0.8"
        />
        
        {/* Нижняя волнистая линия */}
        <path 
          d="M 0 600 Q 200 550 400 600 T 800 580 T 1200 620" 
          stroke="url(#lineGradient2)" 
          strokeWidth="1" 
          fill="none"
          opacity="0.6"
        />
      </svg>

      {/* Navigation */}
      <Navigation
        links={[
          { href: "#vk-mini-apps", text: "VK mini apps", isVk: true },
          { href: "#about", text: "О компании" },
          { href: "#faq", text: "FAQ" },
          { href: "#contacts", text: "Контакты" }
        ]}
        showPhoneButton={true}
        showCtaButton={true}
        ctaText="Начните прямо сейчас"
      />

      {/* Main Content */}
      <div className="hero-content">
        <div className="content-left">
          <h1 className="hero-title">
            РАЗРАБАТЫВАЕМ VK MINI APPS ЗА <span className="highlight-weeks">3 НЕДЕЛИ</span>
          </h1>
          <p className="hero-description">
            Полный цикл работ — от идеи и дизайна до интеграции в бизнес-процессы. 
            Быстрый просчёт, оперативная работа, прозрачные процессы на каждом этапе.
          </p>
          <button className="request-btn">
            <span className="request-text">Оставить заявку</span>
            <span className="request-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </span>
          </button>
        </div>
        
        <div className="content-right">
          <div className="vk-mini-container">
            <img 
              src={VkMiniImg} 
              alt="VK Mini Apps" 
              className="vk-mini-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
