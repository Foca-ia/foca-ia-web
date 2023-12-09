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
} from "@chakra-ui/react";
import Image from "next/image";
import { BsShare, BsThreeDots } from "react-icons/bs";
import logo from "../../../public/assets/images/LOGO FOCA 3-02.png";
import { useParams, useRouter } from "next/navigation";
import useAuth from "@/Context/AuthProvider/useAuth";
import { API } from "@/services/api";

const DrawerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);

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

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  const params = useParams();

  return (
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
      <Image
        src={logo}
        height={150}
        width={150}
        quality={100}
        alt="Osapicare logo"
        style={{
          position: "fixed",
          top: "10px",
          left: "50px",
          alignSelf: "center",
        }}
      />

      <List spacing="2" justifyContent="start" alignItems="start" mt="32">
        <ListItem>
          <Menu>
            <Link href={`/dashboard/${params.id}`}>
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
            <Link href={`/analyst/${params.id}`}>
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
            <Link href={`/patients/${params.id}`}>
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
              <MenuItem color="red.500" onClick={() => handleLogout()}>
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </ListItem>
      </List>
    </Box>
  );
};

export { DrawerMenu };
