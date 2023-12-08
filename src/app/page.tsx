import Image from "next/image";
import { Stack, Text } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import Hero from "./components/hero-section";
import Description from "./components/desc-section";
import IaSection from "./components/ia-section";
import { SteperComponent } from "./components/steper-section";
import FooterSection from "./components/footer-section";

export default function Home() {
  return (
    <>
      <Stack>
        <Navbar />
        <Hero />
        <Description />
        <IaSection />
        <SteperComponent />
        <FooterSection />
      </Stack>
    </>
  );
}
