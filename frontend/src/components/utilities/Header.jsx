export default function Header() {
  return (
    <header className="fixed z-20 h-24 w-full bg-primary md:sticky">
      <nav className="flex h-full w-full flex-col flex-wrap justify-between px-8 py-3 md:flex-row md:items-center">
        <h1>Vincent Daviaud</h1>
        <ul className="flex">
          <li>Accueil</li>
          <li>Mon CV</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
