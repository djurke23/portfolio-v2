export type Language = "en" | "sr";

export interface TranslationSchema {
  nav: {
    work: string;
    expertise: string;
    stack: string;
    experience: string;
    about: string;
    faq: string;
    contact: string;
    available: string;
    cv: string;
    downloadCv: string;
    closeMenu: string;
    openMenu: string;
  };
  hero: {
    availability: string;
    location: string;
    eyebrow: string;
    role: string;
    tagline: string;
    exploreWork: string;
    getInTouch: string;
    downloadCv: string;
    footerTech: string;
    footerProcess: string;
  };
  manifesto: {
    eyebrow: string;
    text: string;
    capabilities: Array<{
      title: string;
      desc: string;
    }>;
  };
  featured: {
    eyebrow: string;
    title: string;
    description: string;
    viewCaseStudy: string;
    livePreview: string;
    appStore: string;
    architectureOverview: string;
    keyHighlights: string;
  };
  matrix: {
    eyebrow: string;
    title: string;
    description: string;
    filterAll: string;
    filterMobile: string;
    filterWeb: string;
    filterTools: string;
    colProject: string;
    colYear: string;
    colPlatform: string;
    colTech: string;
    colLink: string;
    viewProject: string;
  };
  discipline: {
    eyebrow: string;
    title: string;
    description: string;
    pillars: Array<{
      id: string;
      title: string;
      eyebrow: string;
      description: string;
      tags: string[];
    }>;
  };
  stack: {
    eyebrow: string;
    title: string;
    description: string;
    toolsCount: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    liveBroadcast: string;
    environment: string;
    environmentDesc: string;
    responsibilities: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    role: string;
    location: string;
    bioP1: string;
    bioP2: string;
    downloadCv: string;
    academicEyebrow: string;
    academicTitle: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    promptTitle: string;
    promptDesc: string;
    promptButton: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    directEmail: string;
    telephone: string;
    location: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phoneOptional: string;
    phonePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    sendingButton: string;
    successDefault: string;
    errorDefault: string;
  };
  footer: {
    role: string;
    summary: string;
    location: string;
    navTitle: string;
    connectTitle: string;
    downloadCv: string;
    copyright: string;
    builtWith: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      work: "Work",
      expertise: "Expertise",
      stack: "Stack",
      experience: "Experience",
      about: "About",
      faq: "FAQ",
      contact: "Contact",
      available: "Available",
      cv: "CV",
      downloadCv: "Download CV (PDF)",
      closeMenu: "Close menu",
      openMenu: "Open navigation menu",
    },
    hero: {
      availability: "Available for full-stack opportunities",
      location: "Based in Belgrade, Serbia",
      eyebrow: "Digital Product Engineering",
      role: "Full-Stack Developer & Product Craftsman",
      tagline:
        "I architect and build modern web applications and digital products from idea to production — combining robust engineering with refined UI/UX design.",
      exploreWork: "Explore Work",
      getInTouch: "Get in Touch",
      downloadCv: "Download CV",
      footerTech: "Next.js • TypeScript • React Native • Go • PostgreSQL",
      footerProcess: "Idea → Architecture → Code → Production",
    },
    manifesto: {
      eyebrow: "Core Philosophy",
      text: "I believe great digital products require more than clean code. They demand an understanding of user psychology, disciplined software architecture, and tactile motion design. From database schema to the final keyframe — I build complete experiences that feel purposeful and built to last.",
      capabilities: [
        {
          title: "Full-Stack Engineering",
          desc: "Robust TypeScript, Go microservices, relational databases, and edge caching.",
        },
        {
          title: "Mobile Solutions",
          desc: "Cross-platform mobile apps with native bridges and App Store release pipelines.",
        },
        {
          title: "UI/UX & Design Systems",
          desc: "Pixel-accurate Figma design systems, accessibility tokens, and editorial aesthetics.",
        },
        {
          title: "Motion & Performance",
          desc: "Hardware-accelerated fluid transitions, 60 FPS interactions, and sub-second load times.",
        },
      ],
    },
    featured: {
      eyebrow: "Featured Work",
      title: "Production Digital Products & Case Studies",
      description:
        "Flagship full-stack platforms and mobile applications engineered from concept to deployment. Click through for in-depth engineering breakdowns.",
      viewCaseStudy: "Explore Case Study",
      livePreview: "Live Website",
      appStore: "App Store",
      architectureOverview: "Architecture Overview",
      keyHighlights: "Key Capabilities / Highlights",
    },
    matrix: {
      eyebrow: "Archive & Experiments",
      title: "Selected Project Directory",
      description:
        "A catalog of software projects, mobile applications, interactive tools, and client platforms.",
      filterAll: "All",
      filterMobile: "Mobile Apps",
      filterWeb: "Web Platforms",
      filterTools: "Tools & Libraries",
      colProject: "Project",
      colYear: "Year",
      colPlatform: "Category",
      colTech: "Technologies",
      colLink: "Link",
      viewProject: "View",
    },
    discipline: {
      eyebrow: "Differentiator",
      title: "Engineering + Design + Motion",
      description:
        "A rare convergence of rigorous full-stack development, professional UI/UX design, and broadcast video production. I don't just write code — I build complete digital products.",
      pillars: [
        {
          id: "code",
          title: "CODE",
          eyebrow: "Engineering Discipline",
          description:
            "Architecting resilient systems using TypeScript, Go, Next.js, and PostgreSQL. Focused on clean separation of concerns, edge database caching, and type safety from database to UI.",
          tags: ["Full-Stack Architecture", "Type-Safe APIs", "Edge Infrastructure", "Mobile Engines"],
        },
        {
          id: "design",
          title: "DESIGN",
          eyebrow: "UI/UX & Systems",
          description:
            "Building cohesive design systems in Figma with meticulous spacing, strict token hierarchies, and ergonomic layout systems. Crafting interfaces that look expensive and feel effortless.",
          tags: ["Figma Design Systems", "Responsive Layouts", "Ergonomic UI", "Editorial Typography"],
        },
        {
          id: "motion",
          title: "MOTION",
          eyebrow: "Broadcast & Kinetics",
          description:
            "Leveraging years of live broadcast video mixing, post-production in Premiere & After Effects, and CSS/Framer physics. Motion applied with restraint to clarify context rather than distract.",
          tags: ["Hardware Compositing", "Micro-Interactions", "Video Post-Production", "Fluid Transitions"],
        },
        {
          id: "product",
          title: "PRODUCT",
          eyebrow: "Full Lifecycle Delivery",
          description:
            "Navigating products from blank canvas to App Store validation and Vercel edge releases. Balancing engineering rigor with real-world usability and client business goals.",
          tags: ["End-to-End Delivery", "App Store Pipelines", "In-App Subscriptions", "SEO & Optimization"],
        },
      ],
    },
    stack: {
      eyebrow: "Technology Matrix",
      title: "Tools & Technologies",
      description:
        "Curated tools and frameworks honed across production web applications, iOS releases, and agile engineering squads. No arbitrary percentage bars.",
      toolsCount: "tools",
    },
    experience: {
      eyebrow: "Career Path",
      title: "Work Experience & Roles",
      description:
        "A timeline of engineering responsibilities, full-stack digital product delivery, and high-stakes live broadcast systems.",
      liveBroadcast: "LIVE BROADCAST",
      environment: "Environment:",
      environmentDesc: "Live Television & Broadcast Operations",
      responsibilities: "Responsibilities & Technical Execution",
    },
    about: {
      eyebrow: "Background",
      title: "Engineering Foundations & Education",
      description:
        "A look at the academic and practical background shaping my approach to full-stack engineering.",
      role: "Full-Stack Developer",
      location: "Belgrade, RS",
      bioP1:
        "I am a Full-Stack Developer with over 6 years of practical experience creating modern, high-performance web applications and digital products.",
      bioP2:
        "My journey bridges rigorous software engineering with years in live broadcast media production. This unique combination gives me high standards for zero-downtime reliability, real-time performance, and visual polish.",
      downloadCv: "Download Official CV (PDF)",
      academicEyebrow: "Verified Academic Record",
      academicTitle: "Higher Education & Qualifications",
    },
    faq: {
      eyebrow: "FAQ & Inquiries",
      title: "Frequently Asked Questions",
      description:
        "Answers to common questions regarding engineering capabilities, design process, collaboration models, and availability.",
      promptTitle: "Have a specific question in mind?",
      promptDesc:
        "Feel free to reach out directly. I'm always open to discussing technical architecture, design systems, or project timelines.",
      promptButton: "Get in touch",
      items: [
        {
          question: "What types of projects do you typically take on?",
          answer:
            "I build end-to-end web and mobile products: from full-stack SaaS applications, custom customer dashboards, and high-performance e-commerce platforms to cross-platform mobile apps deployed to the Apple App Store and Google Play.",
        },
        {
          question: "Can you handle both UI/UX design and full-stack development?",
          answer:
            "Yes, this is my primary differentiator. I design complete design systems in Figma (typography, color palettes, responsive layouts, interactive prototypes) and translate them directly into production code with pixel precision and fluid animations.",
        },
        {
          question: "What does your primary technology stack look like?",
          answer:
            "My core frontend stack centers around Next.js, React, TypeScript, and Tailwind CSS with Framer Motion for kinetics. On the backend and database layer, I specialize in Go, Node.js, PostgreSQL, Supabase, and Redis with edge caching.",
        },
        {
          question: "Are you available for freelance, contract, or full-time roles?",
          answer:
            "I am open to both high-impact contract/freelance projects and full-time remote opportunities with teams that value high craftsmanship, modern technology, and user experience.",
        },
        {
          question: "How does your live broadcast television background benefit your software engineering?",
          answer:
            "Operating in high-pressure live television environments with zero tolerance for downtime instilled a deep discipline for reliable systems, real-time telemetry, rapid debugging under pressure, and cinematic visual composition.",
        },
        {
          question: "Can you build and publish native mobile applications to app stores?",
          answer:
            "Yes. For projects like CarFlo, I managed the entire release pipeline: from TypeScript/React Native implementation and native device bridges to App Store Connect submission, RevenueCat in-app subscriptions, and TestFlight beta cycles.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact & Inquiries",
      title: "LET'S BUILD SOMETHING.",
      subtitle:
        "Have a digital product to architect, a web platform to build, or an engineering role to discuss? Reach out directly.",
      directEmail: "Direct Email",
      telephone: "Telephone",
      location: "Location",
      formTitle: "Send a Message",
      formSubtitle: "Fill out the form below and I will get back to you promptly.",
      nameLabel: "Your Name",
      namePlaceholder: "Jane Doe",
      emailLabel: "Your Email",
      emailPlaceholder: "jane@example.com",
      phoneLabel: "Phone Number",
      phoneOptional: "(Optional)",
      phonePlaceholder: "+381 67 ...",
      messageLabel: "Project Details / Message",
      messagePlaceholder: "Tell me about your product requirements, timeline, or objectives...",
      sendButton: "Send Message",
      sendingButton: "Sending Inquiry...",
      successDefault: "Thank you! Your message has been sent.",
      errorDefault: "Something went wrong. Please reach out via email directly.",
    },
    footer: {
      role: "Full-Stack Developer • Product Craftsman",
      summary:
        "Architecting resilient web applications, mobile platforms, and interactive digital products with end-to-end craftsmanship.",
      location: "Based in Belgrade, Serbia",
      navTitle: "Navigation",
      connectTitle: "Connect & Assets",
      downloadCv: "Download CV (PDF)",
      copyright: "All rights reserved.",
      builtWith: "Designed & Engineered with Next.js, TypeScript & Tailwind CSS",
    },
  },
  sr: {
    nav: {
      work: "Radovi",
      expertise: "Ekspertiza",
      stack: "Stack",
      experience: "Iskustvo",
      about: "O meni",
      faq: "FAQ",
      contact: "Kontakt",
      available: "Dostupan",
      cv: "CV",
      downloadCv: "Preuzmi CV (PDF)",
      closeMenu: "Zatvori meni",
      openMenu: "Otvori navigaciju",
    },
    hero: {
      availability: "Dostupan za nove projekte i pozicije",
      location: "Beograd, Srbija",
      eyebrow: "Inženjering Digitalnih Proizvoda",
      role: "Full-Stack Developer & Kreator Proizvoda",
      tagline:
        "Projektujem i razvijam moderne web aplikacije i digitalne proizvode od ideje do produkcije — spajajući robusno programiranje sa prefinjenim UI/UX dizajnom.",
      exploreWork: "Istraži radove",
      getInTouch: "Stupi u kontakt",
      downloadCv: "Preuzmi CV",
      footerTech: "Next.js • TypeScript • React Native • Go • PostgreSQL",
      footerProcess: "Ideja → Arhitektura → Kod → Produkcija",
    },
    manifesto: {
      eyebrow: "Srž Filozofije",
      text: "Verujem da vrhunski digitalni proizvodi zahtevaju mnogo više od čistog koda. Oni traže razumevanje korisničke psihologije, disciplinovanu softversku arhitekturu i fluidan pokret. Od baze podataka do poslednjeg frejma — gradim kompletna iskustva koja imaju svrhu i traju.",
      capabilities: [
        {
          title: "Full-Stack Inženjering",
          desc: "Robusni TypeScript, Go mikroservisi, relacione baze i edge keširanje.",
        },
        {
          title: "Mobilna Rešenja",
          desc: "Multiplatformske mobilne aplikacije sa nativnim mostovima i objavom na App Store.",
        },
        {
          title: "UI/UX & Dizajn Sistemi",
          desc: "Piksel-precizni Figma dizajn sistemi, tokeni pristupačnosti i editorijalna estetika.",
        },
        {
          title: "Kinetika & Performanse",
          desc: "Hardverski ubrzane tranzicije, 60 FPS interakcije i učitavanje ispod sekunde.",
        },
      ],
    },
    featured: {
      eyebrow: "Izdvojeni Radovi",
      title: "Produkcioni Digitalni Proizvodi i Studije Slučaja",
      description:
        "Vodeće full-stack platforme i mobilne aplikacije razvijene od koncepta do objave na produkciju. Kliknite za detaljnu tehničku analizu.",
      viewCaseStudy: "Pogledaj Case Study",
      livePreview: "Web sajt",
      appStore: "App Store",
      architectureOverview: "Pregled Arhitekture",
      keyHighlights: "Ključne Mogućnosti / Osobine",
    },
    matrix: {
      eyebrow: "Arhiva i Eksperimenti",
      title: "Katalog Odabranih Projekata",
      description:
        "Pregled softverskih projekata, mobilnih aplikacija, interaktivnih alata i platformi za klijente.",
      filterAll: "Sve",
      filterMobile: "Mobilne Aplikacije",
      filterWeb: "Web Platforme",
      filterTools: "Alati & Biblioteke",
      colProject: "Projekat",
      colYear: "Godina",
      colPlatform: "Kategorija",
      colTech: "Tehnologije",
      colLink: "Link",
      viewProject: "Pogledaj",
    },
    discipline: {
      eyebrow: "Jedinstveni Pristup",
      title: "Inženjering + Dizajn + Pokret",
      description:
        "Retka kombinacija rigoroznog full-stack programiranja, profesionalnog UI/UX dizajna i televizijske video produkcije. Ne pišem samo kod — gradim zaokružene digitalne proizvode.",
      pillars: [
        {
          id: "code",
          title: "KOD",
          eyebrow: "Inženjerska Disciplina",
          description:
            "Projektovanje pouzdanih sistema koristeći TypeScript, Go, Next.js i PostgreSQL. Fokus na jasnoj separaciji odgovornosti, keširanju i tipskoj sigurnosti od baze do interfejsa.",
          tags: ["Full-Stack Arhitektura", "Tipske API Rute", "Edge Infrastruktura", "Mobilni Endžini"],
        },
        {
          id: "design",
          title: "DIZAJN",
          eyebrow: "UI/UX & Sistemi",
          description:
            "Izrada kohezivnih dizajn sistema u Figmi sa pedantnim razmacima, striktnom hijerarhijom tokena i ergonomskim rasporedom. Kreiranje interfejsa koji deluju premijum i prirodno.",
          tags: ["Figma Dizajn Sistemi", "Responzivni Izgled", "Ergonomski UI", "Tipografija"],
        },
        {
          id: "motion",
          title: "POKRET",
          eyebrow: "Broadcast & Kinetika",
          description:
            "Godine iskustva u televizijskoj režiji uživo, montaži u Premiere & After Effects-u i CSS/Framer fizici. Kinetika primenjena sa merom da pojasni kontekst, a ne da odvlači pažnju.",
          tags: ["Hardverski Kompoziting", "Mikro-Interakcije", "Video Postprodukcija", "Fluidne Tranzicije"],
        },
        {
          id: "product",
          title: "PROIZVOD",
          eyebrow: "Kompletan Životni Ciklus",
          description:
            "Vođenje proizvoda od praznog lista papira do validacije na App Store-u i Vercel edge produkcije. Balans tehničke preciznosti, jednostavnosti za korisnika i poslovnih ciljeva.",
          tags: ["Isporuka od A do Š", "App Store Pipeline", "In-App Pretplate", "SEO & Optimizacija"],
        },
      ],
    },
    stack: {
      eyebrow: "Tehnološki Stack",
      title: "Alati i Tehnologije",
      description:
        "Pažljivo odabrani alati i radni okviri usavršeni kroz produkcione web aplikacije, iOS objave i agilne inženjerske timove. Bez proizvoljnih procenata.",
      toolsCount: "alata",
    },
    experience: {
      eyebrow: "Karijerni Put",
      title: "Radno Iskustvo i Pozicije",
      description:
        "Hronologija inženjerskih odgovornosti, isporuke digitalnih proizvoda i rada u televizijskim sistemima uživo visokog rizika.",
      liveBroadcast: "PRENOS UŽIVO",
      environment: "Okruženje:",
      environmentDesc: "Televizijske Operacije i Emitovanje Uživo",
      responsibilities: "Odgovornosti i Tehnička Realizacija",
    },
    about: {
      eyebrow: "Biografija",
      title: "Inženjerski Temelji i Obrazovanje",
      description:
        "Pogled na akademsku i praktičnu osnovu koja definiše moj pristup full-stack inženjeringu.",
      role: "Full-Stack Developer",
      location: "Beograd, RS",
      bioP1:
        "Ja sam Full-Stack Developer sa preko 6 godina praktičnog iskustva u izradi modernih web aplikacija i digitalnih proizvoda visokih performansi.",
      bioP2:
        "Moj put spaja pedantno softversko inženjerstvo sa godinama rada u televizijskoj produkciji uživo. Ova kombinacija donosi visoke standarde za pouzdanost bez prekida rada, brzinu u realnom vremenu i vizuelnu perfekciju.",
      downloadCv: "Preuzmi Zvanični CV (PDF)",
      academicEyebrow: "Akademska Pozadina",
      academicTitle: "Visoko Obrazovanje i Kvalifikacije",
    },
    faq: {
      eyebrow: "FAQ & Pitanja",
      title: "Često Postavljana Pitanja",
      description:
        "Odgovori na najčešća pitanja o inženjerskim veštinama, procesu dizajna, modelima saradnje i dostupnosti.",
      promptTitle: "Imate specifično pitanje ili ideju?",
      promptDesc:
        "Slobodno se javite direktno. Uvek sam otvoren za razgovor o tehničkoj arhitekturi, dizajn sistemima ili rokovima realizacije projekta.",
      promptButton: "Pošalji upit",
      items: [
        {
          question: "Na kakvim projektima najčešće radiš?",
          answer:
            "Razvijam kompletne web i mobilne proizvode: od full-stack SaaS platformi, prilagođenih kontrolnih panela (dashboarda) i e-commerce rešenja visokih performansi, do multiplatformskih mobilnih aplikacija objavljenih na Apple App Store i Google Play.",
        },
        {
          question: "Da li pokrivaš i UI/UX dizajn pored programiranja?",
          answer:
            "Da, to je moja glavna prednost. Projektujem kompletne dizajn sisteme u Figmi (tipografija, palete boja, responzivni layouti, interaktivni prototipi) i direktno ih pretvaram u produkcioni kod uz piksel-preciznost i fluidne animacije.",
        },
        {
          question: "Koji je tvoj primarni tehnološki stack?",
          answer:
            "Na frontendu radim sa Next.js, React, TypeScript i Tailwind CSS uz Framer Motion za animacije. Za backend i baze podataka koristim Go, Node.js, PostgreSQL, Supabase i Redis sa edge keširanjem.",
        },
        {
          question: "Da li si dostupan za freelance, ugovorne ili full-time pozicije?",
          answer:
            "Otvoren sam i za samostalne ugovorne/freelance projekte i za stalne (full-time) remote pozicije u timovima koji cene inženjerski kvalitet, moderne tehnologije i besprekorno korisničko iskustvo.",
        },
        {
          question: "Kako ti iskustvo u televizijskoj režiji uživo pomaže u razvoju softvera?",
          answer:
            "Rad u živom televizijskom programu sa nultom tolerancijom na greške i prekid signala razvio je izuzetnu disciplinu za pouzdane sisteme, brzo rešavanje problema pod pritiskom i pažnju prema vizuelnoj kompoziciji i tajmingu.",
        },
        {
          question: "Da li razvijaš i objavljuješ nativne mobilne aplikacije na App Store?",
          answer:
            "Da. Na primer, za projekat CarFlo sam vodio ceo proces: od implementacije u TypeScript/React Native okruženju do publikacije na Apple App Store, konfiguracije RevenueCat pretplata i TestFlight beta testiranja.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt & Upiti",
      title: "HAJDE DA GRADIMO ZAJEDNO.",
      subtitle:
        "Imate digitalni proizvod koji želite da projektujete, web platformu za izradu ili inženjersku poziciju za razgovor? Javite se direktno.",
      directEmail: "Direktan Email",
      telephone: "Telefon",
      location: "Lokacija",
      formTitle: "Pošaljite Poruku",
      formSubtitle: "Popunite formular ispod i odgovoriću vam u najkraćem roku.",
      nameLabel: "Vaše Ime",
      namePlaceholder: "Petar Petrović",
      emailLabel: "Vaš Email",
      emailPlaceholder: "petar@primer.com",
      phoneLabel: "Broj Telefona",
      phoneOptional: "(Opciono)",
      phonePlaceholder: "+381 67 ...",
      messageLabel: "Detalji Projekta / Poruka",
      messagePlaceholder: "Opišite zahteve vašeg projekta, rokove ili ciljeve...",
      sendButton: "Pošalji Poruku",
      sendingButton: "Slanje Poruke...",
      successDefault: "Hvala vam! Vaša poruka je uspešno poslata.",
      errorDefault: "Došlo je do greške. Molim vas pošaljite direktan email.",
    },
    footer: {
      role: "Full-Stack Developer • Kreator Proizvoda",
      summary:
        "Projektovanje stabilnih web aplikacija, mobilnih platformi i interaktivnih digitalnih proizvoda sa kompletnom posvećenošću detaljima.",
      location: "Beograd, Srbija",
      navTitle: "Navigacija",
      connectTitle: "Povezivanje & Resursi",
      downloadCv: "Preuzmi CV (PDF)",
      copyright: "Sva prava zadržana.",
      builtWith: "Dizajnirano i programirano uz Next.js, TypeScript & Tailwind CSS",
    },
  },
};
