import GitHubCalendar from "react-github-calendar";
import Tilt from "react-parallax-tilt";
import NavBar from "../utilities/NavBar.jsx";

export default function Home() {
  return (
    <div className="flex">
      <NavBar activeSection="home" />
      <section id="home" className="scroll-area">
        {/*Card droite text presentation. Card gauche parcours/compétences avec nombre infini*/}
        <div>
          <div className="flex items-center">
            <p className="w-2/3">
              Bienvenue sur mon Portfolio, je m'appel Vincent et je suis
              développeur Web junior à la recherche d'une alternance d'une durée
              d'un an.
            </p>
            <Tilt
              className="parallax-effect-glare-scale"
              perspective={500}
              glareEnable={false}
              glareMaxOpacity={0.45}
              gyroscope={true}
            >
              <div className="inner-element">
                <div>React</div>
                <div>Parallax Tilt</div>
                <div>👀</div>
              </div>
            </Tilt>
          </div>
          <div className="flex translate-y-[-50px] flex-row-reverse items-center">
            <p className="w-2/3">
              Bienvenue sur mon Portfolio, je m'appel Vincent et je suis
              développeur Web junior à la recherche d'une alternance d'une durée
              d'un an.
            </p>
            <Tilt
              className="parallax-effect-glare-scale"
              perspective={500}
              glareEnable={false}
              glareMaxOpacity={0.45}
              gyroscope={true}
            >
              <div className="inner-element">
                <div>React</div>
                <div>Parallax Tilt</div>
                <div>👀</div>
              </div>
            </Tilt>
          </div>
        </div>
        <GitHubCalendar username="vinchd" fontSize={8} />
      </section>
    </div>
  );
}
