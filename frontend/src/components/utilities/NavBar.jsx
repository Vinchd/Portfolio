import { Gitgraph, templateExtend, TemplateName } from "@gitgraph/react";
import React, { useEffect, useState } from "react";

export default function NavBar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [value, setValue] = useState(81);
  const [graphKey, setGraphKey] = useState(0);

  const withoutHash = templateExtend(TemplateName.Metro, {
    branch: {
      label: {
        display: false,
      },
      lineWidth: 10,
    },
    commit: {
      message: {
        displayHash: false,
        displayAuthor: false,
        font: "normal 14pt Poppins",
        color: "#E6EDF3",
      },
      spacing: value,
    },
    colors: ["#415575", "#238636", "#7699CF", "#565554", "#D81159"],
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

  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      const newHeight = window.innerHeight;
      setWindowHeight(newHeight);
      if (newHeight > 690 && newHeight < 700) {
        setGraphKey((prevKey) => prevKey + 1);
        setValue(40);
      }
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.innerHeight < 700) {
          setGraphKey((prevKey) => prevKey + 1);
        }
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [windowHeight]);

  return (
    <nav className="nav hidden h-full min-w-[350px] max-w-[350px] flex-col items-center bg-tertiary lg:flex">
      <Gitgraph key={graphKey} options={options}>
        {(gitgraph) => {
          const mainBranch = gitgraph.branch("main");
          mainBranch.commit("");
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
        }}
      </Gitgraph>
      {/*<Gitgraph key={graphKey} options={options}>*/}
      {/*  {(gitgraph) => {*/}
      {/*    const mainBranch = gitgraph.branch("main");*/}
      {/*    mainBranch.commit("");*/}
      {/*    mainBranch.commit("");*/}
      {/*    const devBranch = gitgraph.branch("dev");*/}

      {/*    devBranch.commit("");*/}
      {/*    const featureBranch = gitgraph.branch("feature");*/}
      {/*    featureBranch.commit({*/}
      {/*      subject: "Accueil",*/}
      {/*      onMessageClick() {*/}
      {/*        handleClick("home");*/}
      {/*      },*/}
      {/*    });*/}
      {/*    devBranch.commit({*/}
      {/*      subject: "Projets",*/}
      {/*      onMessageClick() {*/}
      {/*        handleClick("projects");*/}
      {/*      },*/}
      {/*    });*/}
      {/*    featureBranch.commit({*/}
      {/*      subject: "Mon CV",*/}
      {/*      onMessageClick() {*/}
      {/*        handleClick("cv");*/}
      {/*      },*/}
      {/*    });*/}
      {/*    featureBranch.commit({*/}
      {/*      subject: "Contact",*/}
      {/*      onMessageClick() {*/}
      {/*        handleClick("contact");*/}
      {/*      },*/}
      {/*    });*/}
      {/*    // devBranch.merge(featureBranch, "zzz ");*/}
      {/*    devBranch.merge(featureBranch, " ");*/}
      {/*    mainBranch.merge(devBranch, " ");*/}

      {/*    mainBranch.commit("");*/}
      {/*    mainBranch.commit("");*/}
      {/*  }}*/}
      {/*</Gitgraph>*/}
      {/*<Gitgraph options={options}>*/}
      {/*  {(gitgraph) => {*/}
      {/*    const mainBranch = gitgraph.branch("main");*/}
      {/*    mainBranch.commit("");*/}

      {/*    const devBranch = gitgraph.branch("dev");*/}

      {/*    devBranch.commit("");*/}
      {/*    const featureBranch = gitgraph.branch("feature");*/}
      {/*    featureBranch.commit({*/}
      {/*      subject: "Accueil",*/}
      {/*      onMessageClick() {*/}
      {/*        handleClick("home");*/}
      {/*      },*/}
      {/*    });*/}
      {/*    devBranch.commit({*/}
      {/*      subject: "Projets",*/}
      {/*      onMessageClick() {*/}
      {/*        handleClick("projects");*/}
      {/*      },*/}
      {/*    });*/}
      {/*    featureBranch.commit({*/}
      {/*      subject: "Mon CV",*/}
      {/*      onMessageClick() {*/}
      {/*        handleClick("cv");*/}
      {/*      },*/}
      {/*    });*/}
      {/*    featureBranch.commit({*/}
      {/*      subject: "Contact",*/}
      {/*      onMessageClick() {*/}
      {/*        handleClick("contact");*/}
      {/*      },*/}
      {/*    });*/}
      {/*    // devBranch.merge(featureBranch, "zzz ");*/}
      {/*    devBranch.merge(featureBranch, " ");*/}
      {/*    mainBranch.merge(devBranch, " ");*/}

      {/*    mainBranch.commit("");*/}
      {/*    mainBranch.commit("");*/}
      {/*  }}*/}
      {/*</Gitgraph>*/}
      {/*<Gitgraph options={options}>*/}
      {/*  {(gitgraph) => {*/}
      {/*    const mainBranch = gitgraph.branch("main");*/}
      {/*    mainBranch.commit("");*/}
      {/*    mainBranch.commit("");*/}
      {/*    const devBranch = gitgraph.branch("dev");*/}

      {/*    devBranch.commit("");*/}
      {/*    const featureBranch = gitgraph.branch("feature");*/}
      {/*    featureBranch.commit({*/}
      {/*      subject: "Accueil",*/}
      {/*      onMessageClick() {*/}
      {/*        handleClick("home");*/}
      {/*      },*/}
      {/*    });*/}
      {/*    devBranch.commit({*/}
      {/*      subject: "Projets",*/}
      {/*      onMessageClick() {*/}
      {/*        handleClick("projects");*/}
      {/*      },*/}
      {/*    });*/}
      {/*    featureBranch.commit({*/}
      {/*      subject: "Mon CV",*/}
      {/*      onMessageClick() {*/}
      {/*        handleClick("cv");*/}
      {/*      },*/}
      {/*    });*/}
      {/*    featureBranch.commit({*/}
      {/*      subject: "Contact",*/}
      {/*      onMessageClick() {*/}
      {/*        handleClick("contact");*/}
      {/*      },*/}
      {/*    });*/}
      {/*    // devBranch.merge(featureBranch, "zzz ");*/}
      {/*    devBranch.merge(featureBranch, " ");*/}
      {/*    mainBranch.merge(devBranch, " ");*/}
      {/*  }}*/}
      {/*</Gitgraph>*/}
    </nav>
  );
}
