import React from 'react';
import Logo from '../../assets/Logo.svg';
import './Navigation.css';

interface NavigationProps {
  links: Array<{
    href: string;
    text: string;
    isVk?: boolean;
  }>;
  showPhoneButton?: boolean;
  showCtaButton?: boolean;
  ctaText?: string;
}

const Navigation: React.FC<NavigationProps> = ({
  links,
  showPhoneButton = true,
  showCtaButton = true,
  ctaText = "Начните прямо сейчас"
}) => {
  return (
    <nav className="navigation">
      <div className="nav-content">
        <div className="nav-left">
          <div className="logo">
            <img
              src={Logo}
              alt="Avenir Team Logo"
              className="logo-image"
            />
          </div>
        </div>
        
        <div className="nav-links">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`nav-link ${link.isVk ? 'vk-link' : ''}`}
            >
              {link.text}
            </a>
          ))}
        </div>
        
        <div className="nav-right">
          {showPhoneButton && (
            <button className="phone-btn-nav">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.271 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06679 2.16708 8.43376 2.48353C8.80073 2.79999 9.04207 3.23945 9.11999 3.72C9.28562 4.68007 9.56635 5.61273 9.95999 6.5C10.1133 6.88656 10.1441 7.31564 10.0485 7.72468C9.95291 8.13372 9.73529 8.50344 9.41999 8.79L8.08999 10.12C9.51355 12.4045 11.5955 14.4864 13.88 15.91L15.21 14.58C15.4966 14.2647 15.8663 14.0471 16.2753 13.9515C16.6844 13.8559 17.1134 13.8867 17.5 14.04C18.3873 14.4337 19.3199 14.7144 20.28 14.88C20.7658 14.9585 21.2094 15.2032 21.5265 15.5735C21.8437 15.9438 22.0122 16.4161 22 16.92Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
          
          {showCtaButton && (
            <button className="cta-btn-nav">
              {ctaText}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
