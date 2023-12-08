"use client";
import React from "react";
import {
  useMediaQuery,
  Stack,
  AspectRatio,
  Heading,
  Box,
  Card,
  Text,
} from "@chakra-ui/react";
import bg from "@/assets/images/bg.png";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";

const IaSection = () => {
  const [isSmallerThanMd] = useMediaQuery("(max-width: 48em)");

  if (isSmallerThanMd) {
    return null; // Retorna null para não renderizar o conteúdo em telas menores
  }

  return (
    <Stack borderRadius={50} mt="150px">
      <AspectRatio ratio={16 / 9}>
        <Image
          width={1920}
          height={1300}
          style={{ objectFit: "cover" }}
          src={bg}
          alt="background"
          objectFit="contain"
        />
      </AspectRatio>
      <Heading alignSelf="center" mt="-440px" zIndex={9999} color="white">
        Tradicional / Inteligencia Artificial
      </Heading>

      <Stack p="20px" display="flex" alignItems="end" mr="50px">
        <Stack mr="20px" mt="-340px">
          <Slide>
            <Card
              w="150px"
              h="150px"
              alignContent="center"
              justifyContent="center"
              textAlign="center"
              boxShadow="md"
              bg="#26CCE2"
              borderRadius="20px"
            >
              <Stack>
                <Text fontSize={["16px", "18px", "20px"]} color="white">
                  Precisão
                </Text>
                <Heading color="white" fontSize={["24px", "28px", "32px"]}>
                  160
                </Heading>
              </Stack>
            </Card>
            <Box
              w="100px"
              ml="10px"
              zIndex={9999}
              mt="-150px"
              alignItems="center"
              textAlign="center"
              p={1}
              bg="white"
              boxShadow="md"
              borderRadius="md"
            >
              Meta ✨
            </Box>
          </Slide>
        </Stack>

        <Stack>
          <Slide>
            <Card
              w="200px"
              h="200px"
              alignContent="center"
              justifyContent="center"
              textAlign="center"
              boxShadow="md"
              bg="#26CCE2"
              borderRadius="30px"
              mt="20px"
              mr="50px"
            >
              <Stack>
                <Text fontSize={["16px", "18px", "20px"]} color="white">
                  Accuracia
                </Text>
                <Heading color="white" fontSize={["24px", "28px", "32px"]}>
                  90%
                </Heading>
              </Stack>
            </Card>
            <Box
              w="130px"
              ml="160px"
              zIndex={9999}
              mt="-200px"
              alignItems="center"
              textAlign="center"
              p={2}
              bg="white"
              boxShadow="md"
              borderRadius="md"
            >
              Resultados 📝
            </Box>
          </Slide>
        </Stack>

        <Stack ml="260px">
          <Slide>
            <Card
              w="150px"
              h="150px"
              bg="#26CCE2"
              alignContent="center"
              justifyContent="center"
              textAlign="center"
              boxShadow="md"
              borderRadius="20px"
              mt="50px"
              mr="200px"
            >
              <Stack>
                <Text fontSize={["16px", "18px", "20px"]} color="white">
                  Total
                </Text>
                <Heading color="white" fontSize={["24px", "28px", "32px"]}>
                  160
                </Heading>
              </Stack>
            </Card>
            <Box
              w="150px"
              ml="120px"
              zIndex={9999}
              mt="-150px"
              alignItems="center"
              textAlign="center"
              p={2}
              bg="white"
              boxShadow="md"
              borderRadius="md"
            >
              Diagnosticos 📄
            </Box>
          </Slide>
        </Stack>
      </Stack>

      <Stack p="30px" ml="20px">
        <Stack mt="-580px" gap="20px" ml="200px">
          <Slide>
            <Card
              w="200px"
              h="200px"
              alignContent="center"
              justifyContent="center"
              textAlign="center"
              boxShadow="md"
              mt="-100px"
              borderRadius="30px"
            >
              <Stack>
                <Text fontSize={["16px", "18px", "20px"]}>Precisao</Text>
                <Heading fontSize={["24px", "28px", "32px"]}>160</Heading>
              </Stack>
            </Card>
            <Box
              w="100px"
              ml="160px"
              zIndex={9999}
              mt="-200px"
              alignItems="center"
              textAlign="center"
              p={2}
              bg="white"
              boxShadow="md"
              borderRadius="md"
            >
              Meta ✨
            </Box>
          </Slide>
        </Stack>

        <Stack>
          <Slide>
            <Card
              w="150px"
              h="150px"
              alignContent="center"
              justifyContent="center"
              textAlign="center"
              boxShadow="md"
              borderRadius="20px"
            >
              <Stack>
                <Text fontSize={["16px", "18px", "20px"]}>Accuracia</Text>
                <Heading fontSize={["24px", "28px", "32px"]}>160</Heading>
              </Stack>
            </Card>
            <Box
              w="140px"
              ml="120px"
              zIndex={9999}
              mt="-150px"
              alignItems="center"
              textAlign="center"
              p={1}
              bg="white"
              boxShadow="md"
              borderRadius="md"
            >
              Resultados 📝
            </Box>
          </Slide>
        </Stack>

        <Stack ml="260px">
          <Slide>
            <Card
              w="150px"
              h="150px"
              alignContent="center"
              justifyContent="center"
              textAlign="center"
              boxShadow="md"
              borderRadius="20px"
            >
              <Stack>
                <Text fontSize={["16px", "18px", "20px"]}>Total</Text>
                <Heading fontSize={["24px", "28px", "32px"]}>160</Heading>
              </Stack>
            </Card>
            <Box
              w="140px"
              ml="120px"
              zIndex={9999}
              mt="-150px"
              alignItems="center"
              textAlign="center"
              p={1}
              bg="white"
              boxShadow="md"
              borderRadius="md"
            >
              Diagnosticos 📄
            </Box>
          </Slide>
        </Stack>
      </Stack>

      <style jsx>{`
        @media screen and (max-width: 768px) {
          /* Add responsive styles here */
          .your-custom-class {
            font-size: 14px;
            margin: 5px;
            /* Add other styles as needed */
          }
        }
      `}</style>
    </Stack>
  );
};

export default IaSection;
