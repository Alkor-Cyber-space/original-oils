import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import ConnectSection from "@/components/ConnectSection";

export const metadata = {
    title: "Contact Us | Original Oils",
    description: "Get in touch with Original Oils for any questions or wellness bookings.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <ContactSection />
            <ConnectSection />
        </main>
    );
}
