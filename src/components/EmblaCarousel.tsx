import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButtons'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import './styles/Projects.css'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

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

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {projects.map((project) => (
            <div className="embla__slide Project-card" key={project.id}>
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
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
