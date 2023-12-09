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
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useState } from "react";
import {UploadComponent }from "../upload";
import { BsCamera } from "react-icons/bs";
import { useParams, useRouter } from "next/navigation";

export function InsertDataModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState("");

  const handleInputChange = (e: any) => setInput(e.target.value);

  const isError = input === "";

  const router = useRouter();

  const params = useParams();

  const handleRouter = async (url: any) => {
    await router.push(url);
  };

  return (
    <Stack>
      <Button onClick={onOpen} bgColor="#2D3748" color="#ffffff">
        Insert Data
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="3xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="light" fontSize="xx-large">
            Insert Data
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UploadComponent  />
          </ModalBody>

          <ModalFooter>
            <Button
              bgColor="#2D3748"
              color="#ffffff"
              mr={1}
              onClick={() => handleRouter(`/capture-data/${params.id}`)}
            >
              <BsCamera />
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  );
}
