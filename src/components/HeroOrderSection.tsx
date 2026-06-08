import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/78d64023-9129-4f67-afe6-fe08698073c3/files/ca47588b-ef58-4726-8972-9d7e43718ccd.jpg";

const HeroOrderSection = () => {
  return (
    <>
      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Профессиональный эвакуатор на ночной трассе — служба эвакуации автомобилей 24/7 в Москве" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, hsl(215,75%,8%) 40%, hsl(215,70%,15%) 65%, transparent 100%)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">
          <div className="max-w-2xl animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-orange/20 border border-orange/40 rounded px-3 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-orange animate-pulse" />
              <span className="text-orange text-sm font-golos font-medium tracking-wide uppercase">Работаем 24/7 — выезд за 30 минут</span>
            </div>

            <h1 className="font-oswald font-bold text-white leading-none mb-6" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}>
              ПРОФЕССИОНАЛЬНАЯ<br />
              <span className="text-orange">ЭВАКУАЦИЯ</span><br />
              АВТОМОБИЛЕЙ
            </h1>

            <p className="text-white/75 text-lg leading-relaxed mb-10 font-golos">
              Работаем с физическими и юридическими лицами.<br />
              Эвакуаторы по всему городу и за его пределами — любая техника, любой маршрут.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="tel:+79854427547" className="btn-primary">
                <Icon name="PhoneCall" size={18} />
                +7 (985) 442-75-47
              </a>
              <a href="#price" className="btn-outline">
                <Icon name="List" size={18} />
                Посмотреть прайс
              </a>
            </div>

            <div className="flex flex-wrap gap-8 mt-12">
              {[
                { val: "12+", label: "лет на рынке" },
                { val: "240+", label: "эвакуаций в месяц" },
                { val: "30 мин", label: "среднее время прибытия" },
              ].map((s, i) => (
                <div key={i} className="stat-card">
                  <div className="font-oswald font-bold text-white text-3xl leading-tight">{s.val}</div>
                  <div className="text-white/55 text-sm font-golos mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section id="order" className="py-24 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "30px 30px" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          <div className="section-divider mx-auto" />
          <h2 className="font-oswald font-bold text-white text-4xl uppercase tracking-wide mb-4">Вызвать эвакуатор</h2>
          <p className="text-white/65 text-lg mb-10 max-w-2xl mx-auto">
            Звоните напрямую — диспетчер на связи круглосуточно. Уточним адрес, тип авто и стоимость, эвакуатор выезжает сразу.
          </p>

          <a
            href="tel:+79854427547"
            className="inline-flex items-center gap-3 bg-orange hover:bg-orange/90 transition-colors rounded px-8 py-6 shadow-2xl hover:scale-[1.02] duration-200"
          >
            <Icon name="PhoneCall" size={32} className="text-white" />
            <span className="font-oswald font-bold text-white text-3xl md:text-4xl tracking-wide">+7 (985) 442-75-47</span>
          </a>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-10">
            <div className="flex items-center gap-2 text-white/70">
              <Icon name="Clock" size={18} className="text-orange" />
              <span className="font-golos text-sm">Работаем 24/7</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Icon name="Timer" size={18} className="text-orange" />
              <span className="font-golos text-sm">Выезд за 30 минут</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Icon name="MapPin" size={18} className="text-orange" />
              <span className="font-golos text-sm">Москва и область</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroOrderSection;