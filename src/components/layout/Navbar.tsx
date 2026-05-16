"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Send,
  User,
  Mail,
  Phone,
  BookOpen,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";
import LogoImg from "@/assets/app-logo.jpeg";
import { motion, AnimatePresence } from "framer-motion";
import { SPECIALTIES } from "@/lib/specialties";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Career", href: "/career" },
  { name: "Why Us", href: "/why-us" },
  { name: "Contact", href: "/contact" },
  {
    name: "Specialities",
    href: "/specialties",
    dropdown: [
      "Anesthesia",
      "Emergency Medicine",
      "Hospital Medicine",
      "Radiology",
      "Pathology",
    ],
  },
];

export function Navbar({ showTopBanner = false }: { showTopBanner?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [enrollStatus, setEnrollStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<string | null>(
    null,
  );
  const selectedSpecialty = SPECIALTIES.find(
    (s) => s.id === selectedSpecialtyId,
  );

  const handleEnrollSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnrollStatus("loading");

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
        setEnrollStatus("success");
      } else {
        setEnrollStatus("error");
      }
    } catch (error) {
      setEnrollStatus("error");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    const handleOpenEnroll = () => {
      setIsEnrollOpen(true);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("openEnrollModal", handleOpenEnroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("openEnrollModal", handleOpenEnroll);
    };
  }, []);

  return (
    <div className="fixed top-0 z-50 w-full">
      <nav
        className={cn(
          "w-full transition-all duration-500 border-b",
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3 border-slate-200/50"
            : "bg-white/50 backdrop-blur-sm py-5 border-transparent",
        )}
      >
        <Container className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-primary/5 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative size-12 bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-center  group-hover:shadow-secondary/10 transition-all duration-500">
                <img
                  src={LogoImg.src}
                  alt="ERO Health Logo"
                  className="w-full h-full object-contain rounded-[0.5rem] p-1"
                />
              </div>
            </div>
            <div className="flex flex-col border-l-2 border-slate-100 pl-4 py-1">
              <span className="text-xl font-black tracking-tighter text-navy leading-none">
                ERO <span className="text-primary">HEALTHCARE</span>
              </span>
              <div className="flex items-center space-x-2 mt-1.5">
                <div className="h-0.5 w-3 bg-accent rounded-full" />
                <span className="text-[7.5px] font-bold tracking-[0.3em] text-slate-500 uppercase leading-none">
                  Innovation Private Limited
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <div className="relative flex items-center">
                    <Link
                      href={link.href}
                      className="px-4 py-2 text-[13px] font-bold text-slate-600 hover:text-secondary transition-all duration-300 cursor-pointer uppercase tracking-wider flex items-center"
                    >
                      {link.name}
                      <ChevronDown className="ml-1 size-4 group-hover:rotate-180 transition-transform duration-300" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 w-64 bg-white shadow-2xl py-4 border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-[60]">
                      {link.dropdown.map((item) => {
                        const id = item.toLowerCase().replace(" ", "-");
                        return (
                          <button
                            key={item}
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedSpecialtyId(id);
                            }}
                            className="block w-full text-left px-6 py-3 text-sm font-bold text-navy hover:bg-slate-50 hover:text-secondary transition-colors cursor-pointer"
                          >
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-[13px] font-bold text-slate-600 hover:text-secondary transition-all duration-300 relative group uppercase tracking-wider block"
                  >
                    {link.name}
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                )}
              </div>
            ))}
            <div className="pl-4 ml-4 border-l border-slate-200">
              <Button
                onClick={() => setIsEnrollOpen(true)}
                className="bg-primary hover:bg-primary/90 text-white rounded-none px-6 py-5 text-xs font-black uppercase tracking-[0.15em] shadow-xl hover:shadow-primary/20 transition-all duration-300"
              >
                Enroll Now
              </Button>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </Container>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 overflow-y-auto max-h-[80vh]">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="space-y-2">
                      <div className="text-lg font-black text-slate-400 uppercase tracking-widest text-[10px] mb-2">
                        {link.name}
                      </div>
                      {link.dropdown.map((item) => {
                        const id = item.toLowerCase().replace(" ", "-");
                        return (
                          <button
                            key={item}
                            onClick={(e) => {
                              e.preventDefault();
                              setIsOpen(false);
                              setSelectedSpecialtyId(id);
                            }}
                            className="block w-full text-left text-xl font-bold text-slate-800 hover:text-secondary py-1 cursor-pointer"
                          >
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-xl font-bold text-slate-800 hover:text-secondary border-b border-slate-50 pb-2 block"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button
                onClick={() => {
                  setIsOpen(false);
                  setIsEnrollOpen(true);
                }}
                className="w-full bg-primary py-6 text-sm font-black uppercase tracking-widest rounded-none"
              >
                Enroll Now
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Side Bar Enroll Menu */}
      <AnimatePresence>
        {isEnrollOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsEnrollOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[100]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-lg bg-white shadow-2xl z-[101] overflow-y-auto"
            >
              <div className="p-10 space-y-12">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <div className="h-1 w-6 bg-secondary rounded-full" />
                      <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">
                        Registration Hub
                      </span>
                    </div>
                    <h2 className="text-3xl font-black text-navy tracking-tight">
                      Enrollment <span className="text-secondary">Portal</span>
                    </h2>
                  </div>
                  <button
                    onClick={() => setIsEnrollOpen(false)}
                    className="size-12 rounded-2xl bg-slate-50 flex items-center justify-center text-navy hover:bg-secondary hover:text-white transition-all transform hover:rotate-90 duration-300"
                  >
                    <X className="size-6" />
                  </button>
                </div>

                <div className="space-y-8">
                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                    <p className="text-sm font-medium text-slate-600 leading-relaxed">
                      &quot;Take the next step toward a successful career in
                      precision medical coding. Complete the registration form
                      below to begin your professional journey.&quot;
                    </p>
                  </div>

                  {enrollStatus === "success" ? (
                    <div className="space-y-6 text-center animate-in zoom-in duration-500">
                      <div className="size-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle className="size-10" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-black text-navy">
                          Application Received
                        </h3>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">
                          Your registration has been successfully submitted. Our
                          team will contact you shortly with the next steps.
                        </p>
                      </div>
                      <Button
                        onClick={() => {
                          setEnrollStatus("idle");
                          setIsEnrollOpen(false);
                        }}
                        className="w-full bg-navy text-white rounded-none py-6"
                      >
                        Close Portal
                      </Button>
                    </div>
                  ) : (
                    <form className="space-y-6" onSubmit={handleEnrollSubmit}>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
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
                        <div className="grid grid-cols-2 gap-4">
                          {/* Primary Email */}
                          <div className="relative group/input">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-primary transition-colors duration-300">
                              <Mail className="size-4" />
                            </div>
                            <input
                              required
                              name="email"
                              type="email"
                              placeholder="Email"
                              className="pl-11 pr-4 w-full h-11 bg-white border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/15 text-xs font-semibold text-navy placeholder:text-slate-400 outline-none transition-all shadow-sm"
                            />
                          </div>
                          {/* Contact Number */}
                          <div className="relative group/input">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-primary transition-colors duration-300">
                              <Phone className="size-4" />
                            </div>
                            <input
                              required
                              name="phone"
                              type="tel"
                              placeholder="Contact Number"
                              className="pl-11 pr-4 w-full h-11 bg-white border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/15 text-xs font-semibold text-navy placeholder:text-slate-400 outline-none transition-all shadow-sm"
                            />
                          </div>
                        </div>

                        {/* Specialty Dropdown */}
                        <div className="relative group/input">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-primary transition-colors duration-300">
                            <BookOpen className="size-4" />
                          </div>
                          <select
                            required
                            name="course"
                            className="pl-11 pr-8 w-full h-11 bg-white border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/15 text-xs font-semibold text-navy outline-none transition-all appearance-none cursor-pointer shadow-sm"
                          >
                            <option value="">Select Specialty</option>
                            {navLinks
                              .find((link) => link.name === "Specialities")
                              ?.dropdown?.map((item) => (
                                <option key={item} value={item}>
                                  {item}
                                </option>
                              ))}
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l border-slate-200 pl-2 text-slate-400 text-[10px]">
                            ▼
                          </div>
                        </div>

                        {/* Description Message Box */}
                        <textarea
                          name="message"
                          rows={4}
                          placeholder="Enter your description"
                          className="p-4 w-full rounded-xl bg-white border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/15 text-xs font-semibold text-navy placeholder:text-slate-400 outline-none transition-all resize-none shadow-sm"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={enrollStatus === "loading"}
                        className="w-full bg-[#09152b] text-white hover:bg-primary text-xs font-black uppercase tracking-wider rounded-xl h-[50px] transition-all flex items-center justify-center space-x-2 border border-transparent hover:shadow-lg shadow-sm group/btn"
                      >
                        <span>
                          {enrollStatus === "loading"
                            ? "Processing..."
                            : "Submit"}
                        </span>
                        <Send className="ml-3 size-3.5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Specialty Detail Drawer */}
      <AnimatePresence>
        {selectedSpecialty && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSpecialtyId(null)}
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
                {/* Close Button */}
                <button
                  onClick={() => setSelectedSpecialtyId(null)}
                  className="absolute top-6 left-6 size-10 rounded-full bg-slate-900/10 backdrop-blur-md flex items-center justify-center text-slate-800 hover:bg-secondary hover:text-white transition-all duration-300 z-10"
                >
                  <X className="size-5" />
                </button>

                {/* Hero Image Section */}
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
                <div className="p-8 space-y-6">
                  {(() => {
                    const cleanText = selectedSpecialty.description.replace(/([a-z])\.([A-Z])/g, "$1. $2");
                    const sentences = (cleanText.match(/[^.!?]+[.!?]+/g) || [cleanText]).map((s) => s.trim());
                    const c1 = Math.max(1, Math.ceil(sentences.length / 3));
                    const c2 = Math.max(c1 + 1, Math.ceil((2 * sentences.length) / 3));
                    const p1 = sentences.slice(0, c1).join(" ");
                    const p2 = sentences.slice(c1, c2).join(" ");
                    const p3 = sentences.slice(c2).join(" ");

                    return (
                      <>
                        {p1 && (
                          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-semibold text-justify">
                            &quot;{p1}&quot;
                          </p>
                        )}
                        {p2 && (
                          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-semibold text-justify">
                            &quot;{p2}&quot;
                          </p>
                        )}
                        {p3 && (
                          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-semibold text-justify">
                            &quot;{p3}&quot;
                          </p>
                        )}
                      </>
                    );
                  })()}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
