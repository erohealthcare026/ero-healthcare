"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BrandedHero } from "@/components/layout/BrandedHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Award,
  Zap,
  Globe2,
  ChevronRight,
  BarChart3,
  Dna,
  CheckCircle2,
  X,
  Clock,
  BookOpen,
  Lightbulb,
  Headphones,
  GraduationCap,
  FileText,
  HeartPulse,
} from "lucide-react";

import { SPECIALTIES } from "@/lib/specialties";
import Link from "next/link";

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedSpecialty = SPECIALTIES.find((s) => s.id === selectedId);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <>
      <Navbar showTopBanner={true} />
      <main className="bg-white overflow-hidden">
        {/* Redesigned Premium Academy-Style Home Banner */}
        <section className="relative pt-32 pb-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 overflow-hidden border-b border-slate-100">
          {/* Decorative Background glowing elements */}
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0c5597]/5 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute top-1/4 right-0 w-[45rem] h-[45rem] bg-gradient-to-bl from-blue-50 via-transparent to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

          <Container>
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Academy Narrative */}
              <div className="lg:col-span-6 space-y-8 text-left z-20 relative">
                {/* Main Action Titles */}
                <div className="space-y-2">
                  <motion.h1
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-2xl md:text-3xl lg:text-3xl font-black text-navy leading-none tracking-tight uppercase"
                  >
                    Code Today. <br />
                    <span className="text-[#0c5597] bg-gradient-to-r from-[#0c5597] to-[#4bbac3] bg-clip-text text-transparent">
                      Impact Tomorrow.
                    </span>
                  </motion.h1>
                </div>

                {/* Subtitle Content (Unchanged text as requested) */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-sm text-slate-500 font-semibold leading-relaxed text-justify max-w-xl"
                >
                  At ERO Healthcare Innovation is a premier provider of
                  technology-enabled Revenue Cycle Management (RCM) and
                  certified medical coding solutions. We partner with healthcare
                  organizations to navigate the increasing complexity of the
                  payer landscape, ensuring financial resilience through
                  administrative precision. In an era defined by the shift to
                  value-based care, we provide the intelligence and
                  infrastructure necessary to optimize clinical reimbursement
                  and protect practice integrity.
                </motion.p>

                {/* Horizontal 4 Value Props Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2"
                >
                  {[
                    { title: "Industry-Aligned Curriculum", icon: Award },
                    { title: "Expert-Led Training", icon: Users },
                    { title: "Certification Assistance", icon: CheckCircle2 },
                    { title: "Career Support", icon: TrendingUp },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-center space-y-3 group"
                    >
                      <div className="size-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0c5597] group-hover:bg-[#0c5597] group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm">
                        <item.icon className="size-5" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-600 group-hover:text-navy transition-colors leading-tight">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </motion.div>

                {/* Action CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <Link href="/specialties" className="w-full sm:w-auto">
                    <Button className="w-full bg-[#0c5597] hover:bg-[#09152b] text-white font-black tracking-wider uppercase text-xs px-8 h-[52px] rounded-xl shadow-lg hover:shadow-[#0c5597]/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2 border border-transparent">
                      <span>Explore Careers</span>
                      <div className="size-5 rounded-full bg-white flex items-center justify-center text-[#0c5597]">
                        <ChevronRight className="size-3.5" />
                      </div>
                    </Button>
                  </Link>
                  <button
                    onClick={() => {
                      const event = new CustomEvent("openEnrollModal");
                      window.dispatchEvent(event);
                    }}
                    className="w-full sm:w-auto bg-white border border-[#0c5597]/20 hover:border-[#0c5597] text-[#0c5597] hover:bg-slate-50/50 font-black tracking-wider uppercase text-xs px-8 h-[52px] rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-sm"
                  >
                    <Headphones className="size-4" />
                    <span>Talk to an Advisor</span>
                  </button>
                </motion.div>

                {/* Corner Grid Pattern Detail */}
                <div className="absolute left-[-20px] bottom-[-20px] opacity-10 hidden lg:block -z-10">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="currentColor"
                    className="text-[#0c5597]"
                  >
                    <circle cx="5" cy="5" r="1.5" />
                    <circle cx="20" cy="5" r="1.5" />
                    <circle cx="35" cy="5" r="1.5" />
                    <circle cx="50" cy="5" r="1.5" />
                    <circle cx="5" cy="20" r="1.5" />
                    <circle cx="20" cy="20" r="1.5" />
                    <circle cx="35" cy="20" r="1.5" />
                    <circle cx="50" cy="20" r="1.5" />
                    <circle cx="5" cy="35" r="1.5" />
                    <circle cx="20" cy="35" r="1.5" />
                    <circle cx="35" cy="35" r="1.5" />
                    <circle cx="50" cy="35" r="1.5" />
                    <circle cx="5" cy="50" r="1.5" />
                    <circle cx="20" cy="50" r="1.5" />
                    <circle cx="35" cy="50" r="1.5" />
                    <circle cx="50" cy="50" r="1.5" />
                  </svg>
                </div>
              </div>

              {/* Right Column: High-Fidelity Mock Workspace Illustration */}
              <div className="lg:col-span-6 relative flex items-center justify-center min-h-[420px] lg:min-h-[500px]">
                {/* Stylized background circular shapes */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-[#0c5597]/5 via-blue-50/30 to-transparent -z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] rounded-full bg-gradient-to-bl from-[#4bbac3]/5 to-transparent -z-10 animate-pulse" />

                {/* Connecting Dotted Vector Lines */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Line 1 to Accurate Coding */}
                  <path
                    d="M 380 180 Q 420 160 460 110"
                    stroke="#0c5597"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.3"
                  />
                  {/* Line 2 to Compliance Focused */}
                  <path
                    d="M 400 240 H 480"
                    stroke="#0c5597"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.3"
                  />
                  {/* Line 3 to Better Outcomes */}
                  <path
                    d="M 390 320 Q 430 360 480 380"
                    stroke="#0c5597"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.3"
                  />
                </svg>

                {/* The Clinical Professional Main Visual */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-10 w-full max-w-[360px] aspect-[4/5] rounded-[3.5rem] overflow-hidden border-8 border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] group bg-slate-100"
                >
                  <img
                    src="https://www.goodwin.edu/enews/wp-content/uploads/2023/03/what-does-a-medical-coder-do-tiny-scaled.jpg"
                    alt="Clinical Medical Coding Specialist"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                  />
                  {/* Gradient bottom overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-80" />
                </motion.div>

                {/* Floating Card 1: Medical Coding Specialist (top-left) */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute top-12 left-0 md:-left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-[0_20px_40px_rgba(12,85,151,0.08)] z-20 max-w-[190px] text-left space-y-2 group hover:-translate-y-1 transition-transform"
                >
                  <div className="flex items-center space-x-2">
                    <div className="size-6 rounded-lg bg-[#0c5597]/10 flex items-center justify-center text-[#0c5597]">
                      <ShieldCheck className="size-4" />
                    </div>
                    <span className="text-[9px] font-black uppercase text-[#0c5597] tracking-wider">
                      Specialist Track
                    </span>
                  </div>

                  <div className="w-full h-20 rounded-xl overflow-hidden pt-1">
                    <img
                      src="https://cdn.create.vista.com/api/media/small/300484738/stock-photo-medical-technology-stethoscope-on-white-keyboard"
                      alt="Specialist Analytics"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Visual micro chart */}
                  <div className="flex items-end space-x-1 pt-1 h-6">
                    <div className="w-1.5 bg-[#0c5597] h-[40%] rounded-full animate-pulse" />
                    <div className="w-1.5 bg-[#4bbac3] h-[75%] rounded-full" />
                    <div className="w-1.5 bg-[#78bb30] h-[55%] rounded-full" />
                    <div className="w-1.5 bg-[#0c5597] h-[90%] rounded-full animate-pulse" />
                    <div className="w-1.5 bg-slate-200 h-[30%] rounded-full" />
                  </div>
                </motion.div>

                {/* Floating Card 2: Join Thousands Laptop Badge (bottom-left) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute bottom-16 -left-4 md:-left-12 bg-[#09152b] text-white p-4 rounded-2xl flex items-center space-x-3.5 shadow-2xl border border-white/5 z-20 max-w-[210px] text-left hover:border-[#4bbac3]/30 transition-all duration-300"
                >
                  <div className="size-9 rounded-xl bg-[#4bbac3]/20 flex items-center justify-center text-[#4bbac3]">
                    <Users className="size-5" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-black tracking-tight uppercase">
                      Join Thousands
                    </p>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">
                      Building Successful Careers
                    </p>
                  </div>
                </motion.div>

                {/* Stacked Books on Desk (bottom-right) */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute bottom-6 right-0 md:-right-6 z-20 flex flex-col items-end"
                ></motion.div>

                {/* Floating Circles on Right connecting with dotted lines */}
                <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-16 flex flex-col space-y-10 z-20">
                  {[
                    {
                      title: "Accurate Coding",
                      icon: FileText,
                      bg: "bg-blue-50 text-[#0c5597] border-blue-100",
                    },
                    {
                      title: "Compliance Focused",
                      icon: ShieldCheck,
                      bg: "bg-blue-50 text-[#0c5597] border-blue-100",
                    },
                    {
                      title: "Better Healthcare",
                      sub: "Outcomes",
                      icon: HeartPulse,
                      bg: "bg-blue-50 text-[#0c5597] border-blue-100",
                    },
                  ].map((dot, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                      className="flex items-center space-x-3 text-left group"
                    >
                      <div
                        className={`size-10 rounded-full border flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-110 group-hover:bg-[#0c5597] group-hover:text-white group-hover:border-transparent ${dot.bg}`}
                      >
                        <dot.icon className="size-4.5" />
                      </div>
                      <div className="hidden sm:block">
                        <p className="text-[10px] font-black uppercase text-navy leading-tight group-hover:text-[#0c5597] transition-colors">
                          {dot.title}
                        </p>
                        {dot.sub && (
                          <p className="text-[10px] font-black uppercase text-navy leading-none group-hover:text-[#0c5597] transition-colors">
                            {dot.sub}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Institutional Mission & Vision - Premium High-Fidelity Replacement */}
        <section className="py-32 relative overflow-hidden bg-[#fafbfc]">
          {/* Decorative grid pattern and glowing elements */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
          <div className="absolute top-1/4 left-10 size-[30rem] bg-primary/[0.02] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-10 size-[30rem] bg-secondary/[0.015] rounded-full blur-3xl pointer-events-none" />

          <Container>
            <div className="w-full">
              {/* High-Fidelity Interactive Vision & Mission Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {/* Vision Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="group relative p-10 md:p-12 pt-16 md:pt-16 rounded-[2.5rem] bg-[#0b1329] border border-white/5 hover:border-[#0c5597]/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_40px_80px_rgba(12,85,151,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden text-left"
                >
                  {/* High-tech gradient top accent line */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#0c5597] via-[#4bbac3] to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Neon logo glow blob */}
                  <div className="absolute -right-20 -bottom-20 size-56 bg-[#0c5597]/15 rounded-full blur-[60px] pointer-events-none group-hover:bg-[#4bbac3]/20 transition-all duration-700" />

                  {/* Soft high-tech grid overlay */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/double-lined-grid.png')] opacity-[0.03] pointer-events-none" />

                  <div className="relative z-10 space-y-6">
                    {/* Futuristic Icon Container */}
                    <div className="inline-flex size-14 rounded-2xl bg-[#0c5597]/20 border border-[#4bbac3]/30 items-center justify-center text-[#4bbac3] shadow-[0_0_20px_rgba(75,186,195,0.15)] group-hover:bg-[#4bbac3] group-hover:text-white group-hover:scale-105 transition-all duration-500">
                      <Target className="size-6" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl font-black text-white leading-tight tracking-tight group-hover:text-[#4bbac3] transition-colors">
                        Our Vision
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed font-semibold group-hover:text-slate-300 transition-colors text-justify">
                        &quot;To redefine the healthcare revenue cycle through
                        ethical coding excellence and advanced analytics,
                        ensuring the financial sustainability and operational
                        success of our partners.&quot;
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Mission Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="group relative p-10 md:p-12 pt-16 md:pt-16 rounded-[2.5rem] bg-[#0b1329] border border-white/5 hover:border-[#78bb30]/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_40px_80px_rgba(120,187,48,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden text-left"
                >
                  {/* High-tech gradient top accent line */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#78bb30] via-[#9bc69f] to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Neon logo glow blob */}
                  <div className="absolute -right-20 -bottom-20 size-56 bg-[#78bb30]/15 rounded-full blur-[60px] pointer-events-none group-hover:bg-[#9bc69f]/20 transition-all duration-700" />

                  {/* Soft high-tech grid overlay */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/double-lined-grid.png')] opacity-[0.03] pointer-events-none" />

                  <div className="relative z-10 space-y-6">
                    {/* Futuristic Icon Container */}
                    <div className="inline-flex size-14 rounded-2xl bg-[#78bb30]/20 border border-[#9bc69f]/30 items-center justify-center text-[#78bb30] shadow-[0_0_20px_rgba(120,187,48,0.15)] group-hover:bg-[#78bb30] group-hover:text-white group-hover:scale-105 transition-all duration-500">
                      <Lightbulb className="size-6" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl font-black text-white leading-tight tracking-tight group-hover:text-[#78bb30] transition-colors">
                        Our Mission
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed font-semibold group-hover:text-slate-300 transition-colors text-justify">
                        &quot;To ensure healthcare data integrity through rigorous
                        accuracy, total confidentiality, and revenue cycle
                        excellence, allowing providers to focus entirely on
                        client requirements.&quot;
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>

        {/* Specialized Pathways - High Visibility */}
        <section className="py-24 relative overflow-hidden bg-white">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-0.5 w-12 bg-secondary" />
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">
                    Clinical Pathways
                  </span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-black text-navy leading-[1.05] tracking-tight text-left">
                  Specialized Architecture.
                </h2>
              </div>
              <Button
                variant="outline"
                className="border-slate-200 text-navy hover:bg-slate-50 rounded-none px-10 py-7 text-xs font-black uppercase tracking-widest"
                onClick={() => (window.location.href = "/specialties")}
              >
                View All Specialities <ChevronRight className="ml-2 size-4" />
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {SPECIALTIES.map((specialty, i) => (
                <button
                  key={specialty.id}
                  onClick={() => setSelectedId(specialty.id)}
                  className="group relative flex flex-col text-left focus:outline-none w-full"
                >
                  <motion.div {...fadeIn} transition={{ delay: i * 0.1 }}>
                    {/* Visual Base */}
                    <div className="relative h-64 w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                      <img
                        src={specialty.image}
                        alt={specialty.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    </div>

                    {/* Layered Content Box */}
                    <div className="relative -mt-20 mx-6 bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] group-hover:-translate-y-3 transition-all duration-500 border border-slate-50">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-black text-navy leading-tight group-hover:text-primary transition-colors">
                          {specialty.title}
                        </h3>

                        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 font-medium">
                          {specialty.description}
                        </p>

                        <div className="pt-4 flex items-center justify-between border-t border-slate-50">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                            View Details
                          </span>
                          <div className="size-10 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            <ChevronRight className="size-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </button>
              ))}
            </div>
          </Container>
        </section>

        {/* Institutional Proof - Testimonials */}
        <section className="py-32 bg-white relative">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-12">
                <div className="flex justify-center space-x-2 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="size-8" />
                  ))}
                </div>
                <div className="space-y-6">
                  <h2 className="text-2xl lg:text-4xl font-black text-navy tracking-tight leading-relaxed">
                    &quot;The ERO Healthcare framework didn&apos;t just provide a
                    certification; it redefined my entire professional
                    methodology.&quot;
                  </h2>
                  <div className="space-y-2">
                    <p className="text-xl font-black uppercase tracking-widest text-[#FF8C00]">
                      Poovarasan Krishnamoorthi
                    </p>
                    <p className="text-sm font-bold text-primary tracking-widest uppercase">
                      Founder & Chief Executive Officer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Final Institutional CTA - Premium Redesign */}
        <section className="pb-32 relative">
          <Container>
            <div className="relative rounded-3xl bg-[#020b1d] p-10 lg:p-16 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.2)] text-left">
              {/* Background Ornaments */}
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(45,108,223,0.15),transparent)] pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 size-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

              {/* Subtle Tech Pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

              <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="space-y-5">
                    <div className="inline-flex items-center space-x-3 text-primary">
                      <div className="h-px w-10 bg-current" />
                      <span className="text-[9px] font-black uppercase tracking-[0.4em]">
                        Strategic Integration
                      </span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight">
                      Secure Your <br />
                      <span className="text-primary">Clinical Future.</span>
                    </h2>
                    <p className="text-lg text-white/50 font-medium leading-relaxed max-w-md text-justify">
                      Join our elite network of healthcare professionals.
                      Connect with an institutional advisor for a comprehensive
                      career placement brief.
                    </p>
                  </div>
                </div>

                <div className="hidden lg:flex justify-end pr-8">
                  <div className="relative">
                    {/* Professional Credentialing Seal Visual */}
                    <div className="absolute inset-0 bg-primary/20 blur-[100px] animate-pulse" />
                    <div className="relative size-80 rounded-full border border-white/10 p-4 backdrop-blur-3xl">
                      <div className="w-full h-full rounded-full border-2 border-dashed border-white/5 animate-spin-slow flex items-center justify-center">
                        <div className="size-60 rounded-full border border-primary/20 flex items-center justify-center p-8 bg-white/[0.02]">
                          <div className="text-center space-y-2">
                            <Award className="size-16 text-primary mx-auto mb-4" />
                            <div className="text-[8px] font-black text-white/40 uppercase tracking-[0.4em]">
                              Official
                            </div>
                            <div className="text-[12px] font-black text-white uppercase tracking-[0.2em]">
                              Certification <br /> ISO-9001-2015
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Floating Data Points */}
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute size-2 bg-primary rounded-full animate-ping"
                          style={{
                            top: `${20 + i * 20}%`,
                            left: i % 2 === 0 ? "-10px" : "auto",
                            right: i % 2 !== 0 ? "-10px" : "auto",
                            animationDelay: `${i * 0.5}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />

      {/* Specialty Detail Drawer */}
      <AnimatePresence>
        {selectedSpecialty && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-lg bg-white shadow-2xl z-[101] overflow-y-auto"
            >
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 left-6 size-10 rounded-full bg-slate-900/10 backdrop-blur-md flex items-center justify-center text-slate-800 hover:bg-secondary hover:text-white transition-all duration-300 z-10"
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

                  <div className="absolute bottom-6 left-8 right-8">
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
                <div className="p-8 space-y-6 text-left">
                  {(() => {
                    const cleanText = selectedSpecialty.description.replace(/([a-z])\.([A-Z])/g, "$1. $2");
                    const sentences = (cleanText.match(/[^.!?]+[.!?]+/g) || [cleanText]).map((s) => s.trim());
                    const c1 = Math.max(1, Math.ceil(sentences.length / 3));
                    const c2 = Math.max(c1 + 1, Math.ceil((2 * sentences.length) / 3));
                    const p1 = sentences.slice(0, c1).join(" ");
                    const p2 = sentences.slice(c1, c2).join(" ");
                    const p3 = sentences.slice(c2).join(" ");

                    return (
                      <>
                        {p1 && (
                          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-semibold text-justify">
                            &quot;{p1}&quot;
                          </p>
                        )}
                        {p2 && (
                          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-semibold text-justify">
                            &quot;{p2}&quot;
                          </p>
                        )}
                        {p3 && (
                          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-semibold text-justify">
                            &quot;{p3}&quot;
                          </p>
                        )}
                      </>
                    );
                  })()}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
