"use client";
import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import { Bounce, Fade } from "react-awesome-reveal";
import Image from "next/image";

import diag1 from "../../../public/assets/images/diag1.png";
import diag2 from "../../../public/assets/images/diag2.png";

const Description = () => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="center"
      mt={{ base: "50px", md: "250px" }}
      mb={{ base: "50px", md: "100px" }}
      spacing={{ base: "20px", md: "100px" }}
    >
      <Stack textAlign={{ base: "center", md: "left" }} maxW={{ md: "400px" }}>
        <Fade cascade damping={0.1}>
          <Text fontSize={{ base: "20px", md: "28px" }} fontWeight="600">
            Diagnosticos inovadores usando <br /> inteligência artificial.
          </Text>
        </Fade>
        <Text fontSize={{ base: "14px", md: "16px" }} color="#707070">
          A <span style={{ color: "#26CCE2" }}> Foca.ia</span> não apenas reduz
          significativamente o <br /> tempo de análise, mas também aprimora{" "}
          <br />
          exponencialmente a precisão dos diagnósticos.
        </Text>
      </Stack>

      <Stack spacing="4" align="center">
        <Fade>
          <Image src={diag1} alt="diag image" width={300} height={300} />
        </Fade>
      </Stack>
    </Stack>
  );
};

export default Description;
