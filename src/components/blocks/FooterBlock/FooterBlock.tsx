import React, { useState, useEffect, useRef } from 'react';
import { FiMail, FiPhone, FiArrowRight, FiArrowUp } from 'react-icons/fi';
import './FooterBlock.css';

const FooterBlock: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Здесь можно добавить логику отправки email
      console.log('Email submitted:', email);
      alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
      setEmail('');
    }
  };

  return (
    <div className="footer" ref={footerRef}>
      <div className="tittleParent">
        <div className="tittle">
          <div className="div">Не останетесь один на один с кодом</div>
          <div className="content">
            <div className="information">
              <div className="addressHover">
                {FiMail({ className: "icon" })}
                <a className="avenir2025mailru" href="mailto:avenir.2025@mail.ru" target="_blank" rel="noreferrer">avenir.2025@mail.ru</a>
              </div>
              <div className="phoneHover">
                <div className="footerDiv">+7 989 091 7290</div>
                {FiPhone({ className: "phoneClassicIcon" })}
              </div>
            </div>
            <div className="socialMedia" />
          </div>
        </div>
        <div className="footerContent">
          <div className="menu">
            <div className="company">
              <div className="div2">О Компании</div>
              <div className="footerMenu">
                <div className="div3">Контакты</div>
                <div className="faq">FAQ</div>
                <div className="div4">О нас</div>
                <div className="vkMiniApps">VK mini apps</div>
              </div>
            </div>
            <div className="services">
              <div className="div5">Услуги</div>
              <div className="menu2">
                <div className="div3">Коммерческая разработка</div>
                <div className="faq">Сайты</div>
                <div className="div4">Мобильная разработка</div>
                <div className="vkMiniApps">VK Mini Apps</div>
              </div>
            </div>
          </div>
          <div className="newsletter">
            <div className="div5">Оставить заявку</div>
            <form className="form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="email-input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="button">
                <div className="div10">Отправить</div>
                <div className="footerIcon">
                  {FiArrowRight({ className: "vectorIcon" })}
                </div>
              </button>
            </form>
          </div>
        </div>
        <div className="downbar">
          {FiArrowUp({ className: "licenseIcon" })}
          <div className="frameParent">
            <div className="parent">
              <div className="div11">ИП Головачев ИС     ИНН 030403024370</div>
              <div className="div12">Пользовательское соглашение</div>
              <div className="div12">Политика конфидециальности</div>
            </div>
            <div className="avenir">© 2025 Avenir — Студия ИТ разработки</div>
          </div>
        </div>
        <div className={`footerLogo ${isVisible ? 'animate' : ''}`}>avenir team</div>
      </div>
    </div>
  );
};

export default FooterBlock;
