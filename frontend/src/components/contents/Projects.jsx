import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fakedata = [
      {
        name: "Ravenfeed",
        resume: "Socialmedia",
        image: "thumbnail_ravenfeed.png",
        link: "https://github.com/Vinchd/Projet1_Ravenclaw",
      },
      {
        name: "Blurtest",
        resume: "Minigame",
        image: "thumbnail_blurtest.png",
        link: "https://blurtest.remote-fr-2.wilders.dev/",
      },
      {
        name: "Choîxteau",
        resume: "Travel",
        image: "thumbnail_choixteau.png",
        link: "https://choixteau.netlify.app/",
      },
      {
        name: "Emmaus Connect",
        resume: "Support",
        image: "thumbnail_emmausconnect.png",
        link: "https://github.com/Vinchd/Hackaton-2",
      },
      {
        name: "Inovin",
        resume: "Support",
        image: "thumbnail_inovin.png",
        link: "https://github.com/WildCodeSchool/2023-02-JS-RemoteFR-JSWizards-P3-Team-Slytherin",
      },
    ];
    setProjects(fakedata);
  }, []);

  console.log(projects);
  return (
    <section id="projects" className="scroll-area">
      <h2>Projets</h2>
      <div className="container flex flex-col lg:h-[500px] lg:flex-row ">
        {projects.map((project) => (
          <Link
            to={`${project.link}`}
            key={project.name}
            className="project-card"
            target="_blank"
            style={{
              backgroundImage: `url(${
                import.meta.env.VITE_BACKEND_URL
              }/uploads/${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="content">
              <h2>{project.name}</h2>
              <span>{project.resume}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
