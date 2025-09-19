'use client';

import React, { forwardRef } from 'react';
import cls from './SuccessStoriesItem.module.css';

interface SuccessStoriesItemProps {
    title: string;
    country: string;
    flag: string;
    points: string[];
    outcome: string;
    id: number;
    isActive?: boolean;
    onClick?: () => void;
    isFirst?: boolean;
    isLast?: boolean;
}

export const SuccessStoriesItem = forwardRef<HTMLDivElement, SuccessStoriesItemProps>(({ 
    title, 
    country, 
    flag, 
    points, 
    outcome, 
    id, 
    isActive = false,
    onClick,
    isFirst = false,
    isLast = false
}, ref) => {
    return (
        <>
            {isFirst && <div style={{paddingLeft: '160px'}}></div>}
            <div 
                ref={ref}
                className={`${cls.successStoriesItem} ${isActive ? cls.active : cls.inactive}`}
                onClick={onClick}
            >
                <div className={cls.header}>
                    <div className={cls.sketch}>
                    </div>
                </div>
                
                <div className={cls.content}>
                    <h3 className={cls.companyTitle}>
                        {title}, <span>{country} {flag}</span>
                    </h3>
                    
                    <ul className={cls.points}>
                        {points.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                    
                    <div className={cls.outcome}>
                        Outcome: {outcome}
                    </div>
                </div>
            </div>
            {isLast && <div style={{paddingRight: '160px'}}></div>}
        </>
    );
});
SuccessStoriesItem.displayName = 'SuccessStoriesItem';