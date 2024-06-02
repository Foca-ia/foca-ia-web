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
} from "@chakra-ui/react";
import Image from "next/image";

import loginbg from "../../../public/assets/images/Login Art.png";
import logo from "../../../public/assets/images/LOGO FOCA 3-02.png";
import Link from "next/link";
import useAuth from "@/Context/AuthProvider/useAuth";
import { useRouter } from "next/navigation";
import { JwtPayload, decode } from "jsonwebtoken";

const Register = () => {
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
    <Stack color="white" width="100%" height="100%" direction="row">
      <Stack width="50%" alignItems="center" justifyContent="center">
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
              <Heading noOfLines={1} fontSize="36px" color="black">
                Bem-vindo! 👋
              </Heading>
              <Text fontSize="20px" color="gray.600">
                Registre a sua organização e começa a usar a plataforma
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

      <Stack width="50%" padding="20px">
        <Box
          width="100%"
          height="100%"
          marginBottom="20px"
          display={{ base: "none", md: "block" }}
        >
          <Image
            src={loginbg}
            height={800}
            width={800}
            quality={100}
            alt="login background"
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Register;
