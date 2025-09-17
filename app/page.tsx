import cls from "./page.module.css";
import { Header } from "@/componets/Header/Header";
import { MainBanner } from "@/componets/MainBanner/MainBanner";
import {TeamContainer } from "@/componets/TeamContainer/TeamContainer";
import { HowItWorks } from "@/componets/HowItWorks/HowItWorks";

export default function Home() {
  return (
    <main>
      <Header />
      <div style={{ height: "100px" }} />
      <MainBanner />
      <TeamContainer />
      <HowItWorks />
    </main>
  );
}
