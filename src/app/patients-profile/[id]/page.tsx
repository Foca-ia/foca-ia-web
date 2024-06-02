"use client";

import {
  Box,
  Flex,
  Text,
  List,
  ListItem,
  Heading,
  Avatar,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  SimpleGrid,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Button,
  AspectRatio,
} from "@chakra-ui/react";
import { InsertDataModal } from "@/components/insert-data-modal";
import { useEffect, useState } from "react";
import { API } from "@/services/api";
import { useParams } from "next/navigation";
import { DrawerMenu } from "@/components/Navbar/screen";
import { UpdatePatientModal } from "@/components/update-patient-modal/screen";
import { MorePatientData } from "@/components/more-patient-data";

interface PatientData {
  name: string;
  id_number: string;
  naturalidade: string;
  idade: string;
  morada: string;
  sexo: string;
  unidade_saude: string;
  analista_clinico: string;
}

function PatientProfile() {
  const params = useParams();
  const [data, setData] = useState<PatientData | null>(null);
  const [images, setImages] = useState<
    Array<{ id: number; image: string; timestamp: string; coloracao: string }>
  >([]);
  const [loading, setLoading] = useState(false);

  const handleGet = async () => {
    try {
      const { data } = await API.get(`/patient/${params.id}/`);
      setData(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetImages = async () => {
    try {
      const { data } = await API.get(`/patient/images/${params.id}`);
      setImages(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGet();
    handleGetImages();
  }, []);

  console.log(images[0] == undefined ? "Sem dados" : images[0].image);
  return (
    <Flex
      direction="column"
      h="100vh"
      w="100vw"
      flex="1"
      boxSizing="content-box"
    >
      {/* Top Header */}
      <Flex
        justify="center"
        alignItems="center"
        bgColor="white"
        height="10vh"
        width="100%"
        alignSelf="center"
        borderBottom="1px"
        borderColor="gray.200"
      >
        <Flex
          fontSize="md"
          fontWeight="normal"
          mr="10"
          color="black"
          display="flex"
          padding="4"
        >
          <Text color="blackAlpha.700">
            Clinic /{" "}
            <strong
              style={{
                color: "black",
              }}
            >
              Patient Data
            </strong>
          </Text>
        </Flex>
      </Flex>

      {/* Main Content */}
      <Flex flex="1">
        {/* Left Side */}
        <DrawerMenu />
        {/* Middle Content */}
        <Box w="100%" gridGap="4" bgColor="white" padding="40px">
          <Flex alignItems="center" justifyContent="space-between">
            <Text mb="2" color="black">
              Patient Profile
            </Text>
            <InsertDataModal />
          </Flex>

          <Flex gap="10">
            <Box>
              <Text fontSize="xs" color="gray.600">
                Name: {data?.name == null ? "no data" : data.name}
              </Text>
              <Text fontSize="xs" color="gray.600">
                Age: {data?.idade == null ? "no data" : data.idade}
              </Text>
              <Text fontSize="xs" color="gray.600">
                Naturality:
                {data?.naturalidade == null ? "no data" : data.naturalidade}
              </Text>
              <Text fontSize="xs" color="gray.600">
                City: {data?.morada == null ? "no data" : data.morada}
              </Text>

              <Stack flexDirection="row" alignItems="center">
                <MorePatientData />
                <UpdatePatientModal />
              </Stack>
            </Box>

            <Box>
              <Text fontSize="xs" color="gray.600">
                ID: {data?.id_number == null ? "no data" : data.id_number}
              </Text>
              <Text fontSize="xs" color="gray.600">
                Heath unit:{" "}
                {data?.unidade_saude == null ? "no data" : data.unidade_saude}
              </Text>
              <Text fontSize="xs" color="gray.600">
                Sex: {data?.sexo == null ? "no data" : data.sexo}
              </Text>

              <Text fontSize="xs" color="gray.600">
                Clinic analyst:{" "}
                {data?.analista_clinico == null
                  ? "no data"
                  : data.analista_clinico}
              </Text>
            </Box>
          </Flex>
        </Box>

        {/* Right Side */}
      </Flex>

      <Stack>
        <Box key={""} mb="4"></Box>
      </Stack>
    </Flex>
  );
}

export default PatientProfile;
