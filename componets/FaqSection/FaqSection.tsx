'use client'

import { useState } from 'react';
import cls from "./FaqSection.module.css";
import { FaqItem } from './components/FaqItem';

const faqData = [
    {
        question: "How fast can I start?",
        answer: "You can start interviewing candidates within 3–7 days after sharing your requirements. Once you choose a developer, we handle contracts and onboarding immediately."
    },
    {
        question: "Is your process GDPR-compliant?",
        answer: "Yes. We strictly follow EU and GDPR regulations in all aspects of our work. Every project comes with contracts and NDAs, data is stored securely, and access is granted only to authorized team members."
    },
    {
        question: "Do I pay for interviews or candidate search?",
        answer: "Screening, matching, and interviews are completely free. You only pay once the developer is officially signed to your project."
    },
    {
        question: "What happens if the developer isn't a good fit?",
        answer: "You get a 2-week free trial period with every developer. If you're not satisfied, we provide a free replacement at no extra cost."
    },
    {
        question: "How do you handle legal and compliance?",
        answer: "We work via a Ukrainian or EU-based entity. All contracts, NDAs, and invoices are included. Our process is GDPR-compliant and fully transparent."
    },
    {
        question: "What payment options are available?",
        answer: "We support EUR, USD, SEPA, and SWIFT transfers. Flexible payment terms can be discussed based on your needs."
    },
    {
        question: "Can you provide a full team, not just one developer?",
        answer: "Yes. You can start with a single developer and later expand to a dedicated team with a tech lead. Scaling up or down is always flexible."
    },
    {
        question: "Will your developers work in my time zone?",
        answer: "Yes. Our developers are English-speaking, located in CET time zone, and experienced with European workflows."
    },
    {
        question: "What types of projects do you support?",
        answer: "We've worked with FinTech, HealthTech, E-commerce, EdTech, PropTech, and SaaS companies. Our developers adapt quickly to different industries and processes."
    }
];

export const FaqSection = () => {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        setOpenItems(prev => 
            prev.includes(index) 
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <section className={cls.faqSection} id="faq">
            <h1>FAQ</h1>
            <div className={cls.faqContent}>
                {faqData.map((item, index) => (
                    <FaqItem 
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openItems.includes(index)}
                        onToggle={() => toggleItem(index)}
                    />
                ))}
            </div>
        </section>
    )
}