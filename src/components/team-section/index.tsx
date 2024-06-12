import { Box, Button, Card, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import teamImage from "../../../public/assets/images/team.jpeg";

const Team = () => {
  return (
    <Stack
      align="center"
      justify="center"
      mt={{ base: "150px", md: "200px" }}
      mb={{ base: "50px", md: "30px" }}
      flexWrap={"wrap"}
      padding={"20px"}
      gap={5}
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
          O Team!
        </Text>
      </Fade>
      <Box
        alignItems="center"
        flexWrap={"wrap"}
        justifyContent="center"
        alignSelf={"center"}
      >
        <Fade cascade damping={0.5} direction="up" triggerOnce>
          <Heading textAlign={"center"}>
            Nosso equipe que se dedica todos os dias para tornar este sonho
            possivel.
          </Heading>
        </Fade>
      </Box>

      <Box
        width={"100%"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={10}
        flexDirection="column"
        marginLeft={"5%"}
      >
        <Fade cascade damping={0.5} direction="up" triggerOnce>
          <Card
            maxHeight="400px"
            width="90%"
            borderRadius={20}
            overflow="hidden"
            shadow={"lg"}
            dropShadow={"0 4px 20px #24CEDE, 0 1px 3px #24CEDE"}
            background="linear-gradient(120deg, #FBFBFB, #24CEDE)"
            boxShadow="0 2px 100px #24CEDE"
            backdropFilter="blur(10px)"
            marginTop={"50px"}
          >
            <Image src={teamImage} alt="image" objectFit="cover" />
          </Card>
        </Fade>
      </Box>
    </Stack>
  );
};

export default Team;
