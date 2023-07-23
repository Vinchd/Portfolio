import { Routes, Route } from "react-router-dom";

// Pages
import Content from "./pages/Content";
import NotFound from "./pages/NotFound";

// Components
import Header from "./components/utilities/Header";
import NavBar from "./components/utilities/NavBar";
import Footer from "./components/utilities/Footer";

export default function App() {
  return (
    <>
      <Header />
      <div className="scroll-container flex w-full flex-col lg:grid">
        <NavBar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
