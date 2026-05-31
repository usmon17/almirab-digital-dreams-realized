import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Work } from "@/components/site/Work";
import { Stack } from "@/components/site/Stack";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Stats } from "@/components/site/Stats";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ThemeProvider } from "@/components/site/ThemeProvider";
import { I18nProvider } from "@/components/site/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ALMIRAB — We build digital products people love" },
      { name: "description", content: "ALMIRAB is a studio crafting web, mobile, desktop and AI-powered software for ambitious teams." },
      { property: "og:title", content: "ALMIRAB — We build digital products people love" },
      { property: "og:description", content: "Studio for web, mobile, desktop, SaaS and AI software." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" },
      { rel: "canonical", href: "/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Process />
      <Work />
      <Stack />
      <WhyUs />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
