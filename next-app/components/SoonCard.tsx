// /Users/MAC/Documents/tools-cl/next-app/components/SoonCard.tsx
import React from 'react';

type SoonCardProps = {
  title: string;
  description: string;
  eta: string; // e.g., "Q3 2025"
};

export default function SoonCard({ title, description, eta }: SoonCardProps) {
  return (
    <div className="soon-card flex items-center gap-4 opacity-50">
      <div className="soon-dot w-2 h-2 rounded-full border border-[rgba(255,255,255,0.2)]" />
      <div className="flex flex-col">
        <span className="soon-name font-bold text-sm text-[#f0efff]">{title}</span>
        <span className="soon-desc text-xs text-[#f0efff] opacity-75">{description}</span>
      </div>
      <span className="soon-eta ml-auto text-xs text-[#f0efff] opacity-60">{eta}</span>
    </div>
  );
}
