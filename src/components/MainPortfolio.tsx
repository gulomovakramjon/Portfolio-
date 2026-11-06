import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  Database, 
  Smartphone, 
  Play, 
  GitBranch, 
  FolderGit2,
  CheckCircle,
  Phone,
  Send,
  Award
} from 'lucide-react';
import '../styles/portfolio.css';

interface MainPortfolioProps {
  onOpenRadianProject: () => void;
  onOpenGitExport: () => void;
}

type Lang = 'uz' | 'ru' | 'en';

export const MainPortfolio: React.FC<MainPortfolioProps> = ({ 
  onOpenRadianProject,
  onOpenGitExport 
}) => {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('akramjon_portfolio_lang') as Lang;
      if (saved && (saved === 'uz' || saved === 'ru' || saved === 'en')) return saved;
      const navLang = navigator.language.toLowerCase();
      if (navLang.startsWith('ru')) return 'ru';
      if (navLang.startsWith('uz')) return 'uz';
    }
    return 'en';
  });

  const [activeSection, setActiveSection] = useState<'work' | 'skills' | 'path' | 'contact' | ''>('');

  const handleLangChange = (l: Lang) => {
    setLang(l);
    localStorage.setItem('akramjon_portfolio_lang', l);
  };

  const T: Record<Lang, Record<string, string>> = {
    uz: {
      ig_n: "Akramjon G'ulomov", ig_r: 'Raqamli kontent yaratuvchi', ig_u: 'UI/UX dizayner', tg_n: 'Akramjon', tg_s: 'onlayn', tg_cn: 'Kanal • 23 obunachi', tg_ph: 'Telefon', tg_un: 'Foydalanuvchi nomi', so_e: 'Ijtimoiy tarmoqlar', so_h: 'Meni internetda toping', so_l: "O'zingiz qulay ko'radigan kanalni tanlang.", fol: 'Kuzatish', msg: 'Xabar', ig_p: 'postlar', ig_f: 'kuzatuvchilar', ig_g: 'kuzatilmoqda', t3: 'IELTS kanali', n1: "Ishlar", n2: "Ko'nikma", n3: "Yo'lim", n4: "Aloqa",
      open: "Front-end va UI/UX lavozimlariga ochiqman", h1: "Salom, men Akramjon.", h1b: "Avval loyihalayman, keyin kodlayman.",
      sub: "UI/UX va grafik dizayner, web-sayt yaratuvchi, IELTS ustozi. Toshkentda yashayman, TUITda Raqamli iqtisodiyot bo'yicha 2-kursda o'qiyman.",
      c1: "UI/UX ishlarimni ko'rish", c2: "Bog'lanish", f2: "TUIT, 2-kurs", f3: "Toshkent", sc: "Pastga",
      st1: "Yaratilgan saytlar", st2: "Full-stack platforma", st3: "IELTS, ikki marta", st4: "Tillar",
      w: "UI/UX va web loyihalar", wl: "Haqiqiy mijoz loyihasidan konseptual keyslargacha. Har biri foydalanuvchi muammosidan boshlanadi.",
      fl: "Haqiqiy mijoz loyihasi", p1: "Radian o'quv markazi platformasi", p1d: "O'quvchi, ustoz va ota-onalar o'zlashtirishni kuzatadigan sayt. Admin panel orqali kurslar, ro'yxatdan o'tish va o'rinlar boshqariladi.",
      r1: "O'quvchi kabineti: bosqichlar va faoliyat tarixi bazadagi haqiqiy ma'lumotlardan olinadi", r2: "Ro'yxatdan o'tish: kurslar bazadan yuklanadi, bo'sh o'rinlar real vaqtda ko'rinadi", r3: "Admin panel: kurslar va arizalar, CSV eksport, o'rinlarni tahrirlash, real vaqtda xabarlar", r4: "Supabase orqali kirish va xavfsizlik qoidalari (RLS)", r5: "PWA: telefonga o'rnatiladi, push xabarnomalar bor",
      cl: "Konseptual keyslar", cn: "Konsept",
      q1: "Mobil bank ilovasi", q1d: "Raqamli bankdan birinchi marta foydalanuvchilar uchun oddiy o'tkazmalar va xarajatlar tahlili.", q1t: "UX tadqiqot, Prototip, Figma",
      q2: "Onlayn do'kon redizayni", q2d: "Tezroq to'lov jarayoni va tushunarli mahsulot sahifalari.", q2t: "Web UI, Wireframes, Usability test",
      q3: "Analitik dashboard", q3d: "Jamoa trendlarni bir qarashda ko'ra oladigan dashboard.", q3t: "Dashboard, Dizayn tizimi, Figma",
      q4: "Ovqat yetkazish ilovasi", q4d: "Bir qo'l bilan qulay onboarding, buyurtma va kuzatuv.", q4t: "Mobile UI, User flows, Prototip",
      pe: "Jarayon", pr: "Qanday ishlayman", prl: "Avval sahifani prototip sifatida chizaman, keyin kodga o'tkazaman.",
      s1: "Tadqiqot", s1d: "Foydalanuvchi kim va unga nima xalaqit beradi.", s2: "Wireframe", s2d: "Rangdan oldin tuzilma va yo'l.", s3: "Prototip", s3d: "G'oyani sinash uchun bosiladigan ekranlar.", s4: "Kod", s4d: "HTML, Tailwind va Supabase.", s5: "Sinov va sayqal", s5d: "Haqiqiy fikrlar, so'ng yaxshilash.",
      s: "Ko'nikmalar", sl: "Nimalar qila olishim, qisqacha.",
      gw: "Web-sayt yaratish", gwd: "4 ta sayt yaratganman, biri full-stack. HTML, Tailwind CSS, Supabase (kirish, baza, xavfsizlik qoidalari, realtime), admin panellar, PWA. AI yordamida (vibe coding) sayt va ilovalar yarataman.",
      gu: "UI/UX dizayn", gud: "Landing va portfolio sahifalarning prototipini chizaman, keyin front-endini yozaman. Hozir faol o'rganyapman.",
      gg: "Grafik dizayn", ggd: "Canva, Photoshop, logo va brend identitet, banner va poster.",
      g3: "Marketing", g3d: "Raqamli marketing, ijtimoiy tarmoq kontenti, o'quv markazlari uchun vizual materiallar.",
      g4: "Hozir o'rganyapman", g4d: "JavaScript, Node.js, ma'lumotlar tahlili.",
      pa: "Yo'lim", y1: "2026 – hozir", e1: "Registan Academic Support, Toshkent", e1d: "Imtihon o'tkazaman, turli yoshdagi o'quvchilar bilan ishlayman: asosiy imtihon va yakka speaking.",
      e2: "Radian uchun platforma", e2d: "To'lovlar va o'quv jarayonini bir joyga yig'gan startap platforma.", e3d: "Grafik dizayner va menejer yordamchisi: kurslar vizuali, marketing, bayramlar.",
      ed: "Ta'lim", u1: "TUIT (TATU) — Raqamli iqtisodiyot, bakalavr, 2025–2029, hozir 2-kurs",
      lg: "Tillar", l1: "O'zbek — ona tili", l2: "Ingliz — IELTS 7.0 ×2", l3: "Rus — o'rta daraja", l4: "Koreys — boshlang'ich", l5: "Arab — o'rganyapman",
      i: "IELTS bo'yicha yordam beraman", id: "IELTS 7.0 ni ikki marta olganman. Telegram kanalimda testlar va maslahatlar bor.", id2: "Onlayn darslar o'zbek tilida, A1–C1 darajalar, Zoom yoki Telegram orqali, har bir o'quvchiga individual reja.", ib: "Kanalga o'tish",
      k: "Birga ishlaymiz", kd: "Loyihangiz yoki vakansiyangiz bormi? Instagramda yozing yoki qo'ng'iroq qiling.", kl: "Toshkent, O'zbekiston", kc: "Telegram kanalim:"
    },
    ru: {
      ig_n: 'Акрамжон Гуломов', ig_r: 'Цифровой креатор', ig_u: 'UI/UX дизайнер', tg_n: 'Акрамжон', tg_s: 'в сети', tg_cn: 'Канал • 23 подписчика', tg_ph: 'Телефон', tg_un: 'Имя пользователя', so_e: 'Соцсети', so_h: 'Найдите меня в сети', so_l: 'Выбирайте канал, которым вам удобнее пользоваться.', fol: 'Подписаться', msg: 'Написать', ig_p: 'публикации', ig_f: 'подписчики', ig_g: 'подписки', t3: 'Канал по IELTS', n1: "Работы", n2: "Навыки", n3: "Путь", n4: "Связь",
      open: "Открыт к ролям front-end и UI/UX", h1: "Привет, я Акрамжон.", h1b: "Сначала проектирую, потом верстаю.",
      sub: "UI/UX и графический дизайнер, создаю веб-сайты, преподаю IELTS. Живу в Ташкенте, учусь на 2 курсе ТУИТ по цифровой экономике.",
      c1: "Мои UI/UX работы", c2: "Связаться", f2: "ТУИТ, 2 курс", f3: "Ташкент", sc: "Вниз",
      st1: "Создано сайтов", st2: "Full-stack платформа", st3: "IELTS, дважды", st4: "Языка",
      w: "UI/UX и веб-проекты", wl: "От реального проекта для клиента до концептуальных кейсов. Каждый начинается с проблемы пользователя.",
      fl: "Проект для клиента", p1: "Платформа для учебного центра Radian", p1d: "Сайт, где ученики, преподаватели и родители следят за успеваемостью. Через админ-панель управляются курсы, заявки и места.",
      r1: "Кабинет ученика: этапы и история активности берутся из реальных данных базы", r2: "Регистрация: курсы загружаются из базы, свободные места видны в реальном времени", r3: "Админ-панель: курсы и заявки, экспорт CSV, правка мест, уведомления в реальном времени", r4: "Вход через Supabase и правила безопасности (RLS)", r5: "PWA: устанавливается на телефон, есть push-уведомления",
      cl: "Концептуальные кейсы", cn: "Концепт",
      q1: "Мобильный банк", q1d: "Простые переводы и аналитика трат для тех, кто впервые пользуется цифровым банком.", q1t: "UX-исследование, Прототип, Figma",
      q2: "Редизайн интернет-магазина", q2d: "Более быстрый checkout и понятные страницы товаров.", q2t: "Web UI, Wireframes, Юзабилити-тесты",
      q3: "Аналитический дашборд", q3d: "Дашборд, на котором команда видит тренды с первого взгляда.", q3t: "Дашборд, Дизайн-система, Figma",
      q4: "Приложение доставки еды", q4d: "Онбординг, заказ и отслеживание, удобные для одной руки.", q4t: "Mobile UI, User flows, Прототип",
      pe: "Процесс", pr: "Как я работаю", prl: "Сначала рисую страницу как прототип, затем переношу в код.",
      s1: "Исследование", s1d: "Кто пользователь и что ему мешает.", s2: "Wireframe", s2d: "Структура и сценарии до выбора цвета.", s3: "Прототип", s3d: "Кликабельные экраны для проверки идеи.", s4: "Код", s4d: "HTML, Tailwind и Supabase.", s5: "Тесты и доводка", s5d: "Живая обратная связь, затем полировка.",
      s: "Навыки", sl: "Коротко о том, что я умею.",
      gw: "Создание веб-сайтов", gwd: "Сделал 4 сайта, один из них full-stack. HTML, Tailwind CSS, Supabase (вход, база, правила безопасности, realtime), админ-панели, PWA. Создаю сайты и приложения с помощью ИИ (vibe coding).",
      gu: "UI/UX дизайн", gud: "Рисую прототипы лендингов и портфолио-страниц, затем пишу фронтенд. Сейчас активно изучаю.",
      gg: "Графический дизайн", ggd: "Canva, Photoshop, логотипы и айдентика, баннеры и постеры.",
      g3: "Маркетинг", g3d: "Цифровой маркетинг, контент для соцсетей, визуалы для учебных центров.",
      g4: "Изучаю сейчас", g4d: "JavaScript, Node.js, анализ данных.",
      pa: "Мой путь", y1: "2026 – сейчас", e1: "Registan Academic Support, Ташкент", e1d: "Провожу экзамены, работаю с учениками разного возраста: основной экзамен и индивидуальный speaking.",
      e2: "Платформа для Radian", e2d: "Стартап-платформа, объединившая платежи и учебный процесс.", e3d: "Графический дизайнер и помощник менеджера: визуалы курсов, маркетинг, праздники.",
      ed: "Образование", u1: "ТУИТ (ТАТУ) — Цифровая экономика, бакалавриат, 2025–2029, сейчас 2 курс",
      lg: "Языки", l1: "Узбекский — родной", l2: "Английский — IELTS 7.0 ×2", l3: "Русский — средний уровень", l4: "Корейский — начальный", l5: "Арабский — изучаю",
      i: "Помогу с IELTS", id: "Я дважды сдал IELTS на 7.0. В моём Telegram-канале тесты и советы.", id2: "Онлайн-уроки на узбекском, уровни A1–C1, через Zoom или Telegram, индивидуальный план для каждого ученика.", ib: "Перейти в канал",
      k: "Давайте работать вместе", kd: "Есть проект или вакансия? Напишите в Instagram или позвоните.", kl: "Ташкент, Узбекистан", kc: "Мой Telegram-канал:"
    },
    en: {
      ig_n: "Akramjon G'ulomov", ig_r: 'Digital creator', ig_u: 'UI/UX Designer', tg_n: 'Akramjon', tg_s: 'online', tg_cn: 'Channel • 23 subscribers', tg_ph: 'Phone', tg_un: 'Username', so_e: 'Social', so_h: 'Find me online', so_l: 'Pick whichever channel you use most.', fol: 'Follow', msg: 'Message', ig_p: 'posts', ig_f: 'followers', ig_g: 'following', t3: 'IELTS channel', n1: "Work", n2: "Skills", n3: "Path", n4: "Contact",
      open: "Open to front-end & UI/UX roles", h1: "Hi, I'm Akramjon.", h1b: "I design it, then I build it.",
      sub: "UI/UX and graphic designer, website creator and IELTS teacher. I live in Tashkent and study Digital Economy at TUIT, second year.",
      c1: "See my UI/UX work", c2: "Get in touch", f2: "TUIT, year 2", f3: "Tashkent", sc: "Scroll",
      st1: "Websites built", st2: "Full-stack platform", st3: "IELTS, twice", st4: "Languages",
      w: "UI/UX & web projects", wl: "From a real client project to concept case studies. Each one starts with a user problem.",
      fl: "Real client project", p1: "Radian learning center platform", p1d: "A site where students, teachers and parents track progress. The admin panel manages courses, sign-ups and seats.",
      r1: "Student dashboard: milestones and activity history come from real database data", r2: "Registration: courses load from the database, open seats update in real time", r3: "Admin panel: courses and sign-ups, CSV export, seat editing, real-time alerts", r4: "Supabase login and security rules (RLS)", r5: "PWA: installs on a phone, with push notifications",
      cl: "Concept case studies", cn: "Concept",
      q1: "Mobile banking app", q1d: "Simpler transfers and spending insights for first-time digital banking users.", q1t: "UX research, Prototype, Figma",
      q2: "E-commerce redesign", q2d: "A faster checkout flow and clearer product pages.", q2t: "Web UI, Wireframes, Usability testing",
      q3: "Analytics dashboard", q3d: "A data dashboard that lets a team spot trends at a glance.", q3t: "Dashboard, Design system, Figma",
      q4: "Food delivery app", q4d: "Onboarding, ordering and tracking flows designed for one-handed use.", q4t: "Mobile UI, User flows, Prototype",
      pe: "Process", pr: "How I work", prl: "I draw the page as a prototype first, then turn it into code.",
      s1: "Research", s1d: "Who the user is and what gets in their way.", s2: "Wireframe", s2d: "Structure and flow before any colour.", s3: "Prototype", s3d: "Clickable screens to test the idea.", s4: "Build", s4d: "HTML, Tailwind and Supabase.", s5: "Test & polish", s5d: "Real feedback, then refinement.",
      s: "Skills", sl: "What I can do, in short.",
      gw: "Website creation", gwd: "I've built 4 websites, one of them full-stack. HTML, Tailwind CSS, Supabase (auth, database, security rules, realtime), admin panels, PWA. I build sites and apps with AI (vibe coding).",
      gu: "UI/UX design", gud: "I design prototypes of landing and portfolio pages, then write the front end. Actively learning.",
      gg: "Graphic design", ggd: "Canva, Photoshop, logo and brand identity, banners and posters.",
      g3: "Marketing", g3d: "Digital marketing, social media content, visuals for learning centers.",
      g4: "Learning now", g4d: "JavaScript, Node.js, data analysis.",
      pa: "My path", y1: "2026 – present", e1: "Registan Academic Support, Tashkent", e1d: "I run exams and work with students of all ages: the main exam plus one-to-one speaking.",
      e2: "Platform for Radian", e2d: "A startup platform that brings payments and learning into one place.", e3d: "Graphic designer and manager's assistant: course visuals, marketing, holidays.",
      ed: "Education", u1: "TUIT (TATU) — Digital Economy, bachelor's, 2025–2029, now in year 2",
      lg: "Languages", l1: "Uzbek — native", l2: "English — IELTS 7.0 ×2", l3: "Russian — intermediate", l4: "Korean — beginner", l5: "Arabic — learning",
      i: "I can help with IELTS", id: "I scored IELTS 7.0 twice. My Telegram channel has tests and tips.", id2: "Online lessons in Uzbek, levels A1–C1, via Zoom or Telegram, with an individual plan for each student.", ib: "Open the channel",
      k: "Let's work together", kd: "Got a project or a vacancy? Message me on Instagram or give me a call.", kl: "Tashkent, Uzbekistan", kc: "My Telegram channel:"
    }
  };

  const t = T[lang];

  return (
    <div className="portfolio-wrapper selection:bg-amber-500/25 selection:text-amber-200">
      
      {/* Background orbs */}
      <div className="orbs" aria-hidden="true">
        <div className="orb o1" />
        <div className="orb o2" />
        <div className="orb o3" />
        <div className="orb o4" />
        <div className="glow" />
      </div>

      {/* Floating Header Navigation Bar */}
      <header className="bar">
        <nav className="portfolio-nav">
          <span id="pill" />
          <a href="#work" onClick={() => setActiveSection('work')} className={activeSection === 'work' ? 'on' : ''}>
            {t.n1}
          </a>
          <a href="#skills" onClick={() => setActiveSection('skills')} className={activeSection === 'skills' ? 'on' : ''}>
            {t.n2}
          </a>
          <a href="#path" onClick={() => setActiveSection('path')} className={activeSection === 'path' ? 'on' : ''}>
            {t.n3}
          </a>
          <a href="#contact" onClick={() => setActiveSection('contact')} className={activeSection === 'contact' ? 'on' : ''}>
            {t.n4}
          </a>

          {/* Direct Link to Connected Radian Project */}
          <button
            onClick={onOpenRadianProject}
            className="ml-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/30 to-amber-600/30 border border-amber-500/50 text-amber-300 hover:text-amber-200 hover:border-amber-400 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(245,158,11,0.2)]"
            title="Open Deep-Dive Case Study & Interactive Prototype"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Radian Prototype</span>
          </button>
        </nav>

        {/* Trilingual Switcher */}
        <div className="lang">
          <button 
            data-l="uz" 
            aria-pressed={lang === 'uz'} 
            onClick={() => handleLangChange('uz')}
            className="font-bold text-xs"
          >
            UZ
          </button>
          <button 
            data-l="ru" 
            aria-pressed={lang === 'ru'} 
            onClick={() => handleLangChange('ru')}
            className="font-bold text-xs"
          >
            RU
          </button>
          <button 
            data-l="en" 
            aria-pressed={lang === 'en'} 
            onClick={() => handleLangChange('en')}
            className="font-bold text-xs"
          >
            EN
          </button>
        </div>

        {/* Git Export Action */}
        <button
          onClick={onOpenGitExport}
          className="ml-1 p-2 rounded-full border border-stone-800 bg-stone-900/90 text-stone-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors flex items-center justify-center cursor-pointer"
          title="Export Project to Git / GitHub"
        >
          <GitBranch className="w-3.5 h-3.5" />
        </button>
      </header>

      {/* Top Hero Section */}
      <section id="top">
        <div className="hero-txt">
          <div className="open">
            <i />
            <span>{t.open}</span>
          </div>

          <h1>
            <span>{t.h1}</span>
            <span className="grad">{t.h1b}</span>
          </h1>

          <p className="sub">
            <mark>{t.sub}</mark>
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a className="btn" href="#work">
              <b>{t.c1}</b>
              <span>→</span>
            </a>
            
            <button 
              onClick={onOpenRadianProject}
              className="btn"
              style={{ background: 'linear-gradient(135deg, rgba(245,184,28,0.2), rgba(255,255,255,0.08))', border: '1.5px solid rgba(245,184,28,0.5)', color: '#ffd466' }}
            >
              <Play className="w-4 h-4 fill-amber-400 text-amber-400" />
              <b>Radian Live Prototype</b>
            </button>

            <a className="btn o" href="#contact">
              {t.c2}
            </a>
          </div>

          <ul className="chips">
            <li>IELTS 7.0 ×2</li>
            <li>{t.f2}</li>
            <li>{t.f3}</li>
            <li>UZ · EN · RU</li>
          </ul>
        </div>

        {/* Profile Visual Chassis */}
        <div className="ph-wrap">
          <div className="ph">
            <div className="img">
              <img 
                src="/assets/akramjon.webp" 
                alt="Akramjon Gulomov" 
                width="720" 
                height="900" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <span className="fc fc1">UI/UX Design</span>
          <span className="fc fc2">HTML · Tailwind · Supabase</span>
          <span className="fc fc3">IELTS 7.0 ×2</span>
        </div>

        <div className="cue" aria-hidden="true">
          <i />
          <span>{t.sc}</span>
        </div>
      </section>

      {/* Socials Showcase */}
      <section id="social">
        <span className="eyebrow" data-n="@">{t.so_e}</span>
        <h2>{t.so_h}</h2>
        <p className="lead" style={{ marginBottom: '34px' }}>{t.so_l}</p>

        <div className="cards">
          
          {/* Instagram Card */}
          <div className="col">
            <div className="plat">
              <span className="lg-ic ig">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="#fff" strokeWidth="1.9" />
                  <circle cx="12" cy="12" r="4" fill="none" stroke="#fff" strokeWidth="1.9" />
                  <circle cx="17.1" cy="6.9" r="1.1" fill="#fff" />
                </svg>
              </span>
              <span className="plat-t">
                <b>Instagram</b>
                <small>@gulomjonov_akramjon</small>
              </span>
            </div>

            <a 
              className="glass pcard" 
              href="https://www.instagram.com/gulomjonov_akramjon/" 
              target="_blank" 
              rel="noopener" 
              aria-label="Instagram: gulomjonov_akramjon"
            >
              <div className="ig-bar">
                <svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>
                <b>gulomjonov_akramjon</b>
                <svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></svg>
              </div>

              <div className="ig-top">
                <span className="igav">
                  <img src="/assets/avatar-ig.webp" alt="Akramjon Instagram Avatar" />
                </span>
                <div className="ig-stats">
                  <div><b>0</b><span>{t.ig_p}</span></div>
                  <div><b>336</b><span>{t.ig_f}</span></div>
                  <div><b>203</b><span>{t.ig_g}</span></div>
                </div>
              </div>

              <div className="ig-bio">
                <div className="nm">{t.ig_n}</div>
                <div className="dim">{t.ig_r}</div>
                <div>{t.ig_u}</div>
                <span className="ig-lnk">
                  <ExternalLink className="w-3.5 h-3.5 inline mr-1" />
                  gulomovakramjon.github.io
                </span>
                <span className="ig-th"><i>@</i>gulomjonov_akramjon</span>
              </div>

              <div className="ig-btns">
                <span className="b1">{t.fol}</span>
                <span className="b2">{t.msg}</span>
              </div>
            </a>
          </div>

          {/* Telegram Card */}
          <div className="col">
            <div className="plat">
              <span className="lg-ic tg">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#fff" d="M21.4 4.1 2.9 11.3c-.9.4-.9 1.3-.1 1.6l4.7 1.5 1.8 5.6c.2.6.9.8 1.4.4l2.6-2.2 4.8 3.5c.8.5 1.6.2 1.8-.8L23 5.3c.3-1.3-.5-1.7-1.6-1.2zM8.9 13.7l9.8-6.1c.4-.3.8-.1.5.2l-8 7.3-.3 3.5z"/>
                </svg>
              </span>
              <span className="plat-t">
                <b>Telegram</b>
                <small>@gulomjonov_akramjon</small>
              </span>
            </div>

            <article className="glass tgcard">
              <div className="tg-head">
                <span className="tg-av">A</span>
                <div className="tg-nm">{t.tg_n}</div>
                <div className="tg-st">{t.tg_s}</div>
              </div>

              <a className="tg-ch" href="https://t.me/akramjonsIELTS" target="_blank" rel="noopener">
                <span className="tg-cav">AJ</span>
                <span className="tg-ct">
                  <b>Akramjon’s Blog</b>
                  <span className="tg-sn">IELTS tips, education insights & speaking practice</span>
                  <small>{t.tg_cn}</small>
                </span>
              </a>

              <a className="tg-row" href="tel:+998777776531">
                <b>+998 77 777 65 31</b>
                <small>{t.tg_ph}</small>
              </a>

              <div className="tg-fill" />

              <a className="tg-row tg-open" href="https://t.me/gulomjonov_akramjon" target="_blank" rel="noopener">
                <b>@gulomjonov_akramjon</b>
                <small>{t.tg_un}</small>
                <Send className="qr text-sky-400" />
              </a>
            </article>
          </div>

        </div>

        {/* Quick Social Strip */}
        <div className="slist">
          <a className="srow" href="https://www.threads.net/@gulomjonov_akramjon" target="_blank" rel="noopener">
            <span className="ic font-mono">@</span>
            <span className="tx">
              <b>Threads</b>
              <small>@gulomjonov_akramjon</small>
            </span>
            <span className="go">↗</span>
          </a>

          <a className="srow" href="https://t.me/akramjonsIELTS" target="_blank" rel="noopener">
            <span className="ic">
              <Send className="w-5 h-5 text-amber-300" />
            </span>
            <span className="tx">
              <b>{t.t3}</b>
              <small>@akramjonsIELTS</small>
            </span>
            <span className="go">↗</span>
          </a>
        </div>
      </section>

      {/* Key Numbers Stats Section */}
      <section className="stats" aria-label="Key numbers">
        <div className="glass stat">
          <b>4</b>
          <span>{t.st1}</span>
        </div>
        <div className="glass stat">
          <b>1</b>
          <span>{t.st2}</span>
        </div>
        <div className="glass stat">
          <b>7.0</b>
          <span>{t.st3}</span>
        </div>
        <div className="glass stat">
          <b>3</b>
          <span>{t.st4}</span>
        </div>
      </section>

      {/* Work Section with FEATURED RADIAN PROJECT */}
      <section id="work">
        <span className="eyebrow" data-n="01">{t.n1}</span>
        <h2>{t.w}</h2>
        <p className="lead">{t.wl}</p>

        {/* THE MAIN FEATURED CLIENT PROJECT: Radian Platform (Directly Connected) */}
        <article className="glass feat relative group border-2 border-amber-500/40 hover:border-amber-400 transition-all shadow-[0_0_35px_rgba(245,184,28,0.15)] hover:shadow-[0_0_50px_rgba(245,184,28,0.3)]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="badge">{t.fl}</span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Interactive Showcase
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-100 group-hover:text-amber-300 transition-colors">
              {t.p1}
            </h3>

            <p className="text-stone-300 text-sm mt-2 leading-relaxed">
              {t.p1d}
            </p>

            <ul className="ft space-y-2 mt-4 text-xs sm:text-sm">
              <li>{t.r1}</li>
              <li>{t.r2}</li>
              <li>{t.r3}</li>
              <li>{t.r4}</li>
              <li>{t.r5}</li>
            </ul>

            <div className="tags mt-5">
              <span>HTML</span>
              <span>Tailwind CSS</span>
              <span>Supabase</span>
              <span>PWA</span>
            </div>

            {/* HIGH-IMPACT LAUNCH BUTTON */}
            <div className="mt-7 pt-4 border-t border-stone-800 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenRadianProject}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 font-extrabold text-sm shadow-[0_0_25px_rgba(245,184,28,0.4)] hover:shadow-[0_0_35px_rgba(245,184,28,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-stone-950" />
                <span>Open Live Interactive Prototype & Case Study</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <span className="text-xs text-stone-400">
                (Click to test student dashboard, admin tools, and PWA simulation)
              </span>
            </div>
          </div>

          {/* Interactive Window Preview */}
          <div 
            onClick={onOpenRadianProject}
            className="win cursor-pointer group/win relative"
            title="Click to launch interactive prototype"
          >
            <div className="dots flex items-center justify-between">
              <div className="flex gap-1.5">
                <b />
                <b />
                <b />
              </div>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-500/15 px-2 py-0.5 rounded border border-amber-500/30">
                Click to Test Live
              </span>
            </div>

            <div className="dash">
              <aside>
                <i className="a" />
                <i />
                <i />
                <i />
              </aside>
              <div className="main">
                <div className="row3">
                  <i />
                  <i />
                  <i className="a" />
                </div>
                <div className="chart">
                  <s style={{ height: '38%' }} />
                  <s style={{ height: '62%' }} />
                  <s style={{ height: '48%' }} />
                  <s style={{ height: '82%' }} />
                  <s style={{ height: '58%' }} />
                  <s style={{ height: '94%' }} />
                  <s style={{ height: '70%' }} />
                </div>
                <div className="list">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-stone-950/60 backdrop-blur-[2px] opacity-0 group-hover/win:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-center p-4">
              <div className="w-12 h-12 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center shadow-lg">
                <Play className="w-5 h-5 fill-stone-950 ml-0.5" />
              </div>
              <span className="text-xs font-bold text-stone-100">Click to Explore Full Prototype & Case Study</span>
              <span className="text-[10px] text-amber-400 font-mono">Student Dashboard · Live Seats · Admin Console · PWA</span>
            </div>
          </div>
        </article>

        {/* Concept Case Studies Stack */}
        <h3 className="sub-h">{t.cl}</h3>
        <div className="stack">
          
          <article className="glass sc-card" style={{ '--i': 0 } as React.CSSProperties}>
            <div>
              <span className="no">01 / 04</span>
              <span className="badge c">{t.cn}</span>
              <h3>{t.q1}</h3>
              <p>{t.q1d}</p>
              <div className="tags"><span>{t.q1t}</span></div>
            </div>
            <div className="mock" aria-hidden="true">
              <i style={{ left: '8%', top: '10%', width: '26%', height: '80%' }} />
              <i className="a" style={{ left: '12%', top: '18%', width: '18%', height: '14%' }} />
              <i style={{ left: '40%', top: '10%', width: '52%', height: '22%' }} />
              <i style={{ left: '40%', top: '38%', width: '24%', height: '52%' }} />
              <i style={{ left: '68%', top: '38%', width: '24%', height: '52%' }} />
            </div>
          </article>

          <article className="glass sc-card" style={{ '--i': 1 } as React.CSSProperties}>
            <div>
              <span className="no">02 / 04</span>
              <span className="badge c">{t.cn}</span>
              <h3>{t.q2}</h3>
              <p>{t.q2d}</p>
              <div className="tags"><span>{t.q2t}</span></div>
            </div>
            <div className="mock" aria-hidden="true">
              <i style={{ left: '6%', top: '10%', width: '88%', height: '12%' }} />
              <i className="a" style={{ left: '6%', top: '28%', width: '42%', height: '62%' }} />
              <i style={{ left: '54%', top: '28%', width: '40%', height: '12%' }} />
              <i style={{ left: '54%', top: '46%', width: '40%', height: '8%' }} />
              <i className="a" style={{ left: '54%', top: '62%', width: '20%', height: '14%' }} />
            </div>
          </article>

          <article className="glass sc-card" style={{ '--i': 2 } as React.CSSProperties}>
            <div>
              <span className="no">03 / 04</span>
              <span className="badge c">{t.cn}</span>
              <h3>{t.q3}</h3>
              <p>{t.q3d}</p>
              <div className="tags"><span>{t.q3t}</span></div>
            </div>
            <div className="mock" aria-hidden="true">
              <i style={{ left: '5%', top: '10%', width: '16%', height: '80%' }} />
              <i style={{ left: '26%', top: '10%', width: '20%', height: '22%' }} />
              <i style={{ left: '50%', top: '10%', width: '20%', height: '22%' }} />
              <i className="a" style={{ left: '74%', top: '10%', width: '21%', height: '22%' }} />
              <i style={{ left: '26%', top: '38%', width: '69%', height: '52%' }} />
            </div>
          </article>

          <article className="glass sc-card" style={{ '--i': 3 } as React.CSSProperties}>
            <div>
              <span className="no">04 / 04</span>
              <span className="badge c">{t.cn}</span>
              <h3>{t.q4}</h3>
              <p>{t.q4d}</p>
              <div className="tags"><span>{t.q4t}</span></div>
            </div>
            <div className="mock" aria-hidden="true">
              <i style={{ left: '6%', top: '12%', width: '26%', height: '76%' }} />
              <i className="a" style={{ left: '37%', top: '12%', width: '26%', height: '76%' }} />
              <i style={{ left: '68%', top: '12%', width: '26%', height: '76%' }} />
            </div>
          </article>

        </div>
      </section>

      {/* 5-Step UX Process */}
      <section id="process">
        <span className="eyebrow" data-n="02">{t.pe}</span>
        <h2>{t.pr}</h2>
        <p className="lead">{t.prl}</p>

        <div className="steps">
          <div className="st on">
            <span className="dot">1</span>
            <h3>{t.s1}</h3>
            <p>{t.s1d}</p>
          </div>
          <div className="st on">
            <span className="dot">2</span>
            <h3>{t.s2}</h3>
            <p>{t.s2d}</p>
          </div>
          <div className="st on">
            <span className="dot">3</span>
            <h3>{t.s3}</h3>
            <p>{t.s3d}</p>
          </div>
          <div className="st on">
            <span className="dot">4</span>
            <h3>{t.s4}</h3>
            <p>{t.s4d}</p>
          </div>
          <div className="st on">
            <span className="dot">5</span>
            <h3>{t.s5}</h3>
            <p>{t.s5d}</p>
          </div>
        </div>
      </section>

      {/* Skills Bento */}
      <section id="skills">
        <span className="eyebrow" data-n="03">{t.n2}</span>
        <h2>{t.s}</h2>
        <p className="lead">{t.sl}</p>

        <div className="bento">
          <div className="glass pad s3">
            <h3>{t.gw}</h3>
            <p>{t.gwd}</p>
          </div>
          <div className="glass pad s3">
            <h3>{t.gu}</h3>
            <p>{t.gud}</p>
          </div>
          <div className="glass pad s2">
            <h3>{t.gg}</h3>
            <p>{t.ggd}</p>
          </div>
          <div className="glass pad s2">
            <h3>{t.g3}</h3>
            <p>{t.g3d}</p>
          </div>
          <div className="glass pad s2">
            <h3>{t.g4}</h3>
            <p>{t.g4d}</p>
          </div>
        </div>

        {/* Marquee Ticker */}
        <div className="mq" aria-hidden="true">
          <div className="mq-t">
            <span>HTML</span>
            <span>Tailwind CSS</span>
            <span>JavaScript</span>
            <span>Supabase</span>
            <span>PWA</span>
            <span>Canva</span>
            <span>Photoshop</span>
            <span>UI/UX</span>
            <span>HTML</span>
            <span>Tailwind CSS</span>
            <span>JavaScript</span>
            <span>Supabase</span>
            <span>PWA</span>
            <span>Canva</span>
            <span>Photoshop</span>
            <span>UI/UX</span>
          </div>
        </div>
      </section>

      {/* Path & Education */}
      <section id="path">
        <span className="eyebrow" data-n="04">{t.n3}</span>
        <div className="two">
          <div>
            <h2>{t.pa}</h2>
            <div className="tl">
              <div>
                <i>{t.y1}</i>
                <b>{t.e1}</b>
                <p>{t.e1d}</p>
              </div>
              <div>
                <i>2026</i>
                <b>{t.e2}</b>
                <p>{t.e2d}</p>
              </div>
              <div>
                <i>2023 – 2024</i>
                <b>Monomarkaz, Namangan</b>
                <p>{t.e3d}</p>
              </div>
            </div>
          </div>

          <div>
            <h2>{t.ed}</h2>
            <ul>
              <li>{t.u1}</li>
            </ul>

            <h2 className="mt-8">{t.lg}</h2>
            <ul>
              <li>{t.l1}</li>
              <li>{t.l2}</li>
              <li>{t.l3}</li>
              <li>{t.l4}</li>
              <li>{t.l5}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* IELTS Score Section */}
      <section id="ielts">
        <article className="glass ie">
          <div>
            <h2>{t.i}</h2>
            <p>{t.id}</p>
            <p>{t.id2}</p>
            <a className="btn" href="https://t.me/akramjonsIELTS" target="_blank" rel="noopener" style={{ marginTop: '12px' }}>
              <b>{t.ib}</b>
              <span>→</span>
            </a>
          </div>
          <div className="sc">
            <div><b>7.5</b>Listening</div>
            <div><b>7.0</b>Reading</div>
            <div><b>7.0</b>Speaking</div>
            <div><b>6.5</b>Writing</div>
          </div>
        </article>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="glass ct">
          <h2>{t.k}</h2>
          <p className="lead">{t.kd}</p>

          <a className="btn" href="https://www.instagram.com/gulomjonov_akramjon/" target="_blank" rel="noopener">
            Instagram <span>→</span>
          </a>
          <a className="btn o" href="tel:+998777776531">
            +998 77 777 65 31
          </a>

          <p className="ch">
            <span>{t.kl}</span>
          </p>
          <p className="ch">
            <span>{t.kc} </span>
            <a href="https://t.me/akramjonsIELTS" target="_blank" rel="noopener">@akramjonsIELTS</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-xs text-stone-500 border-t border-stone-800/60 flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto px-6 gap-4">
        <div>
          © {new Date().getFullYear()} Akramjon Gulomov · UI/UX & Web Designer
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenRadianProject}
            className="text-amber-400 hover:text-amber-300 transition-colors font-medium cursor-pointer"
          >
            Radian Project Case Study
          </button>
          <span>·</span>
          <button
            onClick={onOpenGitExport}
            className="text-stone-400 hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>Export to Git</span>
          </button>
        </div>
      </footer>

    </div>
  );
};
