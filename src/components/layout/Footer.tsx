"use client";

import React from "react";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight, Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import LiveBelgradeTime from "@/components/ui/LiveBelgradeTime";
import SoundToggle from "@/components/ui/SoundToggle";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { dict } = useLanguage();

  const navItems = [
    { label: dict.nav.work, href: "#work" },
    { label: dict.nav.services, href: "#services" },
    { label: dict.nav.expertise, href: "#discipline" },
    { label: dict.nav.stack, href: "#stack" },
    { label: dict.nav.experience, href: "#experience" },
    { label: dict.nav.about, href: "#about" },
    { label: dict.nav.gear, href: "#gear" },
    { label: dict.nav.testimonials, href: "#testimonials" },
    { label: dict.nav.faq, href: "#faq" },
    { label: dict.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="w-full border-t border-white/10 bg-neutral-950/80 backdrop-blur-lg pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand & Persona */}
          <div className="md:col-span-6 space-y-4">
            <div className="space-y-1">
              <h2 className="text-xl font-bold tracking-tight text-white font-mono uppercase">
                {siteConfig.name}
              </h2>
              <p className="text-sm text-neutral-400">
                {dict.footer.role}
              </p>
            </div>
            <p className="text-sm text-neutral-500 max-w-sm leading-relaxed">
              {dict.footer.summary}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{dict.footer.location}</span>
              </div>
              <LiveBelgradeTime label="Local Time:" />
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
              {dict.footer.navTitle}
            </h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Channels & Documents */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
              {dict.footer.connectTitle}
            </h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="w-4 h-4 text-neutral-500" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <LinkedinIcon className="w-4 h-4 text-neutral-500" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <InstagramIcon className="w-4 h-4 text-neutral-500" />
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-4 h-4 text-neutral-500" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.cvPath}
                  download="Luka_Djuric_CV.pdf"
                  data-cursor="CV"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 font-medium text-white pt-1"
                >
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>{dict.footer.downloadCv}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-3">
            <p>© {currentYear} Luka Đurić. {dict.footer.copyright}</p>
            <span className="hidden sm:inline text-neutral-700">•</span>
            <SoundToggle className="hidden sm:inline-flex" />
          </div>
          <p className="font-mono text-[11px] text-neutral-600">
            {dict.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
