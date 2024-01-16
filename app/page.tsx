import { FC } from "react";
import Experience from "./components/Experience";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from './components/Projects';

const App: FC = () => {
  return (
    <section className="dark:bg-zinc-900 dark:text-white h-screen overflow-auto relative">
      <div className="max-w-screen-md mx-8 md:mx-auto">
        <Header />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </div>
    </section>
  );
};

export default App;