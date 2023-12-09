"use client";
import React from "react";
import {
  Button,
  Stack,
  Text,
  useMediaQuery,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

import Logo from "../../../public/assets/images/LOGO FOCA 2-02.png";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isSmallerThanMd] = useMediaQuery("(max-width: 48em)");
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();

  return (
    <Stack
      as="header"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      padding="25px"
    >
      <Image src={Logo} alt="logo" width={150} height={100} />
      {isSmallerThanMd ? (
        <>
          <Button onClick={handleToggle}>
            <AiOutlineMenu />
          </Button>
          <Drawer isOpen={isOpen} onClose={handleToggle} placement="right">
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader></DrawerHeader>
                <DrawerBody>
                  <Stack
                    display="flex"
                    flexDirection="column"
                    alignContent="center"
                    gap="20px"
                  >
                    <Flex justifyContent="center">
                      <Button
                        w="200px"
                        color="#f2f2f2"
                        bg="#000000 "
                        transition="all 0.3s ease-in-out"
                        _hover={{
                          bg: "#f2f2f2",
                          color: "#26CCE2",
                        }}
                        onClick={() => router.push("/login")}
                        width="200px"
                        borderRadius="30px"
                      >
                        Login
                      </Button>
                    </Flex>
                  </Stack>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </>
      ) : (
        <Stack
          display="flex"
          flexDirection="row"
          textAlign="center"
          alignContent="center"
          gap="30px"
        >
          <Button
            w="200px"
            color="#f2f2f2"
            bg="#000000 "
            transition="all 0.3s ease-in-out"
            _hover={{
              bg: "#f2f2f2",
              color: "#26CCE2",
            }}
            width="200px"
            borderRadius="30px"
            onClick={() => router.push("/login")}
          >
            Login
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export default Navbar;
