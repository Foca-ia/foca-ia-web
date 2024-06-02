import React from "react";
import { AspectRatio, Stack } from "@chakra-ui/react";
import Image from "next/image";

import aboutbg from "../../../public/assets/images/aboutBg.jpeg";

const Analysis = () => {
  return (
    <Stack>
      <AspectRatio maxW="400px" ratio={16 / 9}>
        <Image src={aboutbg} alt="image " objectFit="cover" />
      </AspectRatio>
    </Stack>
  );
};

export default Analysis;
