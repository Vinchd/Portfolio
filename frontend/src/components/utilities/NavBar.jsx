import { Gitgraph, templateExtend, TemplateName } from "@gitgraph/react";
import React, { useEffect, useState } from "react";

export default function NavBar() {
  const withoutHash = templateExtend(TemplateName.Metro, {
    branch: {
      label: {
        display: false,
      },
    },
    commit: {
      message: {
        displayHash: false,
        displayAuthor: false,
        font: "normal 14pt Poppins",
        color: "#E6EDF3",
      },
      // spacing: 60,
    },
    colors: ["#415575", "#238636", "#7699cf", "#565554", "#D81159"],
  });
  const options = {
    author: " ",
    template: withoutHash,
    orientation: "vertical-reverse",
  };

  const handleClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="nav hidden h-full min-w-[350px] max-w-[350px] flex-col items-center justify-center bg-tertiary lg:flex">
      <Gitgraph options={options}>
        {(gitgraph) => {
          const mainBranch = gitgraph.branch("main");
          mainBranch.commit("");
          const devBranch = gitgraph.branch("dev");

          devBranch.commit("");
          const featureBranch = gitgraph.branch("feature");
          featureBranch.commit({
            subject: "Accueil",
            onMessageClick() {
              handleClick("home");
            },
          });
          devBranch.commit({
            subject: "Projets",
            onMessageClick() {
              handleClick("projects");
            },
          });
          featureBranch.commit({
            subject: "Mon CV",
            onMessageClick() {
              handleClick("cv");
            },
          });
          featureBranch.commit({
            subject: "Contact",
            onMessageClick() {
              handleClick("contact");
            },
          });
          // devBranch.merge(featureBranch, "zzz ");

          devBranch.merge(featureBranch, " ");
          mainBranch.merge(devBranch, " ");

          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
          mainBranch.commit("");
        }}
      </Gitgraph>
    </nav>
  );
}
