export default function BurgerMenu({ active, setActive }) {
  const handleClick = () => {
    setActive(
      active === "translate-y-[-150%]" ? "translate-y-0" : "translate-y-[-150%]"
    );
  };

  return (
    <>
      <label className="burger absolute right-5 flex flex-col lg:hidden">
        <input
          type="checkbox"
          onChange={handleClick}
          checked={active === "translate-y-0"}
        />
        <span className="burgerline">{}</span>
        <span className="burgerline">{}</span>
        <span className="burgerline">{}</span>
      </label>
    </>
  );
}
