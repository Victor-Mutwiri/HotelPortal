import {
  HelpCircle,
  Wifi,
  BedDouble,
  Utensils,
  Clock,
  AlarmClock,
  Shield,
} from "lucide-react";
import { useState } from "react";
import "../../styles/FAQSection.css"; // custom stylesheet

const faqs = [
  {
    question: "What is the WiFi password?",
    answer:
      "The WiFi network is 'Guest_WiFi'. The password is printed on the card next to the TV or ask reception.",
    icon: <Wifi className="icon" />,
  },
  {
    question: "What time is check-out?",
    answer:
      "Check-out is by 11:00 AM. Late check-out may be available upon request at the front desk.",
    icon: <Clock className="icon" />,
  },
  {
    question: "How do I request fresh towels or housekeeping?",
    answer:
      "Tap 'Housekeeping' on the Guest Portal main page or call the front desk using the phone in your room.",
    icon: <BedDouble className="icon" />,
  },
  {
    question: "Where can I find dining options?",
    answer:
      "Our restaurant menu is available on the Guest Portal. You can also order room service directly from there.",
    icon: <Utensils className="icon" />,
  },
  {
    question: "What should I do in case of an emergency?",
    answer:
      "Dial '0' from your room phone to reach reception. For fire or medical emergencies, follow the evacuation signs and contact staff immediately.",
    icon: <Shield className="icon" />,
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <header className="faq-header">
        <div className="faq-header-content">
          <div className="faq-title-section">
            <h1 className="faq-title">Frequently Asked Questions</h1>
            <HelpCircle className="icon-large" />
          </div>
          <p className="faq-subtitle">Quick answers to common questions</p>
        </div>
      </header>

      <main className="faq-main">
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item"
              onClick={() => toggleAnswer(index)}
            >
              <div className="faq-question">
                <div className="faq-question-left">
                  {faq.icon}
                  <h2 className="faq-question-text">{faq.question}</h2>
                </div>
                <svg
                  className={`faq-toggle-icon ${
                    openIndex === index ? "open" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {openIndex === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FAQSection;
