import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setcurrentYear] = useState(null);
  useEffect(() => {
    setcurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="flex w-full flex-col items-center justify-center gap-3 px-12 py-3 text-2xs opacity-50 md:h-10 md:flex-row md:justify-end md:py-4">
      &copy; {currentYear} Vincent Daviaud
    </footer>
  );
}
