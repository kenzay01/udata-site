import cls from "./TeamItem.module.css";
import Image from "next/image";
import { BiPlus } from "react-icons/bi";
import React from "react";

interface TeamItemProps {
  title: string;
  experience: string;
  techStack: string[];
  industries: string[];
  availability: string;
  image: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const TeamItem = ({ title, experience, techStack, industries, availability, image, icon }: TeamItemProps) => {
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
          {icon && React.createElement(icon, { className: cls.icon })}
        </div>
      </div>
      <button className={cls.addButton}>
        <BiPlus size={24} />
      </button>
    </div>
  );
};