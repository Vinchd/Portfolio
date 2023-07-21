import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fakedata = [
      {
        name: "Ravenfeed",
        resume: "Minigame",
        image: "thumbnail_ravenfeed.png",
        link: "https://www.google.fr/",
      },
      {
        name: "Blurtest",
        resume: "SocialMedia",
        image: "thumbnail_blurtest.png",
        link: "https://www.instagram.com/",
      },
      {
        name: "Choîxteau",
        resume: "Support",
        image: "thumbnail_choixteau.png",
        link: "https://www.youtube.com/",
      },
      {
        name: "Emmaus Connect",
        resume: "SpeedRun",
        image: "thumbnail_emmausconnect.png",
        link: "https://odyssey.wildcodeschool.com/",
      },
      {
        name: "Inovin",
        resume: "Support",
        image: "thumbnail_inovin.png",
        link: "https://tailwindcss.com/",
      },
    ];
    setProjects(fakedata);
  }, []);

  console.log(projects);
  return (
    <section className="flex w-full flex-[1] flex-col items-center justify-center gap-12 lg:min-h-[calc(100dvh-136px)]">
      <h2>Projets</h2>
      <div className="container flex flex-col lg:h-[500px] lg:flex-row ">
        {projects.map((project) => (
          <Link
            to={`${project.link}`}
            key={project.name}
            className="project-card"
            style={{
              backgroundImage: `url("/assets/icons/${project.image}")`,
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
