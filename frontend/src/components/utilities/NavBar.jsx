import { Gitgraph, templateExtend, TemplateName } from "@gitgraph/react";

export default function NavBar() {
  const withoutHash = templateExtend(TemplateName.Metro, {
    // branch: {
    //   label: {
    //     display: false,
    //   },
    // },
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
    mode: "compact",
  };

  const handleClick = () => {
    // Redirige vers la route /pages/Home
    window.location.replace("/pages/NotFound");
  };

  return (
    <nav className="flex max-w-[320px] flex-[1] flex-col">
      {/* <div>Accueil</div>
      <div>Mon CV</div>
      <div>Contact</div> */}
      <Gitgraph options={options}>
        {(gitgraph) => {
          const mainBranch = gitgraph.branch({
            name: <a href="https://www.google.fr/">Accueil</a>,
          });
          mainBranch.commit();
          const devBranch = gitgraph.branch({
            name: <a href="https://www.google.fr/">Mon CV</a>,
          });

          devBranch.commit({
            subject: "test23",
            onMessageClick() {
              handleClick();
            },
          });
          const featureBranch = gitgraph.branch({
            name: <a href="https://www.google.fr/">Contact</a>,
          });
          featureBranch.commit().commit();
          devBranch.merge(featureBranch);

          mainBranch.merge(devBranch);
        }}
      </Gitgraph>
    </nav>
  );
}
