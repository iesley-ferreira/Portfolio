import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import About from "./components/About";
import Hello from "./components/Home";
import Projects from "./components/Projects";
import SkillSet from "./components/SkillSet";
import RootLayout from "./RootLayout";

export const browserRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Hello />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<SkillSet />} />
      <Route path="/projects" element={<Projects />} />
    </Route>
  )
);
