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
import { BsShare, BsThreeDots } from "react-icons/bs";

import BarChartComponent from "@/components/column-chart";
import logo from "../../../../public/assets/images/LOGO FOCA 3-02.png";
import StackedAreaChartComponent from "@/components/stackedAreaChart";
import { TableSortPatients } from "@/components/TableSortPatients";
import Link from "next/link";
import { InsertDataModal } from "@/components/insert-data-modal";

function AnalystDiagnosticReport() {
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
        <Box
          w="20%"
          alignItems="start"
          bgColor="white"
          border="1px"
          borderColor="gray.200"
          mt="-24"
          padding={30}
          display={{ base: "none", md: "block" }}
        >
          <Stack direction="row" alignItems="center" mt="5" position="fixed">
            <Avatar
              size="sm"
              name="Edmauro Goma"
              src="https://github.com/Edhotz.png"
            />
            <Heading size="xs" fontWeight="normal" color="gray.800">
              Akin / Clinic
            </Heading>
          </Stack>

          <Heading
            size="md"
            fontWeight="semibold"
            color="gray.800"
            mt="20"
            position="fixed"
          >
            Menu
          </Heading>

          <List spacing="2" justifyContent="start" alignItems="start" mt="32">
            <ListItem>
              <Menu>
                <Link href="/dashboard/1">
                  <MenuButton
                    px={10}
                    py={2}
                    m="10px"
                    position="fixed"
                    ml="-5"
                    transition="all 0.2s"
                    borderRadius="md"
                    _hover={{ bg: "gray.200" }}
                    _expanded={{ bg: "blue.400" }}
                    _focus={{ boxShadow: "outline" }}
                  >
                    <Text
                      display="flex"
                      flexDirection="row"
                      fontSize="sm"
                      justifyContent="space-between"
                      alignItems="center"
                      color="black"
                      gap="20px"
                    >
                      <BsThreeDots />
                      Dashboard
                    </Text>
                  </MenuButton>
                </Link>
              </Menu>
            </ListItem>
            <ListItem>
              <Menu>
                <Link href="/analyst/1">
                  <MenuButton
                    px={10}
                    py={2}
                    m="60px"
                    position="fixed"
                    ml="-5"
                    transition="all 0.2s"
                    borderRadius="md"
                    _hover={{ bg: "gray.200" }}
                    _expanded={{ bg: "blue.400" }}
                    _focus={{ boxShadow: "outline" }}
                  >
                    <Text
                      display="flex"
                      flexDirection="row"
                      fontSize="sm"
                      justifyContent="space-between"
                      alignItems="center"
                      color="black"
                      gap="20px"
                    >
                      <BsThreeDots />
                      Analysts
                    </Text>
                  </MenuButton>
                </Link>
              </Menu>
            </ListItem>

            <ListItem>
              <Menu>
                <Link href="/patients/1">
                  <MenuButton
                    px={10}
                    py={2}
                    m="110px"
                    position="fixed"
                    ml="-5"
                    transition="all 0.2s"
                    borderRadius="md"
                    _hover={{ bg: "gray.200" }}
                    _expanded={{ bg: "blue.400" }}
                    _focus={{ boxShadow: "outline" }}
                  >
                    <Text
                      display="flex"
                      flexDirection="row"
                      fontSize="sm"
                      justifyContent="space-between"
                      alignItems="center"
                      color="black"
                      gap="20px"
                    >
                      <BsThreeDots />
                      Patients
                    </Text>
                  </MenuButton>
                </Link>
              </Menu>
            </ListItem>

            <ListItem>
              <Menu>
                <MenuButton
                  px={10}
                  py={2}
                  m="160px"
                  position="fixed"
                  ml="-5"
                  transition="all 0.2s"
                  borderRadius="md"
                  _hover={{ bg: "gray.200" }}
                  _expanded={{ bg: "blue.400" }}
                  _focus={{ boxShadow: "outline" }}
                >
                  <Text
                    display="flex"
                    flexDirection="row"
                    fontSize="sm"
                    justifyContent="space-between"
                    alignItems="center"
                    color="black"
                    gap="20px"
                  >
                    <BsThreeDots />
                    Diagnostics
                  </Text>
                </MenuButton>
                <MenuList>
                  <Link href="/diagnostics/1">
                    <MenuItem color="black">All Diagnostics</MenuItem>
                  </Link>
                  <MenuItem color="black">New Diagnostic</MenuItem>
                </MenuList>
              </Menu>
            </ListItem>

            <ListItem>
              <Menu>
                <MenuButton
                  px={10}
                  py={2}
                  m="210px"
                  position="fixed"
                  transition="all 0.2s"
                  borderRadius="md"
                  ml="-5"
                  _hover={{ bg: "gray.200" }}
                  _expanded={{ bg: "blue.400" }}
                  _focus={{ boxShadow: "outline" }}
                >
                  <Text
                    display="flex"
                    flexDirection="row"
                    fontSize="sm"
                    justifyContent="center"
                    color="black"
                    alignItems="center"
                    gap="20px"
                  >
                    <BsThreeDots />
                    Settings
                  </Text>
                </MenuButton>
                <MenuList>
                  <MenuItem color="black">Clinic Profile</MenuItem>
                  <MenuDivider />
                  <MenuItem color="black">Platform Settings</MenuItem>
                  <MenuItem color="red.500">Logout</MenuItem>
                </MenuList>
              </Menu>
            </ListItem>
            <ListItem>
              <Menu>
                <MenuButton
                  px={10}
                  py={2}
                  m="260px"
                  transition="all 0.2s"
                  borderRadius="md"
                  position="fixed"
                  ml="-5"
                  _hover={{ bg: "gray.200" }}
                  _expanded={{ bg: "blue.400" }}
                  _focus={{ boxShadow: "outline" }}
                >
                  <Text
                    display="flex"
                    flexDirection="row"
                    fontSize="sm"
                    color="black"
                    justifyContent="center"
                    alignItems="center"
                    gap="20px"
                  >
                    <BsThreeDots />
                    Labelbox
                  </Text>
                </MenuButton>
              </Menu>
            </ListItem>
          </List>

          <Image
            src={logo}
            height={150}
            width={150}
            quality={100}
            alt="Osapicare logo"
            style={{
              position: "fixed",
              alignSelf: "center",
              marginTop: "470px",
            }}
          />
        </Box>

        {/* Middle Content */}
        <Box w="100%" gridGap="4" bgColor="white" padding="20px">
          <Flex alignItems="center" justifyContent="space-between">
            <Text mb="2" color="black">
              Diagnostic report
            </Text>

            <Flex gap="5" alignItems="center">
              <Button width="150px" bgColor="#2D3748" color="#ffffff">
                Print
              </Button>

              <Button>
                <BsShare />
              </Button>
            </Flex>
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
        <Box
          w="24%"
          bgColor="white"
          border="1px"
          borderColor="gray.200"
          mt="-20"
          padding="2"
          gap="20px"
          display={{ base: "none", md: "block" }}
        >
          <Stack display="flex" flexDirection="column" gap="2" mt="10">
            <Heading size="xs" color="gray.800" mt="-5px">
              Notifications
            </Heading>

            <Box display="flex" alignItems="center" gap="2" mt="10px">
              <Avatar
                size="sm"
                name="Edmauro Goma"
                src="https://github.com/Edhotz.png"
              />

              <Stack>
                <Text fontSize="xs" color="gray.900">
                  Bug Fixed
                  <Text fontSize="xs" color="gray.400">
                    Now
                  </Text>
                </Text>
              </Stack>
            </Box>

            <Box display="flex" alignItems="center" gap="2">
              <Avatar
                size="sm"
                name="Edmauro Goma"
                src="https://github.com/Edhotz.png"
              />

              <Stack>
                <Text fontSize="xs" color="gray.900">
                  Bug Fixed
                  <Text fontSize="xs" color="gray.400">
                    Now
                  </Text>
                </Text>
              </Stack>
            </Box>

            <Box display="flex" alignItems="center" gap="2">
              <Avatar
                size="sm"
                name="Edmauro Goma"
                src="https://github.com/Edhotz.png"
              />

              <Stack>
                <Text fontSize="xs" color="gray.900">
                  Bug Fixed
                  <Text fontSize="xs" color="gray.400">
                    Now
                  </Text>
                </Text>
              </Stack>
            </Box>

            <Box display="flex" alignItems="center" gap="2">
              <Avatar
                size="sm"
                name="Edmauro Goma"
                src="https://github.com/Edhotz.png"
              />

              <Stack>
                <Text fontSize="xs" color="gray.900">
                  Bug Fixed
                  <Text fontSize="xs" color="gray.400">
                    Now
                  </Text>
                </Text>
              </Stack>
            </Box>
          </Stack>

          {/* Add analyst items here */}
        </Box>
      </Flex>
    </Flex>
  );
}

export default AnalystDiagnosticReport;
