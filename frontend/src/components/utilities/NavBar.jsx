import { useNavigate } from "react-router-dom";
import { Gitgraph, templateExtend, TemplateName } from "@gitgraph/react";

export default function NavBar() {
  const navigate = useNavigate();

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
    },
    colors: ["#415575", "#238636", "#7699cf", "#565554", "#D81159"],
  });
  const options = {
    author: " ",
    template: withoutHash,
  };

  const handleClick = (page) => {
    navigate(`/${page}`);
  };

  return (
    <nav className="nav hidden h-full max-w-[320px] flex-[1] flex-col items-center justify-center bg-tertiary lg:flex">
      {/* <Gitgraph options={options} className="hidden">
        {(gitgraph) => {
          const mainBranch = gitgraph.branch("main");
          mainBranch.commit("");
          const devBranch = gitgraph.branch("dev");

          devBranch.commit("");
          const featureBranch = gitgraph.branch("feature");
          featureBranch
            .commit({
              subject: "Contact",
              onMessageClick() {
                handleClick("contact");
              },
            })
            .commit({
              subject: "Mon CV",
              onMessageClick() {
                handleClick("cv");
              },
            })
            .commit({
              subject: "Accueil",
              onMessageClick() {
                handleClick("");
              },
            });
          devBranch.merge(featureBranch, " ");

          mainBranch.merge(devBranch, " ");
        }}
      </Gitgraph> */}
      {window.innerHeight > 790 ? (
        <Gitgraph options={options}>
          {(gitgraph) => {
            const mainBranch = gitgraph.branch("main");
            mainBranch.commit("");
            const devBranch = gitgraph.branch("dev");

            devBranch.commit("");
            const featureBranch = gitgraph.branch("feature");
            featureBranch.commit({
              subject: "Contact",
              onMessageClick() {
                handleClick("contact");
              },
            });
            // devBranch.merge(featureBranch, "zzz ");

            featureBranch.commit({
              subject: "Mon CV",
              onMessageClick() {
                handleClick("cv");
              },
            });
            devBranch.commit({
              subject: "Projets",
              onMessageClick() {
                handleClick("projects");
              },
            });

            featureBranch.commit({
              subject: "Accueil",
              onMessageClick() {
                handleClick("");
              },
            });
            devBranch.merge(featureBranch, " ");

            mainBranch.merge(devBranch, " ");
          }}
        </Gitgraph>
      ) : (
        <Gitgraph options={options}>
          {(gitgraph) => {
            const mainBranch = gitgraph.branch("main");
            mainBranch.commit("");
            const devBranch = gitgraph.branch("dev");

            devBranch.commit("");
            const featureBranch = gitgraph.branch("feature");
            featureBranch
              .commit({
                subject: "Contact",
                onMessageClick() {
                  handleClick("contact");
                },
              })
              .commit({
                subject: "Mon CV",
                onMessageClick() {
                  handleClick("cv");
                },
              })
              .commit({
                subject: "Accueil",
                onMessageClick() {
                  handleClick("");
                },
              });
            devBranch.merge(featureBranch, " ");

            mainBranch.merge(devBranch, " ");
          }}
        </Gitgraph>
      )}
    </nav>
  );
}
