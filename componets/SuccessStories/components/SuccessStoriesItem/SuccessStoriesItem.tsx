'use client';
import React, { forwardRef, useState, useEffect, useRef } from 'react';
import cls from './SuccessStoriesItem.module.css';
import Image, { StaticImageData } from 'next/image';
import { CloseIcon, ArrowStairsUp } from "@/utils/MenuIcon";

interface SuccessStoriesItemProps {
    title: string;
    country: string;
    flag: React.ReactNode;
    isActive?: boolean;
    onClick?: () => void;
    onExploreMore?: () => void;
    isFirst?: boolean;
    isLast?: boolean;
    TextMetrics?: string[];
    description?: string;
    metrics?: string[];
    img?: StaticImageData | React.ReactNode;
    logo?: React.ReactNode;
    cardColorBack?: string;
    fullDescription?: React.ReactNode;
    points?: React.ReactNode[];
    teamMembers?: React.ReactNode[];
    techStack?: React.ReactNode[];
    isExpanded?: boolean;
    onExpandChange?: (expanded: boolean) => void;
    isMobile?: boolean;
    imgPhone?: StaticImageData | React.ReactNode;
}

export const SuccessStoriesItem = forwardRef<HTMLDivElement, SuccessStoriesItemProps>(({ 
    title, 
    country, 
    flag, 
    isActive = false,
    onClick,
    onExploreMore,
    isFirst = false,
    isLast = false,
    description,
    metrics,
    img,
    logo,
    cardColorBack,
    fullDescription,
    points,
    teamMembers,
    techStack,
    isExpanded = false,
    onExpandChange,
    isMobile = false,
    imgPhone
}, ref) => {
    const [localExpanded, setLocalExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setLocalExpanded(isExpanded);
    }, [isExpanded]);

    const handleExploreClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        
        if (isMobile) {
            const newState = !localExpanded;
            setLocalExpanded(newState);
            onExpandChange?.(newState);
        } else {
            onExploreMore?.();
        }
    };

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        setLocalExpanded(false);
        onExpandChange?.(false);
    };

    return (
        <>
            {isFirst && <div style={{paddingLeft: '180px'}}></div>}
            <div 
                ref={ref}
                className={`${cls.successStoriesItem} ${isActive ? cls.active : cls.inactive} ${localExpanded && isMobile ? cls.expanded : ''}`}
                onClick={onClick}
            >
                <div className={cls.cardContent}>
                    <div className={cls.header} style={{ backgroundColor: cardColorBack }}>
                        <div className={cls.headerTop}>
                            <div className={cls.tagContainer}>
                                <span className={cls.flagTag}>{flag}</span>
                                <span className={cls.countryTag}>{country}</span>
                            </div>
                        </div>
                        <div className={cls.logoContainer}>
                            {logo}
                        </div>
                        {(isMobile ? imgPhone : img) && (
                            <div className={cls.imageContainer}>
                                {(() => {
                                    const imageSource = isMobile ? imgPhone : img;
                                    if (
                                        imageSource &&
                                        typeof imageSource === "object" &&
                                        "src" in imageSource
                                    ) {
                                        return <Image src={imageSource as StaticImageData} alt={title} />;
                                    }
                                    if (
                                        React.isValidElement(imageSource)
                                    ) {
                                        return imageSource;
                                    }
                                    return null;
                                })()}
                            </div>
                        )}
                    </div>
                    
                    <div className={cls.whiteContent}>
                        <h1 className={cls.companyTitle}>{title}</h1>
                        <p className={cls.description}>
                            {localExpanded ? fullDescription :description}
                        </p>
                        
                        <div className={cls.metrics}>
                            {metrics?.map((metric, index) => (
                                <span className={cls.metricValue} key={index}>{metric}</span>
                            ))}
                        </div>
                        {isMobile && (
                            <div 
                                ref={contentRef}
                                className={`${cls.expandedContent} ${localExpanded ? cls.show : ''}`}
                            >
                                <div className={cls.expandedInner}>
                                    {/* <div className={cls.expandedHeader}>
                                        <h2 className={cls.expandedTitle}>{title}</h2>
                                    </div>

                                    <div className={cls.expandedDescription}>
                                        {fullDescription || description}
                                    </div> */}

                                    {points && points.length > 0 && (
                                        <div className={cls.expandedSection}>
                                            {/* <h3 className={cls.expandedSectionTitle}>Key Results</h3> */}
                                            <ul className={cls.pointsList}>
                                                {points.map((point, index) => (
                                                    <li key={index} className={cls.pointItem}>
                                                        <ArrowStairsUp />
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {teamMembers && teamMembers.length > 0 && (
                                        <div className={cls.expandedSection}>
                                            <h3 className={cls.expandedSectionTitle}>Outstaff Specialists</h3>
                                            <div className={cls.teamGrid}>
                                                {teamMembers.map((member, index) => (
                                                    <div key={index} className={cls.teamMember}>
                                                        {member}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {techStack && techStack.length > 0 && (
                                        <div className={cls.expandedSection}>
                                            <h3 className={cls.expandedSectionTitle}>Tech Stack</h3>
                                            <div className={cls.techStack}>
                                                {techStack.map((tech, index) => (
                                                    <div key={index} className={cls.techItem}>
                                                        {tech}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                        <button className={cls.exploreButton} onClick={handleExploreClick} disabled={!isActive}>
                            {localExpanded && isMobile ? 'Show less' : 'Explore more'}
                            <span className={cls.arrow}>{localExpanded && isMobile ? '↑' : '→'}</span>
                        </button>
                    </div>

                    {/* Mobile Expanded Content */}
                </div>
            </div>
            {isLast && <div style={{paddingRight: '180px'}}></div>}
        </>
    );
});

SuccessStoriesItem.displayName = 'SuccessStoriesItem';