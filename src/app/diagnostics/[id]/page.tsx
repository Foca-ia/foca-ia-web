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
} from "@chakra-ui/react";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";

import BarChartComponent from "@/components/column-chart";
import logo from "../../../../public/assets/images/logo.png";
import StackedAreaChartComponent from "@/components/LineAreaChart";
import { TableSortPatients } from "@/components/TableSortPatients";
import Link from "next/link";
import { TableSortDiagnostics } from "@/components/TableSortDiagnostics";
import { DrawerMenu } from "@/components/Navbar/screen";

function Diagnostic() {
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
              Diagnostic
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
            Diagnostic List
          </Text>

          <TableSortDiagnostics />
        </Box>

        {/* Right Side */}
      </Flex>
    </Flex>
  );
}

export default Diagnostic;
