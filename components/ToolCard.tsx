import Link from 'next/link';
import { ReactNode } from 'react';

type ToolCardProps = {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
  chip: string;
  chipColor: 'red' | 'orange' | 'cyan' | 'purple' | 'green';
};

const cardColorMap = {
  red: 'card-ytminia',
  orange: 'card-pdf',
  cyan: 'card-script',
  purple: 'card-prenom',
  green: 'card-piloto',
};

export default function ToolCard({ href, icon, title, description, chip, chipColor }: ToolCardProps) {
  const glowClass = cardColorMap[chipColor] || '';

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`tool-card group ${glowClass}`}
    >
      <div className="tool-header flex justify-between">
        <div className="tool-icon" style={{ backgroundColor: `rgba(var(--${chipColor}-rgb, 255, 255, 255), 0.12)` }}>
          {icon}
        </div>
        <div className="tool-arrow opacity-0 group-hover:opacity-100 transition duration-300">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="tool-name font-bold mt-2">{title}</h3>
        <p className="tool-desc text-sm mt-1 mb-4 flex-1">{description}</p>
        <span className={`tool-chip chip-${chipColor}`}>{chip}</span>
      </div>
    </Link>
  );
}
