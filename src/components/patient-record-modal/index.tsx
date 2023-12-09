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

export const PatientRecordModal: React.FC<{ id: string }> = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState("");
  const [estacao_ano, setEstacao_ano] = useState("");
  const [genetica_paciente, setGenetica_paciente] = useState("");
  const [imunidade_adquirida, setImunidade_adquirida] = useState("");
  const [comorbilidades, setComorbilidades] = useState("");
  const [nutricao, setNutricao] = useState("");
  const [horario, setHorario] = useState(false);
  const [status, setStatus] = useState(false);

  const handleInputChange = (e: any) => setInput(e.target.value);
  const handleInputEstacaoAnoChange = (e: any) =>
    setEstacao_ano(e.target.value);
  const handleInputGeneticaPacienteChange = (e: any) =>
    setGenetica_paciente(e.target.value);
  const handleInputImunidadeAdquiridaChange = (e: any) =>
    setImunidade_adquirida(e.target.value);
  const handleInputComorbidadeChange = (e: any) =>
    setComorbilidades(e.target.value);
  const handleInputNutricaoChange = (e: any) => setNutricao(e.target.value);
  const handleInputHorarioChange = (e: any) => setHorario(e.target.value);

  const router = useRouter();

  const params = useParams();

  const toast = useToast();

  const auth = useAuth();

  const csrfToken = auth.token;
  console.log(id);

  const onSubmit = async () => {
    setStatus(true);
    try {
      const { status } = await API.post(
        `/patient/record/${id}/`,
        {
          estacao_ano,
          genetica_paciente,
          imunidade_adquirida,
          comorbilidades,
          nutricao,
          horario,
          patient: id,
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
      <Button
        onClick={onOpen}
        leftIcon={<BsPlus color="#FFFFFF" />}
        bg="#0081A8"
        color="#f2f2f2"
      >
        Record Patient Data
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent zIndex="99999">
          <ModalHeader fontWeight="light" fontSize="xx-large">
            Record Patient Data
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p="10">
            <FormControl isInvalid={isError} display="flex" gap="30px">
              <Stack>
                <FormLabel>Season of Year</FormLabel>
                <Input type="text" onChange={handleInputEstacaoAnoChange} />
                {!isError ? (
                  <FormHelperText>Enter the Season of year.</FormHelperText>
                ) : (
                  <FormErrorMessage>Season is required.</FormErrorMessage>
                )}
                <FormLabel>Genetic information</FormLabel>
                <Input
                  type="text"
                  onChange={handleInputGeneticaPacienteChange}
                />
                {!isError ? (
                  <FormHelperText>Enter the genetic info .</FormHelperText>
                ) : (
                  <FormErrorMessage>Genetic is required.</FormErrorMessage>
                )}
                <FormLabel>Accquired Immunity</FormLabel>
                <Input
                  type="text"
                  onChange={handleInputImunidadeAdquiridaChange}
                />
                {!isError ? (
                  <FormHelperText>Enter the Accquired Immunity.</FormHelperText>
                ) : (
                  <FormErrorMessage>Immunity. is required.</FormErrorMessage>
                )}
              </Stack>

              <Stack>
                <FormLabel>Comorbidities</FormLabel>
                <Input type="text" onChange={handleInputComorbidadeChange} />
                {!isError ? (
                  <FormHelperText>Enter the age .</FormHelperText>
                ) : (
                  <FormErrorMessage>The age. is required.</FormErrorMessage>
                )}
                <FormLabel>Nutrition</FormLabel>
                <Input type="text" onChange={handleInputNutricaoChange} />
                {!isError ? (
                  <FormHelperText>Enter the nutrition.</FormHelperText>
                ) : (
                  <FormErrorMessage>Nutrition. is required.</FormErrorMessage>
                )}

                <FormLabel>Appointment time</FormLabel>
                <Input
                  type="datetime-local"
                  onChange={handleInputHorarioChange}
                />
                {!isError ? (
                  <FormHelperText>Enter the Appointment time.</FormHelperText>
                ) : (
                  <FormErrorMessage>Time. is required.</FormErrorMessage>
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
};
