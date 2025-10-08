import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/Herosection/Herosection";
import { Navbar } from "@/components/Navbar";
import { Divider } from "@/components/ui/Divider";
import { Mission } from "@/components/Mission";
import { JoinMovement } from "@/components/Joinmovement";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Divider />
      <Mission />
    
      <JoinMovement />
    </main>
  );
}

