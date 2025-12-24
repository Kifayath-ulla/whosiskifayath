import BlockchainBackground from '@/components/BlockchainBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Animated blockchain background */}
      <BlockchainBackground />
      
      {/* Gradient overlays */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background opacity-80" />
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-r from-background via-transparent to-background opacity-50" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
