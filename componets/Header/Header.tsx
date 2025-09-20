"use client";

import cls from "./Header.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import logo from "@/public/logo.png";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const linksNav = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Benefits", href: "#benefits" },
    { name: "Comparison Table", href: "#comparison-table" },
    { name: "Success Stories", href: "#success-stories" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    
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
    <header className={cls.header}>
      <section className={cls.headerContainer}>
        <div className={cls.logo}>
          <Image src={logo} alt="Logo" width={600} height={600} />
        </div>

        <nav className={`${cls.nav} ${open ? cls.open : ""}`}>
          <ul>
            {linksNav.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={cls.rightSection}>
          <Link href="/#" className={cls.btnLogin}>Schedule a Call</Link>
          <button 
            className={cls.burger} 
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </section>
    </header>
  );
};