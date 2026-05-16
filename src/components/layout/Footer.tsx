"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  Globe,
  Mail,
  Phone,
  MessageSquare,
  X,
  Clock,
  BookOpen,
  ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SPECIALTIES } from "@/lib/specialties";
import appLogo from "@/assets/app-logo.jpeg";

export function Footer() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedSpecialty = SPECIALTIES.find((s) => s.id === selectedId);

  return (
    <footer className="bg-[#09152b] text-white/75 relative overflow-hidden py-5 border-t border-slate-800 flex flex-col w-full">
      {/* Abstract Diagonal Vector Geometric Lines Overlay */}
      <svg
        className="absolute inset-0 size-full pointer-events-none opacity-[0.04]"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="1"
        fill="none"
      >
        <line x1="5%" y1="0%" x2="75%" y2="100%" />
        <line x1="25%" y1="0%" x2="95%" y2="100%" />
        <line x1="60%" y1="0%" x2="15%" y2="100%" />
        <line x1="85%" y1="0%" x2="40%" y2="100%" />
      </svg>

      {/* Main Grid Content Container */}
      <Container className="max-w-6xl relative z-10 py-8 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start text-left">
          {/* Column 1: Identity & Brand Info (4 Cols) */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center space-x-3.5">
              <div className="size-9 rounded-xl overflow-hidden bg-white p-1.5 shadow-md flex items-center justify-center shrink-0">
                <img
                  src={appLogo.src}
                  alt="ERO Healthcare Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-base font-black tracking-widest text-white uppercase leading-none">
                  ERO Healthcare
                </span>
                <span className="text-[9px] font-bold tracking-wider text-slate-400 uppercase mt-1 leading-none">
                  Innovation Private Limited
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed font-semibold text-slate-400 max-w-sm">
              Empowering healthcare professionals with advanced clinical billing
              and coding standardizations to optimize international revenue
              cycles.
            </p>

            {/* Minimalist Outlined Social Icons with Functional Actions */}
            <div className="flex items-center space-x-4 pt-1">
              {[
                { Icon: Globe, href: "#" },
                { Icon: MessageSquare, href: "https://wa.me/+919488393395", target: "_blank" },
                { Icon: Mail, href: "mailto:erohealthcare026@gmail.com" },
                { Icon: Phone, href: "tel:+919488393395" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target={social.target}
                  rel={social.target === "_blank" ? "noopener noreferrer" : undefined}
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <social.Icon className="size-4" />
                </a>
              ))}
            </div>

            {/* Outlined "BACK TO TOP" Interactive Button */}
            <div className="pt-2">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center space-x-2 border border-slate-700 hover:border-slate-400 px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest text-white hover:bg-white/5 transition-all cursor-pointer outline-none"
              >
                <svg
                  className="size-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
                <span>Back to Top</span>
              </button>
            </div>
          </div>

          {/* Column 2: Site Map Links (3 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-[11px] font-black uppercase tracking-widest pl-0.5">
              Site Map
            </h4>
            <div className="h-0.5 w-8 bg-primary rounded-full mb-2" />
            <ul className="space-y-3 text-xs font-semibold text-slate-400">
              {[
                { name: "Homepage", href: "/" },
                { name: "Careers", href: "/career" },
                { name: "Why Us", href: "/why-us" },
                { name: "Contact Us", href: "/contact" },
                { name: "About Us", href: "/about" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialities Links (3 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-[11px] font-black uppercase tracking-widest pl-0.5">
              Specialities
            </h4>
            <div className="h-0.5 w-8 bg-secondary rounded-full mb-2" />
            <ul className="space-y-3 text-xs font-semibold text-slate-400">
              {[
                { name: "Anesthesia", id: "anesthesia" },
                { name: "Emergency Medicine", id: "emergency-medicine" },
                { name: "Hospital Medicine", id: "hospital-medicine" },
                { name: "Radiology", id: "radiology" },
                { name: "Pathology", id: "pathology" },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => setSelectedId(link.id)}
                    className="hover:text-white transition-colors text-left outline-none cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal Policy Links (2 Cols) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-white text-[11px] font-black uppercase tracking-widest pl-0.5">
              Legal
            </h4>
            <div className="h-0.5 w-8 bg-slate-500 rounded-full mb-2" />
            <ul className="space-y-3 text-xs font-semibold text-slate-400">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Services", href: "/terms" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Full-width Accent Golden/Orange Bottom Bar */}
      <div className="bg-stone py-4 px-6 text-center border-t border-slate-800 w-full relative z-10">
        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white">
          Copyright © 2026 ERO Healthcare. All Rights Reserved.
        </p>
      </div>

      {/* Specialty Side Drawer Container */}
      <AnimatePresence>
        {selectedSpecialty && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-slate-900/65 backdrop-blur-sm z-[200]"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-lg bg-white shadow-2xl z-[201] overflow-y-auto"
            >
              <div className="relative text-slate-800">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 left-6 size-10 rounded-full bg-slate-900/10 backdrop-blur-md flex items-center justify-center text-slate-800 hover:bg-secondary hover:text-white transition-all duration-300 z-10 outline-none cursor-pointer"
                >
                  <X className="size-5" />
                </button>

                {/* Hero Image Section */}
                <div className="h-64 relative">
                  <img
                    src={selectedSpecialty.image}
                    alt={selectedSpecialty.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-900" />

                  <div className="absolute bottom-6 left-8 right-8 text-left">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-secondary text-[8px] text-white px-3 py-0.5 rounded-full font-black uppercase tracking-widest">
                        Active Program
                      </span>
                    </div>
                    <h2 className="text-3xl font-black text-white tracking-tight leading-none">
                      {selectedSpecialty.title}
                    </h2>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 text-left">
                  {(() => {
                    const cleanText = selectedSpecialty.description.replace(/([a-z])\.([A-Z])/g, "$1. $2");
                    const sentences = (cleanText.match(/[^.!?]+[.!?]+/g) || [cleanText]).map((s) => s.trim());
                    const c1 = Math.max(1, Math.ceil(sentences.length / 4));
                    const c2 = Math.max(c1 + 1, Math.ceil((2 * sentences.length) / 4));
                    const c3 = Math.max(c2 + 1, Math.ceil((3 * sentences.length) / 4));

                    const p1 = sentences.slice(0, c1).join(" ");
                    const p2 = sentences.slice(c1, c2).join(" ");
                    const p3 = sentences.slice(c2, c3).join(" ");
                    const p4 = sentences.slice(c3).join(" ");

                    return (
                      <div className="space-y-4">
                        {[p1, p2, p3, p4].filter(Boolean).map((p, idx) => (
                          <div key={idx} className="relative bg-white border border-slate-100 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(12,85,151,0.08)] hover:-translate-y-0.5 transition-all duration-300 group overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#0c5597] to-[#4bbac3] opacity-80 group-hover:opacity-100 transition-opacity" />
                            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-semibold text-justify pl-1">
                              {p}
                            </p>
                          </div>
                        ))}
                      </div>
                    );
                  })()}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </footer>
  );
}
