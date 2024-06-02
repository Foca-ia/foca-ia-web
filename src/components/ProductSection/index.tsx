"use client";
import { Stack, Box, keyframes } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import focaDashboardImage from "../../../public/assets/images/Dashboard.png";
import { Fade } from "react-awesome-reveal";

const ProductSection = () => {
  return (
    <Stack
      width="90%"
      align="center"
      justify="center"
      mt={{ base: "50px", md: "100px" }}
      alignSelf="center"
      justifyContent="center"
      alignItems="center"
      backdropFilter="blur(10px)"
    >
      <Fade cascade damping={0.5} direction="up" triggerOnce>
        <Image
          src={focaDashboardImage}
          alt="foca dashboard image"
          layout="responsive"
          width={1260}
          height={1000}
          objectFit="cover"
        />
      </Fade>
    </Stack>
  );
};

export default ProductSection;
