"use client";
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { SuccessStoriesItem } from './components/SuccessStoriesItem';
import cls from './SuccessStories.module.css';

export const SuccessStories = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set([0]));
    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    
    const stories = [
        {
            id: 1,
            title: "Online Fashion Shop",
            country: "France",
            flag: "🇫🇷",
            points: [
                "Expanded team with 3 senior developers and 1 tech lead",
                "Reduced proxy costs by 67%",
                "Created custom monitoring dashboards",
                "Improved crawl speed by +15%"
            ],
            outcome: "Faster data processing and significant cost savings."
        },
        {
            id: 2,
            title: "FinTech Startup",
            country: "Netherlands",
            flag: "🇳🇱",
            points: [
                "Hired 5 full-stack developers within 20 days",
                "Built mobile banking app from scratch",
                "Integrated secure payment gateway (PSD2 ready)",
                "Achieved 99.9% uptime SLA within first 3 months"
            ],
            outcome: "Launched MVP 2 months earlier than planned, attracted first 20,000 users."
        },
        {
            id: 3,
            title: "HealthTech Platform",
            country: "Germany",
            flag: "🇩🇪",
            points: [
                "Added 2 backend engineers specializing in healthcare",
                "Developed video consultation features",
                "Integrated with major EHR systems",
                "Ensured full HIPAA compliance"
            ],
            outcome: "Platform scaled to serve 50,000+ patients across 3 countries."
        },
        {
            id: 4,
            title: "E-commerce Platform",
            country: "Poland",
            flag: "🇵🇱",
            points: [
                "Added 3 frontend developers",
                "Implemented microservices architecture",
                "Optimized database performance by 40%",
                "Built real-time analytics dashboard"
            ],
            outcome: "Increased platform performance and user satisfaction significantly."
        },
        {
            id: 5,
            title: "EdTech Solution",
            country: "Spain",
            flag: "🇪🇸",
            points: [
                "Hired 4 full-stack developers",
                "Created interactive learning modules",
                "Integrated AI-powered recommendations",
                "Achieved GDPR compliance"
            ],
            outcome: "Platform now serves 100,000+ students across Europe."
        },
        {
            id: 6,
            title: "IoT Manufacturing",
            country: "Italy",
            flag: "🇮🇹",
            points: [
                "Added 2 IoT specialists",
                "Developed real-time monitoring system",
                "Integrated predictive maintenance",
                "Reduced downtime by 30%"
            ],
            outcome: "Improved operational efficiency and cost reduction."
        }
    ];

    const checkVisibility = useCallback(() => {
        if (!containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const newVisibleItems = new Set<number>();

        itemRefs.current.forEach((item, index) => {
            if (!item) return;

            const itemRect = item.getBoundingClientRect();
            
            const isFullyVisible = 
                itemRect.left >= containerRect.left && 
                itemRect.right <= containerRect.right &&
                itemRect.top >= containerRect.top && 
                itemRect.bottom <= containerRect.bottom;

            if (isFullyVisible) {
                newVisibleItems.add(index);
            }
        });

        setVisibleItems(newVisibleItems);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        checkVisibility();

        container.addEventListener('scroll', checkVisibility);
        
        window.addEventListener('resize', checkVisibility);

        return () => {
            container.removeEventListener('scroll', checkVisibility);
            window.removeEventListener('resize', checkVisibility);
        };
    }, [checkVisibility]);

    const handleStoryClick = (index: number) => {
        setActiveIndex(index);
        if (containerRef.current) {
            const itemWidth = 500;
            const scrollLeft = index * itemWidth;
            containerRef.current.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        }
    };

    const setItemRef = (index: number) => (el: HTMLDivElement | null) => {
        itemRefs.current[index] = el;
    };

    return (
        <section className={cls.successStories}>
            <h2 className={cls.title}><span>Success</span> Stories</h2>
            <div className={cls.items} ref={containerRef}>
                {stories.map((story, index) => (
                    <SuccessStoriesItem 
                        key={story.id} 
                        {...story} 
                        isActive={visibleItems.has(index)}
                        onClick={() => handleStoryClick(index)}
                        isFirst={index === 0}
                        isLast={index === stories.length - 1}
                        ref={setItemRef(index)}
                    />
                ))}
            </div>
        </section>
    );
};