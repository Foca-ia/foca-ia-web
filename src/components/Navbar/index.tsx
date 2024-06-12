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
      position="fixed"
      width="90%"
      top="5"
      zIndex={100}
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      padding="15px"
      borderRadius="100px"
      backgroundColor="rgba(255, 255, 255, 0.2)"
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
      backdropFilter="blur(10px)"
      border="1px solid rgba(255, 255, 255, 0.3)"
    >
      <Image src={Logo} alt="logo" width={100} height={75} />
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
                        bg="#24CEDE"
                        transition="all 0.3s ease-in-out"
                        _hover={{
                          bg: "#f2f2f2",
                          color: "#26CCE2",
                        }}
                        onClick={() => router.push("/login")}
                        width="200px"
                        borderRadius="30px"
                      >
                        Entrar
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
            bg="#24CEDE"
            transition="all 0.3s ease-in-out"
            _hover={{
              bg: "#f2f2f2",
              color: "#7A7A7A",
            }}
            width="200px"
            borderRadius="30px"
            onClick={() => router.push("/login")}
          >
            Entrar
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export { Navbar };
