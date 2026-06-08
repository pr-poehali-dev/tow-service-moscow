import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import HeroOrderSection from "@/components/HeroOrderSection";
import InfoSections from "@/components/InfoSections";
import BottomSections from "@/components/BottomSections";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-golos">
      <Header />
      <HeroOrderSection />
      <InfoSections />
      <BottomSections />

      {/* FLOATING CALL BUTTON */}
      <a
        href="tel:+79854427547"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-orange rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
        title="Позвонить"
      >
        <Icon name="Phone" size={24} className="text-white" />
      </a>
    </div>
  );
};

export default Index;