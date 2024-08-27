import "./App.scss";
import React from "react";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
