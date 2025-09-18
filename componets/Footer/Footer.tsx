
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
            <p className={cls.footerRights}> <span>U</span>Data Outstaff, 2025 <br /> All rights reserved</p>
    return <footer className={cls.footer}>
        <section className={cls.footerContainer}>
            <div className={cls.footerUpperContainer}>
            <div className={cls.logo}>
                <Image src={logo} alt="Logo" width={600} height={600}  />
            </div>
            <nav className={cls.nav}>
                <ul>
                    {linksNav.map((link) => (
                        <Link href={link.href} key={link.name}>{link.name}</Link>
                    ))}
                </ul>
            </nav>
            <div>
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
            <p className={cls.footerQuote}>“Don’t risk delays - hire developers as early as next week”</p>
            <p className={cls.footerRights}> <span>U<AtIcon className={cls.atIcon} /></span>Data Outstaff, 2025 <br /> All rights reserved</p>
            <p className={cls.footerLocation}><strong>Location</strong> <br /> USA, Cocksucker Avenue 4’</p>
            <p className={cls.footerContact}><strong>Contact Mail</strong> <br /> cocksucker@gmail.com</p>
        </div>
        </section>
    </footer>
}