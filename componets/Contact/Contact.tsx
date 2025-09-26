"use client";

import { useState } from 'react';
import cls from './Contact.module.css';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        setIsSubmitting(true);
        console.log('Form Data:', formData);
    };

    return (
        <section className={cls.contactSection} id="contact">
            <h1>Contact <span>Us</span></h1>
            
            <div className={cls.formContainer}>
                <div className={cls.formHeader}>
                    <p>Leave your request and our manager will contact you ASAP</p>
                </div>
                
                <div className={cls.contactForm}>
                    <div className={cls.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={cls.formInput}
                        />
                    </div>

                    <div className={cls.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={cls.formInput}
                        />
                    </div>

                    <div className={cls.formGroup}>
                        <div className={cls.labelWithCount}>
                            <label htmlFor="message">Message</label>
                            <div className={cls.charCount}>
                                {formData.message.length} / 500
                            </div>
                        </div>
                        <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="I'm looking for developers for a..."
                                maxLength={500}
                                className={`${cls.formInput} ${cls.formTextarea}`}
                            />
                    </div>

                    <button 
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className={cls.submitBtn}
                    >
                        {isSubmitting ? 'Sending...' : 'Submit'}
                    </button>
                </div>
            </div>
        </section>
    );
};