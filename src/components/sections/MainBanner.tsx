"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function MainBanner() {
    return (
        <section className="relative w-full h-[450px] lg:h-[550px] overflow-hidden bg-slate-100 flex items-center pt-20">
            {/* Professional Animated Data GIF Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enN4enMmaz1WUkEmY3Q9Zw/l0HlJzE6o6sZJb8W4/giphy.gif"
                    alt="Medical Data Visualization"
                    className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay scale-110"
                />
                <div className="absolute inset-0 bg-navy/70 backdrop-blur-[2px]" />
                {/* Fallback Static Image */}
                <img
                    src="https://images.unsplash.com/photo-1576091160550-2173bdb999ef?auto=format&fit=crop&q=80&w=2000"
                    alt="Professional Healthcare Environment"
                    className="w-full h-full object-cover object-center absolute inset-0 -z-10"
                />
            </div>

            {/* Diagonal Blue Overlay */}
            <div
                className="absolute inset-0 z-10 bg-gradient-to-r from-primary via-primary/95 to-transparent"
                style={{ clipPath: "polygon(0 0, 60% 0, 45% 100%, 0% 100%)" }}
            />
            {/* Mobile Overlay (Full dark) */}
            <div className="absolute inset-0 z-10 bg-primary/60 lg:hidden" />

            <Container className="relative z-20">
                <div className="max-w-2xl text-white space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
                            Excellence in <br />
                            <span className="text-white/90">Medical Coding</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-white/80 max-w-lg leading-relaxed font-medium">
                            Revenue cycle management and training services for healthcare professionals and facility-based physicians.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="pt-4"
                    >
                        <Button
                            variant="outline"
                            className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 rounded-none px-8 py-6 text-lg font-bold uppercase tracking-widest"
                        >
                            Meet Our Leadership Team
                        </Button>
                    </motion.div>
                </div>
            </Container>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-transparent z-30" />
        </section>
    );
}
