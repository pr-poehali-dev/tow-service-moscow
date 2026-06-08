import Icon from "@/components/ui/icon";

const FLEET_IMAGE = "https://cdn.poehali.dev/projects/78d64023-9129-4f67-afe6-fe08698073c3/files/1b52784b-ac73-4475-a398-b9efd955c07c.jpg";

const SERVICES = [
  { icon: "Truck", title: "Эвакуация легковых автомобилей", desc: "Бережная транспортировка легковых авто на платформе. Полная страховка груза на маршруте." },
  { icon: "Container", title: "Эвакуация грузовых ТС", desc: "Специализированная техника для перевозки грузовиков, автобусов и спецтехники весом до 40 тонн." },
  { icon: "MapPin", title: "Трассовая помощь", desc: "Выезд на федеральные трассы и загородные дороги в радиусе 500 км от города." },
  { icon: "Wrench", title: "Техническая помощь", desc: "Прикурка аккумулятора, замена колеса, вскрытие авто, доставка топлива на место." },
  { icon: "ShieldCheck", title: "Страховые случаи", desc: "Работаем со страховыми компаниями. Помощь в оформлении документов при ДТП." },
  { icon: "Building2", title: "Корпоративное обслуживание", desc: "Договоры с юридическими лицами. Специальные тарифы для автопарков и автодилеров." },
];

const PRICES = [
  { service: "Подача эвакуатора (в черте города)", price: "от 1 500 ₽" },
  { service: "Эвакуация легкового авто (до 10 км)", price: "от 2 500 ₽" },
  { service: "Эвакуация легкового авто (за км)", price: "от 50 ₽/км" },
  { service: "Эвакуация внедорожника / кроссовера", price: "от 3 200 ₽" },
  { service: "Эвакуация грузовика (до 5 т)", price: "от 6 000 ₽" },
  { service: "Трассовая помощь (выезд за МКАД)", price: "от 4 500 ₽" },
  { service: "Прикурка аккумулятора", price: "от 800 ₽" },
  { service: "Замена колеса на месте", price: "от 1 000 ₽" },
  { service: "Вскрытие автомобиля", price: "от 1 500 ₽" },
];

const GUARANTEES = [
  { icon: "Clock", title: "Прибытие за 30 минут", desc: "Гарантируем прибытие в течение 30 минут в черте города. Опоздали — скидка 20%." },
  { icon: "ShieldCheck", title: "Страхование груза", desc: "Каждый автомобиль застрахован на время перевозки. Выплата при любом ущербе." },
  { icon: "Award", title: "Лицензированные водители", desc: "Все водители имеют категорию C/CE, опыт от 5 лет и проходят ежегодную аттестацию." },
  { icon: "FileText", title: "Официальный договор", desc: "Работаем по договору. Закрывающие документы для юридических лиц в течение 3 дней." },
];

const InfoSections = () => {
  return (
    <>
      {/* SERVICES */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-14">
            <div className="section-divider" />
            <h2 className="font-oswald font-bold text-navy text-4xl uppercase tracking-wide mb-3">Наши услуги</h2>
            <p className="text-muted-foreground max-w-xl">Полный спектр услуг по эвакуации и технической помощи на дороге — для частных клиентов и корпоративных партнёров.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className="hover-lift border border-border rounded p-6 bg-white group cursor-default">
                <div className="w-12 h-12 bg-navy/8 rounded flex items-center justify-center mb-5 group-hover:bg-orange transition-colors duration-200">
                  <Icon name={s.icon} fallback="Truck" size={22} className="text-navy group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="font-oswald font-semibold text-navy text-xl uppercase tracking-wide mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src={FLEET_IMAGE} alt="Автопарк эвакуаторов компании АвтоЭвакуатор — 18 единиц спецтехники" className="w-full rounded shadow-xl object-cover" loading="lazy" style={{ maxHeight: 420 }} />
              <div className="absolute -bottom-5 -right-5 bg-orange text-white p-5 rounded shadow-xl">
                <div className="font-oswald font-bold text-3xl">12+</div>
                <div className="font-golos text-sm text-white/80">лет опыта</div>
              </div>
            </div>
            <div>
              <div className="section-divider" />
              <h2 className="font-oswald font-bold text-navy text-4xl uppercase tracking-wide mb-4">О компании</h2>
              <p className="text-foreground leading-relaxed mb-6">
                Компания «АвтоЭвакуатор» работает на рынке с 2012 года. За это время мы выполнили более 28 000 выездов и заработали репутацию надёжного партнёра как среди частных клиентов, так и среди крупных корпоративных заказчиков.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Наш автопарк насчитывает 18 единиц техники: от лёгких платформ для легковых авто до тяжёлых тягачей для спецтехники. Все водители имеют действующие лицензии и ежегодно проходят обучение.
              </p>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: "Truck", val: "18 эвакуаторов", sub: "в автопарке" },
                  { icon: "Users", val: "36 сотрудников", sub: "включая водителей" },
                  { icon: "MapPin", val: "500 км", sub: "зона покрытия" },
                  { icon: "Star", val: "4.9 / 5", sub: "средний рейтинг" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white border border-border rounded p-4">
                    <div className="w-10 h-10 bg-navy/8 rounded flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} fallback="Info" size={18} className="text-navy" />
                    </div>
                    <div>
                      <div className="font-oswald font-bold text-navy text-lg leading-tight">{item.val}</div>
                      <div className="text-muted-foreground text-xs">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section id="price" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-14">
            <div className="section-divider" />
            <h2 className="font-oswald font-bold text-navy text-4xl uppercase tracking-wide mb-3">Прайс-лист</h2>
            <p className="text-muted-foreground max-w-xl">Цены актуальны на 2025 год. Точная стоимость рассчитывается диспетчером при оформлении заявки.</p>
          </div>

          <div className="border border-border rounded overflow-hidden">
            {PRICES.map((row, i) => (
              <div key={i} className={`flex items-center justify-between px-6 py-4 ${i % 2 === 0 ? "bg-white" : "bg-secondary/40"} border-b border-border last:border-b-0`}>
                <span className="font-golos text-foreground">{row.service}</span>
                <span className="font-oswald font-bold text-navy text-lg whitespace-nowrap ml-4">{row.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 bg-orange/8 border border-orange/25 rounded p-4">
            <Icon name="Info" size={18} className="text-orange flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground/80">
              Корпоративным клиентам — индивидуальные тарифы со скидкой до 25%.{" "}
              <a href="#contacts" className="text-orange font-medium underline underline-offset-2">Свяжитесь с нами</a> для обсуждения условий.
            </p>
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section id="guarantees" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-14">
            <div className="section-divider" />
            <h2 className="font-oswald font-bold text-navy text-4xl uppercase tracking-wide mb-3">Наши гарантии</h2>
            <p className="text-muted-foreground max-w-xl">Мы несём ответственность за каждый автомобиль и каждый выезд. Гарантии закреплены в договоре.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GUARANTEES.map((g, i) => (
              <div key={i} className="guarantee-card bg-white border border-border rounded p-6 hover-lift">
                <div className="w-12 h-12 bg-orange/10 rounded flex items-center justify-center mb-5">
                  <Icon name={g.icon} fallback="Shield" size={22} className="text-orange" />
                </div>
                <h3 className="font-oswald font-semibold text-navy text-xl uppercase tracking-wide mb-3">{g.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSections;