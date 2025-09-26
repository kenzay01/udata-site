"use client";
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { SuccessStoriesItem } from './components/SuccessStoriesItem/SuccessStoriesItem';
import { StoryModal } from './components/StoryModal/StoryModal';
import cls from './SuccessStories.module.css';
import { RedDogFish, Livetrend, RetailShake, SpaceShelf, Adeo, PerspektPerson, AdeoModal } from "@/utils/Logos";
import { ReactIcon, Python, Energy, Postgres, AWS, Broom, Shell, Cloud, Golang, Lizer } from '@/utils/TechStack';
import { UAflag, DEflag, FRflag, PLflag  } from '@/utils/Flags';

export const SuccessStories = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set([0]));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStory, setSelectedStory] = useState<any>(null);


    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    
    const stories = [
        {
            id: 1,
            title: "From Scratch to Market-Ready: eSIM Deployment",
            country: "Telecom",
            flag: <UAflag />,
            description: "We developed and launched a full-scale eSIM service from concept to production, enabling users to connect mobile services without physical SIM cards.",
            fullDescription: <>We developed and launched a full-scale eSIM service from concept to production, enabling users to connect mobile services without physical SIM cards. <br /><br /> This solution allowed the client to scale their business, optimize large-scale data and user management, and combine a seamless customer experience with high efficiency and stability for the company</>,
            metrics: ["$23-25", "On Going", "$16 000 / Month"],
            cardColorBack: "#D00000",
            logo: <RedDogFish />,
            points: [
                <>Launched market-ready product in <strong>3</strong> months</>,
                <>Handles <strong> 1M+ </strong> users simultaneously</>,
                <>Supports eSIM in <strong>190+</strong> countries</>
            ],
            teamMembers: [
                <><strong>Mobile Developer</strong> (ReactNative)</>,
                <><strong>Frontend Developer</strong> (NextJS)</>,
                <><strong>Backend Developer</strong> (Python-FastAPI)</>,
                <><strong>Full-Stack Developer</strong></>
            ],
            techStack: [
                <Python />, <Energy />, <ReactIcon />, <Postgres />, <AWS />
            ]
        },
        {
            id: 2,
            title: "A Leading Fashion Retailer Gains Speed with Automation",
            country: "Retail",
            flag: <FRflag />,
            description: "We implemented an automated system for data collection and processing, providing the brand with real-time insights.",
            fullDescription: <>We implemented an automated system for data collection and processing, providing the brand with real-time insights. <br /><br /> This enabled faster response to market demand, optimized sales, and improved customer engagement</>,
            metrics: ["$20-22", "On Going", "$14 000 / month"],
            cardColorBack: "#E0E0E0",
            logo: <Livetrend />,
            points: [
                <>Reduced proxy costs by <strong>67%</strong></>,
                <>Improved crawl speed by <strong>+15%</strong></>,
                <>Added <strong>56</strong> new brands in the first <strong>3</strong> months</>
            ],
            teamMembers: [
                <><strong>3 Python Data Scraping Engineers</strong></>,
                <><strong>Data Engineer</strong></>
            ],
            techStack: [
                <Python />, 
                <Postgres />, 
                <AWS />,
                <Broom />, 
                <Shell />, 
            ]
        },
        {
            id: 3,
            title: "360° Tool for Price and Promotion Monitoring",
            country: "Retail",
            flag: <FRflag />,
            description: "We developed a platform for daily monitoring of competitor prices, promotions, and product assortment.",
            fullDescription: <>We developed a platform for daily monitoring of competitor prices, promotions, and product assortment. <br /><br /> The solution empowered brands to control their strategy, adjust marketing activities on time, and make data-driven business decisions</>,
            metrics: ["$20", "On Going", "$10 000 / month"],
            cardColorBack: "#F9DB82",
            logo: <RetailShake />,
            points: [
                <>Created custom monitoring dashboards</>,
                <>Automated competitor monitoring with updates every <strong>24</strong> hours</>,
                <>Improved pricing and promotion strategy efficiency by <strong>35%</strong></>
            ],
            teamMembers: [
                <><strong>3 Python Data Scraping Engineers</strong></>
            ],
            techStack: [
                <Python />, 
                <Postgres />, 
                <Broom />, 
                <Cloud />, 
            ]
        },
        {
            id: 4,
            title: "Optimizing Warehouse Operations for E commerce",
            country: "E-Commerce",
            flag: <DEflag />,
            description: "We built an MVP E-commerce platform with an automated sales and warehouse management system.",
            fullDescription: <>We built an MVP e-commerce platform with an automated sales and warehouse management system. <br /><br /> As a result, the client minimized manual operations, improved inventory accuracy, and prepared the business for scaling</>,
            metrics: ["$20-25", "6 months", "$70 000"],
            cardColorBack: "#6A88EF",
            logo: <SpaceShelf />,
            points: [
                <>Developed MVP in just <strong>3</strong> months, ready for scaling</>,
                <>Increased inventory accuracy to <strong>95%</strong>, reducing human errors</>,
                <>Optimized logistics, cutting operational costs by <strong>20%</strong></>
            ],
            teamMembers: [
                <><strong>3 Python Developers</strong></>,
                <><strong>Full-Stack Developer</strong> (TeamLead)</>
            ],
            techStack: [
                <Python />, 
                <Postgres />, 
                <Golang />, 
                <AWS />, 
            ]
        },
        {
            id: 5,
            title: "From Fragmented Tools to a Unified SMS Platform",
            country: "Telecom",
            flag: <UAflag />,
            description: "We created a platform for SMS delivery testing that consolidated multiple tools into a single system.",
            fullDescription: <>We created a platform for SMS delivery testing that consolidated multiple tools into a single system. <br /><br /> It ensured reliable service performance, automated testing processes, and reduced maintenance costs</>,
            metrics: ["$20-22", "On Going", "$7500 / month"],
            img: <Adeo />,
            imgModal: <AdeoModal />,
            // cardColorBack: "black",
            points: [
                <>Unified <strong>5+</strong> tools into a single platform</>,
                <>Automated <strong>80%</strong> of SMS delivery testing by filter tools</>,
                <>Reduced maintenance costs by <strong>30%</strong></>
            ],
            teamMembers: [
                <><strong>Frontend Developer</strong> (ReactJS)</>,
                <><strong>Backend Developer</strong> (Python)</>
            ],
            techStack: [
                <Python />, 
                <Postgres />, 
                <ReactIcon />, 
                <AWS />, 
            ]
        },
        {
            id: 6,
            title: "AI-Powered Lead Generation for HR Outstaffing",
            country: "HR Tech",
            flag: <PLflag />,
            description: "We built an AI-driven solution to automate candidate sourcing through social networks, generating a relevant talent pool.",
            fullDescription: <>We built an AI-driven solution to automate candidate sourcing through social networks, generating a relevant talent pool. <br /><br /> This significantly reduced recruitment time and boosted the efficiency of the client's HR processes</>,
            metrics: ["$23", "On Going", "$4000 / month"],
            logo: <PerspektPerson />,
            cardColorBack: "#005F17",
            points: [
                <>Cut recruitment time by <strong>60%</strong> compared to manual processes</>,
                <>Increased the relevant candidate pool by <strong>3x</strong> in the first quarter</>,
                <>Automated candidate sourcing across <strong>7</strong> social networks</>
            ],
            teamMembers: [
                <><strong>Full-Stack Developer</strong></>
            ],
            techStack: [
                <Python />, 
                <Postgres />, 
                <ReactIcon />, 
                <Lizer />,
                <AWS />
            ]
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
            const itemWidth = 662;
            const scrollLeft = index * itemWidth + 50;
            containerRef.current.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        }
    };

    const handleExploreMore = (story: any) => {
        setSelectedStory(story);
        setIsModalOpen(true);
    };

    const setItemRef = (index: number) => (el: HTMLDivElement | null) => {
        itemRefs.current[index] = el;
    };

    return (
        <section className={cls.successStories} id="success-stories">
            <h2 className={cls.title}><span>Success</span> Stories</h2>
            <div className={cls.items} ref={containerRef}>
                {stories.map((story, index) => (
                    <SuccessStoriesItem 
                        key={story.id} 
                        {...story} 
                        isActive={visibleItems.has(index)}
                        onClick={() => handleStoryClick(index)}
                        onExploreMore={() => handleExploreMore(story)}
                        isFirst={index === 0}
                        isLast={index === stories.length - 1}
                        ref={setItemRef(index)}
                    />
                ))}
            </div>
            
            <StoryModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                story={selectedStory}
            />
        </section>
    );
};