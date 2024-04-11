import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButtons";
import ProjectCard from "./ProjectCard";
import "./styles/Projects.css";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  ref: string;
  stack: string[];
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const projects: Project[] = [
    {
      id: 1,
      title: "MedQuest",
      description:
        "Um aplicativo de perguntas e respostas para estudantes de medicina.",
      image: "/MedQuest_resized.png",
      ref: "https://medquest.vercel.app",
      stack: ["React", "TypeScript", "Node.js", "Redux", "css", "Vercel"],
    },
    {
      id: 2,
      title: "Trybe Tunes",
      description:
        "Um aplicativo de musicas para ouvir a prévia de seus artistas favoritos.",
      image: "/TrybeTunes-img.png",
      ref: "https://trybe-tunes-iesley-ferreira.vercel.app/",
      stack: ["React", "Node.js", "css", "Vercel"],
    },
    {
      id: 3,
      title: "Lottery-Frontend",
      description: "Um aplicativo de avaliação para uma casa lotérica.",
      image: "/lottery2_resized.png",
      ref: "https://medquest.vercel.app",
      stack: ["React", "TypeScript", "Node.js", "css", "Vercel"],
    },
    {
      id: 4,
      title: "Project4",
      description:
        "Um aplicativo de perguntas e respostas para estudantes de medicina.",
      image: "../src/assets/images/MedQuest_resized.png",
      ref: "https://medquest.vercel.app",
      stack: ["React", "TypeScript", "Node.js", "Redux", "css", "Vercel"],
    },
    {
      id: 5,
      title: "Project5",
      description:
        "Um aplicativo de perguntas e respostas para estudantes de medicina.",
      image: "../src/assets/images/MedQuest_resized.png",
      ref: "https://medquest.vercel.app",
      stack: ["React", "TypeScript", "Node.js", "Redux", "css", "Vercel"],
    },
    {
      id: 6,
      title: "Project6",
      description:
        "Um aplicativo de perguntas e respostas para estudantes de medicina.",
      image: "../src/assets/images/MedQuest_resized.png",
      ref: "https://medquest.vercel.app",
      stack: ["React", "TypeScript", "Node.js", "Redux", "css", "Vercel"],
    },
  ];

  return (
    <section className="embla animate__animated animate__flipInX">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
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
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
