"use client";

import React from "react";
import Image from "next/image";
import { Button, Heading, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import { Fade } from "react-awesome-reveal";

import star from "../../../public/assets/images/star.png";

const FooterSection = () => {
  const [isSmallerThanMd] = useMediaQuery("(max-width: 48em)");
  return (
    <Stack mt={{ base: "50px", md: "100px", lg: "150px" }} h="100%">
      <Stack
        alignSelf="center"
        alignItems="center"
        justifyContent="center"
        mb={{ base: "50px", md: "100px" }}
      >
        <Fade>
          <Image src={star} width={30} height={30} alt="star illustration" />
          <Heading
            textAlign="center"
            fontSize={isSmallerThanMd ? "16px" : "40px"}
          >
            “Resultado rapido, diagnostico certeiro, saude duradora”
          </Heading>
        </Fade>
      </Stack>

      <Stack
        bg="#000000"
        h={{ base: "60%", md: "40%" }}
        w="100%"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        p={{ base: "10px", md: "20px" }}
        gap="20px"
      >
        <Stack
          w="30%"
          mt={{ base: "-30px", md: "0" }}
          display={isSmallerThanMd ? "none" : "block"}
        >
          <TypeAnimation
            style={{
              whiteSpace: "pre-line",
              height: "195px",
              display: isSmallerThanMd ? "none" : "block",
              fontSize: isSmallerThanMd ? "16px" : "2em", // Ajuste os tamanhos de fonte conforme necessário
              color: "#f2f2f2",
            }}
            sequence={[
              `INTELIGENCIA\nARTIFICIAL\nRAPIDEZ\nPRECISAO\nSAUDE\n`,
              1000,
              "",
            ]}
            speed={40}
            repeat={Infinity}
          />
        </Stack>

        <Stack gap={{ base: "50px", md: "130px" }}>
          <Text color="#f2f2f2" mt={isSmallerThanMd ? "30px" : "0"}>
            Termos de privacidade
          </Text>
          <Stack>
            <Text color="GrayText">Contacte-nos</Text>
            <Text color="GrayText">925122502</Text>
            <Text color="GrayText">info@foca-ia.com</Text>
          </Stack>
        </Stack>

        <Stack
          gap={{ base: "100px", md: "200px" }}
          textAlign={{ base: "center", md: "end" }}
          p="20px"
        >
          <Text color="GrayText">Foca.ia ©2023 — Copyright</Text>

          <Stack display="flex" flexDirection="row">
            <Button
              borderRadius={30}
              w="100px"
              bg="transparent"
              borderColor="#f2f2f2"
              borderWidth="1px"
            >
              <Text fontSize={{ base: 10, md: 12 }} color="white">
                WhatsApp
              </Text>
            </Button>
            <Button
              borderRadius={30}
              w="100px"
              bg="transparent"
              borderColor="#f2f2f2"
              borderWidth="1px"
            >
              <Text fontSize={{ base: 10, md: 12 }} color="white">
                Instagram
              </Text>
            </Button>
            <Button
              borderRadius={30}
              w="100px"
              bg="transparent"
              borderColor="#f2f2f2"
              borderWidth="1px"
            >
              <Text fontSize={{ base: 10, md: 12 }} color="white">
                Linkedin
              </Text>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FooterSection;
