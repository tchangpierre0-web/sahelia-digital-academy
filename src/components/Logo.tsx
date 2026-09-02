import { useId } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light';
}

export default function Logo({ className = 'w-11 h-11', variant = 'default' }: LogoProps) {
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Sahelia Digital Academy"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="64" y2="64">
          <stop stopColor="#fde047" />
          <stop offset="0.5" stopColor="#eab308" />
          <stop offset="1" stopColor="#84cc16" />
        </linearGradient>
      </defs>
      <rect
        width="64"
        height="64"
        rx="16"
        fill={`url(#${gradientId})`}
        stroke={variant === 'light' ? 'rgba(255,255,255,0.4)' : 'none'}
        strokeWidth={variant === 'light' ? 2 : 0}
      />
      <path
        d="M40 22C40 18.5 37 16 32 16C27 16 24 18.5 24 22C24 25.5 27 27 32 28C37 29 40 30.5 40 34C40 37.5 37 40 32 40C27 40 24 37.5 24 34"
        stroke="#272522"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M20 46L32 42L44 46L32 50Z" fill="#272522" opacity="0.8" />
    </svg>
  );
}