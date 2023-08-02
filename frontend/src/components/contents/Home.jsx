import GitHubCalendar from "react-github-calendar";
import NavBar from "../utilities/NavBar.jsx";

export default function Home() {
  return (
    <div className="flex">
      <NavBar activeSection="home" />
      <section id="home" className="scroll-area">
        <div className="justify-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sed,
          fugiat placeat quae reprehenderit quisquam nulla vitae, nemo quod
          expedita assumenda eveniet odio suscipit corrupti. Laboriosam maiores
          veritatis cum id illo dicta nostrum molestiae temporibus optio, ab
          expedita suscipit dolore autem excepturi consequatur deserunt
          necessitatibus nobis corrupti incidunt. At, distinctio!
        </div>
        <GitHubCalendar username="vinchd" fontSize={8} />
      </section>
    </div>
  );
}
