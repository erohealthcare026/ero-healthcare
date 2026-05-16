"use client";

import { color, motion } from "framer-motion";
import Image from "next/image";
import {
  ChevronRight,
  PlayCircle,
  ShieldCheck,
  Users,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background blobs */}
      {/* Animated Banner Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-[450px]">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000"
          alt="Healthcare Professional Workspace"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
        className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 size-[600px] bg-primary/5 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 size-[600px] bg-secondary/5 rounded-full blur-3xl -z-10"
      />

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold"
            >
              <Award className="size-4" />
              <span>India's Leading Coding Institute</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]"
            >
              Become a{" "}
              <motion.span
                initial={{ backgroundSize: "0% 100%" }}
                animate={{ backgroundSize: "100% 100%" }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-gradient bg-no-repeat bg-left-bottom"
              >
                Certified Medical Coder
              </motion.span>{" "}
              & Start Your Career
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Transform your future with industry-leading training. Get CPC
              certified, master ICD-10, and step into a high-demand healthcare
              career with 100% placement support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Button size="lg" className="w-full sm:w-auto">
                Enroll Now <ChevronRight className="ml-2 size-5" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <PlayCircle className="mr-2 size-5" /> Get Free Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start space-x-8 pt-4"
            >
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                  <ShieldCheck className="size-5" />
                </div>
                <span className="text-sm font-medium">AAPC Registered</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  <Users className="size-5" />
                </div>
                <span className="text-sm font-medium">5000+ Students</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800"
                alt="Medical Coding Professional Training"
                width={800}
                height={600}
                className="w-full h-auto object-cover aspect-[4/3]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating stats card */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-1/2 -right-12 z-20 glass-card p-6 rounded-2xl hidden xl:block shadow-2xl"
            >
              <div className="flex items-center space-x-4">
                <div className="size-12 rounded-full bg-primary flex items-center justify-center text-white">
                  <Award className="size-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-xs text-muted font-medium">
                    Placement Assistance
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scrolling Ticker Banner */}
      <div className="mt-20 border-y border-slate-100 bg-white/50 backdrop-blur-sm py-6 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex space-x-12 px-6 items-center">
              <span className="text-sm font-bold text-slate-400 flex items-center">
                <span className="size-2 bg-primary rounded-full mr-2" /> AAPC
                CERTIFIED TRAINING
              </span>
              <span className="text-sm font-bold text-slate-400 flex items-center">
                <span className="size-2 bg-secondary rounded-full mr-2" /> 100%
                PLACEMENT SUPPORT
              </span>
              <span className="text-sm font-bold text-slate-400 flex items-center">
                <span className="size-2 bg-teal-500 rounded-full mr-2" /> GLOBAL
                RECOGNITION
              </span>
              <span className="text-sm font-bold text-slate-400 flex items-center">
                <span className="size-2 bg-purple-500 rounded-full mr-2" /> CPC
                EXAM PREPARATION
              </span>
              <span className="text-sm font-bold text-slate-400 flex items-center">
                <span className="size-2 bg-amber-500 rounded-full mr-2" />{" "}
                REAL-TIME CASE STUDIES
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
