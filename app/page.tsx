import cls from "./page.module.css";
import { Header } from "@/componets/Header/Header";
import { MainBanner } from "@/componets/MainBanner/MainBanner";
import {TeamContainer } from "@/componets/TeamContainer/TeamContainer";
import { HowItWorks } from "@/componets/HowItWorks/HowItWorks";
import { Benefits } from "@/componets/Benefits/Benefits";
import {ComparisonTable } from "@/componets/ComparisonTable/ComparisonTable";
import { Footer } from "@/componets/Footer/Footer";
import {SuccessStories} from "@/componets/SuccessStories/SuccessStories";
import {PricingContainer} from "@/componets/PricingContainer/PricingContainer";
import { FaqSection } from "@/componets/FaqSection/FaqSection";

export default function Home() {
  return (
    <main>
      <Header />
      <div className={cls.spacer}/>
      <MainBanner />
      <TeamContainer />
      <HowItWorks />
      <Benefits />
      <ComparisonTable />
      <SuccessStories />
      <PricingContainer />
      <FaqSection />
      <Footer />
    </main>
  );
}
