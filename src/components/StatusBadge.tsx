export type ProjectStatus = "In progress" | string;

const StatusBadge = ({ status }: { status: ProjectStatus }) => {
  return (
    <span
      className={`status-badge ${status === "In progress" ? "in-progress" : "done"}`}
    >
      <span aria-hidden="true">●</span> {status}
    </span>
  );
};

export default StatusBadge;
