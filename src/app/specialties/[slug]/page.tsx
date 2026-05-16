import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { BrandedHero } from "@/components/layout/BrandedHero";
import { SPECIALTIES } from "@/lib/specialties";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ChevronRight, ShieldCheck, TrendingUp, Users } from "lucide-react";

export default async function SpecialtyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const specialty = SPECIALTIES.find((s) => s.id === slug);

    if (!specialty) {
        notFound();
    }

    return (
        <>
            <Navbar showTopBanner={true} />
            <main>
                <BrandedHero
                    title={specialty.title}
                    subtitle="Advanced Professional Development Curriculum"
                    image={specialty.image}
                    gifOverlay={"gifOverlay" in specialty ? (specialty.gifOverlay as string) : undefined}
                    height="h-[450px] lg:h-[550px]"
                />

                <section className="py-24 bg-white relative overflow-hidden">
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h2 className="text-primary font-bold tracking-[0.25em] uppercase text-xs">Overview</h2>
                                    <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                                        Master the Complexities of <br />
                                        <span className="text-primary/80">{specialty.title}</span>
                                    </h3>
                                    <p className="text-lg text-slate-600 leading-relaxed font-medium text-justify">
                                        {specialty.description}
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    {[
                                        { icon: ShieldCheck, title: "100% Compliant", desc: "Latest regulatory standards" },
                                        { icon: TrendingUp, title: "Career Growth", desc: "Top-tier salary potential" },
                                        { icon: Users, title: "Expert Mentors", desc: "Industry-leading trainers" },
                                        { icon: ChevronRight, title: "Certification", desc: "AAPC/AHIMA aligned" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100/50 hover:shadow-lg transition-all duration-300">
                                            <div className="p-2 bg-white rounded-lg shadow-sm">
                                                <item.icon className="size-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                                                <p className="text-xs text-slate-500">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8">
                                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-10 py-7 text-sm font-black uppercase tracking-widest shadow-2xl">
                                        Start Your Specialization
                                    </Button>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
                                <div className="relative aspect-video overflow-hidden rounded-[2rem] shadow-2xl">
                                    <img
                                        src={specialty.image}
                                        alt={specialty.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden lg:block animate-bounce-slow">
                                    <div className="flex items-center space-x-4">
                                        <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                            <TrendingUp className="size-6 text-primary" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-black text-slate-900">98%</div>
                                            <div className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Placement Rate</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                <section className="py-20 bg-slate-50 border-y border-slate-200/50">
                    <Container className="text-center space-y-8">
                        <h2 className="text-2xl font-bold text-slate-900">Not sure which specialty is right for you?</h2>
                        <Link href="/contact" className="inline-flex items-center space-x-2 text-primary font-black uppercase tracking-widest text-sm hover:translate-x-2 transition-transform">
                            <span>Get free career counseling</span>
                            <ChevronRight className="size-5" />
                        </Link>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
