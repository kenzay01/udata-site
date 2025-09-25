'use client';
import React, { forwardRef } from 'react';
import cls from './SuccessStoriesItem.module.css';
import Image, { StaticImageData } from 'next/image';

interface SuccessStoriesItemProps {
    title: string;
    country: string;
    flag: string;
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
    cardColorBack
}, ref) => {

    const handleExploreClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent triggering the card click
        onExploreMore?.();
    };

    return (
        <>
            {isFirst && <div style={{paddingLeft: '180px'}}></div>}
            <div 
                ref={ref}
                className={`${cls.successStoriesItem} ${isActive ? cls.active : cls.inactive}`}
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
                        {img && (
                            <div className={cls.imageContainer}>
                                {typeof img === "object" && "src" in img ? (
                                    <Image src={img as StaticImageData} alt={title} />
                                ) : (
                                    img
                                )}
                            </div>
                        )}
                    </div>
                    {/* White content section */}
                    <div className={cls.whiteContent}>
                        <h1 className={cls.companyTitle}>{title}</h1>
                        <p className={cls.description}>
                            {description}
                        </p>
                        
                        <div className={cls.metrics}>
                            {metrics?.map((metric, index) => (
                                <span className={cls.metricValue} key={index}>{metric}</span>
                            ))}
                        </div>
                        <button className={cls.exploreButton} onClick={handleExploreClick} disabled={!isActive}>
                            Explore more
                            <span className={cls.arrow}>→</span>
                        </button>
                    </div>
                </div>
            </div>
            {isLast && <div style={{paddingRight: '180px'}}></div>}
        </>
    );
});

SuccessStoriesItem.displayName = 'SuccessStoriesItem';