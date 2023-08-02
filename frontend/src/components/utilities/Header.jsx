export default function Header() {
  const scrollTop = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="header sticky top-0 z-20 h-24 w-full bg-primary">
      <nav className="flex h-full w-full flex-row flex-wrap items-center justify-between px-8 py-3">
        <h1 className="cursor-pointer whitespace-nowrap" onClick={scrollTop}>
          Vincent Daviaud
        </h1>
        <button type="button" hidden>
          Admin
        </button>
      </nav>
    </header>
  );
}
