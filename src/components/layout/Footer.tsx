import React from "react";
import { siteConfig } from "@/data/site";
import { ArrowUpRight, Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
                Full-Stack Developer • Product Craftsman
              </p>
            </div>
            <p className="text-sm text-neutral-500 max-w-sm leading-relaxed">
              Architecting resilient web applications, mobile platforms, and interactive digital products with end-to-end craftsmanship.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Based in Belgrade, Serbia</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              {siteConfig.navItems.map((item) => (
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
              Connect & Assets
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
                  download
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 font-medium text-white pt-1"
                >
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>Download CV (PDF)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {currentYear} Luka Đurić. All rights reserved.</p>
          <p className="font-mono text-[11px] text-neutral-600">
            Designed & Engineered with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
