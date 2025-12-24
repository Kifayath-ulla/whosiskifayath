import { Hexagon, Github, Linkedin, Mail } from 'lucide-react';

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
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#contact', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
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
