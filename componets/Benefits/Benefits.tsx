"use client";
import React, { useState, useRef, useEffect, useCallback, Fragment } from 'react';
import cls from "./Benefits.module.css";
import Link from "next/link";
import { Star, HalfStar } from "@/utils/Stars";

const benefitsData = [
  {
    id: 1,
    title: <>Initial Technical Discovery & <br /> Project Audit</>,
    description1: "We dive into your project to understand its structure, stack, and challenges.",
    description2: "Our engineers deliver a roadmap of improvements for short- and mid-term impact."
  },
  {
    id: 2,
    title: "European Communication, Ukrainian Flexibility",
    description1: "Seamless collaboration in CET hours with developers who know EU standards.",
    description2: "Legal peace of mind with contracts, NDAs, invoices, and multiple payment options."
  },
  {
    id: 3,
    title: <>Fast Hiring <br /> Process</>,
    description1: "First candidates within 3–7 days. Developers with experience in EU-based projects.",
    description2: "Start with your extended team as early as next week."
  },
  {
    id: 4,
    title: "2 Weeks of Free Onboarding",
    description1: "Your first 14 days are on us.",
    description2: "Work with our developers, check collaboration, and only pay if you're fully satisfied."
  }
];

export const Benefits = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set([0]));
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const checkVisibility = useCallback(() => {
    if (!containerRef.current || !isMobile) return;

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
  }, [isMobile]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isMobile) return;

    checkVisibility();

    container.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    return () => {
      container.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, [checkVisibility, isMobile]);

  const handleBenefitClick = (index: number) => {
    if (!isMobile || !containerRef.current) return;
    
    const itemWidth = 280;
    const scrollLeft = index * itemWidth;
    containerRef.current.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    });
  };

  const setItemRef = (index: number) => (el: HTMLDivElement | null) => {
    itemRefs.current[index] = el;
  };

  return (
    <section className={cls.benefits} id="benefits">
      <div className={cls.benefitsHeader}>
        <h1>Benefits</h1>
        <div className={cls.benefitsHeaderContent}>
          <p>Our partners say we're 4.8 out of 5 based on <strong>200+ reviews</strong></p>
          <div className={cls.benefitsRating}>
            {Array.from({ length: 4 }, (_, i) => <Star key={i} />)}
            <HalfStar />
          </div>
        </div>
      </div>
      
      <div 
        className={`${cls.benefitsContent} ${isMobile ? cls.scrollableContent : ''}`}
        ref={containerRef}
      >
        {benefitsData.map((benefit, index) => (
          <Fragment key={benefit.id}>
            {index === 0 && isMobile && <div className={cls.cardSpacer}></div>}
            <div className={`${cls.benefitCard} ${isMobile ? (visibleItems.has(index) ? cls.active : cls.inactive) : ''}`} onClick={() => handleBenefitClick(index)} ref={setItemRef(index)}>
              <div className={cls.cardDot}></div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description1}</p>
              <p>{benefit.description2}</p>
            </div>
            {index === benefitsData.length - 1 && isMobile && <div className={cls.cardSpacer}></div>}
          </Fragment>
        ))}
      </div>
    </section>
  );
};