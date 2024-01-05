import { FC } from "react";
import Experience from "./components/Experience";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";

const App: FC = () => {
  return (
    <div className="max-w-screen-md mx-auto">
      <Header />
      <About />
      <Experience />
      <Skills />
    </div>
  );
};

export default App;