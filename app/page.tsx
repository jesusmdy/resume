import { FC } from "react";
import Experience from "./components/Experience";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from './components/Projects';

const App: FC = () => {
  return (
    <div className="max-w-screen-md mx-auto">
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;