import './styles/Projects.css';
import React from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
import './styles/base.css'
import './styles/embla.css'
import EmblaCarousel from './EmblaCarousel';

interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
}

const projects: Project[] = [
    {
      id: 1,
      title: 'Projeto 1',
      description: 'Descrição do Projeto 1',
      stack: ['React', 'TypeScript'],
    },
    {
      id: 2,
      title: 'Projeto 2',
      description: 'Descrição do Projeto 2',
      stack: ['Node.js', 'Express.js'],
    },
    {
      id: 3,
      title: 'Projeto 3',
      description: 'Descrição do Projeto 3',
      stack: ['HTML', 'CSS'],
    },
    {
      id: 4,
      title: 'Projeto 4',
      description: 'Descrição do Projeto 4',
      stack: ['React', 'Node.js'],
    },
    {
      id: 5,
      title: 'Projeto 5',
      description: 'Descrição do Projeto 5',
      stack: ['TypeScript', 'Express.js'],
    },
    {
      id: 6,
      title: 'Projeto 6',
      description: 'Descrição do Projeto 6',
      stack: ['React', 'Node.js'],
    },
  ];

  const Projects: React.FC = () => {

  const OPTIONS: EmblaOptionsType = { align: 'start' }
  const SLIDE_COUNT = 6
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


  return (
    <div>
      {/* <div className='embla__container'>
        {projects.map((project) => (
          <div key={project.id} className='embla__slide'>
            <div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <div>
              <ul>
                {project.stack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
      </div> */}
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default Projects;
