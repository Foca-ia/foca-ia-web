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

import logo from "../../../public/assets/images/LOGO FOCA-02.png";
import useAuth from "@/Context/AuthProvider/useAuth";
import { useRouter } from "next/navigation";
import { JwtPayload, decode } from "jsonwebtoken";

const Forgot = () => {
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
    <Stack
      color="white"
      width="100%"
      height="100%"
      direction="row"
      alignItems="center"
      padding="40px"
    >
      <Stack
        width="100%"
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
      >
        <Box
          bg="white"
          alignItems="center"
          alignSelf="center"
          marginTop="300px"
        >
          <Stack direction="column" alignSelf="center">
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
                Esqueceu a sua Senha?
              </Heading>
              <Text fontSize="20px" color="gray.600">
                Não se preocupe! Vamos te ajudar a recuperar. Sua senha. Insira
                o seu e-mail para recuperar!
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
              placeholder="example@gmail.com"
              size="lg"
              width="50%"
              shadow="base"
              onChange={handleInputEmailChange}
              marginBottom="20px"
            />

            <Button
              title="Login"
              bg="#162D3A"
              size="lg"
              onClick={onSubmit}
              _hover={{ bg: "#162D3A" }}
              marginTop="20px"
              borderRadius="13px"
              width="50%"
            >
              <Text fontSize="sm" color="white">
                {status === true ? <Spinner /> : "Enviar Email"}
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
              <Text
                color="#27CFDE"
                cursor="pointer"
                onClick={() => router.push("/login")}
              >
                Já possui uma conta?
              </Text>
            </Heading>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Forgot;
