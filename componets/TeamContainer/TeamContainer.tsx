import cls from "./TeamContainer.module.css";
import { TeamItem } from "./components/TeamItem";
import { FirstTeamIcon } from "@/utils/TeamIcons";
import firstTeamIcon from "@/public/team/Icon.svg"
import secondTeamIcon from "@/public/team/Icon-1.svg"
import thirdTeamIcon from "@/public/team/Icon-2.svg"

export const TeamContainer = () => {
  const teamData = [
    {
      title: "Full-stack Senior Developer",
      experience: "4 years",
      techStack: ["Python", "React", "MongoDB", "AWS", "Docker"],
      industries: ["Ecommerce", "EdTech"],
      availability: "40h per week",
      image: "/team/teammate1.png",
      icon: firstTeamIcon,
    },
    {
      title: "Backend Senior Developer",
      experience: "4 years",
      techStack: ["Python", "Rust", "Solanaweb3", "Docker", "PostgreSQL"],
      industries: ["Crypto", "FinTech"],
      availability: "20h per week",
      image: "/team/teammate2.png",
      icon: secondTeamIcon,
    },
    {
      title: "Frontend Senior Developer",
      experience: "3 years",
      techStack: ["Node.JS", "React", "Next.js", "AWS"],
      industries: ["Ecommerce", "EdTech", "Retail", "FinTech"],
      availability: "20h per week",
      image: "/team/teammate3.png",
      icon: thirdTeamIcon,
    },
  ];

  return (
    <section className={cls.teamContainer} id="team">
      {teamData.map((item, index) => (
        <TeamItem key={index} {...item} />
      ))}
    </section>
  );
};