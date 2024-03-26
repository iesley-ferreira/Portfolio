import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./RootLayout";
import About from "./components/About";
import Hello from "./components/Home";
import Projects from "./components/Projects";
import SkillSet from "./components/SkillSet";

export const browserRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Hello />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/skills",
          element: <SkillSet />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
      ],
    },
  ],
  { basename: "/" }
);
