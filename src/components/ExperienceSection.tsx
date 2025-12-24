import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: 'Core Team Volunteer & Volunteer Lead',
    organization: 'IBW 2025',
    date: 'Nov 26 – Dec 3, 2025',
    points: [
      'Worked directly with the core team across content, operations, and tooling',
      'Maintained and version-controlled event agendas on the website, while auditing and reconciling form submissions across Airtable and Google Sheets',
      'Managed and published social media posts and content across official channels',
      'Supported on-ground operations and logistics during conference days',
      'Managed VIP Night operations and assisted at the registration desk',
      'Assigned tasks and managed volunteer responsibilities',
      'Acted as the coordination point between the core team and volunteers during the main conference days',
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative grid md:grid-cols-2 gap-8 mb-12">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary shadow-glow border-2 border-background" />

              {/* Card */}
              <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                <div className="gradient-border bg-card/50 backdrop-blur-sm p-6 hover:shadow-glow transition-all duration-500 group">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-secondary font-mono text-sm mt-1">{exp.organization}</p>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 mb-4 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="font-mono">{exp.date}</span>
                    </div>
                  </div>

                  {/* Points */}
                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                        <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/30" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/30" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
