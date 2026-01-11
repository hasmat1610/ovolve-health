"use client";

import { useState } from "react"; // 1. Import useState
import { Accordion } from "react-bootstrap";
import FAQStyle from '@/assets/css/FAQ.module.scss';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "How accurate are the predictions?",
    answer: "Our predictions are based on validated algorithms and machine learning models trained on thousands of cases. The biological clock predictor has an accuracy rate of 85%+.",
  },
  {
    id: "2",
    question: "Is my data secure and private?",
    answer: "Yes, we use bank-level encryption to ensure your health data remains private and is never shared without consent.",
  },
  {
    id: "3",
    question: "What lab tests do I need?",
    answer: "We recommend a standard hormone panel including AMH, FSH, and Estradiol. Our app guides you through exactly what to request.",
  },
  {
    id: "4",
    question: "Can I use Ovolve if I'm trying to conceive?",
    answer: "Absolutely. Our tracking tools are designed to help you understand your fertile window whether you are planning now or later.",
  },
  {
    id: "5",
    question: "Can I share my results with my doctor?",
    answer: "Yes, you can export a detailed PDF report of your trends and predictions to share directly with your healthcare provider.",
  },
  {
    id: "6",
    question: "What if I don't have recent lab results?",
    answer: "You can still use the cycle tracking features. However, for accurate fertility timeline predictions, lab data is recommended.",
  },
  {
    id: "7",
    question: "Do you share my data with third parties?",
    answer: "No. Your data is yours. We do not sell your personal health information to advertisers or third parties.",
  },
  {
    id: "8",
    question: "How often should I update my data?",
    answer: "We recommend updating your lab results every 6-12 months or whenever you have a new check-up for the best accuracy.",
  },
];

const FAQSection = () => {
  // 2. Create a single state to control BOTH accordions
  // Initialize with "1" to match your desired default open item
  const [activeKey, setActiveKey] = useState<string | null>("1");

  const midPoint = Math.ceil(faqData.length / 2);
  const leftColumnData = faqData.slice(0, midPoint);
  const rightColumnData = faqData.slice(midPoint);

  // 3. Helper function to handle clicks from either side
  const handleSelect = (eventKey: string | string[] | null | undefined) => {
    // Convert string array to string if needed, or handle null/undefined
    if (Array.isArray(eventKey)) {
      setActiveKey(eventKey[0] || null);
    } else {
      setActiveKey(eventKey || null);
    }
  };

  const renderAccordionItem = (item: FAQItem) => (
    <Accordion.Item eventKey={item.id} key={item.id} className={FAQStyle['faq-item']}>
      <Accordion.Header>
        <span>{item.question}</span>
      </Accordion.Header>
      <Accordion.Body>
        {item.answer}
      </Accordion.Body>
    </Accordion.Item>
  );

  return (
    <section className={FAQStyle['faq-section']}>
      <div className="container">
        <div className={FAQStyle['faq-inner']}>
          <div className={`title-div title-center-div`}>
            <div className='dot-title'>
              <span className='dot'></span> <span className='small-title'>FAQ</span>
            </div>
            <h2>Let’s Make Fertility Simple</h2>
          </div>

          <div className={`${FAQStyle['faq-root']} faq-root`}>
            {/* Left Column */}
            <div className={FAQStyle['faq-left-root']}>
              <Accordion 
                activeKey={activeKey} 
                onSelect={handleSelect}
              >
                {leftColumnData.map(renderAccordionItem)}
              </Accordion>
            </div>

            {/* Right Column */}
            <div className={FAQStyle['faq-right-root']}>
              <Accordion 
                activeKey={activeKey} 
                onSelect={handleSelect}
              >
                {rightColumnData.map(renderAccordionItem)}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection;