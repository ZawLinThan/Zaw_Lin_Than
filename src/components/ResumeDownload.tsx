import { useState, type ReactNode, type MouseEvent } from "react";
import { resumeFilename, resumePdfUrl } from "../data/resume";

const ResumeDownload = ({
  className,
  children,
  iconOnly = false,
}: {
  className?: string;
  children: ReactNode;
  iconOnly?: boolean;
}) => {
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState(false);

  const download = async (event: MouseEvent<HTMLAnchorElement>) => {
    // Preserve the usual browser behavior for opening a link with modifier keys.
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (downloading) return;
    setDownloading(true);
    setError(false);
    try {
      const response = await fetch(resumePdfUrl, { credentials: "omit" });
      if (!response.ok || !response.headers.get("content-type")?.includes("application/pdf")) {
        throw new Error("PDF export unavailable");
      }
      const url = URL.createObjectURL(await response.blob());
      const link = document.createElement("a");
      link.href = url;
      link.download = resumeFilename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 60_000);
    } catch {
      setError(true);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <>
      <a
        className={className}
        href={resumePdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={download}
        aria-disabled={downloading}
        aria-busy={downloading}
        aria-label={iconOnly ? (downloading ? "Downloading résumé" : "Download résumé") : undefined}
        title={iconOnly ? "Download résumé" : undefined}
      >
        {downloading && !iconOnly ? "Downloading résumé…" : children}
      </a>
      {error && (
        <span role="alert">
          Download failed. Try again or{" "}
          <a href={resumePdfUrl} target="_blank" rel="noopener noreferrer">
            open the PDF directly
          </a>.
        </span>
      )}
    </>
  );
};

export default ResumeDownload;
