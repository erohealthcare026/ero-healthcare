"use client";

import { motion } from "framer-motion";
import { TrendingUp, Building2, Briefcase, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/Container";

const companies = [
    "Optum", "CVS Health", "UnitedHealth Group", "Cognizant", "Accenture", "Apollo Hospitals"
];

export function Career() {
    return (
        <section id="placements" className="py-24">
            <Container>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-primary font-bold tracking-wider uppercase text-sm">Career Growth</h2>
                            <h3 className="text-3xl font-extrabold tracking-tight">Lauch Your Career in a Multi-Billion Dollar Industry</h3>
                            <p className="text-base text-muted">
                                Medical coding is one of the fastest-growing professions in the healthcare sector. With the increasing complexity of healthcare regulations, the demand for certified coders is at an all-time high.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-6 bg-slate-50 rounded-2xl space-y-3">
                                <Briefcase className="size-8 text-primary" />
                                <h4 className="font-bold text-sm">Avg. Starting Salary</h4>
                                <p className="text-2xl font-extrabold text-slate-900">$45,000 - $60,000</p>
                                <p className="text-xs text-muted">Per Annum (Global Average)</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-2xl space-y-3">
                                <TrendingUp className="size-8 text-secondary" />
                                <h4 className="font-bold text-sm">Job Growth</h4>
                                <p className="text-2xl font-extrabold text-slate-900">10% Growth</p>
                                <p className="text-xs text-muted">Projected through 2030 (BLS)</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-bold text-slate-900">Top Recruiters</h4>
                            <div className="flex flex-wrap gap-4">
                                {companies.map((company, i) => (
                                    <span key={i} className="px-4 py-2 bg-white border border-border rounded-lg text-sm font-medium text-slate-600 shadow-sm">
                                        {company}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-primary p-12 rounded-[3rem] text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <GraduationCap className="size-64" />
                        </div>

                        <div className="relative z-10 space-y-6">
                            <h4 className="text-2xl font-bold">Our Placement Statistics</h4>
                            <div className="space-y-12">
                                <div className="space-y-2">
                                    <div className="flex justify-between items-end">
                                        <span className="text-sm font-medium">Placement Rate</span>
                                        <span className="text-3xl font-bold">98%</span>
                                    </div>
                                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "98%" }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="h-full bg-white"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-end">
                                        <span className="text-sm font-medium">Avg. Salary Hike</span>
                                        <span className="text-3xl font-bold">45%</span>
                                    </div>
                                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "45%" }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="h-full bg-white"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-end">
                                        <span className="text-sm font-medium">Students Placed (2023-24)</span>
                                        <span className="text-3xl font-bold">1,250+</span>
                                    </div>
                                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "85%" }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="h-full bg-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
