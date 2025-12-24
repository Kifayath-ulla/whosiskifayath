import { Calendar, ChevronRight, Users, Megaphone, ClipboardList, Star } from 'lucide-react';
import profileImage from '@/assets/profile.png';

const experiences = [
  {
    title: 'Core Team Volunteer & Volunteer Lead',
    organization: 'IBW 2025',
    date: 'Nov 26 – Dec 3, 2025',
    highlights: [
      { icon: ClipboardList, text: 'Worked directly with the core team across content, operations, and tooling' },
      { icon: Megaphone, text: 'Managed and published social media posts and content across official channels' },
      { icon: Users, text: 'Acted as the coordination point between core team and volunteers during main conference days' },
      { icon: Star, text: 'Managed VIP Night operations and assisted at the registration desk' },
    ],
    details: [
      'Maintained and version-controlled event agendas on the website',
      'Audited and reconciled form submissions across Airtable and Google Sheets',
      'Supported on-ground operations and logistics during conference days',
      'Assigned tasks and managed volunteer responsibilities',
      'Ensured smooth execution across all event operations',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center py-20 px-4 relative">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block font-mono text-xs tracking-[0.3em] text-secondary mb-4 px-4 py-2 border border-secondary/30">
            &lt;EXPERIENCE_LOG/&gt;
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            WORK <span className="text-primary text-glow">EXPERIENCE</span>
          </h2>
        </div>

        {experiences.map((exp, index) => (
          <div key={index} className="grid lg:grid-cols-2 gap-8">
            {/* Left Card - Main Info */}
            <div className="gradient-border bg-card/50 backdrop-blur-sm p-6 md:p-8 hover:shadow-glow transition-all duration-500 group relative">
              {/* Header */}
              <div className="mb-6">
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>
                <p className="text-secondary font-mono text-lg mt-2">{exp.organization}</p>
                <div className="flex items-center gap-2 mt-3 text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="font-mono text-sm">{exp.date}</span>
                </div>
              </div>

              {/* Highlights with icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {exp.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-muted/20 border border-muted/30 hover:border-primary/50 transition-colors">
                    <highlight.icon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{highlight.text}</span>
                  </div>
                ))}
              </div>

              {/* Decorative corners */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/30" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/30" />
            </div>

            {/* Right Side - Image + Details */}
            <div className="flex flex-col gap-6">
              {/* Profile Image */}
              <div className="flex justify-center">
                <div className="w-48 h-48 md:w-56 md:h-56 border border-primary/50 overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Kifayathulla at IBW 2025"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Stats & Details Card */}
              <div className="gradient-border bg-card/50 backdrop-blur-sm p-6 hover:shadow-glow-secondary transition-all duration-500 relative flex-1">
                <div className="mb-4">
                  <span className="font-mono text-xs tracking-widest text-secondary">// KEY RESPONSIBILITIES</span>
                </div>

                <ul className="space-y-3">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground group/item">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                      <span className="text-sm leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Stats */}
                <div className="mt-6 pt-4 border-t border-muted/30 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="font-display text-xl font-bold text-primary">8</div>
                    <div className="font-mono text-xs text-muted-foreground">DAYS</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-xl font-bold text-secondary">50+</div>
                    <div className="font-mono text-xs text-muted-foreground">VOLUNTEERS</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-xl font-bold text-accent">VIP</div>
                    <div className="font-mono text-xs text-muted-foreground">OPS LEAD</div>
                  </div>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-secondary/30" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-secondary/30" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;