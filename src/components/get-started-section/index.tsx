"use client";
import { Box, Heading, Stack, Text, Card, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { BiLogoGmail } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const GetStarted = () => {
  const router = useRouter();
  return (
    <Stack
      display={"flex"}
      direction={"column"}
      alignItems={"center"}
      padding={"20px"}
      width={"100%"}
      marginTop={{
        base: "100px",
        md: "150px",
        lg: "200px",
      }}
    >
      <Fade cascade damping={0.5} direction="up" triggerOnce>
        <Text
          fontWeight={"bold"}
          borderRadius={"10px"}
          background="#FFF"
          height={"30px"}
          width={"160px"}
          alignItems={"center"}
          justifyContent={"center"}
          display="flex"
        >
          Vamos começar?
        </Text>
      </Fade>

      <Fade cascade damping={0.5} direction="up" triggerOnce>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          alignItems="center"
          justifyContent="center"
          gap={"5px"}
        >
          <Heading textAlign={"center"}>
            Entre em contato connosco para saber mais
          </Heading>

          <Text>
            Fale conosco para saber mais sobre o que fazemos e como testar a
            versão{" "}
            <Text as="b" color="#FFF">
              Beta do Foca.IA
            </Text>
          </Text>
        </Box>
      </Fade>

      <Fade cascade damping={0.5} direction="up" triggerOnce>
        <Stack
          display={"flex"}
          gap={"20px"}
          flexWrap={"wrap"}
          direction={"row"}
        >
          <Button
            mt="30px"
            width="200px"
            height="50px"
            borderRadius="50px"
            background="#24CEDE"
            gap={"10px"}
            color="#FFF"
            _hover={{ background: "#24CEDE" }}
            onClick={() => {
              router.push("");
            }}
          >
            <BsWhatsapp size={25} />
            Fale connosco
          </Button>

          <Button
            mt="30px"
            width="200px"
            height="50px"
            borderRadius="50px"
            background="#24CEDE"
            gap={"10px"}
            color="#FFF"
            _hover={{ background: "#24CEDE" }}
            onClick={() => {
              router.push("");
            }}
          >
            <BiLogoGmail size={25} />
            Envie um email
          </Button>
        </Stack>
      </Fade>
    </Stack>
  );
};

export default GetStarted;
