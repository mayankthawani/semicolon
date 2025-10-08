import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/Herosection/Herosection";
import { Navbar } from "@/components/Navbar";
import { Divider } from "@/components/ui/Divider";
import { Mission } from "@/components/Mission";
import { JoinMovement } from "@/components/Joinmovement";
import { EventProtocol } from "@/components/EventProtocol";
import { Faqs } from "@/components/Faqs";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <Divider />
      <div id="about">
        <Mission />
      </div>
      <div id="schedule">
        <JoinMovement />
      </div>
      <div id="details">
        <EventProtocol />
      </div>
      <div id="faq">
        <Faqs />
      </div>
      <Divider />
      <Footer />
    </main>
  );
}

