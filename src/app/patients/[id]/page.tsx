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
} from "@chakra-ui/react";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";

import BarChartComponent from "@/components/column-chart";
import logo from "../../../../public/assets/images/logo.png";
import { TableSortPatients } from "@/components/TableSortPatients";
import Link from "next/link";
import { API } from "@/services/api";
import { useEffect, useState } from "react";
import { DrawerMenu } from "@/components/Navbar/screen";

function Patient() {
  const [data, setData] = useState([]);
  const handleGet = async () => {
    try {
      const { data } = await API.get("/patient/");
      setData(data);
      console.log(data);
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
              Patient
            </strong>
          </Text>
        </Flex>
      </Flex>

      {/* Main Content */}
      <Flex flex="1">
        {/* Left Side */}
        <DrawerMenu />

        {/* Middle Content */}
        <Box w="100%" gridGap="4" bgColor="white" padding="20px">
          <Text mb="10" color="black">
            Patient List
          </Text>

          <TableSortPatients data={data} />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Patient;
