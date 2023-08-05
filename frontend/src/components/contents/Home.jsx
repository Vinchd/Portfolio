import GitHubCalendar from "react-github-calendar";
import Tilt from "react-parallax-tilt";
import NavBar from "../utilities/NavBar.jsx";

export default function Home() {
  return (
    <div className="flex">
      <NavBar activeSection="home" />
      <section id="home" className="scroll-area gap-6">
        {/*Card droite text presentation. Card gauche parcours/compétences avec nombre infini*/}
        <div>
          <div className="flex items-center justify-center gap-5">
            <p className="w-2/3">
              Bienvenue sur mon Portfolio, je m'appel Vincent et je suis
              développeur Web junior à la recherche d'une alternance d'une durée
              d'un an.
            </p>
            <Tilt
              className="parallax-effect-glare-scale"
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.45}
              glareBorderRadius="6px"
              gyroscope={true}
            >
              <div className="inner-element">
                <img
                  src="/assets/icons/skills-icons/js-icon.svg"
                  alt="javascript"
                />
                <img
                  src="/assets/icons/skills-icons/html-icon.svg"
                  alt="html"
                />
                <img src="/assets/icons/skills-icons/css-icon.svg" alt="css" />
                <img
                  src="/assets/icons/skills-icons/react-icon.svg"
                  alt="react"
                />
                <img
                  src="/assets/icons/skills-icons/tailwind-icon.svg"
                  alt="tailwind"
                />
                <img
                  src="/assets/icons/skills-icons/sass-icon.svg"
                  alt="sass"
                />
                <img
                  src="/assets/icons/skills-icons/nodejs-icon.svg"
                  alt="nodejs"
                />
                <img
                  src="/assets/icons/skills-icons/express-icon.svg"
                  alt="express"
                />
                <img
                  src="/assets/icons/skills-icons/mysql-icon.svg"
                  alt="mysql"
                />
              </div>
            </Tilt>
          </div>
          <div className="flex flex-row-reverse items-center justify-center gap-5">
            <p className="w-2/3">
              Bienvenue sur mon Portfolio, je m'appel Vincent et je suis
              développeur Web junior à la recherche d'une alternance d'une durée
              d'un an.
            </p>
            <Tilt
              className="parallax-effect-glare-scale"
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.45}
              glareBorderRadius="6px"
              gyroscope={true}
            >
              <div className="inner-element">
                <img
                  src="/assets/icons/tools-icons/vscode-icon.svg"
                  alt="vscode"
                />
                <img
                  src="/assets/icons/tools-icons/github-icon.svg"
                  alt="github"
                />
                <img src="/assets/icons/tools-icons/git-icon.svg" alt="git" />
                <img src="/assets/icons/tools-icons/npm-icon.svg" alt="npm" />
                <img
                  src="/assets/icons/tools-icons/insomnia-icon.svg"
                  alt="insomnia"
                />
                <img
                  src="/assets/icons/tools-icons/slack-icon.svg"
                  alt="slack"
                />
                <img
                  src="/assets/icons/tools-icons/discord-icon.svg"
                  alt="discord"
                />
                <img
                  src="/assets/icons/tools-icons/figma-icon.svg"
                  alt="figma"
                />
                <img
                  src="/assets/icons/tools-icons/clickup-icon.svg"
                  alt="clickup"
                />
              </div>
            </Tilt>
          </div>
        </div>
        <GitHubCalendar username="vinchd" fontSize={8} blockSize={10} />
      </section>
    </div>
  );
}
