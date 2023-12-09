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
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
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

interface PatientData {
  estacao_ano: string;
  genetica_paciente: string;
  imunidade_adquirida: string;
  comorbilidades: string;
  nutricao: string;
  horario: Date;
}

export function MorePatientData() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [status, setStatus] = useState(false);
  const [data, setData] = useState<PatientData | null>(null);

  const auth = useAuth();

  const csrfToken = auth.token;

  const handleGet = async () => {
    setStatus(true);
    try {
      const { data } = await API.get(`/patient/record/1/`);
      setData(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  const date = data?.horario == undefined ? "No data" : data?.horario;
  const dataHora = new Date(date);
  const dia = dataHora.getDate().toString().padStart(2, "0");
  const mes = (dataHora.getMonth() + 1).toString().padStart(2, "0");
  const horas = dataHora.getHours().toString().padStart(2, "0");
  const minutos = dataHora.getMinutes().toString().padStart(2, "0");

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button mt="10px" onClick={onOpen} bg="transparent" variant="outline">
            More data
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>More patient data</PopoverHeader>
          <PopoverBody>
            <Stack flexDirection="row">
              <Text color="GrayText">Season of Year: </Text>
              <Text>
                {data?.estacao_ano == undefined ? "No data" : data?.estacao_ano}
              </Text>
            </Stack>

            <Stack flexDirection="row">
              <Text color="GrayText">Genetic: </Text>
              <Text>
                {data?.genetica_paciente == undefined
                  ? "No data"
                  : data?.genetica_paciente}
              </Text>
            </Stack>
            <Stack flexDirection="row">
              <Text color="GrayText">Comorbilities: </Text>
              <Text>
                {data?.comorbilidades == undefined
                  ? "No data"
                  : data?.comorbilidades}
              </Text>
            </Stack>

            <Stack flexDirection="row">
              <Text color="GrayText">Nutrition: </Text>
              <Text>
                {data?.nutricao == undefined ? "No data" : data?.nutricao}
              </Text>
            </Stack>

            <Stack flexDirection="row">
              <Text color="GrayText">Appointment Time:</Text>
              <Text>Day: {dia}</Text>
              <Text>Mth: {mes}</Text>
              <Text>Hour: {horas}</Text>
              <Text>Min: {minutos}</Text>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}
