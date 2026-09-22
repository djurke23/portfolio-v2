export interface BentoGearItem {
  id: string;
  name: string;
  categoryLabel: {
    en: string;
    sr: string;
  };
  specs: {
    en: string;
    sr: string;
  };
  badge: {
    en: string;
    sr: string;
  };
  iconType: "laptop" | "desktop" | "phone" | "display" | "gpu" | "camera" | "action" | "mic" | "dj";
  colSpan: string; // e.g. "col-span-1 md:col-span-2"
}

export const bentoGearItems: BentoGearItem[] = [
  {
    id: "macbook-m4",
    name: "MacBook Pro M4 14\"",
    categoryLabel: {
      en: "Portable Workstation",
      sr: "Primarna Radna Mašina",
    },
    specs: {
      en: "Apple M4 Silicon · 14\" Liquid Retina XDR · 120Hz ProMotion · All-day battery for agile development.",
      sr: "Apple M4 Silicon · 14\" Liquid Retina XDR · 120Hz ProMotion · Glavna mašina za inženjering i kodiranje u pokretu.",
    },
    badge: {
      en: "Core Machine",
      sr: "Glavni Laptop",
    },
    iconType: "laptop",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    id: "custom-desktop",
    name: "Custom Studio Desktop",
    categoryLabel: {
      en: "High-Performance Workstation",
      sr: "Studio Radna Stanica",
    },
    specs: {
      en: "Intel Core i5-13600KF (14C/20T @ 5.1GHz) · 32GB DDR4 4133MHz · 2x 1TB PCIe NVMe SSD Storage.",
      sr: "Intel Core i5-13600KF (14 jezgara / 20 niti do 5.1GHz) · 32GB DDR4 4133MHz · 2TB brzi NVMe SSD za teške buildove.",
    },
    badge: {
      en: "Workstation",
      sr: "Desktop PC",
    },
    iconType: "desktop",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    id: "iphone-17",
    name: "iPhone 17 Pro Max",
    categoryLabel: {
      en: "Mobile Testing & Daily",
      sr: "Mobilni Uređaj",
    },
    specs: {
      en: "Apple Silicon · Titanium Chassis · 6.9\" Super Retina XDR.",
      sr: "Apple Silicon · Titanijumsko kućište · 6.9\" ekran za iOS testiranje.",
    },
    badge: {
      en: "Mobile",
      sr: "Telefon",
    },
    iconType: "phone",
    colSpan: "col-span-1",
  },
  {
    id: "philips-evnia",
    name: "Philips Evnia 34\" Curved",
    categoryLabel: {
      en: "Ultrawide Workspace",
      sr: "Glavni Monitor",
    },
    specs: {
      en: "21:9 Ultra-Wide · 180Hz High-Refresh · Multi-window IDE productivity.",
      sr: "21:9 Ultra-Wide · 180Hz · Multi-window kompozicija za editor i bazu.",
    },
    badge: {
      en: "180Hz Display",
      sr: "Zakrivljeni 34\"",
    },
    iconType: "display",
    colSpan: "col-span-1",
  },
  {
    id: "intel-arc",
    name: "Intel ARC A770 16GB",
    categoryLabel: {
      en: "GPU & Media Acceleration",
      sr: "Grafička Karta",
    },
    specs: {
      en: "16GB GDDR6 VRAM · Hardware Ray Tracing · AV1 Encode for video rendering.",
      sr: "16GB GDDR6 · Hardverski AV1 enkoder za Premiere i After Effects.",
    },
    badge: {
      en: "Dedicated GPU",
      sr: "16GB VRAM",
    },
    iconType: "gpu",
    colSpan: "col-span-1",
  },
  {
    id: "canon-90d",
    name: "Canon EOS 90D",
    categoryLabel: {
      en: "Studio DSLR Camera",
      sr: "Optika & Kamera",
    },
    specs: {
      en: "32.5MP APS-C Sensor · 4K Uncropped Video · Dual Pixel AF clarity.",
      sr: "32.5MP senzor · 4K video bez kropa · Dual Pixel autofokus za video.",
    },
    badge: {
      en: "4K DSLR",
      sr: "Foto & Video",
    },
    iconType: "camera",
    colSpan: "col-span-1",
  },
  {
    id: "dji-action",
    name: "DJI Osmo Action 4",
    categoryLabel: {
      en: "Dynamic Action Camera",
      sr: "Akciona Kamera",
    },
    specs: {
      en: "1/1.3\" Sensor · 4K/120fps · HorizonSteady 360° · 10-bit D-Log M.",
      sr: "1/1.3\" senzor · 4K/120fps · HorizonSteady 360° nivelacija kadra.",
    },
    badge: {
      en: "4K / 120 FPS",
      sr: "Akciona",
    },
    iconType: "action",
    colSpan: "col-span-1",
  },
  {
    id: "dji-mic",
    name: "DJI Mic Mini 2",
    categoryLabel: {
      en: "Wireless Audio Setup",
      sr: "Audio Snimanje",
    },
    specs: {
      en: "Dual-Channel Lavalier · 18h Battery · 250m Transmission range.",
      sr: "Dvokanalni bežični mikrofon · 18h autonomije · 250m dometa.",
    },
    badge: {
      en: "Broadcast Mic",
      sr: "Bežični Mic",
    },
    iconType: "mic",
    colSpan: "col-span-1",
  },
  {
    id: "hercules-dj",
    name: "Hercules Inpulse 200 MK2",
    categoryLabel: {
      en: "DJ Controller & Audio Interface",
      sr: "DJ Mikseta & Zvuk",
    },
    specs: {
      en: "2-Deck DJ Controller · Beatmatch Guide · Integrated High-Res Audio DAC for mixing live sets.",
      sr: "2-kanalni DJ kontroler · Ugrađena audio karta visoke rezolucije · Miksovanje i live setovi.",
    },
    badge: {
      en: "Live DJ Rig",
      sr: "DJ Kontroler",
    },
    iconType: "dj",
    colSpan: "col-span-1 md:col-span-2",
  },
];
