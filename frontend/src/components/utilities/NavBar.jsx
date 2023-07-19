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
      },
    },
    colors: ["#0496FF", "#FFBC42", "#7E6B8F", "#565554", "#D81159"],
  });
  const options = {
    author: " ",
    template: withoutHash,
  };

  const handleClick = (page) => {
    navigate(`/${page}`);
  };

  return (
    <nav className="nav flex h-full max-w-[320px] flex-[1] flex-col items-center justify-center bg-tertiary">
      {/* <Gitgraph options={options} className="hidden">
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
          devBranch.commit("");
          featureBranch.commit({
            subject: "Mon CV",
            onMessageClick() {
              handleClick("cv");
            },
          });
          devBranch.commit("");
          featureBranch.commit({
            subject: "Accueil",
            onMessageClick() {
              handleClick("");
            },
          });
          devBranch.merge(featureBranch, " ");

          mainBranch.merge(devBranch, " ");
        }}
      </Gitgraph> */}
      <Gitgraph options={options} className="hidden">
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
          devBranch.merge(featureBranch, " ");

          featureBranch.commit({
            subject: "Mon CV",
            onMessageClick() {
              handleClick("cv");
            },
          });
          devBranch.merge(featureBranch, " ");

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
    </nav>
  );
}
