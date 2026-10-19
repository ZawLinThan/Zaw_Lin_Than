import { useId, useRef, type ReactNode } from "react";
import { resumeViewUrl } from "../data/resume";
import ResumeDownload from "./ResumeDownload";
import ActionIcon from "./ActionIcon";

const ResumeViewer = ({ className, children }: {
  className?: string;
  children: ReactNode;
}) => {
  const dialog = useRef<HTMLDialogElement>(null);
  const headingId = useId();

  return (
    <>
      <button
        type="button"
        className={`resume-trigger ${className ?? ""}`}
        onClick={() => dialog.current?.showModal()}
        aria-haspopup="dialog"
      >
        {children}
      </button>
      <dialog className="resume-dialog" ref={dialog} aria-labelledby={headingId}>
        <div className="resume-toolbar">
          <h2 id={headingId}>Zaw Lin Than — Résumé</h2>
          <div className="resume-toolbar-actions">
            <ResumeDownload className="resume-icon-button" iconOnly>
              <ActionIcon name="download" />
            </ResumeDownload>
            <button type="button" className="resume-icon-button" aria-label="Close résumé" title="Close résumé" onClick={() => dialog.current?.close()}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
                <path d="m6 6 12 12M6 18 18 6" />
              </svg>
            </button>
          </div>
        </div>
        <iframe src={resumeViewUrl} title="Zaw Lin Than’s résumé" loading="lazy" />
      </dialog>
    </>
  );
};

export default ResumeViewer;
