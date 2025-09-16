"use client";

import cls from "./Header.module.css";
import Link from "next/link";
import { useState } from "react";
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

  return (
    <header className={cls.header}>
      <section className={cls.headerContainer}>
        <div className={cls.logo}>
          <Image src={logo} alt="Logo" width={600} height={600}  />
        </div>

      <nav className={`${cls.nav} ${open ? cls.open : ""}`}>
        <ul>
          {linksNav.map((link) => (
            <li key={link.name}>
              <Link href={link.href} onClick={() => setOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={cls.btnContainer}>
        <Link href="/#" className={cls.btnLogin}>Schedule a Call</Link>
      </div>

      <button className={cls.burger} onClick={() => setOpen(!open)}>
        {open ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
      </section>
    </header>
  );
};
