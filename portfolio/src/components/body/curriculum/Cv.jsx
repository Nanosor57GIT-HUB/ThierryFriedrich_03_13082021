import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/thumbnail/lib/styles/index.css";
import AOS from "aos";
import "aos/dist/aos.css";


pdfjs.GlobalWorkerOptions.workerSrc = `pdf.worker.min.js`;

AOS.init({
  duration: 800,
  once: "false",
});

const PdfViewer = () => {

  const pdfUrl = "pdf/CVFriedrichThierry.pdf"; // URL du PDF à afficher

  const handleOpenPdf = () => {
    window.open(pdfUrl, "_blank");
  };
  

  return (
    <div className="containerPdf" data-aos="zoom-in">
      <div className="blockPdf">
        <Document file={"pdf/CVFriedrichThierry.pdf"}>
          <Page pageNumber={1} width={260} />
        </Document>
      </div>
      <div
        className="containerBtnCV"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-easing="ease-in-sine"
      >
        <button className="lookCVbtn" onClick={handleOpenPdf}>
          Voir mon CV
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;
