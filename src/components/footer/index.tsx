import { Stack, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Stack
      width="100%"
      marginTop="30px"
      borderTop="1px solid #EBE8FF"
      p="20px"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text>Foca.ia</Text>
      <Text>© 2024 Foca.ia. Todos os direitos reservados.</Text>
    </Stack>
  );
};

export default Footer;
