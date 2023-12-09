"use client";

import React, { useState } from "react";
import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Input,
  Spinner,
  Stack,
  Text,
  Toast,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";

import loginbg from "../../../public/assets/images/bg1.jpg";
import logo from "../../../public/assets/images/LOGO FOCA 3-02.png";
import Link from "next/link";
import useAuth from "@/Context/AuthProvider/useAuth";
import { useRouter } from "next/navigation";
import { JwtPayload, decode } from "jsonwebtoken";
import { Button } from "@mantine/core";

const Login = () => {
  const auth = useAuth();

  const router = useRouter();
  const toast = useToast();

  const [status, setStatus] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleInputEmailChange = (e: any) => setEmail(e.target.value);
  const handleInputPasswordChange = (e: any) => setPassword(e.target.value);

  const onSubmit = async () => {
    setStatus(true);
    try {
      await auth.authenticate(email, password);

      const token = auth.token;

      const decodedToken = decode(token as string);
      console.log(decodedToken);

      if (!decodedToken) {
        return null;
      }

      if (
        decodedToken &&
        typeof decodedToken === "object" &&
        "user_id" in decodedToken
      ) {
        const { user_id } = decodedToken;
        router.push(`/dashboard/${user_id}`);
        setStatus(false);
        toast({
          title: "Welcome to Akin.",
          description: "Loading...",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Credenciais Invalidas.",
          description: "Verifique as credenciais e tente novamente.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });

        setStatus(false);
      }
    } catch (error) {
      setStatus(false);
      setError(true);
      console.log(error);
      toast({
        title: "Credenciais Invalidas.",
        description: "Verifique as credenciais e tente novamente.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
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
      <Box w="100%" h="100vh" display={{ base: "none", md: "block" }}>
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
          <Stack>
            <Text fontSize="sm" color="white"></Text>
          </Stack>
          <Stack spacing={3}>
            <Heading noOfLines={1} size="md" color="black">
              Ola, Novamente
            </Heading>
            <Text fontSize="sm" color="gray.600">
              Voce precisa estar autenticado para ter acesso
            </Text>
            <Divider mt="2" />
          </Stack>

          <Heading noOfLines={1} size="xs" color="gray.600" fontWeight="normal">
            Endereco de Email
          </Heading>
          <Input
            variant="outline"
            type="email"
            color="gray.600"
            placeholder=""
            size="lg"
            shadow="base"
            onChange={handleInputEmailChange}
          />
          <Heading noOfLines={1} size="xs" color="gray.600" fontWeight="normal">
            Palavra Passe
          </Heading>
          <Input
            variant="outline"
            type="password"
            placeholder=""
            color="gray.600"
            size="lg"
            shadow="base"
            onChangeCapture={handleInputPasswordChange}
          />

          <Heading noOfLines={1} size="xs" color="gray.600" fontWeight="normal">
            <Link href="/forgot">Esqueceu sua palavra passe?</Link>
          </Heading>

          <Button title="Login" bg="#222233" size="lg" onClick={onSubmit}>
            <Text fontSize="sm" color="white">
              {status === true ? <Spinner /> : "Login"}
            </Text>
          </Button>

          <Heading
            noOfLines={1}
            size="xs"
            color="gray.600"
            alignSelf="center"
            fontWeight="normal"
          >
            <Text>Nao possui uma conta?</Text>
          </Heading>
        </Stack>
      </Center>
    </Flex>
  );
};

export default Login;
