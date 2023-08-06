import GitHubCalendar from "react-github-calendar";
import Tilt from "react-parallax-tilt";
import { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import NavBar from "../utilities/NavBar.jsx";

export default function Home() {
  const [resetCounter, setResetCounter] = useState(false);

  const { number } = useSpring({
    from: { number: 100 },
    to: { number: resetCounter ? 100 : 1000 },
    delay: 800,
    config: { mass: 1, tension: 20, friction: 20 },
    reset: resetCounter,
  });

  useEffect(() => {
    if (!resetCounter) {
      const timeoutId = setTimeout(() => {
        setResetCounter(true);
      }, 10000);

      return () => clearTimeout(timeoutId);
    }
    if (resetCounter) {
      const timeoutId = setTimeout(() => {
        setResetCounter(false);
      }, 200);

      return () => clearTimeout(timeoutId);
    }
  }, [resetCounter]);
  return (
    <div className="flex">
      <NavBar activeSection="home" />
      <section id="home" className="scroll-area gap-6">
        {/*Card droite text presentation. Card gauche parcours/compétences avec nombre infini*/}
        <div className="flex flex-col gap-6 text-justify leading-8 max-mobile:text-[12px] max-mobile:leading-5">
          <div className="flex items-center justify-center gap-5">
            <div className="w-2/3">
              Bienvenue sur mon Portfolio, je m'appel Vincent et je suis
              développeur Web junior à la recherche d'une alternance d'une durée
              d'un an.
            </div>
            <Tilt
              className="parallax-effect-glare-scale sm:p-[24px]"
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.45}
              glareBorderRadius="4px"
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
            <div className="w-2/3">
              Après m'être pris de passion pour la programmation, je me suis
              formé à la WildCodeSchool ayant pour but d'en faire mon métier.{" "}
              <animated.div className="inline">
                {number.to((n) => n.toFixed(0))}
              </animated.div>{" "}
              mercis à Anthony Gorski et à tous mes collègues pour cette
              expérience et ces moments passés.
            </div>
            <Tilt
              className="parallax-effect-glare-scale sm:p-[24px]"
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.45}
              glareBorderRadius="4px"
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
