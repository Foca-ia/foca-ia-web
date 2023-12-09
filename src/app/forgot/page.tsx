"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

import loginbg from "../../../public/assets/images/loginbg.png";
import logo from "../../../public/assets/images/logo.png";
import Link from "next/link";
import { BsChevronLeft } from "react-icons/bs";
import { API } from "@/services/api";
import { useRouter } from "next/navigation";

const Forgot = () => {
  const router = useRouter();

  const [status, setStatus] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleInputEmailChange: any = (e: any) => setEmail(e.target.value);

  const onSubmit = async () => {
    setStatus(true);
    try {
      await API.post("user/send-code-password/", { email });
      router.push(`/confirm`);
    } catch (error) {
      setStatus(false);
      setError(true);
      console.log(error);
    }
  };

  return (
    <Flex color="white" w="100%" h="100%">
      <Image
        src={logo}
        height={150}
        width={150}
        quality={100}
        style={{
          position: "absolute",
          top: 30,
          left: 30,
        }}
        alt="login background"
      />
      <Box
        w="100%"
        bg="whiteAlpha.100"
        h="100vh"
        display={{ base: "none", md: "block" }}
      >
        <Image
          src={loginbg}
          height={800}
          width={800}
          style={{
            height: "100vh",
            width: "100%",
            objectFit: "cover",
            imageResolution: "from-image",
          }}
          quality={100}
          alt="login background"
        />
      </Box>

      <Center bg="white" w="60%" h="100vh" p="4">
        <Stack spacing={3}>
          <Stack spacing={3}>
            <Link href="/login">
              <Text color="gray.600" display="flex" gap={2} alignItems="center">
                <BsChevronLeft size={16} color="gray" />
                Back
              </Text>
            </Link>
            <Heading noOfLines={1} size="md" paddingTop="20" color="black">
              Recovery Your Password
            </Heading>
            <Text fontSize="sm" color="gray.600">
              You need to provide your email for account recovery
            </Text>
            <Divider mt="2" />
          </Stack>

          <Heading noOfLines={1} size="xs" color="gray.600" fontWeight="normal">
            Email Address
          </Heading>
          <Input
            variant="outline"
            color="gray.600"
            placeholder=""
            size="lg"
            shadow="base"
            onChange={handleInputEmailChange}
          />

          <Button
            title="Login"
            bgColor="#0081A8"
            size="lg"
            isLoading={status}
            onClick={() => onSubmit()}
          >
            <Text fontSize="sm" color="white">
              Send
            </Text>
          </Button>
        </Stack>
      </Center>
    </Flex>
  );
};

export default Forgot;
