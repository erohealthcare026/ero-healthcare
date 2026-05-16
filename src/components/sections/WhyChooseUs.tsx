"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users2, Trophy, Headphones, TrendingUp, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

const features = [
    {
        icon: <GraduationCap />,
        title: "Industry Experts",
        description: "Learn from veterans who have coded for top hospitals and insurers.",
    },
    {
        icon: <TrendingUp />,
        title: "Live Training",
        description: "Interactive live sessions with real-time feedback and doubt clearing.",
    },
    {
        icon: <ShieldCheck />,
        title: "Placement Guarantee",
        description: "Dedicated resume building and interview preparation for all students.",
    },
    {
        icon: <Trophy />,
        title: "Global Certification",
        description: "Curriculum aligned with international standards like AAPC and AHIMA.",
    },
    {
        icon: <Users2 />,
        title: "Community Support",
        description: "Lifetime access to our alumni network and coding community forums.",
    },
    {
        icon: <Headphones />,
        title: "24/7 Assistance",
        description: "Technical and academic support whenever you need it most.",
    },
];

export function WhyChooseUs() {
    return (
        <section id="why-us" className="py-24 bg-white relative overflow-hidden">
            {/* Subtle background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
                <div className="absolute top-10 right-10 size-64 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-10 size-64 bg-secondary/5 rounded-full blur-3xl" />
            </div>

            <Container className="relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-[0.2em] uppercase text-[10px]"
                    >
                        Why MedCode Institute?
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-extrabold tracking-tight text-slate-900"
                    >
                        Built for <span className="text-gradient">Career Excellence</span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed"
                    >
                        We combine academic rigor with practical industry insights to deliver the most comprehensive coding education in the market.
                    </motion.p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="size-14 rounded-2xl bg-slate-50 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner group-hover:shadow-primary/20 group-hover:shadow-lg">
                                {feature.icon && <div className="[&>svg]:size-6">{feature.icon}</div>}
                            </div>

                            <div className="space-y-3">
                                <h4 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">{feature.title}</h4>
                                <p className="text-slate-500 text-xs leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Decorative line on hover */}
                            <div className="absolute bottom-0 left-8 right-8 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
