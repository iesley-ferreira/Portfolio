import React from 'react';
import './styles/SkillSet.css';

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
    </div>
  );
};

export default SkillSet;
