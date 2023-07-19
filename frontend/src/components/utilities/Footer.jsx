import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setcurrentYear] = useState(null);
  useEffect(() => {
    setcurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="flex w-full flex-col items-center justify-center gap-3 px-6 py-3 md:h-10 md:flex-row md:justify-between md:px-12 md:py-4">
      footer
    </footer>
  );
}
