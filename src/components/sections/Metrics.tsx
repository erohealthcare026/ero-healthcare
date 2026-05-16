"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { GraduationCap, Building2, Award, Globe2 } from "lucide-react";

const stats = [
    { label: "Certified Professionals", value: "10K+", icon: GraduationCap, color: "text-primary" },
    { label: "Global Hospital Partners", value: "500+", icon: Building2, color: "text-secondary" },
    { label: "AAPC Success Rate", value: "98%", icon: Award, color: "text-accent" },
    { label: "Placement Network", value: "25+", icon: Globe2, color: "text-primary" },
];

export function Metrics() {
    return (
        <section className="py-12 bg-white border-y border-slate-100">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center lg:items-start space-y-3 group"
                        >
                            <div className={`p-3 rounded-2xl bg-slate-50 group-hover:scale-110 transition-transform duration-500 ${item.color}`}>
                                <item.icon className="size-6" />
                            </div>
                            <div className="text-center lg:text-left">
                                <h4 className="text-3xl font-black text-slate-900 tracking-tighter leading-none mb-1">
                                    {item.value}
                                </h4>
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-orange-600 transition-colors">
                                    {item.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
