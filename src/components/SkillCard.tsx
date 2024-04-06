import React, { useEffect, useState } from "react";
import "./styles/SkillCard.css";

interface Skill {
  name: string;
  image: string;
  level: number;
}

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const [SvgComponent, setSvgComponent] = useState<React.FC | null>(null);
  const fillPercentage = (skill.level / 5) * 100;

  useEffect(() => {
    const importSvg = async () => {
      try {
        const { default: Svg } = await import(`./svgs/${skill.image}`);

        setSvgComponent(() => Svg);
      } catch (error) {
        console.error("Erro ao importar o SVG:", error);
      }
    };

    importSvg();
  }, [skill.image]);

  return (
    <div className="skill-card-container">
      <div className="skill-card">
        <h3>{skill.name}</h3>
        {SvgComponent && <SvgComponent />}
        <div className="level-bar">
          <div className="fill" style={{ width: `${fillPercentage}%` }}></div>
        </div>
      </div>
    </div>
  );
};
export default SkillCard;
