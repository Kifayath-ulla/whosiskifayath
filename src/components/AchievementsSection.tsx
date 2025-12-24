import { Trophy, Star, Zap, Award } from 'lucide-react';
import profileImage from '@/assets/profile.png';

const AchievementsSection = () => {
  return (
    <section id="achievements" className="min-h-screen flex items-center py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
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
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 blur-3xl" />
          
          <div className="relative gradient-border bg-card/30 backdrop-blur-xl p-8 md:p-12 hover:shadow-glow-accent transition-all duration-700 group">
            {/* Profile Image and Trophy */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 gradient-border overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Kifayathulla"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                {/* Decorative corner */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary" />
              </div>

              {/* Trophy Icon */}
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center border-2 border-accent animate-pulse-glow" style={{ borderRadius: '50%' }}>
                  <Trophy className="w-12 h-12 md:w-16 md:h-16 text-accent" />
                </div>
                {/* Orbiting stars */}
                <div className="absolute inset-0 animate-rotate-slow">
                  <Star className="absolute -top-2 left-1/2 w-4 h-4 text-primary" />
                </div>
                <div className="absolute inset-0 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}>
                  <Zap className="absolute -bottom-2 left-1/2 w-4 h-4 text-secondary" />
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 mb-4">
                <Award className="w-5 h-5 text-accent" />
                <span className="font-mono text-sm text-accent tracking-wider">1ST PLACE</span>
              </div>
              <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-2">
                Winner of <span className="text-primary">ALOKE 2025</span>
              </h3>
              <p className="text-secondary font-mono text-lg">IEEE UVCE</p>
            </div>

            {/* Description */}
            <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
              <p>
                As the <span className="text-primary font-semibold">only Mechanical Engineering participant</span> among peers from Computer Science and Electrical branches, I claimed first place in ALOKE 2025, IEEE UVCE's flagship interactive event for first-year students.
              </p>
              
              <p>
                This engaging showcase of IEEE Societies and Special Interest Groups featured hands-on game stalls that tested quick thinking, creative problem-solving, and collaboration in technical innovation.
              </p>
              
              <p>
                I rose to the occasion by adapting fluidly to these interdisciplinary challenges, integrating my <span className="text-secondary font-semibold">mechanical engineering perspective</span> with cutting-edge tech concepts to deliver strong results across the board.
              </p>
              
              <p>
                This achievement affirmed my knack for excelling in varied settings and deepened my alignment with <span className="text-accent font-semibold">IEEE's mission to advance technology for humanity's benefit</span>, inspiring me to dive into upcoming projects with fresh momentum.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-muted/30">
              {[
                { value: '1st', label: 'PLACE' },
                { value: 'ONLY', label: 'MECH STUDENT' },
                { value: '2025', label: 'ALOKE' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-display text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="font-mono text-xs text-muted-foreground tracking-wider">{stat.label}</div>
                </div>
              ))}
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
