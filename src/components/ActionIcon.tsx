interface ActionIconProps {
  name: 'arrow' | 'download' | 'linkedin' | 'github'
}

const ActionIcon = ({ name }: ActionIconProps) => {
  const paths = {
    arrow: <path d="M7 17 17 7M7 7h10v10" />,
    download: <><path d="M12 3v12m-5-5 5 5 5-5" /><path d="M5 16v4h14v-4" /></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7m0-10v.01M11 17v-7m0 3a3 3 0 0 1 6 0v4" /></>,
    github: <path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7m12 5v-3.4c0-1 .1-1.5-.5-2.1 3.1-.4 6.3-1.5 6.3-6.9a5.4 5.4 0 0 0-1.5-3.7c.2-.4.6-1.8-.1-3.6 0 0-1.2-.4-3.8 1.4a13 13 0 0 0-6.8 0C6 1.2 4.8 1.6 4.8 1.6c-.7 1.8-.3 3.2-.1 3.6a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.2 6.5 6.3 6.9-.6.6-.6 1.2-.5 2.1v3.4" />,
  }

  return <svg className="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

export default ActionIcon
