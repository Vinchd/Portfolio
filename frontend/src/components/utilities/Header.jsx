export default function Header() {
  return (
    <header className="header fixed z-20 h-24 w-full bg-primary md:sticky">
      <nav className="flex h-full w-full flex-col flex-wrap justify-between px-8 py-3 md:flex-row md:items-center">
        <h1>Vincent Daviaud</h1>
        <button type="button" hidden>
          Admin
        </button>
      </nav>
    </header>
  );
}
