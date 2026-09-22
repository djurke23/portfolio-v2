export interface Testimonial {
  id: string;
  name: string;
  role: {
    en: string;
    sr: string;
  };
  projectTag: {
    en: string;
    sr: string;
  };
  quote: {
    en: string;
    sr: string;
  };
  initials: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Mirjana Ivanović",
    role: {
      en: "Founder & Creative Director",
      sr: "Osnivač i Kreativni Direktor",
    },
    projectTag: {
      en: "E-Commerce Platform",
      sr: "E-Commerce Platforma",
    },
    quote: {
      en: "From the first sketch to the final website, everything went smoothly. Not only is the result aesthetically beautiful, but the website is also functional and fast. We got much more than we expected and our online sales have significantly increased.",
      sr: "Od prve skice do finalnog sajta, sve je teklo glatko. Ne samo da je rezultat estetski predivan, već je i sajt funkcionalan i brz. Dobili smo mnogo više nego što smo očekivali i naša onlajn prodaja je značajno porasla.",
    },
    initials: "MI",
    rating: 5,
  },
  {
    id: "testimonial-2",
    name: "Milovan Petrović",
    role: {
      en: "CEO & Managing Director",
      sr: "Direktor & Vlasnik",
    },
    projectTag: {
      en: "Brand & Web Showcase",
      sr: "Brend & Web Prezentacija",
    },
    quote: {
      en: "We were looking for a unique and modern website that would attract our target audience. He understood our vision completely and turned it into reality. Communication was excellent and the project was completed on time. I definitely recommend him!",
      sr: "Tražili smo jedinstven i moderan sajt koji će privući našu ciljnu publiku. Razumeo je našu viziju u potpunosti i pretvorio je u stvarnost. Komunikacija je bila odlična, a projekat je završen u roku. Definitivno ga preporučujem!",
    },
    initials: "MP",
    rating: 5,
  },
  {
    id: "testimonial-3",
    name: "Nevena Simonović",
    role: {
      en: "Operations Lead",
      sr: "Rukovodilac Operacija",
    },
    projectTag: {
      en: "Full Redesign & Optimization",
      sr: "Kompletan Redizajn i Ubrzanje",
    },
    quote: {
      en: "Our old website was outdated and slow. Luka managed to breathe new life into it. Not only does it look fantastic, but it's also much easier to use. Clients constantly tell us how much they like the new look.",
      sr: "Naš stari sajt je bio zastareo i spor. Luka je uspeo da mu udahne novi život. Ne samo da izgleda fantastično, već je i mnogo jednostavniji za korišćenje. Klijenti nam stalno govore kako im se sviđa novi izgled.",
    },
    initials: "NS",
    rating: 5,
  },
  {
    id: "testimonial-4",
    name: "Jelena Jovanović",
    role: {
      en: "Marketing Strategist",
      sr: "Marketing Strateg",
    },
    projectTag: {
      en: "Corporate Web Architecture",
      sr: "Korporativna Arhitektura",
    },
    quote: {
      en: "The approach to redesigning our website was extremely professional. He carefully analyzed our needs, proposed improvements and implemented them with great precision. Our brand now looks much more serious and modern.",
      sr: "Pristup redizajnu našeg sajta bio je izuzetno profesionalan. Pažljivo je analizirao naše potrebe, predložio poboljšanja i implementirao ih sa velikom preciznošću. Naš brend sada deluje mnogo ozbiljnije i modernije.",
    },
    initials: "JJ",
    rating: 5,
  },
  {
    id: "testimonial-5",
    name: "Petar Marković",
    role: {
      en: "Product Manager",
      sr: "Product Menadžer",
    },
    projectTag: {
      en: "Custom Web Application",
      sr: "Namenska Web Aplikacija",
    },
    quote: {
      en: "Luka developed a solution that is intuitive, stable and fully functional. This has significantly made our work easier and saved us countless hours.",
      sr: "Luka je razvio rešenje koje je intuitivno, stabilno i u potpunosti funkcioniše. Ovo nam je značajno olakšalo rad i uštedelo vreme.",
    },
    initials: "PM",
    rating: 5,
  },
  {
    id: "testimonial-6",
    name: "Kristina Pindović",
    role: {
      en: "Startup Founder",
      sr: "Startup Osnivač",
    },
    projectTag: {
      en: "Mobile App Concept & Launch",
      sr: "Razvoj Mobilne Aplikacije",
    },
    quote: {
      en: "We had an idea for an app, but we didn't know how to realize it. Luka guided us through the entire process, from planning to development, and the result is impressive. His technical knowledge and dedication to the project are at a high level.",
      sr: "Imali smo ideju za aplikaciju, ali nismo znali kako da je realizujemo. Luka nas je vodio kroz ceo proces, od planiranja do razvoja, i rezultat je impresivan. Njegovo tehničko znanje i posvećenost projektu su na visokom nivou.",
    },
    initials: "KP",
    rating: 5,
  },
];
