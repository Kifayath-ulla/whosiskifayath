import { useState } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'ACHIEVEMENTS', href: '#achievements' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="gradient-border backdrop-blur-xl bg-card/80 px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            className="flex items-center gap-2 group"
          >
            <Hexagon className="w-8 h-8 text-primary animate-pulse-glow" />
            <span className="font-display font-bold text-lg tracking-wider text-primary">
              CORE
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className="relative font-mono text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary p-2 hover:bg-primary/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden absolute top-full left-4 right-4 mt-2 gradient-border backdrop-blur-xl bg-card/95 overflow-hidden transition-all duration-300",
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="p-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className="block font-mono text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
