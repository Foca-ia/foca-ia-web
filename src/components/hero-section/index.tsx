"use client";

import React from "react";
import {
  Box,
  Button,
  Card,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";

import { MdOutlineMail } from "react-icons/md";
import { BiSend } from "react-icons/bi";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <Stack
      display="flex"
      direction="row"
      alignItems="center"
      marginTop={"50px"}
      justifyContent="center"
      gap={170}
      flexWrap={"wrap"}
    >
      <Stack
        textAlign={{
          base: "center",
          md: "left",
        }}
        width={{ base: "100%", md: "50%" }}
        alignItems={{ base: "center", md: "flex-start" }}
        gap={7}
      >
        <Fade cascade damping={0.5} direction="up" triggerOnce>
          <Heading
            fontSize={{ base: "36px", md: "50px" }}
            color="#24CEDE"
            fontWeight="bold"
          >
            Inovando a entrega de resultados laboratoriais
          </Heading>
        </Fade>

        <Fade cascade damping={0.5} direction="up" triggerOnce>
          <Text
            fontSize={{ base: "14px", md: "16px", lg: "18px" }}
            color="#7A7A7A"
            fontWeight="400"
            textAlign={{ base: "center", md: "left", lg: "left" }}
          >
            Elevamos o padrão, proporcionando eficiência e confiança
            inigualáveis <br />
            no processo de análise e diagnósticos, garantindo resultados mais
            rápidos e mais <br />
            precisos.
          </Text>
        </Fade>

        <Fade cascade damping={0.5} direction="up" triggerOnce>
          <Stack direction="row" gap={4}>
            <InputGroup width="100%">
              <InputLeftElement pointerEvents="none">
                <MdOutlineMail color="#24CEDE" size={20} />
              </InputLeftElement>
              <Input
                placeholder="Entre na lista de espera da versão beta"
                borderRadius={20}
                _hover={{ borderColor: "#24CEDE" }}
                _focus={{ borderColor: "#24CEDE" }}
                _active={{ borderColor: "#24CEDE" }}
              />
            </InputGroup>

            <Button
              bg="#26CCE2"
              color="#f2f2f2"
              borderRadius={20}
              w="150px"
              alignSelf="start"
              transition="all 0.3s ease-in-out"
              _hover={{
                bg: "#7A7A7A",
                color: "#26CCE2",
              }}
            >
              <BiSend color="#f2f2f2" size={20} />
            </Button>
          </Stack>
        </Fade>
      </Stack>

      <Fade cascade damping={0.5} direction="up" triggerOnce>
        <Stack>
          <Card
            height="400px"
            width="300px"
            borderRadius={20}
            overflow="hidden"
            shadow={"lg"}
            dropShadow={"0 4px 20px #24CEDE, 0 1px 3px #24CEDE"}
            background="linear-gradient(120deg, #FBFBFB, #24CEDE)"
            boxShadow="0 2px 20px #24CEDE"
            backdropFilter="blur(10px)"
          >
            <video
              autoPlay
              muted
              loop
              style={{
                borderRadius: "20px",
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            >
              <source src="/assets/videos/HeaderBg.mp4" type="video/mp4" />
            </video>
          </Card>
        </Stack>
      </Fade>
    </Stack>
  );
};

export default Hero;
