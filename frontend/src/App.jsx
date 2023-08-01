import { Route, Routes } from "react-router-dom";
import Content from "./pages/Content";
import NotFound from "./pages/NotFound";
import Header from "./components/utilities/Header";

export default function App() {
  return (
    <>
      <Header />
      <div className="scroll-container flex w-full flex-col">
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
