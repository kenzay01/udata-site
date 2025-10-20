"use client";
import cls from "./ComparisonTable.module.css";
import { ArrowsIcon, ArrowsClosedIcon } from '@/utils/AtIcon';
import { useState } from 'react';


export const ComparisonTable = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const criteriaList = [
        "Team Setup",
        "Upfront Costs", 
        "Trial Period",
        "Replacement",
        "Legal & Compliance",
        "Developer Retention",
        "Risk Level"
    ];

    const udataValues = [
        "3-7 Days",
        "None",
        "7 Days Free",
        "Free & Fast", 
        "EU / GDPR Ready",
        "90% +",
        "Very Low"
    ];

    const internalValues = [
        "1-3 Months",
        <>15-40% of {isExpanded ? <br /> : ""} Salary</>,
        "None",
        "1-3 Months",
        <>Internal {isExpanded ? <br /> : ""} Effort</>,
        "60-70%", 
        "Medium"
    ];

    const freelanceValues = [
        "1-3 Months",
        "None",
        "None", 
        "1-3 Months",
        "None",
        "< 50%",
        "Very High"
    ];

    return (
        <section className={cls.comparisonTable} id="comparison-table">
            <h1><span>Comparison</span> Table</h1>
            <div className={cls.comparisonTableContent}>
                <div className={cls.comparisonCard}>
                    <div className={cls.cardHeader}></div>
                    <div className={cls.cardBody}>
                        {criteriaList.map((criteria, index) => (
                            <div key={index} className={cls.criteriaItem}>{criteria}</div>
                        ))}
                    </div>
                </div>
                <div className={`${cls.comparisonCard} ${cls.highlighted}`}>
                    <div className={cls.cardHeader}>
                        <div className={cls.companyName}>UData <span>Outstaff</span></div>
                    </div>
                    <div className={cls.cardBody}>
                        {udataValues.map((value, index) => (
                            <div key={index} className={cls.companyItem}>{value}</div>
                        ))}
                    </div>
                </div>
                <div className={`${cls.comparisonCard}`}>
                    <div className={cls.cardHeader}>Internal Hiring</div>
                    <div className={cls.cardBody}>
                        {internalValues.map((value, index) => (
                            <div key={index} className={cls.internalItem}>{value}</div>
                        ))}
                    </div>
                </div>
                <div className={`${cls.comparisonCard}`}>
                    <div className={cls.cardHeader}>Freelance Platforms</div>
                    <div className={cls.cardBody}>
                        {freelanceValues.map((value, index) => (
                            <div key={index} className={cls.freelanceItem}>{value}</div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={cls.comparisonTableContentMobile}>
                <div className={`${cls.comparisonCard} ${cls.criterial}`}>
                    <div className={cls.cardBody}>
                        {criteriaList.map((criteria, index) => (
                            <div key={index} className={cls.criteriaItem}>{criteria}</div>
                        ))}
                    </div>
                </div>
                <div className={cls.udataCard}>
                    <div className={`${cls.udataCardContainer} ${isExpanded ? cls.expandedUdata : ''}`}>
                    <div className={`${cls.comparisonCard} ${cls.highlighted}`}>
                        <div className={cls.cardHeader}>
                            <div className={cls.companyName}>UData <span>Outstaff</span></div>
                        </div>
                        <div className={cls.cardBody}>
                            {udataValues.map((value, index) => (
                                <div key={index} className={cls.valueItem}>{value}</div>
                            ))}
                        </div>
                        <button 
                            className={cls.ctaButton} 
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {!isExpanded ?<ArrowsIcon className={isExpanded ? cls.rotatedIcon : ''} /> :
                            <ArrowsClosedIcon className={!isExpanded ? cls.rotatedIcon : ''} />}
                        </button>
                    </div>
                </div>
                <div className={`${cls.backgroundAccent} ${isExpanded ? cls.expandedLeft : ''}`}>
                    <div className={`${cls.comparisonCard} ${cls.internalCard}`}>
                        <div className={cls.cardHeader}>Internal <br /> Hiring</div>
                        <div className={cls.cardBody}>
                            {internalValues.map((value, index) => (
                                <div key={index} className={cls.valueItem}>{value}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={`${cls.backgroundAccent2} ${isExpanded ? cls.expandedRight : ''}`}>
                    <div className={`${cls.comparisonCard} ${cls.freelanceCard}`}>
                        <div className={cls.cardHeader}>Freelance <br /> Platforms</div>
                        <div className={cls.cardBody}>
                            {freelanceValues.map((value, index) => (
                                <div key={index} className={cls.valueItem}>{value}</div>
                            ))}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};