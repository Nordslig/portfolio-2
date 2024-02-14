import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Header from "./components/header/Header";

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Header />
      <main>
        <Projects />
        <Skills />
        <About />
      </main>
      <footer>&#169; Bartosz Pindel 2024-{currentYear}</footer>
    </>
  );
}

export default App;
