"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Spinner, Stack, Text } from "@chakra-ui/react";
import Hero from "@/components/hero-section";
import Description from "@/components/desc-section";
import IaSection from "@/components/ia-section";
import { SteperComponent } from "@/components/steper-section";
import FooterSection from "@/components/footer-section";
import { Navbar } from "@/components/Navbar";
import dynamic from "next/dynamic";
import ThreeScene from "@/components/threeScene";
import ProductSection from "@/components/ProductSection";
import ProductVideoSection from "@/components/product-video-section";
import Illnesses from "@/components/illnesses-section";
import Impact from "@/components/inpact-section";
import GetStarted from "@/components/get-started-section";
import loadingLogo from "../../public/assets/images/loadingLogo.png";
import Team from "@/components/team-section";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulando o carregamento dos componentes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Ajuste o tempo conforme necessário

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Stack
        height="100vh"
        alignItems="center"
        justifyContent="center"
        background="linear-gradient(180deg, #FBFBFB, #24CEDE)"
      >
        <Image src={loadingLogo} alt="logo" width={200} height={200} />
        <Spinner />
      </Stack>
    );
  }

  return (
    <Stack
      background="linear-gradient(180deg, #FBFBFB, #24CEDE)"
      padding={{
        base: "20px",
        md: "50px",
        lg: "100px",
      }}
    >
      <Navbar />
      <Hero />
      <ProductSection />
      <Description />
      <ProductVideoSection />
      <Illnesses />
      <Impact />
      <Team />
      <GetStarted />
      <FooterSection />
    </Stack>
  );
}
