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
} from "@chakra-ui/react";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";

import BarChartComponent from "@/components/column-chart";
import logo from "../../../../public/assets/images/logo.png";
import StackedAreaChartComponent from "@/components/LineAreaChart";
import { TableSortPatients } from "@/components/TableSortPatients";
import Link from "next/link";
import { InsertDataModal } from "@/components/insert-data-modal";
import { useEffect, useState } from "react";
import { API } from "@/services/api";
import { useParams } from "next/navigation";
import { DrawerMenu } from "@/components/Navbar/screen";

function AnalystPatientProfile() {
  const [data, setData] = useState("");
  const params = useParams();

  const handleGet = async () => {
    try {
      const { data } = await API.get(`/patient/${params.id}/`);
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

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
            Clinic /
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
        <Box w="30%" gridGap="4" bgColor="white" padding="20px">
          <DrawerMenu />
        </Box>
        {/* Middle Content */}
        <Box w="100%" gridGap="4" bgColor="white" padding="20px">
          <Flex alignItems="center" justifyContent="space-between">
            <Text mb="2" color="black">
              Patient Profile
            </Text>

            <InsertDataModal />
          </Flex>

          <Flex gap="20">
            <Box>
              <Text fontSize="xs" color="gray.600">
                Name: John Doe
              </Text>
              <Text fontSize="xs" color="gray.600">
                Age: 22
              </Text>
              <Text fontSize="xs" color="gray.600">
                Naturality: Angola
              </Text>
              <Text fontSize="xs" color="gray.600">
                City: Luanda
              </Text>
              <Text fontSize="xs" color="gray.600">
                Genetic: UUU
              </Text>
              <Text fontSize="xs" color="gray.600">
                Accquired Immunity: No
              </Text>
            </Box>

            <Box>
              <Text fontSize="xs" color="gray.600">
                ID: 1212112RE
              </Text>
              <Text fontSize="xs" color="gray.600">
                Heath unit: Clinic name
              </Text>
              <Text fontSize="xs" color="gray.600">
                Location: Talatona
              </Text>
              <Text fontSize="xs" color="gray.600">
                Sex: Male
              </Text>
              <Text fontSize="xs" color="gray.600">
                Nutrition: Good
              </Text>
              <Text fontSize="xs" color="gray.600">
                Clinic analyst: Rose Marie
              </Text>
            </Box>
          </Flex>
        </Box>

        {/* Right Side */}
      </Flex>
    </Flex>
  );
}

export default AnalystPatientProfile;
