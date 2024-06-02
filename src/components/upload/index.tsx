import React, { useState } from "react";
import {
  Input,
  Select,
  Stack,
  Button,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { UploadOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import { API } from "@/services/api";
import useAuth from "@/Context/AuthProvider/useAuth";
import { useParams, useRouter } from "next/navigation";

const UploadComponent = () => {
  const [images, setImages] = useState([]);
  const [coloracao, setColorizacao] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const auth = useAuth();
  const params = useParams();
  const router = useRouter();
  const toast = useToast();

  const handleInputImageChange = (e: any) => {
    const files = e.target.files;
    if (files) {
      setImages(Array.from(files));
    }
  };

  const handleInputColorizationChange = (e: any) =>
    setColorizacao(e.target.value);

  const handlePost = async () => {
    try {
      const formData = new FormData();
      images.forEach((image) => {
        formData.append("image", image);
      });
      formData.append("coloracao", coloracao);

      const { status } = await API.post(
        `/patient/image/${params.id}`,
        formData,
        {
          headers: {
            "X-CSRFToken": auth.token,
          },
          withCredentials: true,
        }
      );

      if (status === 201) {
        router.push(`/patients-profile/${params.id}`);
        onClose();
        toast({
          title: "Imagem enviada.",
          description: "Imagem enviada com sucesso",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Erro ao enviar imagem.",
        description: "Erro ao criar imagem",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Stack>
      <Stack display="flex" flexDirection="column" gap="20px">
        <Input
          padding="14px"
          height={16}
          title="Carregar imagens"
          type="file"
          placeholder="Imagem"
          onChange={handleInputImageChange}
          multiple
          style={{
            backgroundColor: "#E2E8F0",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        />

        <Stack
          direction="row"
          flexWrap="wrap"
          borderRadius="10px"
          border="1px solid #E2E8F0"
          padding="10px"
        >
          <Select
            placeholder="Selecione a doença"
            onChange={handleInputColorizationChange}
          >
            <option value="Malaria">Malaria</option>
            <option value="Cancer">Cancer</option>
            <option value="Tuberculose">Tuberculose</option>
          </Select>
          {images.map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`Imagem ${index + 1}`}
              style={{
                maxWidth: "100px",
                maxHeight: "100px",
                marginBottom: "10px",
              }}
            />
          ))}
        </Stack>
        <Button width={40} onClick={async () => handlePost()}>
          Enviar
        </Button>
      </Stack>
    </Stack>
  );
};

export { UploadComponent };
