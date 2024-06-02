import { Box, Button, Card, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import EducationImage from "../../../public/assets/images/education.jpeg";
import SaudeImage from "../../../public/assets/images/saude.jpeg";
import TechImage from "../../../public/assets/images/tecnology.jpeg";
import { Fade } from "react-awesome-reveal";

const Impact = () => {
  return (
    <Stack
      align="center"
      justify="center"
      mt={{ base: "50px", md: "100px" }}
      mb={{ base: "50px", md: "100px" }}
      flexWrap={"wrap"}
      padding={"20px"}
      gap={{
        base: "20px",
        md: "50px",
        lg: "100px",
      }}
    >
      <Box align="center" flexWrap={"wrap"}>
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
            Impacto Social
          </Text>
        </Fade>
        <Fade cascade damping={0.5} direction="up" triggerOnce>
          <Heading>
            Melhorando a vida de milhares de pessoas usando tecnologias
            avançadas
          </Heading>
        </Fade>
      </Box>

      <Box
        width={"100%"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={10}
        flexDirection={"Column"}
        marginLeft={"5%"}
      >
        <Fade cascade damping={0.5} direction="up" triggerOnce>
          <Card
            height="400px"
            width="90%"
            borderRadius={20}
            overflow="hidden"
            shadow={"lg"}
            dropShadow={"0 4px 20px #24CEDE, 0 1px 3px #24CEDE"}
            background="linear-gradient(120deg, #FBFBFB, #24CEDE)"
            boxShadow="0 2px 100px #24CEDE"
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
              <source src="/assets/videos/people.mp4" type="video/mp4" />
            </video>
          </Card>
        </Fade>

        <Fade cascade damping={0.5} direction="up" triggerOnce>
          <Heading
            fontWeight={"bold"}
            borderRadius={"10px"}
            background="#FFF"
            height={"40px"}
            padding={"10px"}
            width="max-content"
            alignItems={"center"}
            justifyContent={"center"}
            display="flex"
          >
            Areas de Impacto
          </Heading>
        </Fade>

        <Stack
          direction={"row"}
          gap={{
            base: "10px",
            md: "30px",
            lg: "50px",
          }}
          marginLeft={{
            base: "50px",
            md: "0px",
            lg: "0px",
          }}
          flexWrap={"wrap"}
        >
          <Fade cascade damping={0.5} direction="up" triggerOnce>
            <Box
              height="350px"
              width="300px"
              marginBottom={{
                base: "200px",
                md: "0px",
                lg: "00px",
              }}
              shadow={"lg"}
              borderRadius={20}
              dropShadow={"0 4px 20px #7A7A7A, 0 1px 3px #7A7A7A"}
            >
              <Card
                height="350px"
                width="300px"
                borderRadius={20}
                overflow="hidden"
              >
                <Image
                  src={EducationImage}
                  fill
                  quality={100}
                  alt="education image"
                  style={{
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
              </Card>
              <Stack alignItems={"center"} textAlign={"center"}>
                <Text fontWeight={"bold"} marginTop={"10px"} fontSize={"20px"}>
                  Educação
                </Text>
                <Text>
                  Educação tecnologica melhorando a literacia digital em Angola.
                </Text>
                <Button borderRadius={20}>Saiba mais</Button>
              </Stack>
            </Box>
          </Fade>

          <Fade cascade damping={0.5} direction="up" triggerOnce>
            <Box
              height="350px"
              width="300px"
              marginBottom={{
                base: "200px",
                md: "0px",
                lg: "00px",
              }}
              shadow={"lg"}
              borderRadius={20}
              dropShadow={"0 4px 20px #7A7A7A, 0 1px 3px #7A7A7A"}
            >
              <Card height="350px" width="300px" borderRadius={20}>
                <Image
                  src={SaudeImage}
                  fill
                  quality={100}
                  alt="saude image"
                  style={{
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
              </Card>
              <Stack alignItems={"center"} textAlign={"center"}>
                <Text fontWeight={"bold"} marginTop={"10px"} fontSize={"20px"}>
                  Saude
                </Text>
                <Text>
                  Desenvolvimento de soluçoes para problemas criticos da area de
                  saude.
                </Text>
                <Button borderRadius={20}>Saiba mais</Button>
              </Stack>
            </Box>
          </Fade>

          <Fade cascade damping={0.5} direction="up" triggerOnce>
            <Box
              height="350px"
              width="300px"
              marginBottom={{
                base: "200px",
                md: "0px",
                lg: "00px",
              }}
              shadow={"lg"}
              borderRadius={20}
              dropShadow={"0 4px 20px #7A7A7A, 0 1px 3px #7A7A7A"}
            >
              <Card height="350px" width="300px" borderRadius={20}>
                <Image
                  src={TechImage}
                  fill
                  quality={100}
                  alt="tech image"
                  style={{
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
              </Card>
              <Stack alignItems={"center"} textAlign={"center"}>
                <Text fontWeight={"bold"} marginTop={"10px"} fontSize={"20px"}>
                  Tecnologia
                </Text>
                <Text>
                  Ajudando a desenvolver um ecossistema avançado de tecnologia
                  em Angola.
                </Text>
                <Button borderRadius={20}>Saiba mais</Button>
              </Stack>
            </Box>
          </Fade>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Impact;
