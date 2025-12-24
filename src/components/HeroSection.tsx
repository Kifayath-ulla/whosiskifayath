import { ArrowDown, Github, Mail } from 'lucide-react';
import GlitchText from './GlitchText';

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 py-20 md:py-0">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-primary/20 rotate-45 animate-float" />
      <div className="absolute bottom-1/4 right-10 w-24 h-24 border border-secondary/20 rotate-12 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-accent/20 animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-5xl mx-auto w-full text-center">
        <div className="inline-block font-mono text-xs tracking-[0.3em] text-secondary mb-4 px-4 py-2 border border-secondary/30">
          &lt;WEB3_BUILDER/&gt;
        </div>
        
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="text-foreground">HI, I'M</span>
          <br />
          <GlitchText 
            text="KIFAYATHULLA" 
            className="text-primary text-glow"
          />
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          College dropout turned <span className="text-primary">Web3 enthusiast</span>. 
          Super bullish on contributing to <span className="text-secondary">decentralized ecosystems</span> and 
          leading <span className="text-accent">Web3 events</span> in the future.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="#contact"
            className="group relative px-8 py-3 bg-primary text-primary-foreground font-mono text-sm tracking-wider hover:shadow-glow transition-all duration-300"
          >
            <span className="relative z-10">INITIALIZE_CONTACT</span>
          </a>
          <a
            href="#experience"
            className="group px-8 py-3 border border-primary/50 text-primary font-mono text-sm tracking-wider hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            VIEW_EXPERIENCE
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/Kifayath-ulla"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-muted hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300 hover:shadow-glow group"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/thisiskifayath"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-muted hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300 hover:shadow-glow group"
            aria-label="X"
          >
            <XIcon />
          </a>
          <a
            href="mailto:mohammedkifayathulla07@gmail.com"
            className="p-3 border border-muted hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300 hover:shadow-glow group"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <span className="font-mono text-xs tracking-widest">SCROLL</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
