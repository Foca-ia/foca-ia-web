"use client";
import { Box, Button, Flex, Select, Stack, Text } from "@chakra-ui/react";
import { IconLetterX } from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsCamera, BsTrash } from "react-icons/bs";

const WebcamComponent: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [captures, setCaptures] = useState<string[]>([]);
  const canvas = document.createElement("canvas");
  const [isStarted, setIsStarted] = useState<Boolean>(false);
  const videoElement = videoRef.current;
  const [cameras, setCameras] = useState<MediaDeviceInfo[]>([]);
  const [selectedCamera, setSelectedCamera] = useState<string>("");
  const router = useRouter();

  const captureImage = () => {
    if (videoElement) {
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        const imageUrl = canvas.toDataURL("image/jpeg");

        setCaptures((prevCaptures) => [imageUrl, ...prevCaptures].slice(0, 6));
      }
    }
  };

  useEffect(() => {
    const getDevices = async () => {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(
        (device) => device.kind === "videoinput"
      );
      setCameras(videoDevices);
      if (videoDevices.length > 0) setSelectedCamera(videoDevices[0].deviceId);
    };

    getDevices();
  }, []);

  const startCamera = async (deviceId: string) => {
    setIsStarted(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { deviceId },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Erro ao acessar a webcam:", error);
    }
  };

  const handleCameraChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedCamera(value);
    startCamera(value);
  };

  const deleteCapture = (indexToDelete: number) => {
    setCaptures((prevCaptures) =>
      prevCaptures.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <Stack>
      <Flex>
        <Box
          w="100%"
          alignItems="center"
          justifyContent="center"
          transition="ease-in"
        >
          {isStarted ? (
            <video
              ref={videoRef}
              width="120%"
              height="10vh"
              autoPlay
              playsInline
            />
          ) : (
            <Button
              mb="2"
              ml="48"
              marginTop="72"
              onClick={() => startCamera(selectedCamera)}
            >
              Iniciar Webcam
            </Button>
          )}
        </Box>

        <Box
          w="50%"
          h="100vh"
          alignItems="center"
          justifyContent="center"
          padding="2"
        >
          <Box
            maxH="100vh"
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            width="430px"
          >
            {captures.map((src, index) => (
              <Box transition="all" key={index}>
                <Image
                  key={index}
                  src={src}
                  alt={`Captura ${index + 1}`}
                  style={{
                    width: "170px",
                    height: "170px",
                    marginLeft: "30px",
                    borderRadius: "12px",
                    transition: "ease-in",
                    transitionDuration: "4s",
                  }}
                />

                <Button
                  onClick={() => deleteCapture(index)}
                  mt="-80px"
                  ml="145px"
                  bgColor="transparent"
                >
                  <BsTrash color="#2D3748" />
                </Button>
              </Box>
            ))}
          </Box>

          <Box
            marginLeft="3"
            alignSelf="center"
            padding="3"
            position="fixed"
            bottom="2"
          >
            <Flex gap="2">
              <Button
                onClick={captureImage}
                justifyContent="center"
                bgColor="#2D3748"
                color="#FFFFFF"
              >
                <Text
                  fontSize="xs"
                  display="Flex"
                  alignItems="center"
                  gap="5px"
                >
                  <BsCamera /> Capturar
                </Text>
              </Button>
              <Select
                width="200px"
                placeholder="Select Camera"
                value={selectedCamera}
                onChange={handleCameraChange}
              >
                {cameras.map((camera) => (
                  <option key={camera.deviceId} value={camera.deviceId}>
                    {camera.label || `Câmera ${camera.deviceId}`}
                  </option>
                ))}
              </Select>

              <Button onClick={() => router.push("/patients-profile/id")}>
                Save
              </Button>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Stack>
  );
};

export default WebcamComponent;
