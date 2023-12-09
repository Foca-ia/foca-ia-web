import { API } from "@/services/api";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { useCookies } from "react-cookie";
import useAuth from "@/Context/AuthProvider/useAuth";
import { Button } from "@mantine/core";

export function CreateAnalystModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState("");
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);

  const handleInputNameChange = (e: any) => setFirst_Name(e.target.value);
  const handleInputLastNameChange = (e: any) => setLastName(e.target.value);
  const handleInputEmailChange = (e: any) => setEmail(e.target.value);
  const handleInputPasswordChange = (e: any) => setPassword(e.target.value);

  const router = useRouter();

  const auth = useAuth();

  const params = useParams();

  const toast = useToast();

  const csrfToken = auth.token;

  const onSubmit = async () => {
    setStatus(true);
    try {
      const { status } = await API.post(
        "/user/creat-analyst/",
        {
          first_name,
          last_name,
          email,
          password,
        },
        {
          headers: {
            "X-CSRFToken": csrfToken, // Add CSRF token to headers
          },
          withCredentials: true,
        }
      );

      if (status === 201) {
        router.push(`/analyst/${params.id}`);
        onClose();
        setStatus(false);
        toast({
          title: "Analyst created.",
          description: "Analyst created successfuly",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Error to create analyst.",
          description: "Error to create analyst",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        setStatus(false);
      }
    } catch (error) {
      setStatus(false);
      console.log(error);
    }
  };

  // setCsrfToken(cookies[0].csrfToken);

  const isError = input === "";

  return (
    <>
      <Button onClick={onOpen} bg="#0081A8">
        <BsPlus />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="light" color="GrayText" fontSize="xx-large">
            Create new Analyst
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={isError} display="flex" gap="30px">
              <Stack>
                <FormLabel color="GrayText">First Name</FormLabel>
                <Input type="text" onChange={handleInputNameChange} />
                {!isError ? (
                  <FormHelperText>Enter the first first_name.</FormHelperText>
                ) : (
                  <FormErrorMessage>Name is required.</FormErrorMessage>
                )}

                <FormLabel color="GrayText">Last Name</FormLabel>
                <Input type="text" onChange={handleInputLastNameChange} />
                {!isError ? (
                  <FormHelperText>Enter the last first_name.</FormHelperText>
                ) : (
                  <FormErrorMessage>Name is required.</FormErrorMessage>
                )}

                <FormLabel color="GrayText">Email Address</FormLabel>
                <Input type="email" onChange={handleInputEmailChange} />
                {!isError ? (
                  <FormHelperText>Enter the email .</FormHelperText>
                ) : (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                )}

                <FormLabel color="GrayText">Password</FormLabel>
                <Input type="password" onChange={handleInputPasswordChange} />
                {!isError ? (
                  <FormHelperText>Enter the analyst password.</FormHelperText>
                ) : (
                  <FormErrorMessage>Password. is required.</FormErrorMessage>
                )}

                <Button
                  bg="#2D3748"
                  color="#ffffff"
                  mr={3}
                  loading={status}
                  disabled={status}
                  onClick={() => onSubmit()}
                >
                  Create
                </Button>
              </Stack>
            </FormControl>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
