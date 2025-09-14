import React from 'react';
import './ContactFormBlock.css';
import TeamPhoto from '../../../assets/foto.png';

const ContactFormBlock: React.FC = () => {
  return (
    <div className="contact-form-container">
      <div className="contact-form-content">
        {/* Левая часть - форма */}
        <div className="form-section">
          {/* Кнопки категорий */}
          <div className="category-buttons">
            <button className="category-btn">Разработка</button>
            <button className="category-btn">Дизайн</button>
            <button className="category-btn">Публикация</button>
            <button className="category-btn">Аналитика</button>
            <button className="category-btn">Маркетинг</button>
          </div>
          
          {/* Заголовок формы */}
          <div className="form-header">
            <h3 className="form-subtitle">готовы сотрудничать?</h3>
            <h2 className="form-title">ОСТАВИТЬ ЗАЯВКУ НА РАЗРАБОТКУ</h2>
          </div>
          
          {/* Форма */}
          <form className="contact-form">
            <div className="form-field">
              <label htmlFor="fullName">ФИО*</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Иванов Иван Иванович"
                required
              />
            </div>
            
            <div className="form-field">
              <label htmlFor="phone">Телефон *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+7("
                required
              />
            </div>
            
            <div className="form-field">
              <label htmlFor="email">Почта *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@email.com"
                required
              />
            </div>
            
            <div className="form-field">
              <label htmlFor="projectIdea">Идея проекта</label>
              <textarea
                id="projectIdea"
                name="projectIdea"
                placeholder="Опишите вашу идею проекта..."
                rows={4}
              />
            </div>
            
            {/* Кнопка отправки */}
            <button type="submit" className="submit-btn">
              <span>Отправить</span>
              <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
            
            {/* Согласие на обработку данных */}
            <p className="privacy-notice">
              Нажав на кнопку, вы даете согласие на обработку{' '}
              <u>персональных данных</u>
            </p>
          </form>
        </div>
        
        {/* Правая часть - фотография команды */}
        <div className="team-photo-section">
          <div className="team-photo">
            <img src={TeamPhoto} alt="Команда" className="team-photo-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormBlock;



