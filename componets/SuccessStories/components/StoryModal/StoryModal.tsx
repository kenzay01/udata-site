'use client';
import React from 'react';
import cls from './StoryModal.module.css';
// import { X } from 'lucide-react';
import {CloseIcon, ArrowStairsUp} from "@/utils/MenuIcon";
import Image, { StaticImageData } from 'next/image';

interface StoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    story: {
        id: number;
        title: string;
        country: string;
        flag: string;
        description: string;
        fullDescription: React.ReactNode;
        metrics: string[];
        cardColorBack: string;
        logo: React.ReactNode;
        points: React.ReactNode[];
        teamMembers: React.ReactNode[];
        techStack: React.ReactNode[];
        img?: React.ReactNode | StaticImageData;
        imgModal?: React.ReactNode | StaticImageData;
    } | null;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose, story }) => {
    if (!isOpen || !story) return null;

    return (
        <div className={cls.modalOverlay} onClick={onClose}>
            <div className={cls.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={cls.closeButton} onClick={onClose}>
                    <CloseIcon />
                </button>
                
                <div className={cls.modalCard}>
                    <div className={cls.modalAboveContent}>
                        <div className={cls.leftContent}>
                            <div className={cls.modalHeader} style={{ backgroundColor: story.cardColorBack }}>
                                <div className={cls.tagContainer}>
                                    <span className={cls.flagTag}>{story.flag}</span>
                                    <span className={cls.countryTag}>{story.country}</span>
                                </div>
                                <div className={cls.logoContainer}>
                                    {story.logo}
                                    {story.imgModal && (typeof story.imgModal === "object" && "src" in story.imgModal ? (
                                        <Image src={story.imgModal as StaticImageData} alt={story.title} />
                                    ) : (
                                        story.imgModal
                                    ))}
                                </div>
                            </div>
                            <div className={cls.section}>
                                <ul className={cls.pointsList}>
                                    {story.points.map((point, index) => (
                                        <li key={index} className={cls.pointItem}>
                                            <ArrowStairsUp />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={cls.rightContent}>
                            <div className={cls.modalBody}>
                                <h2 className={cls.modalTitle}>{story.title}</h2>
                                <div className={cls.description}>
                                    {story.fullDescription}
                                </div>
                                <div className={cls.metrics}>
                                    {story.metrics.map((metric, index) => (
                                        <span className={cls.metricValue} key={index}>{metric}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cls.line}></div>
                    <div className={cls.modalBelowContent}>
                        <div className={cls.teamMembers}>
                            <h3 className={cls.sectionTitle}>Team Members:</h3>
                            <div className={cls.teamGrid}>
                                {story.teamMembers.map((member, index) => (
                                    <div key={index} className={cls.teamMember}>
                                        {member}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={cls.techStack}>
                            <h3 className={cls.sectionTitle}>Tech Stack:</h3>
                            <div className={cls.techStack}>
                                {story.techStack.map((tech, index) => (
                                    <div key={index} className={cls.techItem}>
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>                
                    {/* White content section */}
                    {/* <div className={cls.modalBody}>
                        <h2 className={cls.modalTitle}>{story.title}</h2>
                        
                        <div className={cls.description}>
                            {story.fullDescription}
                        </div>
                        
                        <div className={cls.metrics}>
                            {story.metrics.map((metric, index) => (
                                <span className={cls.metricValue} key={index}>{metric}</span>
                            ))}
                        </div>
                        <div className={cls.section}>
                            <h3 className={cls.sectionTitle}>Key Results</h3>
                            <ul className={cls.pointsList}>
                                {story.points.map((point, index) => (
                                    <li key={index} className={cls.pointItem}>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={cls.section}>
                            <h3 className={cls.sectionTitle}>Team</h3>
                            <div className={cls.teamGrid}>
                                {story.teamMembers.map((member, index) => (
                                    <div key={index} className={cls.teamMember}>
                                        {member}
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {story.techStack && story.techStack.length > 0 && (
                            <div className={cls.section}>
                                <h3 className={cls.sectionTitle}>Tech Stack</h3>
                                <div className={cls.techStack}>
                                    {story.techStack.map((tech, index) => (
                                        <span key={index} className={cls.techItem}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div> */}
                </div>
            </div>
        </div>
    );
};