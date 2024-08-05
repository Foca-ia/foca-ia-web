import useAuth from "@/Context/AuthProvider/useAuth";
import { API, ApiManager } from "@/services/api";
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
  Flex,
  Spinner,
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
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(Number);
  const [address, setAddress] = useState("");
  const [age, setAge] = useState(Number);
  const [height, setHeight] = useState(Number);
  const [weight, setWeight] = useState(Number);
  const [blood_group, setBloodGroup] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState(false);

  const handleInputChange = (e: any) => setInput(e.target.value);
  const handleInputNameChange = (e: any) => setName(e.target.value);
  const handleInputEmailChange = (e: any) => setEmail(e.target.value);
  const handleInputPhoneChange = (e: any) => setPhone(e.target.value);
  const handleInputAgeChange = (e: any) => setAge(e.target.value);
  const handleInputAddressChange = (e: any) => setAddress(e.target.value);
  const handleInputHeightChange = (e: any) => setHeight(e.target.value);
  const handleInputWeightChange = (e: any) => setWeight(e.target.value);
  const handleInputGenderChange = (e: any) => setGender(e.target.value);
  const handleInputBloodChange = (e: any) => setBloodGroup(e.target.value);

  const router = useRouter();

  const params = useParams();

  const toast = useToast();

  const auth = useAuth();

  const csrfToken = auth.token;

  const apiManager = new ApiManager();

  const onSubmit = async () => {
    setStatus(true);
    try {
      await apiManager
        .createPatient({
          name,
          email,
          phone,
          address,
          age,
          height,
          weight,
          blood_group,
          gender,
        })
        .then((response) => {
          setStatus(false);
          toast({
            title: "Patient created.",
            description: "Patient created",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          router.refresh();
        });
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
    <Flex>
      <Button onClick={onOpen} bg="#0081A8">
        <BsPlus color="#FFFFFF" />
        <span style={{ marginLeft: "10px", color: "#FFFFFF" }}>
          Criar Paciente
        </span>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent zIndex="99999">
          <ModalHeader fontWeight="light" fontSize="xx-large">
            Criar Paciente
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p="10">
            <FormControl isInvalid={isError} display="flex" gap="30px">
              <Stack>
                <FormLabel>Nome do paciente</FormLabel>
                <Input type="text" onChange={handleInputNameChange} />
                {!isError ? (
                  <FormHelperText>Enter the patient name.</FormHelperText>
                ) : (
                  <FormErrorMessage>Patient name is required.</FormErrorMessage>
                )}
                <FormLabel>Email</FormLabel>t
                <Input type="email" onChange={handleInputEmailChange} />
                {!isError ? (
                  <FormHelperText>Enter the patient Id .</FormHelperText>
                ) : (
                  <FormErrorMessage>Patient Id is required.</FormErrorMessage>
                )}
                <FormLabel>Telemovel</FormLabel>
                <Input type="number" onChange={handleInputPhoneChange} />
                {!isError ? (
                  <FormHelperText>Enter the Telemovel.</FormHelperText>
                ) : (
                  <FormErrorMessage>Telemovel. is required.</FormErrorMessage>
                )}
              </Stack>

              <Stack>
                <FormLabel>Idade</FormLabel>
                <Input type="number" onChange={handleInputAgeChange} />
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

                <FormLabel>Sexo</FormLabel>
                <Input type="text" onChange={handleInputGenderChange} />
                {!isError ? (
                  <FormHelperText>Enter the Sex.</FormHelperText>
                ) : (
                  <FormErrorMessage>Sex. is required.</FormErrorMessage>
                )}
              </Stack>

              <Stack>
                <FormLabel>Altura</FormLabel>
                <Input type="number" onChange={handleInputHeightChange} />
                {!isError ? (
                  <FormHelperText>Enter the Height.</FormHelperText>
                ) : (
                  <FormErrorMessage>Height. is required.</FormErrorMessage>
                )}
                <FormLabel>Peso</FormLabel>
                <Input type="number" onChange={handleInputWeightChange} />
                {!isError ? (
                  <FormHelperText>Enter the Weight.</FormHelperText>
                ) : (
                  <FormErrorMessage>Weight. is required.</FormErrorMessage>
                )}
                <FormLabel>Blood Group</FormLabel>
                <Input type="text" onChange={handleInputBloodChange} />
                {!isError ? (
                  <FormHelperText>Enter the Blood Group.</FormHelperText>
                ) : (
                  <FormErrorMessage>Blood Group. is required.</FormErrorMessage>
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
              _hover={{ bg: "#2D3748" }}
              isLoading={status}
            >
              {status ? <Spinner /> : "Criar Paciente"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
