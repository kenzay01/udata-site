import cls from "./TeamContainer.module.css";
import { TeamItem } from "./components/TeamItem";
import { FirstTeamIcon } from "@/utils/TeamIcons";

export const TeamContainer = () => {
  const teamData = [
    {
      title: "Full-stack Senior Developer",
      experience: "4 years",
      techStack: ["Python", "React", "MongoDB", "AWS", "Docker"],
      industries: ["Ecommerce", "EdTech"],
      availability: "40h per week",
      image: "/team/teammate1.png",
      icon: FirstTeamIcon, 
    },
    {
      title: "Backend Senior Developer",
      experience: "4 years",
      techStack: ["Python", "Rust", "Solanaweb3", "Docker", "PostgreSQL"],
      industries: ["Crypto", "FinTech"],
      availability: "20h per week",
      image: "/team/teammate2.png",
      icon: FirstTeamIcon,
    },
    {
      title: "Frontend Senior Developer",
      experience: "3 years",
      techStack: ["Node.JS", "React", "Next.js", "AWS"],
      industries: ["Ecommerce", "EdTech", "Retail", "FinTech"],
      availability: "20h per week",
      image: "/team/teammate3.png",
      icon: FirstTeamIcon, 
    },
  ];

  return (
    <section className={cls.teamContainer}>
      {teamData.map((item, index) => (
        <TeamItem key={index} {...item} />
      ))}
    </section>
  );
};