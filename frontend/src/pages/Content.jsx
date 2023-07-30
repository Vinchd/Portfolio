import Home from "../components/contents/Home";
import Contact from "../components/contents/Contact";
import Cv from "../components/contents/Cv.jsx";
import Projects from "../components/contents/Projects.jsx";

export default function Content() {
  return (
    <>
      <Home />
      <Projects />
      {/*<ProjectSwiper />*/}
      <Cv />
      <Contact />
    </>
  );
}
