import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/Herosection/Herosection";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
   <div>
    <Navbar />
    <HeroSection />
   </div>
  );
}

    