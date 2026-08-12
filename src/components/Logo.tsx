interface LogoProps {
  className?: string;
  variant?: 'default' | 'light';
}

export default function Logo({ className = 'w-12 h-12', variant = 'default' }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="Sahelia Digital Academy"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}
