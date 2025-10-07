"use client";

import cls from "./TeamItem.module.css";
import Image from "next/image";
import { BiPlus } from "react-icons/bi";
import React from "react";
import Link from "next/link";

interface TeamItemProps {
  title: string;
  experience: string;
  techStack: string[];
  industries: string[];
  availability: string;
  image: string;
  icon: React.ComponentProps<typeof Image>["src"];
}

export const TeamItem = ({ title, experience, techStack, industries, availability, image, icon }: TeamItemProps) => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      
      if (href.startsWith('#')) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const headerHeight = (document.querySelector(`.${cls.header}`) as HTMLElement)?.offsetHeight || 80;
          const targetPosition = targetElement.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };
  return (
    <div className={cls.card}>
      <div className={cls.content}>
        <h3 className={cls.title}>{title}</h3>
        <div className={cls.details}>
          <span className={cls.label}>Experience</span>
          <span className={cls.valueItem}>{experience}</span>
        </div>
        <div className={cls.details}>
          <span className={cls.label}>Tech Stack & Tools</span>
          <div className={cls.valueContainer}>
            {techStack.map((tech, index) => (
              <span key={index} className={`${cls.valueItem} ${cls.techItem}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className={cls.details}>
          <span className={cls.label}>Industries</span>
          <div className={cls.valueContainer}>
            {industries.map((industry, index) => (
              <span key={index} className={`${cls.valueItem} ${cls.techItem}`}>
                {industry}
              </span>
            ))}
          </div>
        </div>
        <div className={cls.details}>
          <span className={cls.label}>Time Availability</span>
          <span className={cls.valueItem}>{availability}</span>
        </div>
      </div>
      <div className={cls.imageContainer}>
        <Image src={image} alt="Profile" className={cls.profileImage} width={300} height={300} />
        <div className={cls.iconContainer}>
          <Image src={icon} alt="Icon" width={100} height={100} />
        </div>
      </div>
      <Link href="/#pricing" onClick={(e) => handleSmoothScroll(e, "#pricing")} className={cls.addButton}>
        <BiPlus size={24} />
      </Link>
    </div>
  );
};