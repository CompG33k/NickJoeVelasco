import React from "react";
import { Jumbotron } from "./migration";
import Container from "react-bootstrap/Container";

const Resume = ({ heading, resumeUrl, downloadUrl }) => {
  const downloadHref = downloadUrl?.trim() ? downloadUrl : resumeUrl;

  return (
    <Jumbotron fluid id="resume" className="bg-white m-0">
      <Container className="py-5">
        <h2 className="display-4 pb-3 text-center">{heading}</h2>

        <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
          <a
            className="btn btn-outline-dark btn-lg"
            href={resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View resume PDF in a new tab"
          >
            View PDF
          </a>

          <a
            className="btn btn-dark btn-lg"
            href={downloadHref}
            download
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Download resume PDF"
          >
            Download PDF
          </a>
        </div>

        {/* Embedded viewer */}
        <div
          style={{
            width: "100%",
            height: "80vh",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.12)",
          }}
        >
          <iframe
            title="Resume PDF"
            src={resumeUrl}
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </div>

        <p className="text-center mt-3 text-muted">
          If the embedded viewer doesn’t load, use the “View PDF” button above.
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Resume;
