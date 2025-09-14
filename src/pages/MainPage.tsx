import MainHeroBlock from '../components/blocks/MainHeroBlock/MainHeroBlock';
import CooperationModelsBlock from '../components/blocks/CooperationModelsBlock/CooperationModelsBlock';
import ServicesBlock from '../components/blocks/ServicesBlock/ServicesBlock';
import TechStackBlock from '../components/blocks/TechStackBlock/TechStackBlock';
import ProcessBlock from '../components/blocks/ProcessBlock/ProcessBlock';
import BusinessBlock from '../components/blocks/BusinessBlock/BusinessBlock';
import AllProjectsBlock from '../components/blocks/AllProjectsBlock/AllProjectsBlock';
import WhyUsBlock from '../components/blocks/WhyUsBlock/WhyUsBlock';
import AboutCompanyBlock from '../components/blocks/AboutCompanyBlock/AboutCompanyBlock';
import TestimonialsBlock from '../components/blocks/TestimonialsBlock/TestimonialsBlock';
import OurWorksBlock from '../components/blocks/OurWorksBlock/OurWorksBlock';
import ContactFormBlock from '../components/blocks/ContactFormBlock/ContactFormBlock';
import FAQBlock from '../components/blocks/FAQBlock/FAQBlock';
import FooterBlock from '../components/blocks/FooterBlock/FooterBlock';
import PatternBanner from '../components/blocks/PatternBanner/PatternBanner';

function MainPage() {
  return (
    <div className="App">
      {/* HeroBlock - свой фон */}
      <MainHeroBlock />
      
      {/* Белый фон */}
      <div className="section-white">
        <CooperationModelsBlock />
      
       
        
      </div>
      
      {/* Фон body.svg */}
      <div className="section-body-bg">
          <ServicesBlock />
        <PatternBanner /> <TechStackBlock /><ProcessBlock />
       
             
      </div>
      <div className="section-white">
        <BusinessBlock /><OurWorksBlock />  <WhyUsBlock />
      
       
        
      </div>
      {/* Фон body.svg */}
      <div className="section-body-bg">
        <PatternBanner /><AboutCompanyBlock />
        <TestimonialsBlock />
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

export default MainPage;
