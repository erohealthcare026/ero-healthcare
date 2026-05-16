import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { Container } from "@/components/ui/Container";
import { BrandedHero } from "@/components/layout/BrandedHero";
import ContactBanner from "@/assets/banners/contact-us.jpg";

export const metadata = {
  title: "Contact Us | MedCode Institute",
  description:
    "Get in touch with MedCode Institute for inquiries about medical coding courses and placements.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar showTopBanner={true} />
      <main>
        <BrandedHero
          title="Get In Touch"
          subtitle="Have questions? We're here to help. Contact our counselors today for a free career roadmap."
          image={ContactBanner.src}
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
