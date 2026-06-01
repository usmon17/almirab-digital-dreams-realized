import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "uz" | "ru" | "en";

type Dict = Record<string, { uz: string; ru: string; en: string }>;

export const dict: Dict = {
  "nav.services": { uz: "Xizmatlar", ru: "Услуги", en: "Services" },
  "nav.process": { uz: "Jarayon", ru: "Процесс", en: "Process" },
  "nav.work": { uz: "Ishlar", ru: "Работы", en: "Work" },
  "nav.stack": { uz: "Texnologiyalar", ru: "Стек", en: "Stack" },
  "nav.contact": { uz: "Aloqa", ru: "Контакты", en: "Contact" },
  "nav.cta": { uz: "Loyihani boshlash", ru: "Начать проект", en: "Start project" },

  "hero.badge": { uz: "Q3 uchun joylar cheklangan", ru: "Принимаем заявки на Q3", en: "Now booking Q3 — limited slots" },
  "hero.title": { uz: "Biz odamlar sevadigan raqamli mahsulotlar yaratamiz.", ru: "Мы создаём цифровые продукты, которые любят.", en: "We build digital products people love." },
  "hero.subtitle": {
    uz: "almirab — veb, mobil, desktop va AI yechimlarini ishlab chiqaruvchi studiya. G'oyalarni jonli, sayqallangan mahsulotlarga aylantiramiz.",
    ru: "almirab — студия, создающая веб, мобильные, десктопные и AI-решения. Превращаем идеи в продуманные цифровые продукты.",
    en: "almirab is a studio crafting web, mobile, desktop and AI-powered software. We turn ambitious ideas into refined experiences.",
  },
  "hero.cta1": { uz: "Loyihani boshlash", ru: "Начать проект", en: "Start your project" },
  "hero.cta2": { uz: "Ishlarimizni ko'rish", ru: "Смотреть работы", en: "Explore our work" },
  "hero.scroll": { uz: "Pastga", ru: "Ниже", en: "Scroll" },

  "about.eyebrow": { uz: "Biz haqimizda", ru: "О нас", en: "About" },
  "about.title": { uz: "Qanday yaratilganini muhim deb biluvchilar uchun studiya.", ru: "Студия для тех, кому важно, как сделано.", en: "A studio for teams who care how things are made." },
  "about.desc": { uz: "almirab — muhandislar va dizaynerlardan iborat kichik, tajribali jamoa. Asoschilar va mahsulot jamoalari bilan birga ishlab, e'tiborga loyiq ishlar yaratamiz.", ru: "almirab — небольшая команда сеньоров: инженеров и дизайнеров. Работаем с фаундерами и продуктовыми командами над работой, которая заслуживает внимания.", en: "almirab is a small, senior team of engineers and designers. We partner with founders and product teams to ship work that earns attention." },
  "about.mission.k": { uz: "Missiya", ru: "Миссия", en: "Mission" },
  "about.mission.v": { uz: "Shu darajada sayqallangan dasturiy mahsulot yaratish — aniq, tez va chuqur o'ylangan.", ru: "Создавать настолько отточенное ПО, что оно кажется неизбежным — ясное, быстрое, продуманное.", en: "Build software so refined it feels inevitable — clear, fast, and deeply considered." },
  "about.vision.k": { uz: "Vizyon", ru: "Видение", en: "Vision" },
  "about.vision.v": { uz: "Har bir raqamli mahsulot ekran ortidagi insonni hurmat qiladigan dunyo.", ru: "Мир, в котором каждый цифровой продукт уважает человека по ту сторону экрана.", en: "A world where every digital product respects the person on the other side of the screen." },
  "about.values.k": { uz: "Qadriyatlar", ru: "Ценности", en: "Values" },
  "about.values.v": { uz: "Tezlikdan ko'ra hunarmandchilik. Shovqindan ko'ra mazmun. Har bir o'zaro aloqada qozonilgan ishonch.", ru: "Мастерство важнее скорости. Суть важнее шума. Доверие — через каждое взаимодействие.", en: "Craft over speed. Substance over noise. Trust earned through every interaction." },

  "services.eyebrow": { uz: "Xizmatlar", ru: "Услуги", en: "Services" },
  "services.title": { uz: "Biz qiladigan har bir narsa uzoq xizmat qilish uchun qurilgan.", ru: "Всё, к чему мы прикасаемся, создано, чтобы служить долго.", en: "Everything we touch is built to last." },
  "services.desc": { uz: "Bitta landing sahifadan to to'liq platformagacha — haqiqiy yuk va foydalanuvchilarga bardosh beradigan ishlar yaratamiz.", ru: "От одного лендинга до полноценной платформы — мы создаём то, что выдерживает реальную нагрузку и пользователей.", en: "From a single landing page to a full platform — we ship work that holds up under real users and real load." },
  "s.web.t": { uz: "Veb-ishlanma", ru: "Веб-разработка", en: "Web Development" },
  "s.web.d": { uz: "Marketing saytlari, dashboardlar, e-commerce. Tezlik va sayqal — asosga singdirilgan.", ru: "Маркетинговые сайты, дашборды, e-commerce. Производительность и лоск встроены изначально.", en: "Marketing sites, dashboards, e-commerce. Performance and polish baked in." },
  "s.mob.t": { uz: "Mobil ilovalar", ru: "Мобильные приложения", en: "Mobile Apps" },
  "s.mob.d": { uz: "iOS, Android va cross-platform — odamlar haqiqatan ochishni xohlaydigan ilovalar.", ru: "iOS, Android и кроссплатформенные приложения, которые хочется открывать.", en: "iOS, Android and cross-platform builds people actually want to open." },
  "s.dsk.t": { uz: "Desktop dasturlar", ru: "Десктоп-приложения", en: "Desktop Software" },
  "s.dsk.d": { uz: "Quvvat va ishonchlilik talab qiladigan ish jarayonlari uchun native va Electron ilovalari.", ru: "Native и Electron-приложения для задач, где важны мощность и надёжность.", en: "Native and Electron apps for workflows that demand power and reliability." },
  "s.ux.t": { uz: "UI / UX dizayn", ru: "UI / UX дизайн", en: "UI / UX Design" },
  "s.ux.d": { uz: "Did bilan ishlangan interfeyslar — tadqiqotga asoslangan, batafsil, ishga tayyor.", ru: "Интерфейсы со вкусом — исследовательский подход, внимание к деталям, готовы к запуску.", en: "Interfaces with taste — research-led, beautifully detailed, ready to ship." },
  "s.saas.t": { uz: "SaaS platformalar", ru: "SaaS-платформы", en: "SaaS Platforms" },
  "s.saas.d": { uz: "Billing, auth va xavfsiz miqyoslash uchun infratuzilma bilan multi-tenant mahsulotlar.", ru: "Мульти-тенант продукты с биллингом, авторизацией и инфраструктурой для масштабирования.", en: "Multi-tenant products with billing, auth and infrastructure to scale safely." },
  "s.ai.t": { uz: "AI integratsiyalar", ru: "AI-интеграции", en: "AI Integrations" },
  "s.ai.d": { uz: "Amaliy AI funksiyalari: yordamchilar, qidiruv, avtomatlashtirish, prognozlash.", ru: "Практичные AI-функции: ассистенты, поиск, автоматизация, прогнозы.", en: "Practical AI features: assistants, search, automation, predictive flows." },
  "s.auto.t": { uz: "Biznes avtomatlashtirish", ru: "Бизнес-автоматизация", en: "Business Automation" },
  "s.auto.d": { uz: "Ish jarayonlari, integratsiyalar va ichki vositalar — qiymatni jimgina oshiradi.", ru: "Воркфлоу, интеграции и внутренние инструменты, тихо приумножающие ценность.", en: "Workflows, integrations and internal tools that quietly compound value." },
  "s.cons.t": { uz: "Texnik konsalting", ru: "Технический консалтинг", en: "Technical Consulting" },
  "s.cons.d": { uz: "Arxitektura tahlili, jamoani kuchaytirish va yo'l xaritasini aniqlashtirish.", ru: "Ревью архитектуры, усиление команды и ясность в роадмапе.", en: "Architecture reviews, team augmentation, and roadmap clarity." },

  "process.eyebrow": { uz: "Jarayon", ru: "Процесс", en: "Process" },
  "process.title": { uz: "Qanday ishlaymiz — yetti qadamda.", ru: "Как мы работаем — в семи шагах.", en: "How we work — in seven moves." },
  "process.desc": { uz: "Birinchi qo'ng'iroqdan uzoq muddatli hamkorlikkacha aniq yo'l.", ru: "Ясный путь от первого звонка до долгосрочного партнёрства.", en: "A clear path from first call to long-term partnership." },
  "p.1.t": { uz: "Tanishuv", ru: "Дискавери", en: "Discovery" },
  "p.1.d": { uz: "Muammo, auditoriya va ambitsiyani moslashtirish uchun chuqur suhbatlar.", ru: "Глубокие разговоры о задаче, аудитории и амбициях.", en: "Deep conversations to align on the problem, audience and ambition." },
  "p.2.t": { uz: "Tadqiqot", ru: "Исследование", en: "Research" },
  "p.2.d": { uz: "Bozor, foydalanuvchilar, texnik landshaft. Fikrdan oldin dalillar.", ru: "Рынок, пользователи, технический ландшафт. Сначала данные.", en: "Market, users, technical landscape. Evidence before opinions." },
  "p.3.t": { uz: "Dizayn", ru: "Дизайн", en: "Design" },
  "p.3.d": { uz: "Tizimlar, oqimlar, prototiplar — birinchi kundan piksel darajasidagi e'tibor.", ru: "Системы, флоу, прототипы — внимание к каждому пикселю с первого дня.", en: "Systems, flows, prototypes — pixel-level care from day one." },
  "p.4.t": { uz: "Ishlanma", ru: "Разработка", en: "Development" },
  "p.4.d": { uz: "Zamonaviy stack, end-to-end tiplangan, har kuni code review.", ru: "Современный стек, end-to-end типизация, ежедневное код-ревью.", en: "Modern stack, type-safe end to end, code reviewed daily." },
  "p.5.t": { uz: "Test", ru: "Тестирование", en: "Testing" },
  "p.5.d": { uz: "Avtomatlashtirilgan, qo'lda va real sharoitda. Tekshirilmagan hech narsa chiqmaydi.", ru: "Автотесты, ручное и реальное использование. Ничего не уходит непроверенным.", en: "Automated, manual, and real-world. Nothing ships untested." },
  "p.6.t": { uz: "Ishga tushirish", ru: "Запуск", en: "Launch" },
  "p.6.d": { uz: "Monitoring, tezlik va SEO bilan silliq go-live.", ru: "Плавный запуск с мониторингом, производительностью и SEO.", en: "Smooth go-live with monitoring, performance and SEO in place." },
  "p.7.t": { uz: "O'sish", ru: "Рост", en: "Growth" },
  "p.7.d": { uz: "Iteratsiya, eksperimentlar va ishga tushirilgandan keyin uzoq muddatli yordam.", ru: "Итерации, эксперименты и долгосрочная поддержка после запуска.", en: "Iteration, experimentation and long-term support after launch." },

  "work.eyebrow": { uz: "Tanlangan ishlar", ru: "Избранные работы", en: "Selected work" },
  "work.title": { uz: "Yaqinda yaratganimiz, faxrlanadigan ishlarimiz.", ru: "Недавнее, чем мы гордимся.", en: "Recent things we're proud of." },
  "work.case": { uz: "Loyiha haqida", ru: "Кейс", en: "View case study" },
  "w.1.d": { uz: "AI-yordamida real vaqtli mahsulot analitikasi dashboardi.", ru: "Дашборд продуктовой аналитики в реальном времени с AI-инсайтами.", en: "Realtime product analytics dashboard with AI-assisted insights." },
  "w.2.d": { uz: "Mintaqaviy klinikalar tarmog'i uchun bemor hamrohi ilovasi.", ru: "Приложение-компаньон пациента для региональной сети клиник.", en: "Patient companion app for a regional clinic network." },
  "w.3.d": { uz: "Moda brendi uchun headless do'kon va sotuvchi vositalari.", ru: "Headless-сторфронт и инструменты мерчанта для fashion-бренда.", en: "Headless storefront and merchant tooling for a fashion brand." },
  "w.4.d": { uz: "30+ ichki jadvalni almashtirgan avtomatlashtirish to'plami.", ru: "Пакет автоматизации, заменивший 30+ внутренних таблиц.", en: "Automation suite that replaces 30+ internal spreadsheets." },

  "stack.eyebrow": { uz: "Texnologiyalar", ru: "Стек", en: "Stack" },
  "stack.title": { uz: "Zamonaviy vositalar — maqsad bilan ishlatiladi.", ru: "Современный инструментарий, применяемый осознанно.", en: "A modern toolkit, used with intent." },
  "stack.desc": { uz: "Mahsulotga xizmat qiladigan texnologiyalarni tanlaymiz — aksincha emas.", ru: "Выбираем технологии под продукт, а не наоборот.", en: "We pick technologies that serve the product — not the other way around." },
  "stack.fe": { uz: "Frontend", ru: "Frontend", en: "Frontend" },
  "stack.be": { uz: "Backend", ru: "Backend", en: "Backend" },
  "stack.data": { uz: "Ma'lumotlar", ru: "Данные", en: "Data" },
  "stack.cloud": { uz: "Cloud", ru: "Cloud", en: "Cloud" },

  "why.eyebrow": { uz: "Nega almirab", ru: "Почему almirab", en: "Why almirab" },
  "why.title": { uz: "Jamoalar biz bilan qoladigan oltita sabab.", ru: "Шесть причин, почему команды остаются с нами.", en: "Six reasons teams stay with us." },
  "why.1.t": { uz: "Premium sifat", ru: "Премиум-качество", en: "Premium Quality" },
  "why.1.d": { uz: "Tajribali jamoa, baland mezon, har bir detal o'ylangan.", ru: "Сеньорная команда, высокая планка, каждая деталь продумана.", en: "Senior team, high bar, every detail intentional." },
  "why.2.t": { uz: "Tez yetkazib berish", ru: "Быстрая поставка", en: "Fast Delivery" },
  "why.2.d": { uz: "Yetkazib beradigan kichik jamoalar — choraklab emas, haftalik.", ru: "Маленькие команды, которые релизят еженедельно, а не раз в квартал.", en: "Small teams that ship — weekly, not quarterly." },
  "why.3.t": { uz: "Miqyoslanuvchi arxitektura", ru: "Масштабируемая архитектура", en: "Scalable Architecture" },
  "why.3.d": { uz: "Sizga qarshi emas, siz bilan birga o'sadigan asoslar.", ru: "Фундамент, растущий вместе с вами, а не против вас.", en: "Foundations that grow with you, not against you." },
  "why.4.t": { uz: "Zamonaviy texnologiyalar", ru: "Современные технологии", en: "Modern Technologies" },
  "why.4.d": { uz: "Uzoq umr uchun tanlangan dolzarb stacklar.", ru: "Актуальные стеки, выбранные с расчётом на долгую жизнь.", en: "Up-to-date stacks chosen for longevity." },
  "why.5.t": { uz: "Uzoq muddatli yordam", ru: "Долгосрочная поддержка", en: "Long-term Support" },
  "why.5.d": { uz: "Ishga tushirilgandan keyin ham birgamiz. Hamkor, sotuvchi emas.", ru: "Остаёмся после запуска. Партнёры, а не подрядчики.", en: "We stay after launch. Partners, not vendors." },
  "why.6.t": { uz: "Foydalanuvchiga yo'naltirilgan dizayn", ru: "Дизайн, ориентированный на пользователя", en: "User-Centered Design" },
  "why.6.d": { uz: "Tadqiqotga asoslangan qarorlar, foydalanuvchi har doim birinchi.", ru: "Решения на основе исследований, пользователь всегда на первом месте.", en: "Research-led decisions, end users always first." },

  "stats.1": { uz: "Topshirilgan loyihalar", ru: "Сданных проектов", en: "Projects delivered" },
  "stats.2": { uz: "Mamnun mijozlar", ru: "Довольных клиентов", en: "Happy clients" },
  "stats.3": { uz: "Yil tajriba", ru: "Лет мастерства", en: "Years of craft" },
  "stats.4": { uz: "Texnologiya", ru: "Технологий", en: "Technologies mastered" },

  "tst.eyebrow": { uz: "Mijozlar fikri", ru: "Отзывы", en: "Testimonials" },
  "tst.title": { uz: "Birga yaratgan odamlarimiz so'zlari.", ru: "Слова людей, с которыми мы строили.", en: "Words from the people we built with." },
  "tst.1.q": { uz: "almirab olti hafta ichida shunday narsani yetkazib berdi — oldingi vendor olti oyda qila olmagan. Mezon real.", ru: "almirab за шесть недель сделал то, что прежний подрядчик не смог за шесть месяцев. Планка реальная.", en: "almirab shipped in six weeks what our previous vendor couldn't in six months. The bar is real." },
  "tst.2.q": { uz: "Biz ishlagan eng o'ylangan muhandislik jamoasi — jimgina. Har bir qarorning sababi bor edi.", ru: "Тихо — самая продуманная инженерная команда из тех, с кем мы работали. У каждого решения была причина.", en: "Quietly the most considered engineering team we've ever worked with. Every decision had a reason." },
  "tst.3.q": { uz: "Ba'zan ular bizdan ko'ra foydalanuvchilarimizga ko'proq g'amxo'rlik qilgan. Mahsulot shu sababli yaxshiroq.", ru: "Порой они заботились о наших пользователях больше нас самих. Продукт от этого реально выиграл.", en: "They cared about our users more than we did at times. The product is genuinely better for it." },

  "contact.eyebrow": { uz: "Aloqa", ru: "Контакты", en: "Contact" },
  "contact.title": { uz: "Keling, esda qoladigan narsa yarataylik.", ru: "Создадим что-то выдающееся.", en: "Let's build something remarkable." },
  "contact.desc": { uz: "Loyihangiz haqida yozing. Bir ish kuni ichida javob beramiz.", ru: "Расскажите о проекте. Ответим в течение рабочего дня.", en: "Tell us about your project. We respond within one business day." },
  "contact.name": { uz: "Ismingiz", ru: "Ваше имя", en: "Your name" },
  "contact.email": { uz: "Email", ru: "Email", en: "Email" },
  "contact.company": { uz: "Kompaniya", ru: "Компания", en: "Company" },
  "contact.details": { uz: "Loyiha tafsilotlari", ru: "Детали проекта", en: "Project details" },
  "contact.send": { uz: "Yuborish", ru: "Отправить", en: "Send message" },
  "contact.sent": { uz: "Rahmat — tez orada bog'lanamiz", ru: "Спасибо — скоро свяжемся", en: "Thank you — we'll be in touch" },
  "contact.phone.k": { uz: "Telefon", ru: "Телефон", en: "Phone" },
  "contact.studio.k": { uz: "Studiya", ru: "Студия", en: "Studio" },
  "contact.studio.v": { uz: "Toshkent · Butun dunyo bo'ylab remote", ru: "Ташкент · Remote по всему миру", en: "Tashkent · Remote worldwide" },
  "contact.social": { uz: "Ijtimoiy", ru: "Соцсети", en: "Social" },

  "footer.tag": { uz: "G'amxo'rlik bilan yaratilgan. Uzoqqa mo'ljallangan.", ru: "Сделано с заботой. Создано надолго.", en: "Crafted with care. Built to last." },
};

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string }>({
  lang: "uz",
  setLang: () => {},
  t: (k) => k,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("uz");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang | null)) || "uz";
    setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (k: string) => dict[k]?.[lang] ?? k;

  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export const useI18n = () => useContext(LangCtx);
