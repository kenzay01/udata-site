import cls from "./page.module.css";
import { Header } from "@/componets/Header/Header";
import { MainBanner } from "@/componets/MainBanner/MainBanner";
import {TeamContainer } from "@/componets/TeamContainer/TeamContainer";
import { HowItWorks } from "@/componets/HowItWorks/HowItWorks";
import { Benefits } from "@/componets/Benefits/Benefits";
import {ComparisonTable } from "@/componets/ComparisonTable/ComparisonTable";
import { Footer } from "@/componets/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <div style={{ height: "100px" }} />
      <MainBanner />
      <TeamContainer />
      <HowItWorks />
      <Benefits />
      <ComparisonTable />
      <Footer />
    </main>
  );
}
