import { saveAs } from "file-saver";
import NavBar from "../utilities/NavBar.jsx";

export default function Cv() {
  const iframeContainerStyle = {
    position: "relative",
    width: "100%",
    height: "600px",
    margin: "0 auto",
    boxShadow: "0 2px 8px 0 rgba(63, 69, 81, 0.16)",
    overflow: "hidden",
    borderRadius: "6px",
    willChange: "transform",
  };

  const iframeStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    border: "none",
    padding: 0,
    margin: 0,
  };

  const pdfFileName = "CV_VincentD.pdf";
  const pdfPath = `/assets/${pdfFileName}`;

  const handleDownload = () => {
    fetch(pdfPath)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, pdfFileName);
      })
      .catch((error) => {
        console.error("Erreur lors du téléchargement du PDF :", error);
      });
  };

  return (
    <div className="flex">
      <NavBar activeSection="cv" center={"items-center"} />
      <section id="cv" className="scroll-area">
        <div className="box flex max-h-[calc(100dvh-226px)] min-h-[calc(100dvh-226px)] w-full min-w-fit max-w-[500px] flex-col items-center justify-center gap-3 py-3">
          <div style={iframeContainerStyle}>
            <iframe
              loading="lazy"
              style={iframeStyle}
              src="https://www.canva.com/design/DAGY7sLmj68/ei_dQbwhZfMN4AHRNMcvgg/view?embed"
              allow="fullscreen"
            ></iframe>
          </div>
          <button className="btn" onClick={handleDownload}>
            Télécharger au format PDF
          </button>
        </div>
      </section>
    </div>
  );
}
