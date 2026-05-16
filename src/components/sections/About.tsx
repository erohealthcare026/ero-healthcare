"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, ShieldCheck, Microscope } from "lucide-react";
import { Container } from "@/components/ui/Container";
import ceo from "@/assets/ceo.jpeg";

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Intellectual Narrative Column - Now on Left */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-10 order-2 xl:order-1">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Excellence in{" "}
                <span className="text-primary">Clinical Care</span> &
                Professional{" "}
                <span className="text-accent underline decoration-accent/20 decoration-4 underline-offset-8">
                  Integrity
                </span>
              </h2>

              <div className="relative p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                <div className="absolute top-8 left-8 text-primary/10">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9125 16 16.0171 16H19.0171C20.1217 16 21.0171 16.8954 21.0171 18V21C21.0171 22.1046 20.1217 23 19.0171 23H16.0171C14.9125 23 14.017 22.1046 14.017 21ZM14.0171 21V18H19.0171V21H16.0171ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C9.10457 16 10 16.8954 10 18V21C10 22.1046 9.10457 23 8 23H5C3.89543 23 3 22.1046 3 21ZM3 21V18H10V21H3ZM16.0171 13C16.0171 10.2386 16.0171 1 16.0171 1C17.6739 1 19.0171 2.34315 19.0171 4V7C19.0171 8.65685 17.6739 10 16.0171 10C16.0171 11.6569 17.6739 13 16.0171 13ZM5 13C5 10.2386 5 1 5 1C6.65685 1 8 2.34315 8 4V7C8 8.65685 6.65685 10 5 10C5 11.6569 6.65685 13 5 13Z" />
                  </svg>
                </div>
                <div className="space-y-6 relative z-10">
                  <p className="text-xl text-navy font-bold leading-relaxed text-justify">
                    “ERO HealthCare Innovation Private Limited is dedicated to client success and the
                    professional growth of our team. By continually raising the
                    bar on our performance results, we ensure our clients
                    receive the highest level of service.”
                  </p>
                  <div className="h-px w-16 bg-accent/20" />
                  <p className="text-slate-500 font-medium text-justify">
                    “At ERO Health, we believe the work we do here empowers our
                    clients to achieve excellence in their world, transforming
                    medical documentation into a strategic asset.”
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "Ethical Coding",
                  label: "100% Accuracy Commitment",
                  bg: "bg-navy",
                },
                {
                  icon: Microscope,
                  title: "Advanced Analytics",
                  label: "Data-Driven Precision",
                  bg: "bg-accent",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-5 p-6 rounded-3xl bg-white border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                >
                  <div
                    className={`size-12 rounded-2xl flex items-center justify-center shrink-0 ${item.bg} text-white shadow-lg`}
                  >
                    <item.icon className="size-6" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Presence Column - Now on Right */}
          <div className="lg:col-span-12 xl:col-span-5 relative order-1 xl:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] max-w-md mx-auto xl:ml-auto lg:mx-0 overflow-hidden rounded-[2rem] shadow-2xl group">
                <Image
                  src={ceo.src}
                  alt="Founder & CEO"
                  fill
                  className="object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <p className="text-white font-bold text-lg mb-1">
                    Poovarasan Krishnamoorthi
                  </p>
                  <p className="text-accent text-sm font-medium">
                    Founder & CEO
                  </p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 size-24 border-t-2 border-r-2 border-accent/30 rounded-tr-3xl -z-10" />
              <div className="absolute -bottom-6 -left-6 size-24 border-b-2 border-l-2 border-primary/30 rounded-bl-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
