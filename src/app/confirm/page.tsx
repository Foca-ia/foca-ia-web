import { Flex, Text } from "@chakra-ui/react";
import React from "react";

import osapicarelogo from "../../../public/assets/images/logo.png";
import Image from "next/image";

const Confirm = () => {
  return (
    <Flex
      paddingTop="100"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      gap="10"
    >
      <Image
        src={osapicarelogo}
        alt="Logo osapi care"
        width={200}
        height={200}
        quality={100}
      />
      <Text
        fontSize="larger"
        fontWeight="semibold"
        fontFamily="body"
        color="gray.600"
      >
        Use o link que enviamos por email para continuar...
      </Text>
    </Flex>
  );
};

export default Confirm;
