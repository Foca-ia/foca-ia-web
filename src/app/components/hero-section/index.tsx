"use client";
import React from "react";
import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const headingFontSize = useBreakpointValue({
    base: "1.4em",
    md: "2em",
    lg: "2.5em",
  });
  const textFontSize = useBreakpointValue({
    base: "14px",
    md: "16px",
    lg: "18px",
  });

  return (
    <Stack
      spacing={8}
      px={{ base: 4, md: 8 }}
      py={{ base: 8, md: 12 }}
      textAlign="center"
    >
      <Heading fontSize={headingFontSize}>
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            500,
            "Resultados laboratoriais rápidos",
            1000,
            "Resultados laboratoriais inteligentes",
            1000,
            "Resultados laboratoriais precisos",
            1000,
            "Resultados laboratoriais com IA ",
            1000,
            "Resultados laboratoriais eficientes",
            500,
          ]}
          speed={50}
          style={{ fontSize: headingFontSize }}
          repeat={Infinity}
        />
      </Heading>

      <Text fontSize={textFontSize} color="#707070">
        Elevamos o padrão, proporcionando eficiência e confiança inigualáveis{" "}
        <br />
        no processo de análise e diagnósticos, garantindo resultados mais
        rápidos e mais <br />
        precisos.
      </Text>

      <Button
        bg="#26CCE2"
        color="#f2f2f2"
        borderRadius={20}
        w="150px"
        alignSelf="center"
        transition="all 0.3s ease-in-out"
        _hover={{
          bg: "#f2f2f2",
          color: "#26CCE2",
        }}
      >
        Saiba mais
      </Button>
    </Stack>
  );
};

export default Hero;
