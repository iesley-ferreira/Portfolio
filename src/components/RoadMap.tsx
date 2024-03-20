// import React, { useState } from 'react';
// import './styles/RoadMap.css';
// import Circle from './Circle';

// const RoadMap: React.FC = () => {

//   const [currentSection, setCurrentSection] = useState<string>('Home');

//   const handleSectionChange = (section: string) => {
//     setCurrentSection(section);
//   };

//   return (
//     <div className='wrapper'>
//       <nav className='roadmap'>
//         <ul className='menu'>
//           <li>
//             <a href='#Home' onClick={() => handleSectionChange('Home')} className={currentSection === 'Home' ? 'sublinhado' : 'vazio'}>
//               Home
//               <Circle className={currentSection === 'Home' ? 'preenchido' : 'vazio'} />
//             </a>
//           </li>
//           <li>
//             <a href='#About' onClick={() => handleSectionChange('About')} className={currentSection === 'About' ? 'sublinhado' : 'vazio'}>
//               About
//               <Circle className={currentSection === 'About' ? 'preenchido' : 'vazio'} />
//             </a>
//           </li>
//           <li>
//             <a href='#Skill-Set' onClick={() => handleSectionChange('Skill-Set')} className={currentSection === 'Skill-Set' ? 'sublinhado' : 'vazio'}>
//               Skill-Set
//               <Circle className={currentSection === 'Skill-Set' ? 'preenchido' : 'vazio'} />
//             </a>
//           </li>
//           <li>
//             <a href='#Projects' onClick={() => handleSectionChange('Projects')} className={currentSection === 'Projects' ? 'sublinhado' : 'vazio'}>
//               Projects
//               <Circle className={currentSection === 'Projects' ? 'preenchido' : 'vazio'} />
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default RoadMap;
