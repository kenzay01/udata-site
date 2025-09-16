import Link from "next/link";
import cls from "./MainBanner.module.css";
export const MainBanner = () => {
  return (
    <section className={cls.mainBanner}>
      <h1>UData <span>Outstaff.</span> Scaling Teams <span>Fast.</span></h1>
      <p>Augment your tech team in just 7 days with vetted Ukr developers. We provide top-tier talent that integrates seamlessly and accelerates your company’s success. Fast onboarding, risk-free trial, no hidden costs.</p>
      <Link href="/#">Expand Your Team</Link>
    </section>
  );
};
