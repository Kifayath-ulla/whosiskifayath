import { Trophy, Star, Zap, Award } from 'lucide-react';
import blockchainSymbol from '@/assets/blockchain-symbol.png';

const AchievementsSection = () => {
  return (
    <section id="achievements" className="min-h-screen flex items-center py-20 px-4 relative overflow-hidden">
      {/* Large Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={blockchainSymbol}
          alt=""
          className="w-full h-full object-contain opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>
      
      {/* Cyber grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-20 z-0" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-block font-mono text-xs tracking-[0.3em] text-accent mb-4 px-4 py-2 border border-accent/30">
            &lt;ACHIEVEMENTS_BLOCK/&gt;
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            NOTABLE <span className="text-accent text-glow-accent">ACHIEVEMENTS</span>
          </h2>
        </div>

        {/* Main Achievement Card */}
        <div className="relative">
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-3xl" />
          
          <div className="relative gradient-border bg-card/60 backdrop-blur-xl p-6 md:p-10 hover:shadow-glow-accent transition-all duration-700 group">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Content */}
              <div className="order-2 lg:order-1">
                {/* Badge */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30">
                    <Award className="w-5 h-5 text-accent" />
                    <span className="font-mono text-sm text-accent tracking-wider">1ST PLACE</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="font-mono text-xs text-primary">ONLY MECH STUDENT</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  Winner of <span className="text-primary text-glow">ALOKE 2025</span>
                </h3>
                <p className="text-secondary font-mono text-lg mb-6">IEEE UVCE</p>

                {/* Description */}
                <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                  <p>
                    As the <span className="text-primary font-semibold">only Mechanical Engineering participant</span> among peers from Computer Science and Electrical branches, I claimed first place in ALOKE 2025, IEEE UVCE's flagship interactive event.
                  </p>
                  
                  <p>
                    This engaging showcase featured hands-on game stalls testing quick thinking, creative problem-solving, and collaboration. I adapted fluidly to these <span className="text-secondary font-semibold">interdisciplinary challenges</span>, integrating my mechanical engineering perspective with cutting-edge tech concepts.
                  </p>
                  
                  <p>
                    This achievement deepened my alignment with <span className="text-accent font-semibold">IEEE's mission to advance technology for humanity's benefit</span>.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-muted/30">
                  {[
                    { value: '1st', label: 'PLACE' },
                    { value: '2025', label: 'ALOKE' },
                    { value: 'IEEE', label: 'UVCE' },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="font-display text-xl md:text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="font-mono text-xs text-muted-foreground tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Blockchain Symbol */}
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border border-primary/50 overflow-hidden flex items-center justify-center bg-card/30">
                  <img
                    src={blockchainSymbol}
                    alt="Blockchain Symbol"
                    className="w-3/4 h-3/4 object-contain animate-pulse-glow"
                  />
                </div>
              </div>
            </div>

            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-accent/30" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-accent/30" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-accent/30" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-accent/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;