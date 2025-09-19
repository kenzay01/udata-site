'use client';

import { useState } from 'react';
import cls from './PricingContainer.module.css';

export const PricingContainer = () => {
    const [selectedProfessions, setSelectedProfessions] = useState<string[]>([]);

    const professions = [
        'Full-stack Developer',
        'Frontend Developer', 
        'Backend Developer',
        'Mobile Developer',
        'DevOps Engineer',
        'UI/UX Designer',
        'QA Engineer',
        'Data Scientist'
    ];

    const handleProfessionToggle = (profession: string) => {
        setSelectedProfessions(prev => {
            if (prev.includes(profession)) {
                return prev.filter(p => p !== profession);
            } else {
                return [...prev, profession];
            }
        });
    };

    return (
        <section className={cls.pricingContainer}>
            <h1>Pricing</h1>
            <p>
                Check out the approximate rate of needed professionals <br /> 
                that can be available in mere weeks.
            </p>
            
            <div className={cls.pricingPlans}>
                <div className={cls.hiringSection}>
                    <div className={cls.sectionHeader}>
                        <div className={cls.stepNumber}>01</div>
                        <h2>I want to hire:</h2>
                    </div>
                    
                    <div className={cls.checkboxGrid}>
                        {professions.map((profession) => (
                            <label 
                                key={profession} 
                                className={`${cls.checkboxItem} ${selectedProfessions.includes(profession) ? cls.selected : ''}`}
                            >
                                <span className={cls.checkboxText}>{profession}</span>
                                <input
                                    type="checkbox"
                                    checked={selectedProfessions.includes(profession)}
                                    onChange={() => handleProfessionToggle(profession)}
                                />
                            </label>
                        ))}
                    </div>
                </div>

                <div className={cls.choiceSection}>
                    <span className={cls.choiceLabel}>Choice:</span>
                    <div className={cls.selectedItems}>
                        {selectedProfessions.map((profession) => (
                            <span key={profession} className={cls.selectedItem}>
                                {profession}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};