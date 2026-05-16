"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { BrandedHero } from "@/components/layout/BrandedHero";
import { Button } from "@/components/ui/Button";
import {
  Target,
  Lightbulb,
  ShieldCheck,
  Globe,
  Award,
  Users,
  LineChart,
  Dna,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import ceo from "@/assets/ceo.jpeg";
import AboutBanner from "@/assets/banners/about.jpg";

export default function AboutPage() {
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
        {/* Institutional Hero */}
        <BrandedHero
          title="About Us"
          subtitle="We are transforming the healthcare revenue cycle through unyielding precision, ethical documentation, and forward-thinking analytics."
          image={AboutBanner.src}
        />

        {/* Executive Vision Section - Swapped for Professional Flow */}
        <section className="py-32 relative bg-slate-50/30">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white -z-10 shadow-inner" />

          <Container>
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Visual Presence - Left Side */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none"
              >
                <div className="relative z-10">
                  <div className="relative aspect-[4/5] w-full rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border-8 border-white group">
                    <Image
                      src={ceo.src}
                      alt="CEO"
                      fill
                      className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-60" />
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-12 -left-12 size-64 bg-primary/5 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-12 -right-12 size-64 bg-accent/5 rounded-full blur-3xl -z-10" />
                <div className="absolute top-1/2 -left-6 w-1 h-32 bg-accent/30 rounded-full" />
              </motion.div>

              {/* Intellectual Narrative - Right Side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:col-span-7 space-y-8 w-full"
              >
                <div className="space-y-4 text-center lg:text-left">
                  <span className="text-primary font-black uppercase text-[10px] tracking-widest pl-0.5">
                    Executive Leadership
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-black text-navy tracking-tight leading-tight">
                    The Visionary Lead
                  </h2>
                </div>

                <div className="space-y-6">
                  {/* Unified Executive Card containing quotes and leader profile */}
                  <div className="relative p-6 sm:p-10 md:p-12 bg-white border border-slate-100 rounded-[2.5rem] shadow-[0_30px_60px_rgba(12,85,151,0.03)] hover:shadow-[0_45px_90px_rgba(12,85,151,0.08)] transition-all duration-500 hover:-translate-y-1.5 overflow-hidden pl-8 sm:pl-12 md:pl-14 group space-y-8">
                    {/* Glowing logo-colored side indicator */}
                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#0c5597] via-[#4bbac3] to-[#78bb30]" />

                    {/* Background glowing aura */}
                    <div className="absolute -right-24 -bottom-24 size-72 bg-gradient-to-br from-[#0c5597]/5 to-[#78bb30]/5 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />

                    {/* Styled Background Quote Icon */}
                    <div className="absolute top-6 right-8 sm:right-10 text-slate-100 select-none pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                      <svg
                        width="48"
                        height="38"
                        viewBox="0 0 48 38"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 22C0 9.8497 9.8497 0 22 0V11C15.9249 11 11 15.9249 11 22H22V38H0V22ZM26 22C26 9.8497 35.8497 0 48 0V11C41.9249 11 37 15.9249 37 22H48V38H26V22Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>

                    <div className="space-y-6 relative z-10">
                      {/* Paragraph 1 */}
                      <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-semibold pr-2 sm:pr-4 text-justify">
                        ERO HealthCare Innovation Private Limited is dedicated
                        to client success and the professional growth of our
                        team. By continually raising the bar on our performance
                        results, we ensure our clients receive the highest level
                        of service. As Aslan famously noted, the purpose of a
                        new experience is to &apos;know me better&apos; in
                        one&apos;s own world. At ERO Health, we believe the work
                        we do here empowers our clients to achieve excellence in
                        their world.
                      </p>
                    </div>

                    {/* Leader Profile block */}
                    <div className="px-0 sm:px-4 md:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative z-10">
                      <div className="space-y-1">
                        <div className="text-[#0c5597] text-sm sm:text-md md:text-lg font-semibold tracking-widest">
                          <p className="text-lg sm:text-xl font-black uppercase tracking-widest text-[#FF8C00]">
                            Poovarasan Krishnamoorthi
                          </p>
                          Founder & Chief Executive Officer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* OUR STORY / Who We Are Section - Replicating Image Style */}
        <section className="py-24 bg-white relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side: Story Text & Action */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6 text-left"
              >
                <div className="space-y-2">
                  <span className="text-primary font-black uppercase text-xs tracking-widest">
                    OUR STORY
                  </span>
                  <h2 className="text-3xl lg:text-5xl font-black text-navy tracking-tight leading-tight">
                    Who We Are
                  </h2>
                </div>
                <p className="text-base text-slate-500 font-semibold leading-relaxed max-w-xl text-justify">
                  Established on March 22, 2022, Aslan Medical Coding Training
                  Center began with a mission to empower aspiring professionals.
                  Having successfully placed over 400 students in leading MNCs
                  through dedication and confidence, we are proud to announce
                  our evolution. In 2026, we are launching ERO Healthcare
                  Innovation Pvt Ltd.
                </p>
                <span className="text-[#000000] font-bold text-lg">
                  Inspired by the wisdom of Aslan:
                </span>
                <br />
                <p className="text-base text-slate-500 font-semibold leading-relaxed max-w-xl text-justify">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In your world,
                  I have another name. You must learn to know me by it. That was
                  the very reason why you were brought to Narnia, that by
                  knowing me here for a little, you may know me better there. We
                  invite you to join us at ERO Healthcare; by knowing us here
                  for a little, you may come to know our excellence even better
                  in the wider world of healthcare.&quot; We invite you to grow
                  with us. By knowing us here at ERO Healthcare for a little,
                  you will find that the same excellence you trusted at Aslan
                  has evolved into something even more powerful.
                </p>
                <p className="font-bold text-green-900">
                  &quot;To know us here is to prepare for the world
                  beyond.&quot;
                </p>
                <div className="pt-4">
                  <a href="/why-us" className="inline-block">
                    <Button className="bg-primary text-white hover:bg-navy px-8 rounded-xl font-extrabold text-xs uppercase tracking-wider h-[50px]">
                      Learn More About Us
                    </Button>
                  </a>
                </div>
              </motion.div>

              {/* Right Side: Image with Overlay Years of Experience Badge */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.06)] border-4 border-slate-50 group">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                    alt="Clinical HQ Building"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy/5 pointer-events-none" />
                </div>

                {/* Overlapping Rounded Experience Card Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute bottom-6 right-6 bg-primary text-white p-4 rounded-2xl shadow-xl flex items-center space-x-4 max-w-[240px] border border-white/15"
                >
                  <Users className="size-5 flex-shrink-0 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* OUR VALUES / What We Stand For Section - Replicating Image Style */}
        <section className="py-24 bg-slate-50/50 border-t border-slate-100 relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
          <Container>
            <div className="space-y-16">
              {/* Value Header */}
              <div className="text-left space-y-2">
                <span className="text-primary font-black uppercase text-xs tracking-widest">
                  OUR VALUES
                </span>
                <h2 className="text-3xl lg:text-4xl font-black text-navy tracking-tight">
                  What We Stand For
                </h2>
              </div>

              {/* 4 Column Values Grid with custom colored icons matching style */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {[
                  {
                    title: "Innovation",
                    desc: "We embrace new ideas and technologies to deliver creative healthcare solutions.",
                    icon: Lightbulb,
                  },
                  {
                    title: "Quality",
                    desc: "We are committed to excellence in everything we do.",
                    icon: Award,
                  },
                  {
                    title: "Integrity",
                    desc: "We believe in honesty, transparency, and building trust.",
                    icon: ShieldCheck,
                  },
                  {
                    title: "Collaboration",
                    desc: "We work closely with our clients to achieve shared success.",
                    icon: Users,
                  },
                ].map((value, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="space-y-5 text-left group"
                  >
                    <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                      <value.icon className="size-6" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-black text-navy tracking-tight leading-none">
                        {value.title}
                      </h4>
                      <p className="text-sm text-slate-500 font-semibold leading-relaxed">
                        {value.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Core Pillars - Enhanced Institutional Card Design */}
        <section className="py-24 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <Container>
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight">
                Our Foundation
              </h2>
              <p className="text-accent/60 text-[10px] font-black uppercase tracking-[0.4em]">
                Vision & mission
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Target,
                  title: "Our Vision",
                  desc: '"To redefine the healthcare revenue cycle through ethical coding excellence and advanced analytic, ensuring the financial sustainability and operational success of our partners."',
                  color: "text-accent",
                  border: "group-hover:border-accent/30",
                  glow: "group-hover:shadow-accent/5",
                },
                {
                  icon: Lightbulb,
                  title: "Our Mission",
                  desc: '"To ensure healthcare data integrity through rigorous accuracy, total confidentiality, and revenue cycle excellence, allowing providers to focus entirely on client requirements."',
                  color: "text-secondary",
                  border: "group-hover:border-secondary/30",
                  glow: "group-hover:shadow-secondary/5",
                },
              ].map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative p-10 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-xl border border-white/5 ${pillar.border} transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_45px_100px_-20px_rgba(0,0,0,0.4)] ${pillar.glow} overflow-hidden`}
                >
                  <div className="absolute -bottom-6 -right-4 text-9xl font-black text-white/[0.02] select-none pointer-events-none group-hover:text-white/[0.05] transition-colors duration-700"></div>

                  <div className="relative z-10 space-y-8">
                    <div
                      className={`size-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${pillar.color} shadow-2xl group-hover:bg-white group-hover:text-navy transition-all duration-500`}
                    >
                      <pillar.icon className="size-8" />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-white/40 text-base leading-relaxed font-medium group-hover:text-white/60 transition-colors text-justify">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Institutional Impact Section */}
        {/* Institutional Impact - High Fidelity Redesign */}
        <section className="py-32 bg-[#f8fafc] relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/[0.02] -skew-x-12 translate-x-1/4 -z-10" />

          <Container>
            <div className="grid lg:grid-cols-12 gap-24 items-center">
              <motion.div {...fadeIn} className="lg:col-span-5 relative">
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border-8 border-white group">
                  <img
                    src="https://cdn.pixabay.com/photo/2023/12/22/16/46/matrix-8464029_640.png"
                    alt="Institutional Data Analytics"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 to-transparent pointer-events-none" />
                </div>
              </motion.div>

              <motion.div {...fadeIn} className="lg:col-span-7 space-y-12">
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white border border-slate-200">
                    <span className="size-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] font-black text-navy tracking-[0.3em] uppercase text-left">
                      Performance Brief
                    </span>
                  </div>

                  <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl text-justify">
                    To redefine the healthcare revenue cycle through ethical
                    coding excellence and advanced analytic, ensuring the
                    financial sustainability and operational success of our
                    partners.
                  </p>

                  <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl text-justify">
                    To ensure healthcare data integrity through rigorous
                    accuracy, total confidentiality, and revenue cycle
                    excellence, allowing providers to focus entirely on client
                    requirements.
                  </p>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
