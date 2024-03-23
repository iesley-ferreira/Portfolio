import { createBrowserRouter } from "react-router-dom";

import Hello from "./components/Hello";
import About from "./components/Info";
import SkillSet from "./components/SkillSet";
import Projects from "./components/Projects";
import RootLayout from "./RootLayout";

export const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        // path: "home",
        element: <Hello />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "skills",
        element: <SkillSet />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);
