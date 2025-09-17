import cls from "./Benefits.module.css";
import Link from "next/link";
import {Star, HalfStar} from "@/utils/Stars"

const benefitsData = [
  {
    title: <>Initial Technical Discovery & <br /> Project Audit</>,
    description1: "We dive into your project to understand its structure, stack, and challenges.",
    description2: "Our engineers deliver a roadmap of improvements for short- and mid-term impact."
  },
  {
    title: "European Communication, Ukrainian Flexibility",
    description1: "Seamless collaboration in CET hours with developers who know EU standards.",
    description2: "Legal peace of mind with contracts, NDAs, invoices, and multiple payment options."
  },
  {
    title: <>Fast Hiring <br /> Process</>,
    description1: "First candidates within 3–7 days. Developers with experience in EU-based projects.",
    description2: "Start with your extended team as early as next week."
  },
  {
    title: "2 Weeks of Free Onboarding",
    description1: "Your first 14 days are on us.",
    description2: "Work with our developers, check collaboration, and only pay if you’re fully satisfied."
  }
];

export const Benefits = () => {
  return (
    <section className={cls.benefits}>
      <div className={cls.benefitsHeader}>
        <h1>Benefits</h1>
        <div className={cls.benefitsHeaderContent}>
            <p>Our partners say we're 4.8 out of 5 based on <strong>200+ reviews</strong></p>
            <div className={cls.benefitsRating}>
              {Array.from({ length: 4 }, (_, i) => <Star key={i} />)}
              <HalfStar />
            </div>
        </div>
        <Link href="/#">Start Hiring Now</Link>
      </div>
      
      <div className={cls.benefitsContent}>
        {benefitsData.map((benefit, index) => (
          <div key={index} className={cls.benefitCard}>
            <div className={cls.cardDot}></div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description1}</p>
            <p>{benefit.description2}</p>
          </div>
        ))}
      </div>
    </section>
  );
};