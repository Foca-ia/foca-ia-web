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
          Diagnosticos inovadores usando inteligência artificial. A Foca.ia não
          apenas reduz significativamente o tempo de análise, mas também
          aprimora exponencialmente a precisão dos diagnósticos.
        </Text>
      </Fade>

      <Fade cascade damping={0.5} direction="up" triggerOnce>
        <Box width="500px" height="300px" background="gray" borderRadius="20px">
          <iframe
            width="500"
            height="300"
            src="https://www.youtube.com/embed/gi6J_WjjNhE"
            title="Gemini: projetado com base em segurança e responsabilidade"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            style={{ borderRadius: "20px" }}
          ></iframe>
        </Box>
      </Fade>
    </Stack>
  );
};

export default ProductVideoSection;
