"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  User,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

export function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    const data = {
      name: `${formData.get("firstName")} ${formData.get("lastName")}`,
      email: formData.get("email"),
      phone: formData.get("phone"),
      course: formData.get("course"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://medical-coding-send-mail.onrender.com/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        trackEvent("form_submission", "contact", "course_inquiry");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="py-32 bg-[#fafbfc] relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <Container>
          <div className="max-w-lg mx-auto relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(9,21,43,0.08)] border border-slate-100 overflow-hidden text-center relative">
              {/* Premium Top Gradient Bar */}
              <div className="h-2 w-full bg-gradient-to-r from-primary via-emerald-400 to-secondary" />
              
              <div className="p-12 md:p-16 space-y-8">
                {/* Icon Container with multi-layered glow */}
                <div className="relative mx-auto size-24">
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full animate-ping opacity-75 duration-1000" />
                  <div className="relative size-full bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-full flex items-center justify-center border border-emerald-100 shadow-inner">
                    <CheckCircle className="size-12 text-emerald-500" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-black text-navy tracking-tight">
                    Inquiry Received
                  </h2>
                  <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
                  <p className="text-base text-slate-500 font-medium leading-relaxed max-w-sm mx-auto pt-2">
                    Thank you for reaching out to <span className="font-bold text-slate-800">ERO Healthcare</span>. An admissions counselor will review your submission and contact you shortly.
                  </p>
                </div>

                <div className="pt-6">
                  <Button
                    onClick={() => setStatus("idle")}
                    className="group relative w-full sm:w-auto overflow-hidden rounded-xl bg-[#09152b] px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-white hover:bg-primary transition-all duration-300 shadow-xl shadow-navy/10 hover:shadow-primary/20 hover:-translate-y-0.5"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Return to Command Center
                      <ChevronRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <section
      id="contact"
      className="py-24 bg-[#fafbfc] overflow-hidden relative"
    >
      {/* Scientific Grid Pattern & Glowing Blur Orbs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
      <div className="absolute -top-24 -left-24 size-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 size-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch relative z-10">
          {/* Left Column: Get In Touch With Us Now Info Grid with interactive click anchors */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col border border-slate-200/80 bg-white shadow-[0_15px_45px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_65px_rgba(9,21,43,0.06)] hover:-translate-y-1 transition-all duration-500 rounded-[2rem] overflow-hidden group/card"
          >
            {/* Top Dark Navy Title Banner with horizontal gradient sheen */}
            <div className="bg-gradient-to-r from-[#0a1931] via-[#15305b] to-[#0a1931] py-5 px-6 text-center border-b border-white/5">
              <h3 className="text-white font-black text-sm uppercase tracking-wider">
                Get In Touch With Us Now!
              </h3>
            </div>

            {/* Another Professional Look: Premium Floating Card Deck */}
            <div className="p-6 space-y-4 flex-1 bg-slate-50/40">
              {/* Card 1: Direct Line */}
              <a
                href="tel:+919488393395"
                className="group/item relative flex items-center justify-between p-5 bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(12,85,151,0.08)] hover:-translate-y-1 transition-all duration-300 outline-none cursor-pointer overflow-hidden border border-slate-100"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary to-secondary opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center space-x-5 relative z-10">
                  <div className="size-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover/item:bg-primary/10 group-hover/item:text-primary transition-all duration-300 flex-shrink-0 border border-slate-100 group-hover/item:border-primary/20 group-hover/item:scale-110">
                    <Phone className="size-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] font-black tracking-widest text-slate-400 group-hover/item:text-primary transition-colors uppercase block leading-none">
                      Admissions Hotline
                    </span>
                    <h4 className="text-[15px] font-black text-navy leading-tight mt-1.5 group-hover/item:text-primary transition-colors">
                      +91-9488393395
                    </h4>
                    <p className="text-[10px] text-slate-400 font-semibold mt-1 leading-none">
                      Click to call direct office line
                    </p>
                  </div>
                </div>
                <div className="relative z-10 size-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300 flex-shrink-0 group-hover/item:shadow-lg shadow-primary/20">
                  <ChevronRight className="size-4 group-hover/item:translate-x-0.5 transition-transform" />
                </div>
              </a>

              {/* Card 2: WhatsApp Live Support */}
              <a
                href="https://wa.me/+919488393395"
                target="_blank"
                rel="noopener noreferrer"
                className="group/item relative flex items-center justify-between p-5 bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.08)] hover:-translate-y-1 transition-all duration-300 outline-none cursor-pointer overflow-hidden border border-slate-100"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-400 to-emerald-600 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center space-x-5 relative z-10">
                  <div className="size-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover/item:bg-emerald-50 group-hover/item:text-emerald-500 transition-all duration-300 flex-shrink-0 border border-slate-100 group-hover/item:border-emerald-200 group-hover/item:scale-110">
                    <svg
                      className="size-5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.588 1.974 14.12 1.95 11.47 1.95c-5.434 0-9.858 4.37-9.863 9.8-.001 1.762.486 3.48 1.412 5.013l-1.01 3.693 3.793-.984zM16.57 14.4c-.25-.125-1.476-.725-1.705-.808-.228-.083-.393-.125-.558.125-.166.25-.64.808-.784.975-.145.166-.29.187-.54.062-.25-.125-1.05-.386-2-1.229-.738-.655-1.236-1.465-1.38-1.714-.145-.25-.015-.385.11-.51.112-.11.25-.29.375-.435.125-.145.166-.25.25-.417.083-.166.04-.312-.02-.437-.062-.125-.558-1.333-.765-1.833-.2-.486-.403-.412-.558-.412h-.475c-.166 0-.437.062-.663.312-.228.25-.87.85-.87 2.075s.9 2.408.995 2.541c.095.13 1.762 2.675 4.263 3.746.595.255 1.057.408 1.417.523.598.19 1.143.163 1.573.1.48-.07 1.477-.6 1.684-1.18.207-.58.207-1.08.145-1.18-.062-.1-.228-.145-.478-.27z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] font-black tracking-widest text-slate-400 group-hover/item:text-emerald-500 transition-colors uppercase block leading-none">
                      Instant Chat
                    </span>
                    <h4 className="text-[15px] font-black text-navy leading-tight mt-1.5 group-hover/item:text-emerald-500 transition-colors">
                      WhatsApp Messenger
                    </h4>
                    <p className="text-[10px] text-slate-400 font-semibold mt-1 leading-none">
                      Click to message live advisor
                    </p>
                  </div>
                </div>
                <div className="relative z-10 size-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover/item:bg-emerald-500 group-hover/item:text-white transition-all duration-300 flex-shrink-0 group-hover/item:shadow-lg shadow-emerald-500/20">
                  <ChevronRight className="size-4 group-hover/item:translate-x-0.5 transition-transform" />
                </div>
              </a>

              {/* Card 3: Email Inquiry */}
              <a
                href="mailto:erohealthcare026@gmail.com"
                className="group/item relative flex items-center justify-between p-5 bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(75,186,195,0.08)] hover:-translate-y-1 transition-all duration-300 outline-none cursor-pointer overflow-hidden border border-slate-100"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-secondary to-teal-400 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center space-x-5 relative z-10 min-w-0">
                  <div className="size-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover/item:bg-secondary/10 group-hover/item:text-secondary transition-all duration-300 flex-shrink-0 border border-slate-100 group-hover/item:border-secondary/20 group-hover/item:scale-110">
                    <Mail className="size-5" />
                  </div>
                  <div className="text-left min-w-0">
                    <span className="text-[9px] font-black tracking-widest text-slate-400 group-hover/item:text-secondary transition-colors uppercase block leading-none">
                      Email Office
                    </span>
                    <h4 className="text-[13px] md:text-[14px] font-black text-navy leading-tight mt-1.5 group-hover/item:text-secondary transition-colors truncate">
                      erohealthcare026@gmail.com
                    </h4>
                    <p className="text-[10px] text-slate-400 font-semibold mt-1 leading-none">
                      Click to send an email query
                    </p>
                  </div>
                </div>
                <div className="relative z-10 size-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover/item:bg-secondary group-hover/item:text-white transition-all duration-300 flex-shrink-0 group-hover/item:shadow-lg shadow-secondary/20">
                  <ChevronRight className="size-4 group-hover/item:translate-x-0.5 transition-transform" />
                </div>
              </a>

              {/* Card 4: Campus Headquarters */}
              <a
                href="https://maps.google.com/?q=11.3424,77.7282"
                target="_blank"
                rel="noopener noreferrer"
                className="group/item relative flex items-center justify-between p-5 bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(9,21,43,0.08)] hover:-translate-y-1 transition-all duration-300 outline-none cursor-pointer overflow-hidden border border-slate-100"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-navy to-slate-700 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center space-x-5 relative z-10 min-w-0">
                  <div className="size-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover/item:bg-navy/5 group-hover/item:text-navy transition-all duration-300 flex-shrink-0 border border-slate-100 group-hover/item:border-navy/20 group-hover/item:scale-110">
                    <MapPin className="size-5" />
                  </div>
                  <div className="text-left min-w-0">
                    <span className="text-[9px] font-black tracking-widest text-slate-400 group-hover/item:text-navy transition-colors uppercase block leading-none">
                      Campus HQ
                    </span>
                    <h4 className="text-[12px] font-black text-navy leading-relaxed mt-1.5 group-hover/item:text-navy transition-colors truncate">
                      36C, Sukkuramaniya Valasu, Erode
                    </h4>
                    <p className="text-[10px] text-slate-400 font-semibold mt-1 leading-none">
                      Click to view on Google Maps
                    </p>
                  </div>
                </div>
                <div className="relative z-10 size-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover/item:bg-navy group-hover/item:text-white transition-all duration-300 flex-shrink-0 group-hover/item:shadow-lg shadow-navy/20">
                  <ChevronRight className="size-4 group-hover/item:translate-x-0.5 transition-transform" />
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Us Form Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col border border-slate-200 bg-slate-100/60 shadow-[0_15px_45px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_65px_rgba(9,21,43,0.06)] hover:-translate-y-1 transition-all duration-500 rounded-[2rem] overflow-hidden text-left"
          >
            {/* Top Dark Navy Title Banner with matching horizontal sheen */}
            <div className="bg-gradient-to-r from-[#0a1931] via-[#15305b] to-[#0a1931] py-5 px-6 text-center border-b border-white/5">
              <h3 className="text-white font-black text-sm uppercase tracking-wider">
                Contact Us
              </h3>
            </div>

            {/* Existing Fields Form Content */}
            <form
              onSubmit={handleSubmit}
              className="p-8 flex-1 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* First Name */}
                  <div className="relative group/input">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-primary transition-colors duration-300">
                      <User className="size-4" />
                    </div>
                    <input
                      required
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      className="pl-11 pr-4 w-full h-11 bg-white border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/15 text-xs font-semibold text-navy placeholder:text-slate-400 outline-none transition-all shadow-sm"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="relative group/input">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-primary transition-colors duration-300">
                      <User className="size-4" />
                    </div>
                    <input
                      required
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      className="pl-11 pr-4 w-full h-11 bg-white border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/15 text-xs font-semibold text-navy placeholder:text-slate-400 outline-none transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Email Address */}
                  <div className="relative group/input">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-primary transition-colors duration-300">
                      <Mail className="size-4" />
                    </div>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      className="pl-11 pr-4 w-full h-11 bg-white border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/15 text-xs font-semibold text-navy placeholder:text-slate-400 outline-none transition-all shadow-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative group/input">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-primary transition-colors duration-300">
                      <Phone className="size-4" />
                    </div>
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      className="pl-11 pr-4 w-full h-11 bg-white border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/15 text-xs font-semibold text-navy placeholder:text-slate-400 outline-none transition-all shadow-sm"
                    />
                  </div>
                </div>

                {/* Course / Track Program Selection */}
                <div className="relative group/input">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-primary transition-colors duration-300">
                    <Clock className="size-4" />
                  </div>
                  <select
                    name="course"
                    className="pl-11 pr-8 w-full h-11 bg-white border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/15 text-xs font-semibold text-navy outline-none transition-all appearance-none cursor-pointer shadow-sm"
                  >
                    <option value="">Select Specialty</option>
                    <option className="bg-white">Anesthesia</option>
                    <option className="bg-white">Emergency Medicine</option>
                    <option className="bg-white">Hospital Medicine</option>
                    <option className="bg-white">Radiology</option>
                    <option className="bg-white">Pathology</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l border-slate-200 pl-2 text-slate-400 text-[10px]">
                    ▼
                  </div>
                </div>

                {/* Message brief */}
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Message details..."
                  className="p-4 w-full rounded-xl bg-white border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/15 text-xs font-semibold text-navy placeholder:text-slate-400 outline-none transition-all resize-none shadow-sm"
                ></textarea>
              </div>

              {/* Center-right Aligned Submit Block */}
              <div className="flex justify-end pt-2">
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-[#09152b] text-white hover:bg-primary text-xs font-black uppercase tracking-wider px-8 rounded-xl h-[50px] transition-all flex items-center space-x-2 border border-transparent hover:shadow-lg shadow-sm group/btn"
                >
                  <span>
                    {status === "loading" ? "Submitting..." : "Submit"}
                  </span>
                  <Send className="size-3.5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
