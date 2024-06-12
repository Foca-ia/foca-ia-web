import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import iframe from "next/";
import { Fade } from "react-awesome-reveal";

const ProductVideoSection = () => {
  return (
    <Stack
      direction="row"
      gap="30px"
      alignItems="center"
      justifyContent="center"
      marginTop="50px"
      flexWrap={"wrap"}
      padding={"20px"}
    >
      <Fade cascade damping={0.5} direction="up" triggerOnce>
        <Text fontSize="18px" maxW={"450px"}>
          A{" "}
          <strong
            style={{
              color: "#00BFFF",
            }}
          >
            Foca.ia
          </strong>{" "}
          está a concorrer no{" "}
          <strong
            style={{
              color: "#00BFFF",
            }}
          >
            Global Startup Awards 2024
          </strong>{" "}
          na categoria de Melhor Solução de Saúde do Ano. Nossa plataforma
          avançada agiliza o processo de análises diagnósticas de exames
          laboratoriais utilizando Inteligência Artificial, oferecendo
          resultados precisos e rápidos, reduzindo significativamente as longas
          filas nos hospitais.
        </Text>
      </Fade>

      <Fade cascade damping={0.5} direction="up" triggerOnce>
        <Box
          width="500px"
          height="300px"
          borderRadius="20px"
          alignItems={"center"}
          justifyContent={"center"}
          display="flex"
        >
          <video
            autoPlay
            muted
            loop
            style={{
              borderRadius: "20px",
              objectFit: "cover",
              width: "90%",
              height: "90%",
            }}
          >
            <source src="/assets/videos/GSA.mp4" type="video/mp4" />
          </video>
        </Box>
      </Fade>
    </Stack>
  );
};

export default ProductVideoSection;
