import HeroBlock from '../components/blocks/HeroBlock/HeroBlock';
import WhyUsBlock from '../components/blocks/WhyUsBlock/WhyUsBlock';
import OurWorksBlock from '../components/blocks/OurWorksBlock/OurWorksBlock';
import TestimonialsBlock from '../components/blocks/TestimonialsBlock/TestimonialsBlock';
import PatternBanner from '../components/blocks/PatternBanner/PatternBanner';
import AboutCompanyBlock from '../components/blocks/AboutCompanyBlock/AboutCompanyBlock';
import AllProjectsBlock from '../components/blocks/AllProjectsBlock/AllProjectsBlock';
import ContactFormBlock from '../components/blocks/ContactFormBlock/ContactFormBlock';
import FAQBlock from '../components/blocks/FAQBlock/FAQBlock';
import FooterBlock from '../components/blocks/FooterBlock/FooterBlock';

function HomePage() {
  return (
    <div className="App">
      {/* HeroBlock - свой фон */}
      <HeroBlock />
      
      {/* Белый фон */}
      <div className="section-white">
        <WhyUsBlock />
        <OurWorksBlock />
      </div>
      
      {/* Фон body.svg */}
      <div className="section-body-bg">
        <TestimonialsBlock />
        <PatternBanner />
        <AboutCompanyBlock />
        <AllProjectsBlock />
      </div>
      
      {/* Белый фон */}
      <div className="section-white">
        <PatternBanner />
        <ContactFormBlock />
        <PatternBanner />
      </div>
      
      {/* Цветной фон для FAQBlock */}
      <div className="faq-background-container">
        <FAQBlock />
      </div>
      
      {/* FooterBlock - свой фон */}
      <FooterBlock />
    </div>
  );
}

export default HomePage;
