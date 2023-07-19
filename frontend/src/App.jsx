import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Components
import Header from "./components/utilities/Header";
import NavBar from "./components/utilities/NavBar";
import Footer from "./components/utilities/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="flex h-full items-center pt-24 md:h-[calc(100vh-96px)] md:pt-0">
        <NavBar />
        <div className="flex flex-[2] flex-col items-center justify-center md:min-h-[calc(100dvh-136px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
