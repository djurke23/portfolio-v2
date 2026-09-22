"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/context/ToastContext";
import { useSound } from "@/context/SoundContext";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Copy, Check } from "lucide-react";
import { InstagramIcon } from "@/components/ui/SocialIcons";

export default function ContactSection() {
  const { dict, language } = useLanguage();
  const { copyEmail } = useToast();
  const { playSuccess, playClick } = useSound();
  const [copied, setCopied] = useState(false);
  const isSr = language === "sr";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    playSuccess();
    copyEmail(
      siteConfig.email,
      isSr ? "Email kopiran u clipboard!" : "Email copied to clipboard!"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || dict.contact.errorDefault);
      }

      setStatus("success");
      setResponseMsg(data.message || dict.contact.successDefault);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setResponseMsg(err instanceof Error ? err.message : dict.contact.errorDefault);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-36 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Bold Typography & Direct Contact Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              [12] {dict.contact.eyebrow}
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase font-mono leading-[1.05]">
              {dict.contact.title}
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
              {dict.contact.subtitle}
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-white/5">
            {/* Email item with clickable mailto and quick copy button */}
            <div className="flex items-center justify-between p-2 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all group">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors flex-1 min-w-0 pr-2"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/30 transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono text-neutral-500 uppercase">{dict.contact.directEmail}</div>
                  <div className="text-sm font-medium text-white truncate">{siteConfig.email}</div>
                </div>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl text-neutral-400 hover:text-emerald-400 hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/20 transition-all shrink-0"
                title={isSr ? "Kopiraj email" : "Copy email address"}
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/30 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-neutral-500 uppercase">{dict.contact.telephone}</div>
                <div className="text-sm font-medium text-white">{siteConfig.phone}</div>
              </div>
            </a>

            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/30 transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-neutral-500 uppercase">Instagram</div>
                <div className="text-sm font-medium text-white">@djurke23</div>
              </div>
            </a>

            <div className="flex items-center gap-3 text-neutral-300">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-neutral-500 uppercase">{dict.contact.location}</div>
                <div className="text-sm font-medium text-white">{siteConfig.location}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: High-Craft Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white tracking-tight">
                {dict.contact.formTitle}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light">
                {dict.contact.formSubtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono uppercase text-neutral-400 font-medium">
                    {dict.contact.nameLabel} <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={dict.contact.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono uppercase text-neutral-400 font-medium">
                    {dict.contact.emailLabel} <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={dict.contact.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-xs font-mono uppercase text-neutral-400 font-medium">
                  {dict.contact.phoneLabel} <span className="text-neutral-600 text-[10px]">{dict.contact.phoneOptional}</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={dict.contact.phonePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono uppercase text-neutral-400 font-medium">
                  {dict.contact.messageLabel} <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={dict.contact.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                />
              </div>

              {/* Status Alerts */}
              {status === "success" && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{responseMsg}</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{responseMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg active:scale-[0.99]"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-neutral-800" />
                    <span>{dict.contact.sendingButton}</span>
                  </>
                ) : (
                  <>
                    <span>{dict.contact.sendButton}</span>
                    <Send className="w-4 h-4 text-neutral-800" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
