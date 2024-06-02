import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import { FaMosquito } from "react-icons/fa6";
import { FaLungsVirus } from "react-icons/fa";
import { PiVirusBold } from "react-icons/pi";
import { Fade } from "react-awesome-reveal";

const Illnesses = () => {
  const boxStyles = {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
  };
  return (
    <Stack
      direction="row"
      gap="80px"
      justifyContent="space-between"
      padding="20px"
      alignSelf={"center"}
      alignItems="center"
      flexWrap={"wrap"}
      marginTop="150px"
    >
      <Box display="flex" gap="20px">
        <Stack>
          <Fade cascade damping={0.5} direction="up" triggerOnce>
            <Box
              style={boxStyles}
              height={{
                base: "100px",
                md: "150px",
                lg: "200px",
              }}
              width={{
                base: "100px",
                md: "150px",
                lg: "200px",
              }}
              display={"flex"}
              gap={2}
              flexDirection={"column"}
              background="linear-gradient(120deg, #FBFBFB, #24CEDE)"
              boxShadow="0 2px 20px #24CEDE"
              backdropFilter="blur(10px)"
              border="1px solid rgba(255, 255, 255, 0.3)"
            >
              <FaMosquito size={50} color="#7A7A7A" />
              <Text color={"#2F2F2F"}>Malaria</Text>
            </Box>
          </Fade>
          <Fade cascade damping={0.5} direction="up" triggerOnce>
            <Box
              style={boxStyles}
              height={{
                base: "100px",
                md: "150px",
                lg: "200px",
              }}
              width={{
                base: "100px",
                md: "150px",
                lg: "200px",
              }}
              display={"flex"}
              gap={2}
              flexDirection={"column"}
              background="linear-gradient(120deg, #FBFBFB, #24CEDE)"
              boxShadow="0 4px 30px #24CEDE"
              backdropFilter="blur(10px)"
              border="1px solid rgba(255, 255, 255, 0.3)"
            >
              <FaLungsVirus size={50} color="#7A7A7A" />
              <Text color={"#2F2F2F"}>Tuberculose</Text>
            </Box>
          </Fade>
        </Stack>

        <Fade cascade damping={0.5} direction="up" triggerOnce>
          <Box
            style={boxStyles}
            height={{
              base: "100px",
              md: "150px",
              lg: "200px",
            }}
            width={{
              base: "100px",
              md: "150px",
              lg: "200px",
            }}
            display={"flex"}
            gap={2}
            flexDirection={"column"}
            background="linear-gradient(120deg, #FBFBFB, #24CEDE)"
            boxShadow="0 4px 30px #24CEDE"
            backdropFilter="blur(10px)"
            border="1px solid rgba(255, 255, 255, 0.3)"
          >
            <PiVirusBold size={50} color="#7A7A7A" />
            <Text color={"#2F2F2F"}>Cancer</Text>
          </Box>
        </Fade>
      </Box>

      <Box display="flex" flexDirection={"column"} gap="20px">
        <Fade cascade damping={0.5} direction="up" triggerOnce>
          <Box>
            <Text
              fontWeight={"bold"}
              borderRadius={"10px"}
              background="#FFF"
              height={"30px"}
              width={"100px"}
              alignItems={"center"}
              justifyContent={"center"}
              display="flex"
            >
              Malaria
            </Text>
            <Text fontSize={"14px"} maxWidth={"480px"}>
              A malária é uma doença infecciosa causada por parasitas do gênero
              Plasmodium, transmitida pela picada de mosquitos Anopheles
              infectados. É uma das principais causas de morbidade e mortalidade
              em muitas regiões tropicais e subtropicais do mundo.
            </Text>
          </Box>
        </Fade>

        <Fade cascade damping={0.5} direction="up" triggerOnce>
          <Box>
            <Text
              fontWeight={"bold"}
              borderRadius={"10px"}
              background="#FFF"
              height={"30px"}
              width={"120px"}
              alignItems={"center"}
              justifyContent={"center"}
              display="flex"
            >
              Tuberculose
            </Text>
            <Text fontSize={"14px"} maxWidth={"480px"}>
              A tuberculose (TB) é uma doença infecciosa causada pela bactéria
              Mycobacterium tuberculosis, que afeta principalmente os pulmões,
              mas pode atacar outras partes do corpo. É uma das doenças
              infecciosas mais letais no mundo, com milhões de novos casos e
              mortes anualmente.
            </Text>
          </Box>
        </Fade>
        <Fade cascade damping={0.5} direction="up" triggerOnce>
          <Box>
            <Text
              fontWeight={"bold"}
              borderRadius={"10px"}
              background="#FFF"
              height={"30px"}
              width={"90px"}
              alignItems={"center"}
              justifyContent={"center"}
              display="flex"
            >
              Cancer
            </Text>
            <Text fontSize={"14px"} maxWidth={"480px"}>
              O câncer é uma das principais causas de morte em todo o mundo,
              englobando um grupo de doenças caracterizadas pelo crescimento
              descontrolado de células anormais. Existem muitos tipos de câncer,
              cada um com suas particularidades em termos de diagnóstico e
              tratamento.
            </Text>
          </Box>
        </Fade>
      </Box>
    </Stack>
  );
};

export default Illnesses;
