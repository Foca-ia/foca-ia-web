import React, { useState } from "react";
import Link from "next/link";

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
  Input,
} from "@chakra-ui/react";
import Image from "next/image";
import { BsLayoutSidebar, BsThreeDots } from "react-icons/bs";
import logo from "../../../public/assets/images/LOGO FOCA 3-02.png";
import { useParams, useRouter } from "next/navigation";
import useAuth from "@/Context/AuthProvider/useAuth";
import { API } from "@/services/api";

import { IconTriangleInvertedFilled } from "@tabler/icons-react";

const DrawerMenu = ({ children }: React.PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);

  const auth = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const { status } = await API.post("/session/logout/");

      if (status === 200) {
        auth.logout();
        router.push("/login");
      }
    } catch (error) {}
  };

  const params = useParams();

  return (
    <Box flexDirection="row" width="100%" height="100vh">
      <Box
        w="25%"
        height="100%"
        alignItems="start"
        bgColor="white"
        padding={30}
        display={sidebarVisible === true ? "block" : "none"}
        background="linear-gradient(180deg, #FBFBFB, #24CEDE)"
        transition="ease-in-out"
        transitionDelay=".2s"
        animation="ease-in-out"
      >
        <Image
          src={logo}
          height={150}
          width={150}
          quality={100}
          alt="Osapicare logo"
          style={{
            position: "fixed",
            top: "50px",
            left: "50px",
            alignSelf: "center",
          }}
        />

        <List spacing="2" justifyContent="start" alignItems="start" mt="100px">
          <ListItem>
            <Menu>
              <Link href={`/dashboard/${params.id}`}>
                <MenuButton
                  px={12}
                  py={2}
                  m="10px"
                  position="fixed"
                  ml="-5"
                  transition="all 0.2s"
                  borderRadius="md"
                  _hover={{ bg: "white" }}
                  _expanded={{ bg: "blue.400" }}
                  _focus={{ boxShadow: "outline" }}
                >
                  <Text
                    display="flex"
                    flexDirection="row"
                    fontSize="sm"
                    justifyContent="space-between"
                    alignItems="center"
                    color="#FFF"
                    gap="20px"
                    _hover={{ color: "black" }}
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
              <Link href={`/analyst/${params.id}`}>
                <MenuButton
                  px={12}
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
                    color="#FFF"
                    _hover={{ color: "white" }}
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
              <Link href={`/patients/${params.id}`}>
                <MenuButton
                  px={12}
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
                    color="#FFF"
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
                px={12}
                py={2}
                m="160px"
                position="fixed"
                ml="-5"
                transition="all 0.2s"
                borderRadius="md"
                _hover={{ bg: "white" }}
                _expanded={{ bg: "blue.400" }}
                _focus={{ boxShadow: "outline" }}
              >
                <Text
                  display="flex"
                  flexDirection="row"
                  fontSize="sm"
                  justifyContent="space-between"
                  alignItems="center"
                  color="white"
                  _hover={{ color: "white" }}
                  gap="20px"
                >
                  <BsThreeDots />
                  Diagnostics
                </Text>
              </MenuButton>
              <MenuList>
                <Link href={`/diagnostics/${params.id}`}>
                  <MenuItem color="black">All Diagnostics</MenuItem>
                </Link>
                <MenuItem color="black">New Diagnostic</MenuItem>
              </MenuList>
            </Menu>
          </ListItem>

          <ListItem>
            <Menu>
              <MenuButton
                px={12}
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
                  color="white"
                  _hover={{ color: "white" }}
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
                <MenuItem color="red.500" onClick={() => handleLogout()}>
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </ListItem>
        </List>
      </Box>

      <Flex
        width={sidebarVisible === true ? "82%" : "100%"}
        marginRight={sidebarVisible === true ? "-10px" : "0px  "}
        height="100vh"
        backgroundColor="#ffffff"
        borderTopRadius="40px"
        paddingX={10}
        zIndex={1}
        position="absolute"
        left={sidebarVisible === true ? 270 : 0}
        top={0}
        flexDirection="column"
        marginLeft={sidebarVisible ? "20px" : "0px"}
        transition="margin-left 0.5s ease-in-out"
        overflowY="auto"
      >
        <Box
          height="100px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap="20px"
          >
            <Button
              backgroundColor="transparent"
              onClick={() => setSidebarVisible(!sidebarVisible)}
            >
              <BsLayoutSidebar size={30} />
            </Button>

            <Stack>
              <Heading>Overview</Heading>
              <Text marginTop="-10px">Dashboard</Text>
            </Stack>
          </Stack>

          <Input
            backgroundColor="#394447"
            borderRadius="25px"
            color="#F2F2F2"
            placeholder="Pesquisar"
            width="50%"
            height="50px"
          />

          <Stack direction="row" alignItems="center" gap={3}>
            <Avatar></Avatar>
            <Stack gap="-10px">
              <Text>Edmauro Goma</Text>
              <Text fontWeight="bold">Hospital Central</Text>
            </Stack>
            <Button backgroundColor="transparent">
              <IconTriangleInvertedFilled size={10} />
            </Button>
          </Stack>
        </Box>
        {children}
      </Flex>
    </Box>
  );
};

export { DrawerMenu };
