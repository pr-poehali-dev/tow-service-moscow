import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/78d64023-9129-4f67-afe6-fe08698073c3/files/ca47588b-ef58-4726-8972-9d7e43718ccd.jpg";

const HeroOrderSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", address: "", comment: "" });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

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
    </>
  );
};

export default HeroOrderSection;