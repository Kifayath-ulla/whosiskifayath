import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import GlitchText from './GlitchText';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 py-20 md:py-0">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-primary/20 rotate-45 animate-float" />
      <div className="absolute bottom-1/4 right-10 w-24 h-24 border border-secondary/20 rotate-12 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-accent/20 animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-5xl mx-auto w-full text-center">
        <div className="inline-block font-mono text-xs tracking-[0.3em] text-secondary mb-4 px-4 py-2 border border-secondary/30">
          &lt;BLOCKCHAIN_CORE/&gt;
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
          Mechanical Engineering student at UVCE, bridging the gap between 
          <span className="text-primary"> mechanical precision </span> 
          and 
          <span className="text-secondary"> technological innovation</span>.
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
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: '#contact', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="p-3 border border-muted hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300 hover:shadow-glow group"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
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
