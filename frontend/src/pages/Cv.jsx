export default function Cv() {
  const iframeContainerStyle = {
    position: "relative",
    width: "430px",
    height: "600px",
    margin: "0 auto",
    boxShadow: "0 2px 8px 0 rgba(63, 69, 81, 0.16)",
    marginTop: "1.6em",
    marginBottom: "0.9em",
    overflow: "hidden",
    borderRadius: "8px",
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

  return (
    <section className="flex w-full flex-[1] flex-col items-center justify-center lg:min-h-[calc(100dvh-136px)]">
      <div className="pdfcontainer flex w-[60%] min-w-fit items-center justify-center bg-tertiary lg:min-h-[calc(100dvh-226px)]">
        <div style={iframeContainerStyle}>
          <iframe
            loading="lazy"
            style={iframeStyle}
            src="https://www.canva.com/design/DAFiQW2naKQ/view?embed"
            allow="fullscreen"
          ></iframe>
        </div>
      </div>
      <a
        href="https://www.canva.com/design/DAFiQW2naKQ/view?utm_content=DAFiQW2naKQ&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
        target="_blank"
        rel="noopener"
      >
        CV Vincent
      </a>
    </section>
  );
}
