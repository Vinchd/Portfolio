import { saveAs } from "file-saver";

export default function Cv() {
  const iframeContainerStyle = {
    position: "relative",
    width: "430px",
    height: "600px",
    margin: "0 auto",
    boxShadow: "0 2px 8px 0 rgba(63, 69, 81, 0.16)",
    // marginTop: "1.6em",
    // marginBottom: "0.9em",
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

  const handleDownload = () => {
    // Mettez ici le nom de votre fichier PDF
    const pdfFileName = "CV_VincentD.pdf";

    // Construisez le chemin complet vers le fichier PDF
    const pdfPath = `${
      import.meta.env.VITE_BACKEND_URL
    }/uploads/${pdfFileName}`;

    // Effectuez une requête HTTP pour récupérer le contenu du fichier PDF
    fetch(pdfPath)
      .then((response) => response.blob())
      .then((blob) => {
        // Utilisez file-saver pour télécharger le fichier PDF
        saveAs(blob, pdfFileName);
      })
      .catch((error) => {
        console.error("Erreur lors du téléchargement du PDF :", error);
      });
  };

  return (
    <section id="cv" className="scroll-area">
      <div className="box flex w-[60%] min-w-fit flex-col items-center justify-center gap-3 bg-tertiary py-3 lg:max-h-[calc(100dvh-226px)] lg:min-h-[calc(100dvh-226px)]">
        <div style={iframeContainerStyle}>
          <iframe
            loading="lazy"
            style={iframeStyle}
            src="https://www.canva.com/design/DAFiQW2naKQ/view?embed"
            allow="fullscreen"
          ></iframe>
        </div>
        <button className="btn" onClick={handleDownload}>
          Télécharger au format PDF
        </button>
      </div>
    </section>
  );
}
