import { Container } from "@/components/ui/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
    title: "Privacy Policy | ERO Healthcare",
    description: "Legal statement regarding information collection and usage at ERO Healthcare.",
};

export default function PrivacyPage() {
    const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    return (
        <>
            <Navbar />
            <main className="bg-white py-20 lg:py-32">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-16">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4">Privacy Policy</h1>
                           
                        </div>

                        <div className="space-y-12 text-slate-700 leading-relaxed font-normal text-justify">
                            {/* Section 1 */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">1. Information Collection and Usage</h2>
                                <p className="mb-6">ERO Healthcare collects personal and technical information to provide and enhance our services.</p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li><strong>Log Files:</strong> Our servers automatically record details such as your IP address, browser type, geographic location, referring pages, and the specific time and duration of your visit.</li>
                                    <li><strong>Personal Data:</strong> When you register or interact with our site, we collect identifiable information, including your name, email address, and telephone number.</li>
                                    <li><strong>Purpose:</strong> This data is used solely to create user IDs, respond to inquiries, process job applications, and provide personalized content or news regarding our services.</li>
                                </ul>
                            </section>

                            {/* Section 2 */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">2. Interactive Services and Monitoring</h2>
                                <p className="mb-6">By using this website, you acknowledge and consent to the use of interactive tools:</p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li><strong>Communication Records:</strong> We may record and retain transcripts of all communications made via our chat-bots or managed chat services.</li>
                                    <li><strong>Session Replay:</strong> We may record or recreate your website activity to improve user experience, verify data, and maintain service quality.</li>
                                    <li><strong>Third-Party Analytic’s:</strong> We may work with trusted service providers to store and analyze this interaction data on our behalf.</li>
                                </ul>
                            </section>

                            {/* Section 3 */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">3. Cookies and Tracking</h2>
                                <p className="mb-4 text-slate-600">We use Cookies (small digital signature files) to remember your personal preferences and track return visits.</p>
                                <p><strong>User Choice:</strong> You may block cookies through your browser settings; however, doing so may prevent access to certain website features.</p>
                            </section>

                            {/* Section 4 */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">4. Data Sharing and Disclosure</h2>
                                <p className="mb-6">ERO Healthcare maintains a strict policy regarding the sale of data:</p>
                                <ul className="list-decimal pl-6 space-y-4">
                                    <li><strong>No Commercial Sale:</strong> We do not sell, rent, or lease your email addresses, phone numbers, or SMS consent to third parties for marketing purposes.</li>
                                    <li><strong>Internal Sharing:</strong> Information is shared only on a "need-to-know" basis with our subsidiaries, vendors, contractors, and authorized third-party agents to facilitate our services.</li>
                                </ul>
                            </section>

                            {/* Section 5 */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">5. Security and Retention</h2>
                                <ul className="space-y-4">
                                    <li><strong>Data Protection:</strong> We employ administrative, physical, and technical security controls to safeguard your Personal Information against unauthorized access.</li>
                                    <li><strong>Retention Period:</strong> Personal data is retained only for the duration necessary to fulfill the outlined purposes, unless a longer period is required by law or legitimate business necessity.</li>
                                </ul>
                            </section>

                            {/* Section 6 */}
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">6. Your Options and Amendments</h2>
                                <ul className="space-y-4">
                                    <li><strong>Unsubscribe:</strong> You may opt-out of email communications at any time by following the instructions provided in our correspondence.</li>
                                    <li><strong>Policy Updates:</strong> ERO Healthcare reserves the right to modify this statement at its discretion. Continued use of the site constitutes acceptance of the current policy.</li>
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
