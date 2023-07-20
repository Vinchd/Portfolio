import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fakedata = [
      {
        name: "Projet 1",
        resume: "Minigame",
        image:
          "https://images.pexels.com/photos/17568716/pexels-photo-17568716/free-photo-of-new-york.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "https://www.google.fr/",
      },
      {
        name: "Projet 2",
        resume: "SocialMedia",
        image:
          "https://images.pexels.com/photos/16745025/pexels-photo-16745025/free-photo-of-ville-monument-building-fenetres.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "https://www.instagram.com/",
      },
      {
        name: "Projet 3",
        resume: "Support",
        image:
          "https://images.pexels.com/photos/16971317/pexels-photo-16971317/free-photo-of-femme-robe-grand-monument.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "https://www.youtube.com/",
      },
      {
        name: "Hackathon",
        resume: "SpeedRun",
        image:
          "https://images.pexels.com/photos/17530670/pexels-photo-17530670/free-photo-of-lumineux-ville-aube-soleil-couchant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "https://www.youtube.com/",
      },
      {
        name: "Hackathon 2",
        resume: "Support",
        image:
          "https://images.pexels.com/photos/17494608/pexels-photo-17494608/free-photo-of-mer-plage-vacances-eau.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "https://www.youtube.com/",
      },
    ];
    setProjects(fakedata);
  }, []);

  console.log(projects);
  return (
    <section className="flex w-full flex-[1] flex-col items-center justify-center lg:min-h-[calc(100dvh-136px)]">
      <div className="container flex flex-col lg:h-[500px] lg:flex-row ">
        {projects.map((project) => (
          <div
            key={project.name}
            className="project-card"
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="content">
              <h2>{project.name}</h2>
              <span>{project.resume}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
