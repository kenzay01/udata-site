'use client';

import { useState } from 'react';
import cls from './PricingContainer.module.css';
import Link from 'next/link';

export const PricingContainer = () => {
    const [selectedProfessions, setSelectedProfessions] = useState<string[]>([]);

    const professions = [
        { name: 'Backend Developer', hourlyRate: 20 },
        { name: 'Frontend Developer', hourlyRate: 20 }, 
        { name: 'Full-stack Developer', hourlyRate: 24 },
        { name: 'Mobile Developer', hourlyRate: 22 },
        { name: 'Data Scientist', hourlyRate: 25 }, 
    ];

    const handleProfessionToggle = (professionName: string) => {
        setSelectedProfessions(prev => {
            if (prev.includes(professionName)) {
                return prev.filter(p => p !== professionName);
            } else {
                return [...prev, professionName];
            }
        });
    };

    const calculateHourlyRate = () => {
        return selectedProfessions.reduce((total, professionName) => {
            const profession = professions.find(p => p.name === professionName);
            return total + (profession?.hourlyRate || 0);
        }, 0);
    };

    const calculateMonthlyRate = () => {
        return calculateHourlyRate() * 173;
    };

    return (
        <section className={cls.pricingContainer} id="pricing">
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
                                key={profession.name} 
                                className={`${cls.checkboxItem} ${selectedProfessions.includes(profession.name) ? cls.selected : ''}`}
                            >
                                <span className={cls.checkboxText}>
                                    {profession.name}
                                    <span style={{ fontSize: '0.8em', color: '#666', marginLeft: '8px' }}>
                                        (${profession.hourlyRate}/hr)
                                    </span>
                                </span>
                                <input
                                    type="checkbox"
                                    checked={selectedProfessions.includes(profession.name)}
                                    onChange={() => handleProfessionToggle(profession.name)}
                                />
                            </label>
                        ))}
                    </div>
                </div>

                <div className={cls.choiceSection}>
                    <span className={cls.choiceLabel}>Choice:</span>
                    <div className={cls.selectedItems}>
                        {selectedProfessions.map((professionName) => {
                            const profession = professions.find(p => p.name === professionName);
                            return (
                                <span key={professionName} className={cls.selectedItem}>
                                    {professionName} (${profession?.hourlyRate}/hr)
                                </span>
                            );
                        })}
                    </div>
                </div>
                
                <div className={cls.pricingSection}>
                    <div className={cls.pricingInfo}>
                        <h3>Approximate cost of your project team:</h3>
                        <div className={cls.pricingValues}>
                            <span className={cls.price}>
                                ${calculateHourlyRate()} / Hr
                            </span> 
                            <span className={cls.price}>
                                ${calculateMonthlyRate().toLocaleString()} / Month
                            </span> 
                        </div>
                    </div>
                    <div className={cls.requestCallSection}>
                        <Link href="/#contact" className={cls.requestCall}>Member Team</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};