"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  Users,
  TrendingUp,
  Globe2,
  Zap,
  Award,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Building2,
  Sparkles,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

export default function CareerPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <>
      <Navbar showTopBanner={true} />
      <main className="bg-white overflow-hidden pt-20">
        {/* Section 1: Modern Corporate Hero Header */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#09152b] via-[#0c5597] to-[#4bbac3] overflow-hidden border-b border-slate-100 text-white">
          {/* Glowing gradient accent balls */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#78bb30]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4bbac3]/20 rounded-full blur-[100px] pointer-events-none" />
          {/* Grid mesh backdrop */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/double-lined-grid.png')] opacity-[0.05] pointer-events-none" />

          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-none tracking-tight uppercase"
                >
                  Your Path to <br />
                  <span className="bg-gradient-to-r from-[#4bbac3] to-[#78bb30] bg-clip-text text-transparent">
                    Career Eminence.
                  </span>
                </motion.h1>

                {/* Brand Divider */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="h-1.5 w-24 bg-gradient-to-r from-[#4bbac3] to-[#78bb30] rounded-full mx-auto"
                />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-sm md:text-base text-slate-100/90 font-semibold max-w-2xl mx-auto leading-relaxed text-justify md:text-center"
              >
                Step into a high-demand, multi-billion dollar healthcare
                ecosystem with our certified professional pathways and premier
                placement alliances. We equip you with the advanced analytical
                frameworks, regulatory precision, and industry certifications
                necessary to stand out to global healthcare giants.
              </motion.p>

              {/* Action Trigger button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="pt-2"
              >
                <Button
                  onClick={() => {
                    const event = new CustomEvent("openEnrollModal");
                    window.dispatchEvent(event);
                  }}
                  className="bg-white hover:bg-slate-100 text-[#0c5597] font-black tracking-wider uppercase text-xs px-8 py-6 rounded-xl shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2.5 mx-auto border border-transparent cursor-pointer"
                >
                  <span>Connect with us</span>
                  <ArrowRight className="size-4" />
                </Button>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Section 2: High-Fidelity Audited Placement Diagnostics */}
        <section className="py-24 relative overflow-hidden bg-white">
          <Container>
            <div className="max-w-6xl mx-auto space-y-16">
              {/* Sub-header */}
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#4bbac3]/5 border border-[#4bbac3]/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4bbac3] animate-pulse" />
                  <span className="text-[9px] font-black text-navy uppercase tracking-widest">
                    Audited Diagnostic Milestones
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-navy tracking-tight leading-tight uppercase">
                  Our Career <span className="text-[#0c5597]">Benchmarks.</span>
                </h2>
                <p className="text-sm text-slate-500 font-semibold max-w-2xl mx-auto text-justify md:text-center">
                  Verified professional outcomes representing certified
                  healthcare billing, coding, and clinical documentation
                  pathways realized by our candidates.
                </p>
              </div>

              {/* Professional Benchmark Content: Image + Grid */}
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                {/* Left Side: Technological / System Image (No Persons) */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-5 relative"
                >
                  <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50 group">
                    <img
                      src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1200"
                      alt="Healthcare Analytics Infrastructure"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0c5597]/20 to-transparent pointer-events-none" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center space-x-3">
                    <div className="size-3 rounded-full bg-[#4bbac3] animate-ping" />
                    <span className="text-[10px] font-black text-navy uppercase tracking-wider">
                      Systematic Integrity
                    </span>
                  </div>
                </motion.div>

                {/* Right Side: Professional Cards Grid */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:col-span-7 space-y-4"
                >
                  {[
                    {
                      title: "Certified Domain Mastery",
                      desc: "Rigorous alignment with AAPC and AHIMA professional frameworks, equipping coders to navigate multi-specialty clinical documentation with absolute structural integrity.",
                      icon: Award,
                      color: "text-[#0c5597]",
                      bg: "bg-[#0c5597]/10",
                    },
                    {
                      title: "Payer Compliance Alignment",
                      desc: "In-depth proficiency in Medicare, Medicaid, and commercial reimbursement guidelines to ensure flawless claim submission and mitigate audit risk.",
                      icon: ShieldCheck,
                      color: "text-[#4bbac3]",
                      bg: "bg-[#4bbac3]/10",
                    },
                    {
                      title: "Advanced Revenue Cycle Leadership",
                      desc: "Expertise in end-to-end RCM operations, transforming complex medical abstraction into seamless financial velocity across enterprise healthcare systems.",
                      icon: TrendingUp,
                      color: "text-[#78bb30]",
                      bg: "bg-[#78bb30]/10",
                    },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex items-start space-x-4 hover:border-[#4bbac3]/30 hover:bg-white transition-all duration-300 group shadow-sm"
                    >
                      <div className={`size-12 rounded-xl flex items-center justify-center shrink-0 ${card.bg} ${card.color} group-hover:scale-110 transition-transform duration-300`}>
                        <card.icon className="size-6" />
                      </div>
                      <div className="space-y-1.5 text-left">
                        <h3 className="text-base font-black text-navy uppercase tracking-tight group-hover:text-[#0c5597] transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-semibold leading-relaxed text-justify">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 4: Employer Network Visualization */}
        <section className="py-24 bg-white relative">
          <Container>
            <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left text column */}
              <div className="lg:col-span-5 text-left space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0c5597]/5 border border-[#0c5597]/10">
                  <Building2 className="size-3.5 text-[#0c5597]" />
                  <span className="text-[9px] font-black text-navy uppercase tracking-widest">
                    Employer Footprint
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-navy tracking-tight leading-none uppercase">
                  Connected <br />
                  <span className="text-[#0c5597]">Employer Grid.</span>
                </h2>
                <p className="text-xs md:text-sm text-slate-500 font-semibold leading-relaxed text-justify">
                  Our alumni operate within major healthcare channels, including
                  multi-specialty clinical groups, technology-driven Revenue
                  Cycle Management (RCM) multinationals, premium insurance
                  carriers, and healthcare software consulting firms globally.
                </p>
              </div>

              {/* Right Grid visual column */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 relative">
                {/* Glowing decorative blur element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-72 bg-[#0c5597]/5 rounded-full blur-3xl -z-10" />

                {[
                  {
                    name: "Clinical Entities",
                    desc: "Top Hospital Chains & Multi-Specialty Clinics",
                    icon: Building2,
                    cardBg: "from-[#0c5597] to-[#09152b]",
                    iconColor: "text-[#4bbac3]",
                    iconBg: "bg-white/5",
                  },
                  {
                    name: "RCM Conglomerates",
                    desc: "Tech-Enabled Billing & Coding Multinationals",
                    icon: Briefcase,
                    cardBg: "from-[#4bbac3] to-[#0c5597]",
                    iconColor: "text-[#4bbac3]",
                    iconBg: "bg-white/5",
                  },
                  {
                    name: "Payer Networks",
                    desc: "Premium Medical Insurance & Auditing Carriers",
                    icon: ShieldCheck,
                    cardBg: "from-[#78bb30] to-[#3a6813]",
                    iconColor: "text-[#4bbac3]",
                    iconBg: "bg-white/5",
                  },
                  {
                    name: "Academic Alliances",
                    desc: "AAPC/AHIMA Licensed Training & Testing Centers",
                    icon: GraduationCap,
                    cardBg: "from-[#09152b] to-[#0c5597]",
                    iconColor: "text-[#4bbac3]",
                    iconBg: "bg-white/5",
                  },
                ].map((network, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    className={`group relative p-6 md:p-8 rounded-3xl bg-gradient-to-br ${network.cardBg} border border-white/10 hover:border-[#4bbac3]/40 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden text-left flex flex-col justify-between`}
                  >
                    <div className="relative z-10 space-y-6">
                      {/* Icon Container */}
                      <div className={`size-12 md:size-14 rounded-2xl ${network.iconBg} border border-white/10 ${network.iconColor} flex items-center justify-center group-hover:bg-[#4bbac3] group-hover:text-white group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}>
                        <network.icon className="size-6 md:size-7" />
                      </div>
                      
                      <div className="space-y-2.5">
                        <h4 className="text-sm md:text-base font-black text-white uppercase tracking-tight group-hover:text-[#4bbac3] transition-colors">
                          {network.name}
                        </h4>
                        <div className="h-0.5 w-8 bg-[#4bbac3]/30 group-hover:w-16 group-hover:bg-[#4bbac3] transition-all duration-500" />
                        <p className="text-xs text-slate-200 font-medium leading-relaxed">
                          {network.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
