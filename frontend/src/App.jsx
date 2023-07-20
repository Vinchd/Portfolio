import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";

// Components
import Header from "./components/utilities/Header";
import NavBar from "./components/utilities/NavBar";
import Footer from "./components/utilities/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="flex h-full items-center justify-center pt-24 lg:h-[calc(100vh-96px)] lg:pt-0">
        <NavBar />
        <div className="mt-6 flex flex-[2] flex-col items-center justify-center px-6 lg:min-h-[calc(100dvh-136px)] lg:mt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="projects" element={<Projects />} />
          </Routes>
          <Footer />
        </div>
      </main>
    </>
  );
}
