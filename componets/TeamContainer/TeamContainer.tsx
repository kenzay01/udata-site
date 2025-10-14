"use client"
import cls from "./TeamContainer.module.css";
import { TeamItem } from "./components/TeamItem";
// import { FirstTeamIcon } from "@/utils/TeamIcons";
import firstTeamIcon from "@/public/team/Icon.svg"
import secondTeamIcon from "@/public/team/Icon-1.svg"
import thirdTeamIcon from "@/public/team/Icon-2.svg"
// import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export const TeamContainer = () => {
  const [cards, setCards] = useState([
    {
      id: 0,
      title: "Full-stack Senior Developer",
      experience: "4 years",
      techStack: ["Python", "React", "MongoDB", "AWS", "Docker"],
      industries: ["Ecommerce", "EdTech"],
      availability: "40h per week",
      image: "/team/teammate1.png",
      icon: firstTeamIcon,
    },
    {
      id: 1,
      title: "Backend Senior Developer",
      experience: "4 years",
      techStack: ["Python", "Rust", "Solana", "Docker", "PostgreSQL"],
      industries: ["Crypto", "FinTech"],
      availability: "20h per week",
      image: "/team/teammate2.png",
      icon: secondTeamIcon,
    },
    {
      id: 2,
      title: "Frontend Senior Developer",
      experience: "3 years",
      techStack: ["Node.JS", "React", "Next.js", "AWS"],
      industries: ["Ecommerce", "EdTech", "Retail", "FinTech"],
      availability: "20h per week",
      image: "/team/teammate3.png",
      icon: thirdTeamIcon
    },
  ]);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (isAnimating) return;
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) < minSwipeDistance) return;

    setIsAnimating(true);

    if (distance > 0) {
      setTimeout(() => {
        setCards(prev => [...prev.slice(1), prev[0]]);
        setIsAnimating(false);
      }, 300);
    } else {
      setTimeout(() => {
        setCards(prev => [prev[prev.length - 1], ...prev.slice(0, -1)]);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <>
      <section className={cls.mobileContainer} id="team">
        <div
          className={cls.stackContainer}
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`${cls.stackCard} ${index === 0 ? cls.active : ''}`}
              style={{
                zIndex: cards.length - index,
                transform: `translateX(-${(index + cards.length / 2.5) * 4.5 }%)`,
                scale: 1 - (index) / 35,
                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))',
              }}
            >
              <TeamItem {...card} />
            </div>
          ))}
        </div>
      </section>

      <section className={cls.desktopContainer} id="team">
        {cards.map((card) => (
          <TeamItem key={card.id} {...card} />
        ))}
      </section>
    </>
  );
};

export default TeamContainer;