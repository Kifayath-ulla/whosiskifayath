import { cn } from '@/lib/utils';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className }: GlitchTextProps) => {
  return (
    <span className={cn("relative inline-block", className)}>
      <span className="relative z-10">{text}</span>
      <span 
        className="absolute inset-0 text-accent opacity-70"
        style={{ 
          clipPath: 'inset(45% 0 40% 0)',
          transform: 'translate(-2px, 0)',
          animation: 'glitch 2s infinite linear alternate-reverse'
        }}
        aria-hidden
      >
        {text}
      </span>
      <span 
        className="absolute inset-0 text-secondary opacity-70"
        style={{ 
          clipPath: 'inset(40% 0 45% 0)',
          transform: 'translate(2px, 0)',
          animation: 'glitch 2s infinite linear alternate-reverse 0.5s'
        }}
        aria-hidden
      >
        {text}
      </span>
    </span>
  );
};

export default GlitchText;
