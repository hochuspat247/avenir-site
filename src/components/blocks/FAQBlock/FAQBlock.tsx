import React, { useState } from 'react';
import './FAQBlock.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQBlock: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Сколько длится старт работ и что входит в discovery?",
      answer: "Discovery фаза обычно занимает 2-4 недели и включает анализ требований, исследование рынка, создание технического задания и планирование архитектуры проекта."
    },
    {
      id: 2,
      question: "Как выбрать модель работы: t&m или fixed price?",
      answer: "Time & Materials подходит для проектов с неопределенными требованиями, Fixed Price - для четко определенных задач. Мы поможем выбрать оптимальную модель под ваш проект."
    },
    {
      id: 3,
      question: "Какие гарантии качества вы предоставляете?",
      answer: "Мы предоставляем гарантию на код 6 месяцев, проводим тестирование на всех этапах разработки и обеспечиваем соответствие современным стандартам качества."
    },
    {
      id: 4,
      question: "Какая команда будет работать над моим проектом?",
      answer: "Над каждым проектом работает команда из 3-5 специалистов: Project Manager, разработчики, дизайнер и QA-инженер. Состав команды подбирается индивидуально под проект."
    },
    {
      id: 5,
      question: "Как проходит интеграция vk mini app с crm или другими системами?",
      answer: "Интеграция происходит через API, webhooks и middleware-решения. Мы обеспечиваем безопасное подключение и синхронизацию данных между системами."
    },
    {
      id: 6,
      question: "Что по защите данных и NDA?",
      answer: "Мы подписываем NDA на этапе начала сотрудничества, используем шифрование данных, соблюдаем GDPR и другие стандарты защиты персональной информации."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="faq-container">
      <div className="faq-content">
        {/* Заголовок */}
        <h2 className="faq-title">FAQ</h2>
        
        {/* Список вопросов */}
        <div className="faq-list">
          {faqData.map((item) => (
            <div key={item.id} className="faq-item">
              <div className="faq-question-section" onClick={() => toggleItem(item.id)}>
                <span className="faq-question">
                  {item.question}
                </span>
                <span className={`faq-arrow ${openItems.includes(item.id) ? 'open' : ''}`}>
                  ↗
                </span>
              </div>
              
              {/* Раскрывающийся ответ */}
              <div className={`faq-answer ${openItems.includes(item.id) ? 'open' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQBlock;
