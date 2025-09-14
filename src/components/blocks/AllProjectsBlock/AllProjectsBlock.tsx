import React, { useState } from 'react';
import './AllProjectsBlock.css';
import Proj1 from '../../../assets/Projeck1.png';
import Proj2 from '../../../assets/Projeck2.png';
import Proj3 from '../../../assets/Projeck3.png';

const AllProjectsBlock: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "OLIVE MAX",
      description: "The platform allows incredible flexibility via creation, distribution, and purchasing features for the brands to stand out and create their own identity in the Metaverse.",
      category: "INTERFACE & WEBSITE",
      image: Proj1,
      type: "САЙТ МАНИКЮРА"
    },
    {
      id: 2,
      title: "SHOCK",
      description: "The platform allows incredible flexibility via creation, distribution, and purchasing features for the brands to stand out and create their own identity in the Metaverse.",
      category: "INTERFACE & WEBSITE",
      image: Proj2,
      type: "САЙТ ПАНИКЮРА"
    },
    {
      id: 3,
      title: "SWITCH UP YOUR DIGITAL CLOTHING",
      description: "The platform allows incredible flexibility via creation, distribution, and purchasing features for the brands to stand out and create their own identity in the Metaverse.",
      category: "Cooperate As Designer/Media",
      image: Proj3,
      type: "САЙТ МАНИКЮРА"
    },
    {
      id: 4,
      title: "PROJECT 4",
      description: "Дополнительный проект с описанием и характеристиками.",
      category: "WEB DEVELOPMENT",
      image: Proj1,
      type: "ВЕБ-САЙТ"
    },
    {
      id: 5,
      title: "PROJECT 5",
      description: "Еще один интересный проект с современными технологиями.",
      category: "MOBILE APP",
      image: Proj2,
      type: "МОБИЛЬНОЕ ПРИЛОЖЕНИЕ"
    },
    {
      id: 6,
      title: "PROJECT 6",
      description: "Инновационное решение для бизнеса с использованием AI.",
      category: "AI & MACHINE LEARNING",
      image: Proj3,
      type: "ИИ ПРОЕКТ"
    }
  ];

  const slidesPerView = 1; // Each slide will contain 1 card
  const totalSlides = projects.length; // 6 slides for 6 projects

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const next = (prev + 1) % totalSlides;
      console.log('Next slide:', next);
      return next;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const prevSlide = (prev - 1 + totalSlides) % totalSlides;
      console.log('Previous slide:', prevSlide);
      return prevSlide;
    });
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="all-projects-container">
      <div className="all-projects-content">
        <div className="projects-header">
          <div className="header-left">
            <h2 className="projects-title">ВСЕ ПРОЕКТЫ</h2>
          </div>
        </div>

        <div className="projects-slider">
          <button className="slider-arrow slider-arrow-left" onClick={prevSlide}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="slider-container">
            <div className="slider-track" style={{ transform: `translateX(-${currentSlide * 16.67}%)` }}>
              {projects.map((project, slideIndex) => (
                <div key={slideIndex} className="slider-slide">
                  <div className="project-card">
                    <div className="project-info">
                      <div className="project-header">
                        <h3 className="project-title">{project.title}</h3>
                        <div className="project-arrow">↗</div>
                      </div>
                      <p className="project-description">{project.description}</p>
                      <div className="project-category">{project.category}</div>
                    </div>
                    <div className="project-preview">
                      <div className="project-image-container">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-overlay">
                          <div className="project-type">{project.type}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-arrow slider-arrow-right" onClick={nextSlide}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="slider-dots">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjectsBlock;