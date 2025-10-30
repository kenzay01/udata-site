import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "UData Outstaff | Hire Experienced Developers Fast",
  description: "UData Outstaff helps you scale faster. Get vetted IT experts on-demand, start in days, test risk-free for 7 days, and accelerate your product growth with top tech talent.",
  keywords: [
    "outstaff IT services",
    "hire Ukrainian developers",
    "dedicated development team",
    "IT staff augmentation",
    "hire remote developers",
    "software outsourcing Ukraine",
    "backend developer for hire",
    "frontend developer for hire",
    "full-stack developer hourly",
    "mobile developer outstaff",
    "data engineer remote",
    "hire developers in CET time zone",
    "affordable IT specialists Europe",
    "vetted software engineers",
    "Python developer outstaff",
    "React developer hire",
    "Node.js developer Ukraine",
    "Rust backend engineer",
    "AWS cloud developer",
    "fintech developer for hire",
    "crypto developer Ukraine",
    "ecommerce software team",
    "edtech developers remote",
    "SaaS development team hire",
    "GDPR compliant IT outsourcing",
    "EU ready developers",
    "fast onboarding IT team",
    "hire developers 7 days",
    "flexible IT staff Europe",
    "outstaff company Ukraine",
    "staff augmentation Europe",
    "offshore developers Ukraine",
    "low cost IT talent Europe",
    "IT team extension services",
    "hire developers hourly",
    "remote developers risk free trial",
    "vetted senior developers",
    "scaling software teams fast"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17687925953"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17687925953');
          `}
        </Script>
      </head>
      <body className={`${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}