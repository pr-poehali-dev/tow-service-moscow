import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "О компании", href: "#about" },
  { label: "Прайс", href: "#price" },
  { label: "Гарантии", href: "#guarantees" },
  { label: "Отзывы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-dark shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange rounded flex items-center justify-center">
              <Icon name="Truck" size={18} className="text-white" />
            </div>
            <div>
              <div className="font-oswald font-bold text-white text-lg leading-tight tracking-wide">
                АВТО<span className="text-orange">ЭВАКУАТОР</span>
              </div>
              <div className="text-xs text-white/50 font-golos leading-tight tracking-widest uppercase">Профессиональная служба</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="nav-link">{link.label}</a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+74951234567" className="flex items-center gap-2 text-white font-oswald font-semibold text-lg tracking-wide hover:text-orange transition-colors">
              <Icon name="Phone" size={16} className="text-orange" />
              +7 (495) 123-45-67
            </a>
          </div>

          <button className="lg:hidden text-white p-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10 px-4 py-4">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="nav-link py-1" onClick={() => setMobileMenuOpen(false)}>{link.label}</a>
            ))}
          </nav>
          <a href="tel:+74951234567" className="flex items-center gap-2 text-white font-oswald font-semibold text-lg mt-4">
            <Icon name="Phone" size={16} className="text-orange" />
            +7 (495) 123-45-67
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
