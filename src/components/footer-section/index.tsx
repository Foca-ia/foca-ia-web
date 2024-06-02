"use client";

import React from "react";
import Image from "next/image";
import { Button, Heading, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/navigation";
import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const FooterSection = () => {
  const [isSmallerThanMd] = useMediaQuery("(max-width: 48em)");
  const router = useRouter();
  return (
    <Stack mt={{ base: "50px", md: "100px", lg: "150px" }} h="100%">
      <Stack
        alignSelf="center"
        alignItems="center"
        justifyContent="center"
        mb={{ base: "50px", md: "100px" }}
      >
        <Fade>
          <Heading
            textAlign="center"
            fontSize={isSmallerThanMd ? "16px" : "40px"}
            fontWeight="600"
            color="#FFF"
          >
            “Resultados rapidos, diagnosticos certeiros, saude duradora”
          </Heading>
        </Fade>
      </Stack>

      <Stack
        bg="#24CEDE"
        borderRadius={"20px"}
        border={"1px solid #f2f2f2"}
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
              `INTELIGENCIA\nARTIFICIAL\nRAPIDEZ\nPRECISAO\nSAUDE`,
              1000,
              "",
            ]}
            speed={40}
            repeat={Infinity}
          />
        </Stack>

        <Stack gap={{ base: "50px", md: "130px" }}>
          <Text
            color="#f2f2f2"
            mt={isSmallerThanMd ? "30px" : "0"}
            cursor={"pointer"}
          >
            Termos de privacidade
          </Text>
          <Stack>
            <Text color="#f2f2f2">Contacte-nos</Text>
            <Text
              color="#f2f2f2"
              as={"a"}
              cursor={"pointer"}
              onClick={() =>
                router.push(
                  "https://api.whatsapp.com/send/?phone=244925122502&text&app_absent=0"
                )
              }
            >
              925122502
            </Text>
            <Text
              color="#f2f2f2"
              as={"a"}
              cursor={"pointer"}
              onClick={() => {
                router.push("mailto:geral.foca.ia@gmail.com");
              }}
            >
              geral.foca.ia@gmail.com
            </Text>
          </Stack>
        </Stack>

        <Stack
          gap={{ base: "100px", md: "200px" }}
          textAlign={{ base: "center", md: "end" }}
          p="20px"
        >
          <Text color="#f2f2f2">
            Foca.ia ©{new Date().getFullYear()} — Todos os direitos reservados
          </Text>

          <Stack display="flex" flexDirection="row">
            <Button
              borderRadius={30}
              w="100px"
              padding={"10px"}
              bg="transparent"
              borderColor="#f2f2f2"
              borderWidth="1px"
              onClick={() =>
                router.push(
                  "https://api.whatsapp.com/send/?phone=244925122502&text&app_absent=0"
                )
              }
              leftIcon={<BsWhatsapp color="#FFF" size={20} />}
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
              onClick={() =>
                router.push(
                  "https://www.instagram.com/foca.ia/?igshid=YmMyMTA2M2Y="
                )
              }
              leftIcon={<BsInstagram color="#FFF" size={20} />}
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
              onClick={() =>
                router.push("https://www.linkedin.com/company/foca-ia")
              }
              leftIcon={<BsLinkedin color="#FFF" size={20} />}
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
