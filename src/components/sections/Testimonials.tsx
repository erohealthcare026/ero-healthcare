"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Senior Coder at HealthPlus",
        image: "https://i.pravatar.cc/150?u=sarah",
        content: "The CPC training at MedCode was life-changing. The trainers simplified complex ICD-10 sets and helped me clear my exam in the first attempt!",
        rating: 5,
    },
    {
        name: "David Chen",
        role: "Medical Billing Lead",
        image: "https://i.pravatar.cc/150?u=david",
        content: "The placement support was exceptional. Within 2 weeks of finishing my course, I was placed in a top MNC with a great salary package.",
        rating: 5,
    },
    {
        name: "Priya Sharma",
        role: "Certified Professional Coder",
        image: "https://i.pravatar.cc/150?u=priya",
        content: "Hands-on projects gave me the confidence to handle real-world medical records. Best decision for my healthcare career journey.",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-navy text-white overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/3 space-y-6">
                        <h2 className="text-primary font-bold tracking-wider uppercase text-sm">Testimonials</h2>
                        <h3 className="text-3xl font-extrabold tracking-tight">Hear it from our successful students</h3>
                        <p className="text-slate-400 text-sm">
                            Thousands of students have transformed their lives with our certification programs. Your success story starts here.
                        </p>
                    </div>

                    <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
                        {testimonials.map((testi, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 relative group hover:bg-slate-800 transition-colors"
                            >
                                <Quote className="absolute top-6 right-8 size-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                                <div className="flex space-x-1 mb-4">
                                    {[...Array(testi.rating)].map((_, i) => (
                                        <Star key={i} className="size-4 fill-yellow-500 text-yellow-500" />
                                    ))}
                                </div>
                                <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                                    "{testi.content}"
                                </p>
                                <div className="flex items-center space-x-4">
                                    <Image
                                        src={testi.image}
                                        alt={testi.name}
                                        width={48}
                                        height={48}
                                        className="size-12 rounded-full border-2 border-primary"
                                    />
                                    <div>
                                        <h4 className="font-bold text-white">{testi.name}</h4>
                                        <p className="text-xs text-slate-400">{testi.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
