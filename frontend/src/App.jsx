import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Components
import NavBar from "./components/utilities/NavBar";
import Footer from "./components/utilities/Footer";

export default function App() {
  return (
    <>
      <NavBar />
      <main className="min-h-[calc(100dvh-45px)] pt-24 md:min-h-[calc(100vh-134px)] md:pt-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
