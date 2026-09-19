export type ProjectStatus = 'In progress' | 'Done'
export default function StatusBadge({ status }: { status: ProjectStatus }) {
  return <span className={`status-badge ${status === 'Done' ? 'done' : 'in-progress'}`}>
<span aria-hidden="true">●</span> {status}</span>
}
