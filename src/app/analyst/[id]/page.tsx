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

import { TableSortAnalysts } from "@/components/TableSortAnalyst";
import { API } from "@/services/api";
import { useEffect, useState } from "react";
import { DrawerMenu } from "@/components/Navbar/screen";

function Analyst() {
  const [data, setData] = useState([]);
  const handleGet = async () => {
    try {
      const { data } = await API.get("/user/analyst/");
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGet();
  }, [data]);

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
        {/* Left Side */}
        <DrawerMenu />

        {/* Middle Content */}
        <Box w="100%" gridGap="4" bgColor="white" padding="20px">
          <Text mb="10" color="black">
            Analyst List
          </Text>

          <TableSortAnalysts data={data} />
        </Box>

        {/* Right Side */}
      </Flex>
    </Flex>
  );
}

export default Analyst;
