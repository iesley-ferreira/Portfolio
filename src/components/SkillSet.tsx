import React from 'react';
import './styles/SkillSet.css';
import upArrow from "../assets/images/up-arrow.svg";
import downArrow from "../assets/images/down-arrow.svg";

interface Skill {
  name: string;
  level: string;
}

const skillList2: Skill[] = [
  { name: 'HTML', level: 'Advanced' },
  { name: 'CSS', level: 'Advanced' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React', level: 'Advanced' },
  { name: 'Redux', level: 'Intermediate' },
  { name: 'vite', level: 'Intermediate' },
  { name: 'TypeScript', level: 'Intermediate' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'Express.js', level: 'Intermediate' },
];

const skillList1: Skill[] = [
  { name: 'RESTful APIs', level: 'Intermediate' },
  { name: 'Agile Methodologies', level: 'Intermediate' },
  { name: 'Responsive Web Design', level: 'Intermediate' },
  { name: 'SQL', level: 'Intermediate' },
  { name: 'MySQL', level: 'Intermediate' },
  { name: 'Git', level: 'Intermediate' },
  { name: 'GitHub', level: 'Intermediate' },
  { name: 'UI', level: 'Intermediate' },
  { name: 'UX', level: 'Intermediate' },
];

const SkillSet: React.FC = () => {
  return (
    <div id='Skill-Set' className='skill-set-container'>
      <a hidden className="arrow" href="/about">
        <img src={upArrow} alt="back-arrow" />
      </a>
      <h2>My Skills</h2>
      <div className='skill-list'>
        <ul>
          {skillList1.map((skill, index) => (
            <li key={index}>
              {skill.name} - {skill.level}
            </li>
          ))}
        </ul>
        <ul>
          {skillList2.map((skill, index) => (
            <li key={index}>
              {skill.name} - {skill.level}
            </li>
          ))}
        </ul>
      </div>
      <a hidden className="arrow" href="/projects">
        <img src={downArrow} alt="back-arrow" />
      </a>
    </div>
  );
};

export default SkillSet;
