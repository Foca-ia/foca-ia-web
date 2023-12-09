import useAuth from "@/Context/AuthProvider/useAuth";
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
  Button,
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
import { useState } from "react";
import { BsPlus } from "react-icons/bs";

export function CreatePatientModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [id_number, setIdNumber] = useState("");
  const [idade, setAge] = useState();
  const [naturalidade, setNaturality] = useState("");
  const [morada, setAddress] = useState("");
  const [sexo, setSex] = useState("");
  const [status, setStatus] = useState(false);

  const handleInputChange = (e: any) => setInput(e.target.value);
  const handleInputNameChange = (e: any) => setName(e.target.value);
  const handleInputIdNumberChange = (e: any) => setIdNumber(e.target.value);
  const handleInputAgeChange = (e: any) => setAge(e.target.value);
  const handleInputNaturalityChange = (e: any) => setNaturality(e.target.value);
  const handleInputAddressChange = (e: any) => setAddress(e.target.value);
  const handleInputSexChange = (e: any) => setSex(e.target.value);

  const router = useRouter();

  const params = useParams();

  const toast = useToast();

  const auth = useAuth();

  const csrfToken = auth.token;

  const onSubmit = async () => {
    setStatus(true);
    try {
      const { status } = await API.post(
        "/patient/",
        {
          name,
          id_number,
          idade,
          naturalidade,
          morada,
          sexo,
        },
        {
          headers: {
            "X-CSRFToken": csrfToken, // Add CSRF token to headers
            "Content-Type": "application/x-www-form-urlencoded",
          },
          withCredentials: true,
        }
      );

      console.log(status);

      if (status === 201) {
        router.push(`/patients/${params.id}`);
        onClose();
        setStatus(false);
        toast({
          title: "Patient created.",
          description: "Patient created successfuly",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      setStatus(false);
      console.log(error);
      toast({
        title: "Error to create Patient.",
        description: "Error to create Patient",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const isError = input === "";

  return (
    <>
      <Button onClick={onOpen} bg="#0081A8">
        <BsPlus color="#FFFFFF" />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent zIndex="99999">
          <ModalHeader fontWeight="light" fontSize="xx-large">
            Create new patient
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p="10">
            <FormControl isInvalid={isError} display="flex" gap="30px">
              <Stack>
                <FormLabel>Patient Name</FormLabel>
                <Input type="text" onChange={handleInputNameChange} />
                {!isError ? (
                  <FormHelperText>Enter the patient name.</FormHelperText>
                ) : (
                  <FormErrorMessage>Patient name is required.</FormErrorMessage>
                )}
                <FormLabel>Id_Number</FormLabel>t
                <Input type="number" onChange={handleInputIdNumberChange} />
                {!isError ? (
                  <FormHelperText>Enter the patient Id .</FormHelperText>
                ) : (
                  <FormErrorMessage>Patient Id is required.</FormErrorMessage>
                )}
                <FormLabel>Naturality</FormLabel>
                <Input type="text" onChange={handleInputNaturalityChange} />
                {!isError ? (
                  <FormHelperText>Enter the Naturality.</FormHelperText>
                ) : (
                  <FormErrorMessage>Naturality. is required.</FormErrorMessage>
                )}
              </Stack>

              <Stack>
                <FormLabel>Age</FormLabel>
                <Input type="text" onChange={handleInputAgeChange} />
                {!isError ? (
                  <FormHelperText>Enter the age .</FormHelperText>
                ) : (
                  <FormErrorMessage>The age. is required.</FormErrorMessage>
                )}
                <FormLabel>Address</FormLabel>
                <Input type="text" onChange={handleInputAddressChange} />
                {!isError ? (
                  <FormHelperText>Enter the Address.</FormHelperText>
                ) : (
                  <FormErrorMessage>Address. is required.</FormErrorMessage>
                )}

                <FormLabel>Sex</FormLabel>
                <Input type="text" onChange={handleInputSexChange} />
                {!isError ? (
                  <FormHelperText>Enter the Sex.</FormHelperText>
                ) : (
                  <FormErrorMessage>Sex. is required.</FormErrorMessage>
                )}
              </Stack>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              bgColor="#2D3748"
              color="#ffffff"
              mr={3}
              onClick={onSubmit}
              onSubmit={onSubmit}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
