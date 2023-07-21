import { NavLink } from "react-router-dom";
import GitHubCalendar from "react-github-calendar";

export default function Home() {
  return (
    <>
      <section className="flex w-full flex-[1] flex-col items-center justify-center lg:min-h-[calc(100dvh-136px)]">
        <div className="justify-center">toto</div>
        <GitHubCalendar username="vinchd" fontSize={8} />
      </section>
    </>
  );
}
