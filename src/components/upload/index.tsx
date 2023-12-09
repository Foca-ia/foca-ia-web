import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Input, message, Upload } from "antd";
import useAuth from "@/Context/AuthProvider/useAuth";
import { useParams, useRouter } from "next/navigation";
import {
  Select,
  Stack,
  Button,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import SelectComponent from "../SelectComponent/screen";
import { API } from "@/services/api";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const UploadComponent: React.FC = () => {
  const [images, setImages] = useState<any[]>([]);
  const [status, setStatus] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [coloracao, setColorizacao] = useState("");
  const auth = useAuth();

  const handleInputImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setImages(Array.from(files));
    }
  };

  const handleInputColorizationChange = (e: any) =>
    setColorizacao(e.target.value);

  const csrfToken = auth.token;

  const params = useParams();

  const props: UploadProps = {
    onChange({ file, fileList }) {
      setImages(fileList.map((file) => file.originFileObj));
    },
  };

  const toast = useToast();
  const router = useRouter();

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
            "X-CSRFToken": csrfToken,
          },
          withCredentials: true,
        }
      );

      if (status === 201) {
        router.push(`/patients-profile/${params.id}`);
        onClose();
        setStatus(false);
        toast({
          title: "Image Send.",
          description: "Image sended successfuly",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      setStatus(false);
      console.log(error);
      toast({
        title: "Error to send Image.",
        description: "Error to create Image",
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
          title="Load Images"
          type="file"
          placeholder="Image"
          onChange={handleInputImageChange}
          multiple // Allow multiple file selection
        />
        <Select
          placeholder="Select the colorization"
          onChange={handleInputColorizationChange}
        >
          <option value="thin">Thin</option>
          <option value="thick">Thick</option>
        </Select>
        <Button width={40} onClick={handlePost}>
          Send
        </Button>
      </Stack>
    </Stack>
  );
};

export { UploadComponent };
