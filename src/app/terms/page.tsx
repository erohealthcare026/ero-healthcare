import { Container } from "@/components/ui/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
    title: "Terms of Service | ERO Healthcare",
    description: "Standard terms and conditions for using ERO Healthcare's digital services and platforms.",
};

export default function TermsPage() {
    return (
        <>
            <Navbar />
            <main className="bg-white py-20 lg:py-32">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-16">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4">Terms of Service</h1>
                        </div>

                        <div className="space-y-12 text-slate-700 leading-relaxed font-normal text-justify">
                            {/* Section 1 */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">1. Electronic Agreement</h2>
                                <p>By using the site, you confirm you are of legal age and authorized to agree to these terms. You consent to receiving all legal notices and communications electronically.</p>
                            </section>

                            {/* Section 2 */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">2. Changes to Terms</h2>
                                <p>The agreement can change at any time without notice. Your continued use of the site means you accept the most recent version.</p>
                            </section>

                            {/* Section 3 */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">3. Site Usage</h2>
                                <p>You are granted a limited, non-transferable right to use the site. ERO Healthcare may update, suspend, or shut down the site at any time without liability.</p>
                            </section>

                            {/* Section 4 */}
                            <section className="space-y-8">
                                <h2 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">4. User Responsibilities</h2>

                                <div className="space-y-6">
                                    <div className="pl-6 border-l-2 border-slate-50">
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">4.1 Accounts</h3>
                                        <p>You must not share your account. You are solely responsible for all activity and security (passwords) related to your account.</p>
                                    </div>

                                    <div className="pl-6 border-l-2 border-slate-50">
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">4.2 Conduct</h3>
                                        <p>You must provide accurate data, obtain necessary permissions, follow all laws, and report any unauthorized access immediately.</p>
                                    </div>
                                </div>

                                <ul className="list-disc pl-6 space-y-4 pt-4">
                                    <li><strong>Usage Restrictions:</strong> You are responsible for all data sent from your account. Prohibited actions include illegal use, uploading malware, harassment, infringing on others' rights, hacking, or building a competing product. Violations may result in account termination.</li>
                                    <li><strong>Proprietary Rights:</strong> ERO Healthcare owns the site and its content. You get a limited license to use it for research or their services. You cannot sell or modify their materials.</li>
                                    <li><strong>Your Data:</strong> You own your data, but you grant the company a license to use it to provide and maintain the service. They may also use "die-identified" (anonymous) data for business Analytic's and improvements.</li>
                                    <li><strong>Feedback:</strong> Any suggestions you provide become the company's property to use without compensation.</li>
                                    <li><strong>Confidentiality:</strong> Both parties must protect each other’s non-public information with reasonable care and only use it for purposes related to this agreement.</li>
                                </ul>
                            </section>

                            {/* Remaining Sections */}
                            <section className="space-y-8 pt-8 border-t border-slate-100">
                                <ul className="list-disc pl-6 space-y-6">
                                    <li><strong>Your Promises:</strong> You confirm you have the legal authority to agree to these terms, the information you provide is accurate, and you own (or have permission for) any data you upload without infringing on others' rights.</li>
                                    <li><strong>Copyright:</strong> If you see infringing material, report it via their contact link.</li>
                                    <li><strong>Termination:</strong> ERO Healthcare can suspend or end your access if you breach the rules, provide false info, or to protect their system's security.</li>
                                    <li><strong>No Guarantees:</strong> The site is provided "as is." It is for general information, not professional advice. They don't guarantee it will be error-free or meet your specific needs.</li>
                                    <li><strong>Legal Basics:</strong> This is the full agreement between both parties. You are independent contractors (not partners), and if one part of the deal is found invalid, the rest still stands.</li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </Container>
            </main>
            <Footer />
        </>
    );
}
