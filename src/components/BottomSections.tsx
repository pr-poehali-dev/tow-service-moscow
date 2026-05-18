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

const BottomSections = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
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
    </>
  );
};

export default BottomSections;
