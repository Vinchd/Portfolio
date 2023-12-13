import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../utilities/NavBar.jsx";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fakedata = [
      {
        name: "Ravenfeed",
        resume: "Socialmedia",
        image: "thumbnail_ravenfeed.png",
        link: "https://vinchd.github.io/P1-Ravenfeed/",
      },
      {
        name: "Blurtest",
        resume: "Minigame",
        image: "thumbnail_blurtest.png",
        link: "https://blurtestp2.vercel.app/",
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
        link: "https://atelier-inovin.remote-fr-2.wilders.dev/",
      },
    ];
    setProjects(fakedata);
  }, []);

  return (
    <div className="flex">
      <NavBar activeSection="projects" center={"items-center"} />
      <section id="projects" className="scroll-area sm:gap-8">
        <h2>Projets</h2>
        <div className="container flex flex-col xl:h-[500px] xl:flex-row">
          {projects.map((project) => (
            <Link
              to={`${project.link}`}
              key={project.name}
              className="project-card max-h-[100px] md:max-h-none"
              target="_blank"
              style={{
                backgroundImage: `url(/assets/projects_thumbnails/${project.image})`,
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
    </div>
  );
}
