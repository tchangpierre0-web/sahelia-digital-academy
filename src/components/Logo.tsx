interface LogoProps {
  className?: string;
  variant?: 'default' | 'light';
}

export default function Logo({ className = 'w-12 h-12', variant = 'default' }: LogoProps) {
  const main = variant === 'light' ? '#facc15' : '#eab308';
  const light = variant === 'light' ? '#fde047' : '#facc15';
  const green = variant === 'light' ? '#a3e635' : '#84cc16';
  const dark = variant === 'light' ? '#1a1816' : '#272522';

  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Rounded square background with gradient */}
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor={light} />
          <stop offset="0.5" stopColor={main} />
          <stop offset="1" stopColor={green} />
        </linearGradient>
        <linearGradient id="logoGradS" x1="32" y1="14" x2="32" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor={dark} />
          <stop offset="1" stopColor={dark} stopOpacity="0.85" />
        </linearGradient>
      </defs>

      <rect width="64" height="64" rx="16" fill="url(#logoGrad)" />

      {/* Sun arc (Sahel = sun/desert vibe) */}
      <circle cx="32" cy="28" r="9" fill="url(#logoGradS)" opacity="0.15" />

      {/* Stylized "S" for Sahelia */}
      <path
        d="M40 22 C40 18.5 37 16 32 16 C27 16 24 18.5 24 22 C24 25.5 27 27 32 28 C37 29 40 30.5 40 34 C40 37.5 37 40 32 40 C27 40 24 37.5 24 34"
        stroke="url(#logoGradS)"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Graduation cap accent (education) */}
      <path
        d="M20 46 L32 42 L44 46 L32 50 Z"
        fill="url(#logoGradS)"
        opacity="0.8"
      />
      <rect x="30" y="44" width="4" height="4" rx="1" fill="url(#logoGradS)" opacity="0.6" />
    </svg>
  );
}
