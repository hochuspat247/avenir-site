import React, { useState, useEffect } from 'react';
import './TestimonialsBlock.css';

const TestimonialsBlock: React.FC = () => {
  const testimonials = [
    {
      text: "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
      author: "PETER VISSER",
      company: "VISSER CONSULTING",
      avatar: "👨‍💼"
    },
    {
      text: "Outstanding work! The team delivered exactly what we needed and exceeded our expectations. Highly recommend their services for any web development project.",
      author: "MARIA GARCIA",
      company: "TECH SOLUTIONS",
      avatar: "👩‍💼"
    },
    {
      text: "Professional, reliable, and creative. They transformed our vision into a beautiful, functional website that our customers love.",
      author: "JOHN SMITH",
      company: "CREATIVE AGENCY",
      avatar: "👨‍🎨"
    },
    {
      text: "Fast delivery, excellent communication, and top-quality results. We couldn't be happier with the final product.",
      author: "ANNA JOHNSON",
      company: "STARTUP INC",
      avatar: "👩‍🚀"
    },
    {
      text: "The best development team we've worked with. They understood our requirements perfectly and delivered beyond our expectations.",
      author: "DAVID BROWN",
      company: "ENTERPRISE CORP",
      avatar: "👨‍💻"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="testimonials-container">
      <div className="testimonials-content">
        <div className="testimonials-header">
          <div className="header-left">
            <p className="testimonials-subtitle">ОТЗЫВЫ</p>
            <h2 className="testimonials-title">КЛИЕНТОВ</h2>
          </div>
        </div>
        
        {/* Avatar carousel */}
        <div className="avatars-carousel">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`avatar-item ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            >
              <div className="avatar-circle">
                <div className="avatar-placeholder">{testimonial.avatar}</div>
              </div>
              {index === currentIndex && (
                <div className="avatar-name-tag">
                  {testimonial.author}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Testimonials carousel */}
        <div className="testimonials-carousel">
          <div 
            className="testimonials-track" 
            style={{ 
              transform: `translateX(calc(50% - 150px - ${currentIndex * 320}px))`,
              '--current-index': currentIndex
            } as React.CSSProperties}
          >
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + testimonials.length) % testimonials.length;
              const isNext = index === (currentIndex + 1) % testimonials.length;
              
              let className = 'testimonial-slide';
              if (isActive) className += ' active';
              if (isPrev) className += ' prev';
              if (isNext) className += ' next';
              
              return (
                <div key={index} className={className}>
                  <div className="testimonial-card">
                    <div className="testimonial-brackets">
                      <div className="bracket bracket-top-left"></div>
                      <div className="bracket bracket-bottom-right"></div>
                    </div>
                    <p className="testimonial-text">
                      {testimonial.text}
                    </p>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <div className="avatar-placeholder">{testimonial.avatar}</div>
                      </div>
                      <div className="author-details">
                        <h4 className="author-name">{testimonial.author}</h4>
                        <p className="author-company">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsBlock;



