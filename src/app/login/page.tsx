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
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";

import loginbg from "../../../public/assets/images/Login Art.png";
import logo from "../../../public/assets/images/LOGO FOCA 3-02.png";
import Link from "next/link";
import useAuth from "@/Context/AuthProvider/useAuth";
import { useRouter } from "next/navigation";
import { JwtPayload, decode } from "jsonwebtoken";
import { ApiManager } from "@/services/api";

const Login = () => {
  const auth = useAuth();

  const router = useRouter();
  const toast = useToast();

  const apiManager = new ApiManager();

  const [status, setStatus] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [authResponse, setAuthResponse] = useState<any>();

  const handleInputUsernameChange = (e: any) => setUsername(e.target.value);
  const handleInputPasswordChange = (e: any) => setPassword(e.target.value);
  const [isLargerThan48em] = useMediaQuery("(min-width: 48em)");

  const onSubmit = async () => {
    setStatus(true);
    try {
      await apiManager.authenticate(username, password).then((response) => {
        setAuthResponse(response.data);
      });

      const { access_token, user_id } = await authResponse;

      if (!access_token) {
        return null;
      }

      if (typeof access_token === "string" && access_token !== "undefined") {
        router.push(`/dashboard/${user_id}`);
        setStatus(false);
        toast({
          title: "Bem vindo.",
          description: "Carregando...",
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
    <Stack
      color="white"
      width="100%"
      height="100vh"
      direction="row"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack
        width={isLargerThan48em ? "50%" : "100%"}
        marginTop={isLargerThan48em ? "-200px" : "300px"}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          bg="white"
          w="60%"
          h="100%"
          p="4"
          alignSelf="center"
          marginTop="300px"
        >
          <Stack direction="column">
            <Image
              src={logo}
              height={150}
              width={150}
              quality={100}
              alt="logo"
            />
            <Stack>
              <Text fontSize="sm" color="white"></Text>
            </Stack>
            <Stack spacing={3}>
              <Heading
                noOfLines={1}
                fontSize={isLargerThan48em ? "3xl" : "2xl"}
                color="black"
              >
                Bem-vindo de volta! 👋
              </Heading>
              <Text fontSize="20px" color="gray.600">
                Hoje esperamos que a nossa ferramenta o ajude e melhore o seu
                dia!
              </Text>
              <Divider mt="2" />
            </Stack>

            <Heading
              noOfLines={1}
              size="xs"
              color="gray.600"
              fontWeight="normal"
              marginTop="20px"
            >
              Seu nome de usuario
            </Heading>
            <Input
              variant="outline"
              type="username"
              color="gray.600"
              placeholder=""
              size="lg"
              shadow="base"
              onChange={handleInputUsernameChange}
              marginBottom="20px"
            />
            <Heading
              noOfLines={1}
              size="xs"
              color="gray.600"
              fontWeight="normal"
            >
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

            <Heading
              noOfLines={1}
              size="xs"
              color="gray.600"
              fontWeight="normal"
              marginTop="20px"
            >
              <Link href="/forgot">
                <Text color="#27CFDE">Esqueceu sua palavra passe?</Text>
              </Link>
            </Heading>

            <Button
              title="Login"
              bg="#162D3A"
              size="lg"
              onClick={onSubmit}
              _hover={{ bg: "#162D3A" }}
              marginTop="20px"
              borderRadius="13px"
            >
              <Text fontSize="sm" color="white">
                {status === true ? <Spinner /> : "Entrar"}
              </Text>
            </Button>

            <Heading
              noOfLines={1}
              size="xs"
              color="gray.600"
              alignSelf="center"
              fontWeight="normal"
              marginTop="20px"
            >
              <Text color="#27CFDE">Nao possui uma conta?</Text>
            </Heading>
          </Stack>
        </Box>
      </Stack>

      {isLargerThan48em && (
        <Stack
          margin={"auto"}
          width={"50%"}
          height={"100vh"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box alignSelf={"center"} padding={"-40px"}>
            <Image
              src={loginbg}
              height={500}
              width={800}
              quality={100}
              objectFit="cover"
              layout="responsive"
              alt="login background"
            />
          </Box>
        </Stack>
      )}
    </Stack>
  );
};

export default Login;
