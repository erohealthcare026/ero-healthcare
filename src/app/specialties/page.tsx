"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { BrandedHero } from "@/components/layout/BrandedHero";
import { SPECIALTIES } from "@/lib/specialties";
import {
  ChevronRight,
  X,
  ArrowRight,
  ShieldCheck,
  Clock,
  BookOpen,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SpecialtiesBanner from "@/assets/banners/specialties.jpg";

export default function SpecialtiesPage() {
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
      <main>
        <BrandedHero
          title="Our Specialties"
          subtitle="Expert-led training in high-demand medical coding disciplines."
          image={SpecialtiesBanner.src}
        />

        <section className="py-20 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none">
                Specialized Training for a{" "}
                <span className="text-primary">Complex Healthcare</span>{" "}
                Ecosystem
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed font-medium text-justify">
                At the Ero Healthcare , we recognize that
                excellence in modern healthcare requires more than general
                knowledge. Our specialized tracks are meticulously designed by
                industry veterans to provide deep-dive expertise in the
                highest-accuracy coding domains. Each specialization is mapped
                to current global standards, ensuring our graduates are prepared
                for high-precision institutional environments.
              </p>
            </div>
          </Container>
        </section>

        <section className="pb-24 pt-0 bg-slate-50 relative overflow-hidden">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
              {SPECIALTIES.map((specialty, i) => (
                <button
                  key={specialty.id}
                  onClick={() => setSelectedId(specialty.id)}
                  className="group relative flex flex-col text-left focus:outline-none w-full"
                >
                  <motion.div
                    {...fadeIn}
                    transition={{ delay: i * 0.1 }}
                    className="w-full"
                  >
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

          {/* Background Decorative Shapes */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none" />
        </section>
      </main>
      <Footer />

      {/* Right Side Drawer */}
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
                {/* Close Button - More Minimal */}
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 left-6 size-10 rounded-full bg-slate-900/10 backdrop-blur-md flex items-center justify-center text-slate-800 hover:bg-secondary hover:text-white transition-all duration-300 z-10"
                >
                  <X className="size-5" />
                </button>

                {/* Hero Image Section - Reduced Height */}
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
    </>
  );
}
