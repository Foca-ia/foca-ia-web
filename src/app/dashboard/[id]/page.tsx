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
import StackedAreaChartComponent from "@/components/stackedAreaChart";
import Link from "next/link";
import { useParams } from "next/navigation";
import { DrawerMenu } from "@/components/Navbar/screen";
import { Progress } from "antd";

function Dashboard() {
  const params = useParams();

  const twoColors = { "0%": "#108ee9", "100%": "#222233" };

  return (
    <Flex
      direction="column"
      h="100vh"
      w="100vw"
      flex="1"
      boxSizing="content-box"
      alignSelf="center"
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
            Dashboard /
            <strong
              style={{
                color: "black",
              }}
            >
              {" "}
              Overview
            </strong>
          </Text>
        </Flex>
      </Flex>

      {/* Main Content */}
      <Flex flex="1">
        <DrawerMenu />

        {/* Middle Content */}
        <Box
          w="100%"
          gridGap="4"
          bgColor="white"
          padding="20px"
          alignItems="center"
        >
          <SimpleGrid
            spacing={7}
            mt="5"
            templateColumns="repeat(auto-fill, minmax(180px, 3fr))"
            alignSelf="center"
            alignItems="center"
            justifyContent="center"
          >
            <Card height="100px" bgColor="blue.100" size="sm" borderRadius="10">
              <CardHeader>
                <Heading size="sm"> Data</Heading>
              </CardHeader>
              <CardBody>721</CardBody>
              <CardFooter></CardFooter>
            </Card>

            <Card height="100px" bgColor="gray.200" size="sm" borderRadius="10">
              <CardHeader>
                <Heading size="sm"> Positive results</Heading>
              </CardHeader>
              <CardBody>361</CardBody>
              <CardFooter></CardFooter>
            </Card>

            <Card height="100px" bgColor="blue.100" size="sm" borderRadius="10">
              <CardHeader>
                <Heading size="sm"> Negative results</Heading>
              </CardHeader>
              <CardBody>123</CardBody>
              <CardFooter></CardFooter>
            </Card>

            <Card height="100px" bgColor="gray.200" size="sm" borderRadius="10">
              <CardHeader>
                <Heading size="sm"> Precision</Heading>
              </CardHeader>
              <CardBody>70%</CardBody>
              <CardFooter></CardFooter>
            </Card>
          </SimpleGrid>

          <Flex
            flexWrap="wrap"
            gap="20px"
            mt="5"
            alignItems="center"
            justifyContent="left"
          >
            <Card
              height="220px"
              width="490px"
              bgColor="gray.200"
              size="sm"
              borderRadius="10"
              boxSizing="border-box"
            >
              <CardBody>
                <BarChartComponent />
              </CardBody>
            </Card>

            <Card
              height="220px"
              width="220px"
              bgColor="gray.200"
              borderRadius="10"
            >
              <Progress type="circle" percent={90} strokeColor={twoColors} />
            </Card>
          </Flex>

          <Box height="220px" width="100%" mt="5" p="20px">
            <StackedAreaChartComponent />
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Dashboard;
