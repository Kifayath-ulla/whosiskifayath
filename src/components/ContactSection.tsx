import { useState } from 'react';
import { Send, Terminal, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Message transmitted successfully!', {
      description: 'I will get back to you soon.',
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4 relative">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block font-mono text-xs tracking-[0.3em] text-primary mb-4 px-4 py-2 border border-primary/30">
            &lt;CONTACT_PROTOCOL/&gt;
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            ESTABLISH <span className="text-primary text-glow">CONNECTION</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Ready to collaborate? Let's create something extraordinary together.
          </p>
        </div>

        {/* Terminal-style form */}
        <div className="gradient-border bg-card/30 backdrop-blur-xl overflow-hidden">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-muted/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <div className="w-3 h-3 rounded-full bg-secondary" />
              <div className="w-3 h-3 rounded-full bg-primary" />
            </div>
            <div className="flex-1 flex items-center justify-center gap-2 text-muted-foreground">
              <Terminal className="w-4 h-4" />
              <span className="font-mono text-xs">contact_terminal.exe</span>
            </div>
          </div>

          {/* Form content */}
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            <div className="space-y-6">
              {/* Name field */}
              <div className="group">
                <label className="flex items-center gap-2 font-mono text-xs text-primary mb-2">
                  <span className="text-muted-foreground">$</span> enter_name:
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-muted/20 border border-muted/50 px-4 py-3 font-mono text-foreground focus:border-primary focus:outline-none focus:shadow-glow transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email field */}
              <div className="group">
                <label className="flex items-center gap-2 font-mono text-xs text-primary mb-2">
                  <span className="text-muted-foreground">$</span> enter_email:
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-muted/20 border border-muted/50 px-4 py-3 font-mono text-foreground focus:border-primary focus:outline-none focus:shadow-glow transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>

              {/* Message field */}
              <div className="group">
                <label className="flex items-center gap-2 font-mono text-xs text-primary mb-2">
                  <span className="text-muted-foreground">$</span> enter_message:
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full bg-muted/20 border border-muted/50 px-4 py-3 font-mono text-foreground focus:border-primary focus:outline-none focus:shadow-glow transition-all resize-none"
                  placeholder="Your message here..."
                  required
                />
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground py-4 font-mono text-sm tracking-wider hover:shadow-glow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  TRANSMITTING...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  TRANSMIT_MESSAGE
                </>
              )}
            </button>

            {/* Terminal output */}
            <div className="font-mono text-xs text-muted-foreground space-y-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3 h-3 text-primary" />
                <span>encryption: enabled</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3 h-3 text-primary" />
                <span>secure_channel: active</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
