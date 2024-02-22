import "./App.css";
import About from "./components/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Projects />
        <Skills />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
