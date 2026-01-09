import React from "react";
import Button from "react-bootstrap/Button";

function buildDriveLinks(fileId) {
  // PDF-friendly URLs
  const viewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  const openUrl = `https://drive.google.com/file/d/${fileId}/view`;
  return { viewUrl, downloadUrl, openUrl };
}

export default function ResumeOverlay({ show, onClose, heading, fileId }) {
  const { viewUrl, downloadUrl, openUrl } = buildDriveLinks(fileId);

  // ESC to close
  React.useEffect(() => {
    if (!show) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [show, onClose]);

  // Prevent background scroll while open
  React.useEffect(() => {
    if (!show) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="resume-overlay" role="dialog" aria-modal="true" aria-label={heading}>
      <div className="resume-overlay__backdrop" onClick={onClose} />

      <div className="resume-overlay__panel">
        <div className="resume-overlay__header">
          <div className="resume-overlay__title">
            <h2 className="m-0">{heading || "Resume"}</h2>
            <small className="text-muted d-block">View on page • Download anytime</small>
          </div>

          <div className="resume-overlay__actions">
            <Button variant="outline-dark" href={openUrl} target="_blank" rel="noreferrer noopener">
              Open in new tab
            </Button>

            <Button variant="dark" href={downloadUrl}>
              Download PDF
            </Button>

            {/* BIG close button */}
            <Button
              variant="danger"
              className="resume-overlay__close"
              onClick={onClose}
              aria-label="Close resume"
            >
              ✕ Close
            </Button>
          </div>
        </div>

        <div className="resume-overlay__body">
          <iframe
            title="Resume PDF"
            src={viewUrl}
            className="resume-overlay__iframe"
            loading="lazy"
            allow="autoplay"
          />
        </div>
      </div>
    </div>
  );
}
