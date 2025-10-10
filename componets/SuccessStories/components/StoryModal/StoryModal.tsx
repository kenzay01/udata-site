'use client';
import cls from './StoryModal.module.css';
import {CloseIcon, ArrowStairsUp} from "@/utils/MenuIcon";
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 300);
    };
    
    useEffect(() => {
        if (isOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = "100%";
            document.body.style.overflow = "hidden";

            return () => {
                const scrollYToRestore = Math.abs(parseInt(document.body.style.top || '0'));
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.width = "";
                document.body.style.overflow = "";
                window.scrollTo({
                    top: scrollYToRestore,
                    behavior: 'instant'
                });
            };
        }
    }, [isOpen]);  
    
    if (!isOpen || !story) return null;

    return (
        <div className={`${cls.modalOverlay} ${isClosing ? cls.closing : ''}`} onClick={handleClose}>
            <div className={`${cls.modalContent} ${isClosing ? cls.closing : ''}`} onClick={(e) => e.stopPropagation()}>
                <button className={cls.closeButton} onClick={handleClose}>
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
                            <h3 className={cls.sectionTitle}>Outstaff Specialists:</h3>
                            <div className={cls.teamGrid}>
                                {story.teamMembers.map((member, index) => (
                                    <div key={index} className={cls.teamMember}>
                                        {member}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={cls.techStackSection}>
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
                            <div className={cls.requestCall}>
                                <Link rel="noopener noreferrer"
            target="_blank"
            href="https://calendly.com/dmytro-udata/meet-with-me" onClick={() => {
                                    handleClose();
                                }}>Request a Call</Link>
                            </div>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
    );
};