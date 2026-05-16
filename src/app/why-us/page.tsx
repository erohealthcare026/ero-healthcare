"use client";

import { Container } from "@/components/ui/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BrandedHero } from "@/components/layout/BrandedHero";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Target,
  Award,
  BarChart3,
  Users,
  Globe,
  Code,
  Activity,
  Cpu,
  BookmarkCheck,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Layers,
  HeartPulse,
  FileText,
  GraduationCap,
  Sparkles,
  Clock,
  Compass,
} from "lucide-react";

import CorporateMeeting from "@/assets/why-us/corporate-meeting.png";
import PartnershipImg from "@/assets/why-us/partnership.png";
import AnalyticsImg from "@/assets/why-us/analytics.png";
import EducationImg from "@/assets/why-us/education.png";
import BrandingImg from "@/assets/why-us/branding.png";
import WhyUsBanner from "@/assets/banners/why-us.jpg";
import CorporateImg from "@/assets/why-us/corporate.jpg";

export default function WhyUsPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <>
      <Navbar showTopBanner={true} />
      <main className="bg-slate-50/50 overflow-hidden">
        {/* Immersive Branded Hero */}
        <BrandedHero
          title="Why Us"
          subtitle="Establishing the global benchmark for medical coding excellence through rigorous operational validation and clinical integrity."
          image={WhyUsBanner.src}
        />

        {/* Key Statement Section */}
        <section className="relative pt-16 pb-16 z-30">
          <Container>
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white rounded-[2.5rem] border border-slate-100 p-8 md:p-12 shadow-[0_30px_70px_rgba(12,85,151,0.06)] hover:shadow-[0_45px_90px_rgba(12,85,151,0.1)] transition-all duration-500 relative overflow-hidden"
              >
                {/* Visual side accent matching brand gradient */}
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#0c5597] via-[#4bbac3] to-[#78bb30]" />

                {/* Abstract glowing aura */}
                <div className="absolute -right-36 -top-36 size-96 bg-gradient-to-br from-[#4bbac3]/5 to-[#78bb30]/5 rounded-full blur-3xl pointer-events-none" />

                <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
                  <div className="md:col-span-7 space-y-4 text-left">
                    <span className="text-primary font-black uppercase text-[10px] tracking-[0.25em] pl-0.5">
                      The Trusted Benchmark
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-navy tracking-tight leading-tight uppercase">
                      The Bridge Between{" "}
                      <span className="text-primary">Clinical Knowledge</span> &{" "}
                      <span className="text-secondary">Career Dominance.</span>
                    </h2>
                    <p className="text-sm md:text-base text-slate-500 font-semibold leading-relaxed text-justify">
                      At ERO Healthcare, we believe that medical coding is not
                      merely standard documentation. It is a critical science
                      that governs the global healthcare economy. Our
                      methodology is built from the ground up to prepare
                      professionals for absolute precision, direct corporate
                      integration, and long-term industry leadership.
                    </p>
                  </div>
                  <div className="md:col-span-5 h-full min-h-[220px] relative rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
                    <img 
                      src={CorporateImg.src} 
                      alt="Corporate Excellence" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Section 1: Pillars of Distinction */}
        <section className="py-20 relative bg-white border-y border-slate-100">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/double-lined-grid.png')] opacity-[0.015] -z-10" />
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0c5597]/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#4bbac3]/5 rounded-full blur-3xl -z-10" />

          <Container>
            <div className="max-w-6xl mx-auto space-y-16">
              {/* Refined Section Header */}
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-navy tracking-tight leading-tight uppercase">
                  Pillars of{" "}
                  <span className="text-primary">Corporate distinction.</span>
                </h2>
                <p className="text-sm md:text-base text-slate-500 font-semibold max-w-2xl mx-auto">
                  Discover the systematic operational practices and corporate
                  advantages that make us the premium choice for healthcare
                  revenue cycle and clinical documentation.
                </p>
              </div>

              {/* High-Density 6-Card Custom Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "AAPC & AHIMA Certified Operations",
                    desc: "Our coding workflows are executed by licensed experts rigorously aligned with global gold standards, ensuring absolute clinical accuracy and regulatory compliance.",
                    icon: Award,
                    badge: "Certified",
                    cardBg: "bg-gradient-to-br from-[#0c5597] to-[#09152b]",
                  },
                  {
                    title: "Seasoned Clinical Auditors",
                    desc: "Our quality assurance leadership brings over 15 years of healthcare revenue cycle tenure, providing rigorous multi-tier reviews and unmatched data integrity.",
                    icon: ShieldCheck,
                    badge: "15+ Years Exp",
                    cardBg: "bg-gradient-to-br from-[#4bbac3] to-[#0c5597]",
                  },
                  {
                    title: "Comprehensive RCM Optimization",
                    desc: "End-to-end revenue cycle management solutions engineered to eliminate claim denials, accelerate reimbursement velocity, and maximize operational cash flow.",
                    icon: TrendingUp,
                    badge: "Optimized",
                    cardBg: "bg-gradient-to-br from-[#78bb30] to-[#3a6813]",
                  },
                  {
                    title: "Advanced Compliance Frameworks",
                    desc: "Strict adherence to HIPAA, safeguarding healthcare organizations against regulatory risks and billing discrepancies.",
                    icon: BookmarkCheck,
                    badge: "100% HIPAA",
                    cardBg: "bg-gradient-to-br from-[#09152b] to-[#0c5597]",
                  },
                  {
                    title: "Multi-Specialty Domain Expertise",
                    desc: "Deep clinical domain knowledge spanning Anesthesia, Radiology, Emergency Medicine, and complex inpatient/outpatient surgical documentation.",
                    icon: Layers,
                    badge: "Specialized",
                    cardBg: "bg-gradient-to-br from-[#0c5597] to-[#4bbac3]",
                  },
                  {
                    title: "Technology-Enabled Workflow",
                    desc: "Leveraging cutting-edge coding analytics and secure EHR integrations to deliver rapid turnaround times and transparent reporting for enterprise health systems.",
                    icon: Cpu,
                    badge: "High Velocity",
                    cardBg: "bg-gradient-to-br from-[#3a6813] to-[#78bb30]",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                    className={`group relative p-8 ${item.cardBg} border border-white/10 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-left overflow-hidden flex flex-col justify-between h-[300px] z-10`}
                  >
                    {/* Abstract overlay to make it look premium */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] pointer-events-none" />

                    <div className="absolute -right-20 -top-20 size-64 bg-white/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-white/20 transition-colors duration-500" />

                    <div className="space-y-5 relative z-10">
                      <div className="flex items-center justify-between">
                        <div
                          className="size-12 rounded-2xl bg-white/10 flex items-center justify-center text-white border border-white/20 group-hover:scale-110 transition-transform duration-300 shadow-inner backdrop-blur-sm"
                        >
                          <item.icon className="size-6" />
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-sm">
                          {item.badge}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-lg font-black text-white uppercase tracking-tight leading-none group-hover:text-white/90 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs font-semibold leading-relaxed text-white/80 text-justify">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/20 flex items-center justify-between text-white/60 group-hover:text-white transition-colors relative z-10">
                      <span className="text-[9px] font-black uppercase tracking-widest">
                        Excellence Benchmark
                      </span>
                      <Activity className="size-4 opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Section 2: Interactive Path to Coding Mastery */}
        <section className="py-24 relative overflow-hidden bg-slate-50/50">
          <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-gradient-to-br from-[#0c5597]/5 to-transparent rounded-full blur-[130px] -z-10" />

          <Container>
            <div className="max-w-6xl mx-auto space-y-16">
              {/* Header */}
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-navy tracking-tight leading-tight uppercase">
                  The Path to{" "}
                  <span className="text-primary">Coding Mastery.</span>
                </h2>
                <p className="text-sm md:text-base text-slate-500 font-semibold max-w-2xl mx-auto">
                  A comprehensive, structured operational roadmap that elevates
                  professional medical coders from foundational clinical
                  documentation to elite revenue cycle authorities.
                </p>
              </div>

              {/* Professional Approaches Grid - Redesigned for Premium Look */}
              <div className="grid grid-cols-1 gap-8 relative z-10">
                {[
                  {
                    title: 'The "Strategic Partner" Approach',
                    subtitle: "Strategic Executive Extension",
                    desc: "Our commitment to client success is rooted in Revenue Integrity. We don't just assign codes; we provide the clinical insights and audit-ready precision that allow providers to focus on what matters most—patient outcomes. Your financial stability is the metric of our success.",
                    icon: Users,
                    accentColor: "from-[#0c5597] to-[#4bbac3]",
                    textColor: "text-[#0c5597]",
                    iconBg: "bg-[#0c5597]/10",
                    image: PartnershipImg,
                  },
                  {
                    title: 'The "Efficiency & Speed" Approach',
                    subtitle: "Technology-Enabled Velocity",
                    desc: "We define success by the frictionless flow of data. By combining expert human intuition with precision coding workflows, we commit to reducing your Days Sales Outstanding (DSO) and eliminating the burden of denials. We succeed only when your reimbursement is seamless, timely, and complete.",
                    icon: Zap,
                    accentColor: "from-[#4bbac3] to-[#78bb30]",
                    textColor: "text-[#4bbac3]",
                    iconBg: "bg-[#4bbac3]/10",
                    image: AnalyticsImg,
                  },
                  {
                    title: 'The "Educational & Proactive" Approach',
                    subtitle: "Clinical Documentation Integrity",
                    desc: "Client success means moving from reactive to proactive. We are committed to empowering your practice through transparent feedback loops and continuous documentation education. By bridging the gap between the physician's pen and the payer’s portal, we safeguard your practice against risk and lost revenue.",
                    icon: GraduationCap,
                    accentColor: "from-[#78bb30] to-[#0c5597]",
                    textColor: "text-[#78bb30]",
                    iconBg: "bg-[#78bb30]/10",
                    image: EducationImg,
                  },
                  {
                    title: 'The "Short & Punchy" (Modern) Approach',
                    subtitle: "Zero-Defect Integrity",
                    desc: "\"Your Care, Our Codes, Total Integrity.\" We are committed to elevating the business of medicine through zero-defect coding, advocate-level denial management, and a relentless focus on our clients' bottom line.",
                    icon: Sparkles,
                    accentColor: "from-slate-800 to-[#0c5597]",
                    textColor: "text-slate-800",
                    iconBg: "bg-slate-100",
                    image: BrandingImg,
                  },
                ].map((item, i) => (
                                    <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                    className="group relative bg-white rounded-3xl border border-slate-100 shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(12,85,151,0.1)] transition-all duration-700 overflow-hidden flex flex-col md:flex-row items-stretch z-10 hover:-translate-y-1.5"
                  >
                    {/* Left Side: Image Container */}
                    <div className="md:w-1/3 relative overflow-hidden min-h-[240px] md:min-h-full">
                      <img 
                        src={item.image.src} 
                        alt={item.title} 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-navy/20 to-transparent pointer-events-none" />
                      
                      {/* Floating Icon on Image */}
                      <div className={`absolute top-6 left-6 size-12 rounded-xl flex items-center justify-center backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                        <item.icon className="size-5" />
                      </div>
                    </div>

                    {/* Right Side: Content Area */}
                    <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center space-y-6 relative">
                      {/* Decorative Background Element */}
                      <div className={`absolute -right-20 -top-20 size-64 bg-gradient-to-br ${item.accentColor} rounded-full blur-[100px] opacity-0 group-hover:opacity-[0.05] transition-opacity duration-1000 pointer-events-none`} />

                      <div className="space-y-3">
                        <div className="inline-flex items-center space-x-3">
                          <div className={`h-1 w-6 bg-gradient-to-r ${item.accentColor} rounded-full`} />
                          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
                            {item.subtitle}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-navy tracking-tight leading-tight group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-sm md:text-base font-semibold leading-relaxed text-slate-500 text-justify">
                        {item.desc}
                      </p>

                      <div className="pt-4 flex items-center justify-between border-t border-slate-50">
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300 group-hover:text-primary transition-colors">
                          Strategic Alignment
                        </span>
                        <div className={`size-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:border-primary group-hover:text-primary transition-all duration-300`}>
                          <ArrowRight className="size-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Section 3: High-Impact Performance Metrics Dashboard */}
        <section className="py-24 bg-[#09152b] relative overflow-hidden text-white border-b border-slate-900">
          {/* Subtle Grid Backdrop */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 size-[40rem] bg-[#0c5597]/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 right-10 size-[30rem] bg-[#78bb30]/10 rounded-full blur-[130px] pointer-events-none" />

          <Container>
            <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
              {/* Left Column: Context Brief */}
              <div className="lg:col-span-6 space-y-8 text-left">
                <div className="space-y-4">
                  <div className="h-1 w-16 bg-[#4bbac3] rounded-full" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#4bbac3]">
                    Verified Clinical Outcomes
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-black tracking-tight leading-[1.1] uppercase">
                    Empirical <br />{" "}
                    <span className="text-gradient bg-gradient-to-r from-[#4bbac3] to-[#78bb30] bg-clip-text text-transparent">
                      Velocity
                    </span>{" "}
                    <br /> In Motion.
                  </h2>
                  <p className="text-sm text-slate-400 font-semibold leading-relaxed max-w-md text-justify">
                    We continuously evaluate and report our operational
                    outcomes. Absolute integrity is our benchmark, delivering
                    empirical velocity and financial resilience for healthcare
                    providers.
                  </p>
                </div>

                {/* 3 Core Approaches */}
                <div className="space-y-6 pt-4">
                  {[
                    {
                      title: 'The "White-Glove" Approach',
                      badge: "Focus on Service",
                      desc: "Our white-glove RCM partnership navigates the complexities of the healthcare financial landscape with precision, transforming vendor support into a seamless extension of your clinical mission.",
                      icon: Users,
                      accent: "from-[#0c5597] to-[#4bbac3]",
                    },
                    {
                      title: 'The "Empowerment" Approach',
                      badge: "Focus on Education",
                      desc: "We bridge the gap between clinical documentation and financial stability by empowering your staff through industry-leading education and aggressive, forward-thinking reimbursement strategies.",
                      icon: GraduationCap,
                      accent: "from-[#4bbac3] to-[#78bb30]",
                    },
                    {
                      title: 'The "Growth" Approach',
                      badge: "Focus on Results",
                      desc: "Driven by decades of mastery, we resolve the nuances of the revenue cycle to ensure regulatory hurdles never impede your growth or the quality of your patient outcomes.",
                      icon: TrendingUp,
                      accent: "from-[#78bb30] to-[#0c5597]",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.5 }}
                      className="relative p-6 md:p-7 rounded-[2rem] bg-gradient-to-br from-white/[0.05] to-white/[0.01] backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_60px_rgba(12,85,151,0.2)] hover:-translate-y-1.5 transition-all duration-500 group overflow-hidden"
                    >
                      {/* Gradient top accent bar */}
                      <div
                        className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${item.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                      />

                      {/* Internal layout */}
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div className="size-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#4bbac3] group-hover:bg-[#4bbac3] group-hover:text-white transition-all duration-500 shrink-0 shadow-inner">
                          <item.icon className="size-6" />
                        </div>
                        <div className="space-y-2.5 w-full">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3 className="text-base font-black text-white tracking-wide uppercase group-hover:text-[#4bbac3] transition-colors">
                              {item.title}
                            </h3>
                            <span className="text-[9px] font-black uppercase px-3 py-1 rounded-full bg-white/[0.08] text-[#4bbac3] border border-[#4bbac3]/30 tracking-widest shadow-sm backdrop-blur-md">
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-xs text-slate-300 font-medium leading-relaxed text-justify">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column: Premium Outcome Widget */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="p-4 bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur-2xl border border-white/15 rounded-[3rem] w-full max-w-xl hover:border-[#4bbac3]/40 transition-all duration-500 group shadow-[0_40px_80px_rgba(0,0,0,0.5)] relative overflow-hidden"
                >
                  {/* Glowing background blob */}
                  <div className="absolute -right-24 -top-24 size-72 bg-[#4bbac3]/15 rounded-full blur-[70px] pointer-events-none group-hover:bg-[#4bbac3]/25 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute -left-24 -bottom-24 size-72 bg-[#0c5597]/15 rounded-full blur-[70px] pointer-events-none" />

                  {/* Relevant Content Image */}
                  <div className="relative w-full h-[400px] rounded-[2.5rem] overflow-hidden border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.3)] group-hover:border-[#4bbac3]/30 transition-colors duration-500">
                    <img
                      src="https://ingenioushealthcare.co.in/wp-content/uploads/2021/09/medical-coding.jpg"
                      alt="Healthcare Financial Accuracy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09152b]/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 4: Compliance Alignment Logos */}
        <section className="py-20 bg-white relative">
          <Container>
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="text-center space-y-2">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">
                  Aligned and Compliant With Global Authorities
                </span>
                <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
                {[
                  { 
                    name: "AAPC Standards", 
                    desc: "AAPC Curriculum Aligned",
                    gradient: "from-[#0c5597] to-[#4bbac3]"
                  },
                  {
                    name: "AHIMA Guidelines",
                    desc: "ICD-10-CM Industry Standard",
                    gradient: "from-[#4bbac3] to-[#78bb30]"
                  },
                  {
                    name: "HIPAA Compliant",
                    desc: "Total Protected Health Information",
                    gradient: "from-[#78bb30] to-[#0c5597]"
                  },
                  {
                    name: "ISO 9001:2015",
                    desc: "Quality Management Certified",
                    gradient: "from-[#09152b] to-[#0c5597]"
                  },
                ].map((logo, idx) => (
                  <div
                    key={idx}
                    className={`p-7 bg-gradient-to-br ${logo.gradient} rounded-2xl border border-white/10 shadow-[0_15px_35px_rgba(12,85,151,0.1)] hover:shadow-[0_25px_50px_rgba(12,85,151,0.2)] hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden`}
                  >
                    {/* Visual pattern overlay */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] pointer-events-none" />
                    
                    <div className="relative z-10 space-y-1">
                      <p className="text-sm font-black uppercase tracking-widest text-white group-hover:scale-105 transition-transform duration-500">
                        {logo.name}
                      </p>
                      <p className="text-[10px] font-black text-white/70 uppercase tracking-wider mt-1">
                        {logo.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Section 5: Elegant Footer Note */}
        <section className="py-20 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="flex items-center justify-center space-x-6 opacity-25">
                <Award className="size-8 text-navy" />
                <div className="h-8 w-px bg-slate-400" />
                <ShieldCheck className="size-8 text-navy" />
                <div className="h-8 w-px bg-slate-400" />
                <Globe className="size-8 text-navy" />
              </div>
              <div className="space-y-4">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] leading-relaxed">
                  Clinical Integrity • Operational Professionalism • Lifetime
                  Launchpad
                </h3>
                <div className="max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] max-w-xl mx-auto leading-relaxed">
                  ERO Healthcare Innovation Pvt Ltd © {new Date().getFullYear()}
                  . All Rights Reserved. Redefining global health revenue cycle
                  ecosystems.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
