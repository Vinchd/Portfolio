import { Gitgraph } from "@gitgraph/react";
import React from "react";

const NavHome = ({ graphKey, options, handleClick }) => {
  return (
    <Gitgraph key={graphKey} options={options}>
      {(gitgraph) => {
        const mainBranch = gitgraph.branch("main");
        mainBranch.commit("");
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
        devBranch.commit({
          subject: "Mon CV",
          onMessageClick() {
            handleClick("cv");
          },
        });
        devBranch.commit({
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
        // mainBranch.commit("");
      }}
    </Gitgraph>
  );
};

const NavProjects = ({ graphKey, options, handleClick }) => {
  return (
    <Gitgraph key={graphKey} options={options}>
      {(gitgraph) => {
        const mainBranch = gitgraph.branch("main");
        mainBranch.commit("");
        mainBranch.commit("");
        mainBranch.commit("");
        const devBranch = gitgraph.branch("dev");

        devBranch.commit("");
        const featureBranch = gitgraph.branch("feature");
        devBranch.commit({
          subject: "Accueil",
          onMessageClick() {
            handleClick("home");
          },
        });
        featureBranch.commit({
          subject: "Projets",
          onMessageClick() {
            handleClick("projects");
          },
        });
        devBranch.commit({
          subject: "Mon CV",
          onMessageClick() {
            handleClick("cv");
          },
        });
        devBranch.commit({
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
  );
};
const NavCv = ({ graphKey, options, handleClick }) => {
  return (
    <Gitgraph key={graphKey} options={options}>
      {(gitgraph) => {
        const mainBranch = gitgraph.branch("main");
        mainBranch.commit("");
        mainBranch.commit("");
        mainBranch.commit("");
        const devBranch = gitgraph.branch("dev");

        devBranch.commit("");
        const featureBranch = gitgraph.branch("feature");
        devBranch.commit({
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
        devBranch.commit({
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
  );
};

const NavContact = ({ graphKey, options, handleClick }) => {
  return (
    <Gitgraph key={graphKey} options={options}>
      {(gitgraph) => {
        const mainBranch = gitgraph.branch("main");
        mainBranch.commit("");
        mainBranch.commit("");
        mainBranch.commit("");
        const devBranch = gitgraph.branch("dev");

        devBranch.commit("");
        const featureBranch = gitgraph.branch("feature");
        devBranch.commit({
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
        devBranch.commit({
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
  );
};

export default NavHome;
export { NavProjects, NavCv, NavContact };
