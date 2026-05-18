import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/78d64023-9129-4f67-afe6-fe08698073c3/files/ca47588b-ef58-4726-8972-9d7e43718ccd.jpg";
const FLEET_IMAGE = "https://cdn.poehali.dev/projects/78d64023-9129-4f67-afe6-fe08698073c3/files/1b52784b-ac73-4475-a398-b9efd955c07c.jpg";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "О компании", href: "#about" },
  { label: "Прайс", href: "#price" },
  { label: "Гарантии", href: "#guarantees" },
  { label: "Отзывы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

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

const REVIEWS = [
  { name: "Иван Соколов", company: "ООО «Автологистика»", text: "Сотрудничаем уже 2 года. Ни одного сбоя — машины приходят точно в срок, документы оформляются без замечаний. Рекомендую для корпоративных клиентов.", rating: 5 },
  { name: "Марина Петрова", company: "ИП Петрова", text: "Попала в ДТП на трассе ночью. Эвакуатор приехал за 25 минут — быстрее, чем ожидала. Вежливый водитель, помог с документами для страховой.", rating: 5 },
  { name: "Дмитрий Краснов", company: "Автодилер «ПремиумАвто»", text: "Заключили договор на обслуживание нашего автопарка. Тарифы конкурентные, всегда на связи, закрывающие документы получаем без задержек.", rating: 5 },
  { name: "Алексей Громов", company: "Частный клиент", text: "Заглох на МКАДе в час пик. Диспетчер принял заявку мгновенно, корректно объяснил стоимость. Машину доставили в сервис без единой царапины.", rating: 5 },
];

const FAQ = [
  { q: "Как быстро приедет эвакуатор?", a: "В черте города — в течение 30 минут. За МКАД и на трассах — от 45 минут в зависимости от расстояния. Точное время диспетчер сообщает при оформлении заявки." },
  { q: "Какие автомобили вы принимаете на эвакуацию?", a: "Легковые автомобили, внедорожники, кроссоверы, микроавтобусы, грузовики до 40 тонн, спецтехнику. Также работаем с мотоциклами и квадроциклами." },
  { q: "Можно ли оплатить картой на месте?", a: "Да. Принимаем наличные, банковские карты (Visa, MasterCard, МИР), а также безналичный расчёт для юридических лиц с выставлением счёта." },
  { q: "Работаете ли вы в выходные и праздники?", a: "Да, работаем 24 часа в сутки, 7 дней в неделю, включая праздники. Диспетчерская служба доступна круглосуточно." },
  { q: "Застрахован ли мой автомобиль во время перевозки?", a: "Да. Каждый автомобиль застрахован на всё время транспортировки. При наступлении страхового случая выплата производится в полном объёме." },
  { q: "Как заключить корпоративный договор?", a: "Свяжитесь с нами по телефону или заполните форму на сайте. Менеджер выезжает на встречу в течение одного рабочего дня для обсуждения условий." },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 1L8.545 5.17H13L9.59 7.68L10.91 12L7 9.3L3.09 12L4.41 7.68L1 5.17H5.455L7 1Z" fill="hsl(28,95%,50%)" />
        </svg>
      ))}
    </div>
  );
}

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", address: "", comment: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="min-h-screen bg-background font-golos">

      {/* HEADER */}
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

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Эвакуатор" className="w-full h-full object-cover" />
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
              <a href="#order" className="btn-primary">
                <Icon name="PhoneCall" size={18} />
                Заказать эвакуатор
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

      {/* ORDER FORM */}
      <section id="order" className="py-24 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "30px 30px" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-divider" />
              <h2 className="font-oswald font-bold text-white text-4xl uppercase tracking-wide mb-4">Заказать эвакуатор</h2>
              <p className="text-white/65 text-lg mb-8">Оставьте заявку — диспетчер перезвонит в течение 2 минут и уточнит детали.</p>

              <div className="space-y-5">
                {[
                  { n: "1", title: "Оставьте заявку", sub: "Заполните форму или позвоните напрямую" },
                  { n: "2", title: "Диспетчер уточняет детали", sub: "Адрес, тип ТС, маршрут и стоимость — за 2 минуты" },
                  { n: "3", title: "Выезд эвакуатора", sub: "Прибытие в течение 30 минут в черте города" },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-oswald font-bold text-white text-sm">{step.n}</span>
                    </div>
                    <div>
                      <div className="font-oswald font-semibold text-white text-lg uppercase">{step.title}</div>
                      <div className="text-white/55 text-sm">{step.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded p-8 shadow-2xl">
              {formSent ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle2" size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-oswald font-bold text-navy text-2xl uppercase mb-2">Заявка принята!</h3>
                  <p className="text-muted-foreground">Диспетчер перезвонит вам в течение 2 минут.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-oswald font-bold text-navy text-2xl uppercase tracking-wide mb-2">Форма заказа</h3>
                  <div>
                    <label className="block text-sm font-golos font-medium text-navy mb-1.5">Ваше имя *</label>
                    <input className="input-field" placeholder="Иван Петров" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                  </div>
                  <div>
                    <label className="block text-sm font-golos font-medium text-navy mb-1.5">Номер телефона *</label>
                    <input className="input-field" placeholder="+7 (___) ___-__-__" type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required />
                  </div>
                  <div>
                    <label className="block text-sm font-golos font-medium text-navy mb-1.5">Адрес нахождения автомобиля *</label>
                    <input className="input-field" placeholder="ул. Ленина, 45 или координаты" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} required />
                  </div>
                  <div>
                    <label className="block text-sm font-golos font-medium text-navy mb-1.5">Комментарий</label>
                    <textarea className="input-field resize-none" rows={3} placeholder="Марка и модель авто, особые условия..." value={form.comment} onChange={e => setForm({ ...form, comment: e.target.value })} />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    <Icon name="Send" size={16} />
                    Отправить заявку
                  </button>
                  <p className="text-xs text-muted-foreground text-center">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src={FLEET_IMAGE} alt="Наш автопарк" className="w-full rounded shadow-xl object-cover" style={{ maxHeight: 420 }} />
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

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-14">
            <div className="section-divider" />
            <h2 className="font-oswald font-bold text-white text-4xl uppercase tracking-wide mb-3">Отзывы клиентов</h2>
            <p className="text-white/55 max-w-xl">Реальные отзывы от наших клиентов — физических лиц и корпоративных партнёров.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white/8 border border-white/12 rounded p-5 hover-lift">
                <StarRating count={r.rating} />
                <p className="text-white/80 text-sm leading-relaxed mt-3 mb-4">{r.text}</p>
                <div className="border-t border-white/12 pt-3">
                  <div className="font-oswald font-semibold text-white text-sm uppercase">{r.name}</div>
                  <div className="text-white/45 text-xs font-golos mt-0.5">{r.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="mb-14">
            <div className="section-divider" />
            <h2 className="font-oswald font-bold text-navy text-4xl uppercase tracking-wide mb-3">Частые вопросы</h2>
            <p className="text-muted-foreground">Отвечаем на самые популярные вопросы о нашей работе.</p>
          </div>

          <div>
            {FAQ.map((item, i) => (
              <div key={i} className="faq-item">
                <button
                  className="w-full flex items-center justify-between py-5 text-left group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-oswald font-semibold text-navy text-lg uppercase tracking-wide pr-4 group-hover:text-orange transition-colors">{item.q}</span>
                  <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={20} className="text-muted-foreground flex-shrink-0" />
                </button>
                {openFaq === i && (
                  <div className="pb-5 text-muted-foreground leading-relaxed animate-fade-in">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-14">
            <div className="section-divider" />
            <h2 className="font-oswald font-bold text-navy text-4xl uppercase tracking-wide mb-3">Контакты</h2>
            <p className="text-muted-foreground max-w-xl">Мы всегда на связи. Звоните в любое время суток.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: "Phone", title: "Телефон",
                content: (
                  <>
                    <a href="tel:+74951234567" className="font-oswald font-bold text-navy text-2xl hover:text-orange transition-colors block">+7 (495) 123-45-67</a>
                    <span className="text-sm text-muted-foreground">Круглосуточно, 24/7</span>
                  </>
                )
              },
              {
                icon: "Mail", title: "Email",
                content: (
                  <>
                    <a href="mailto:info@autoevak.ru" className="font-oswald font-bold text-navy text-xl hover:text-orange transition-colors block">info@autoevak.ru</a>
                    <span className="text-sm text-muted-foreground">Ответ в течение 2 часов</span>
                  </>
                )
              },
              {
                icon: "MapPin", title: "Адрес офиса",
                content: (
                  <>
                    <span className="font-oswald font-bold text-navy text-xl block">Москва, ул. Промышленная, 18</span>
                    <span className="text-sm text-muted-foreground">Пн–Пт: 9:00 – 18:00</span>
                  </>
                )
              },
            ].map((c, i) => (
              <div key={i} className="bg-white border border-border rounded p-6 flex items-start gap-5 hover-lift">
                <div className="w-12 h-12 bg-navy rounded flex items-center justify-center flex-shrink-0">
                  <Icon name={c.icon} fallback="Phone" size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-xs font-golos font-medium text-muted-foreground uppercase tracking-widest mb-2">{c.title}</div>
                  <div className="flex flex-col gap-1">{c.content}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded overflow-hidden border border-border" style={{ height: 340 }}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?text=Москва&z=11"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              title="Карта"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-dark py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange rounded flex items-center justify-center">
                <Icon name="Truck" size={18} className="text-white" />
              </div>
              <div>
                <div className="font-oswald font-bold text-white text-lg leading-tight">АВТО<span className="text-orange">ЭВАКУАТОР</span></div>
                <div className="text-xs text-white/40">© 2025 Все права защищены</div>
              </div>
            </div>
            <nav className="flex flex-wrap gap-5 justify-center">
              {NAV_LINKS.map(link => (
                <a key={link.href} href={link.href} className="text-white/50 text-sm font-golos hover:text-white transition-colors">{link.label}</a>
              ))}
            </nav>
            <a href="tel:+74951234567" className="font-oswald font-bold text-white text-xl hover:text-orange transition-colors">
              +7 (495) 123-45-67
            </a>
          </div>
        </div>
      </footer>

      {/* FLOATING CALL BUTTON */}
      <a
        href="tel:+74951234567"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-orange rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
        title="Позвонить"
      >
        <Icon name="Phone" size={24} className="text-white" />
      </a>
    </div>
  );
};

export default Index;