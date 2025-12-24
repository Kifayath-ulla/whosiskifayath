import { Hexagon, Github, Mail } from 'lucide-react';

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 border-t border-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Hexagon className="w-6 h-6 text-primary" />
            <span className="font-display font-bold tracking-wider text-primary">CORE</span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/Kifayath-ulla"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/thisiskifayath"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="X"
            >
              <XIcon />
            </a>
            <a
              href="mailto:mohammedkifayathulla07@gmail.com"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right font-mono text-xs text-muted-foreground">
            <span className="text-primary">©</span> {currentYear} All rights reserved
          </div>
        </div>

        {/* Decorative line */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="mt-4 text-center font-mono text-xs text-muted-foreground">
          <span className="text-primary">&lt;</span>
          built_with_passion
          <span className="text-primary">/&gt;</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;