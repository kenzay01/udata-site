"use client"


import Image from 'next/image'
import cls from './Footer.module.css'
import logo from '@/public/logo.png'
import { LinkedInIcon, InstagramIcon } from '@/utils/Social'
import Link from 'next/link'
import { AtIcon } from '@/utils/AtIcon'

export const Footer = () => {
    const linksNav = [
        { name: "How It Works", href: "#how-it-works" },
        { name: "Benefits", href: "#benefits" },
        { name: "Comparison Table", href: "#comparison-table" },
        { name: "Success Stories", href: "#success-stories" },
        { name: "Pricing", href: "#pricing" },
        { name: "FAQ", href: "#faq" },
    ];
    const socialsLinks = [
        { name: "Twitter", href: "https://twitter.com/udata_tech", icon: <InstagramIcon /> },
        { name: "LinkedIn", href: "https://www.linkedin.com/company/udata-tech", icon: <LinkedInIcon /> },
    ];
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
    return <footer className={cls.footer}>
        <section className={cls.footerContainer}>
            <div className={cls.footerUpperContainer}>
            <div className={cls.logo}>
                <Image src={logo} alt="Logo" width={600} height={600}  />
            </div>
            <nav className={cls.nav}>
                <ul>
                    {linksNav.map((link) => (
                        <Link href={link.href} key={link.name} onClick={(e) => handleSmoothScroll(e, link.href)}>{link.name}</Link>
                    ))}
                </ul>
            </nav>
            <div className={cls.socialsContainer}>
                <ul className={cls.socials}>
                    {socialsLinks.map((link) => (
                        <Link href={link.href} key={link.name} target="_blank" rel="noopener noreferrer">
                            {link.icon}
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
        <div className={cls.footerLowerContainer}>
            <div className={cls.socialsContainerMobile}>
                <ul className={cls.socials}>
                    {socialsLinks.map((link) => (
                        <Link href={link.href} key={link.name} target="_blank" rel="noopener noreferrer">
                            {link.icon}
                        </Link>
                    ))}
                </ul>
            </div>
            <p className={cls.footerQuote}>“Don’t risk delays - hire developers as early as next week”</p>
            <p className={cls.footerRights}> <span>U<AtIcon className={cls.atIcon} /></span>Data Outstaff, 2025 <br /> All rights reserved</p>
            <p className={cls.footerLocation}><strong>Location</strong> <br /> USA, Cocksucker Avenue 4’</p>
            <p className={cls.footerContact}><strong>Contact Mail</strong> <br /> cocksucker@gmail.com</p>
        </div>
        </section>
    </footer>
}