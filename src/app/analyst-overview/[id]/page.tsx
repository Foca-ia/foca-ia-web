"use client";

import Link from "next/link";
import Image from "next/image";
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
  Button,
} from "@chakra-ui/react";

import { TableSortPatients } from "@/components/TableSortPatients";

import logo from "../../../../public/assets/images/logo.png";
import bug from "../../../../public/assets/images/bug.png";

import { BsThreeDots } from "react-icons/bs";
import { DrawerMenu } from "@/components/Navbar/screen";
import { useParams } from "next/navigation";
import { API } from "@/services/api";
import { useEffect, useState } from "react";

function AnalystOverview() {
  const [data, setData] = useState("");
  const params = useParams();

  const handleGet = async () => {
    try {
      const { data } = await API.get(`/patient/${params.id}/`);

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
              {" "}
              Analyst
            </strong>
          </Text>
        </Flex>
      </Flex>

      {/* Main Content */}
      <Flex flex="1">
        <DrawerMenu />
        {/* Middle Content */}
        <Box w="100%" gridGap="4" bgColor="white" padding="20px">
          <Text mb="10" color="black">
            Analyst Profile
          </Text>

          <Stack
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Stack>
              <Text>Nome:</Text>
              <Text>Sobrenome: </Text>
              <Text>Email: </Text>
            </Stack>

            <Button bg="#2D3748" color="#FFFF">
              Editar Dados
            </Button>
          </Stack>
        </Box>

        {/* Right Side */}
      </Flex>
    </Flex>
  );
}

export default AnalystOverview;
