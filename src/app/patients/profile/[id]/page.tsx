"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Stack,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Button,
} from "@chakra-ui/react";
import { API } from "@/services/api";
import { DrawerMenu } from "@/components/Navbar/screen";
import Footer from "@/components/footer";
import Image from "next/image";

// Importe as imagens
import plasm1 from "../../../../../public/assets/images/plasmodium-0000.jpg";
import plasm2 from "../../../../../public/assets/images/plasmodium-0001.jpg";
import plasm3 from "../../../../../public/assets/images/plasmodium-0002.jpg";
import plasm4 from "../../../../../public/assets/images/plasmodium-0003.jpg";
import plasm5 from "../../../../../public/assets/images/plasmodium-0004.jpg";
import plasm6 from "../../../../../public/assets/images/plasmodium-0005.jpg";
import plasm7 from "../../../../../public/assets/images/plasmodium-0008.jpg";
import plasm8 from "../../../../../public/assets/images/plasmodium-0009.jpg";

import canc1 from "../../../../../public/assets/images/1_C_0001_1.RIGHT_MLO.LJPEG.1_highpass.png";
import canc2 from "../../../../../public/assets/images/1_C_0029_1.RIGHT_MLO.LJPEG.1_highpass.png";
import canc3 from "../../../../../public/assets/images/2_C_0001_1.LEFT_MLO.LJPEG.1_highpass.png";
import canc4 from "../../../../../public/assets/images/4_C_0001_1.LEFT_CC.LJPEG.1_highpass.png";
import canc5 from "../../../../../public/assets/images/4_C_0029_1.LEFT_CC.LJPEG.1_highpass.png";
import canc6 from "../../../../../public/assets/images/5_C_0002_1.RIGHT_MLO.LJPEG.1_highpass.png";
import canc7 from "../../../../../public/assets/images/5_C_0033_1.RIGHT_MLO.LJPEG.1_highpass.png";
import canc8 from "../../../../../public/assets/images/4_C_0001_1.LEFT_CC.LJPEG.1_highpass.png";

import tb1 from "../../../../../public/assets/images/Normal-1.png";
import tb2 from "../../../../../public/assets/images/Normal-2.png";
import tb3 from "../../../../../public/assets/images/Normal-3.png";
import tb4 from "../../../../../public/assets/images/Normal-4.png";
import tb5 from "../../../../../public/assets/images/Normal-5.png";
import tb6 from "../../../../../public/assets/images/Normal-6.png";
import tb7 from "../../../../../public/assets/images/Normal-7.png";
import tb8 from "../../../../../public/assets/images/Normal-8.png";
import { TableSortDiagnostics } from "@/components/TableSortDiagnostics";
import { InsertDataModal } from "@/components/insert-data-modal";

function Profile() {
  const [data, setData] = useState([]);
  const [selectedMalariaImage, setSelectedMalariaImage] = useState(null);
  const [selectedBreastCancerImage, setSelectedBreastCancerImage] =
    useState(null);
  const [selectedTbImage, setSelectedTbImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleGet = async () => {
    try {
      const { data } = await API.get("/user/analyst/");
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMalariaImageClick = (imageId: any) => {
    setSelectedMalariaImage(imageId);
    setModalIsOpen(true);
  };

  const handleBreastCancerImageClick = (imageId: any) => {
    setSelectedBreastCancerImage(imageId);
    setModalIsOpen(true);
  };

  const handleTbImageClick = (imageId: any) => {
    setSelectedTbImage(imageId);
    setModalIsOpen(true);
  };

  useEffect(() => {
    handleGet();
  }, [data]);

  const malariaImages = [
    { id: 1, imageUrl: plasm1 },
    { id: 2, imageUrl: plasm2 },
    { id: 3, imageUrl: plasm3 },
    { id: 4, imageUrl: plasm4 },
    { id: 5, imageUrl: plasm5 },
    { id: 6, imageUrl: plasm6 },
    { id: 7, imageUrl: plasm7 },
    { id: 8, imageUrl: plasm8 },
  ];
  const breastCancerImages = [
    { id: 1, imageUrl: canc1 },
    { id: 2, imageUrl: canc2 },
    { id: 3, imageUrl: canc3 },
    { id: 4, imageUrl: canc4 },
    { id: 5, imageUrl: canc5 },
    { id: 6, imageUrl: canc6 },
    { id: 7, imageUrl: canc7 },
    { id: 8, imageUrl: canc8 },
  ];
  const tuberculosisImages = [
    { id: 1, imageUrl: tb1 },
    { id: 2, imageUrl: tb2 },
    { id: 3, imageUrl: tb3 },
    { id: 4, imageUrl: tb4 },
    { id: 5, imageUrl: tb5 },
    { id: 6, imageUrl: tb6 },
    { id: 7, imageUrl: tb7 },
    { id: 8, imageUrl: tb8 },
  ];

  const closeModal = () => {
    setSelectedMalariaImage(null);
    setSelectedBreastCancerImage(null);
    setSelectedTbImage(null);
    setModalIsOpen(false);
  };

  return (
    <Flex>
      <DrawerMenu>
        <Stack
          width="100%"
          marginTop="70px"
          direction="row"
          gap="20px"
          flexWrap="wrap"
        >
          <Box
            width="100%"
            height="180px"
            backgroundColor="#24CEDE"
            borderRadius="20px"
            boxShadow="0px 0px 20px 0px #24CEDE"
            padding="20px"
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              padding="12px"
            >
              <Stack direction="column" gap="50px" alignItems="start">
                <Text fontSize="28" marginTop="-10px" color="#FFFFFF">
                  Edmauro Goma
                </Text>

                <Stack direction="row" gap="10px" alignItems="center">
                  <Text fontSize="18px" color="#FFF">
                    22 Anos
                  </Text>
                  <Text
                    fontSize="18px"
                    color="#FFF"
                    textDecoration="underline"
                    cursor="pointer"
                  >
                    Ver mais dados do paciente
                  </Text>
                </Stack>
              </Stack>

              <Stack direction="column" alignItems="end">
                <Text fontSize="20px" color="#FFFFFF">
                  Precisão dos resultados
                </Text>
                <Text fontSize="28px" color="#FFFFFF" fontWeight="bold">
                  100%
                </Text>

                <Text fontSize="20px" color="#FFFFFF">
                  Alcançado
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>

        <Stack
          direction="row"
          gap="20px"
          marginTop="40px"
          alignItems="center"
          width="100%"
          flexWrap="wrap"
        >
          <InsertDataModal />
          <Button>Adicionar sintomas</Button>
          <Button>Criar diagnostico</Button>
          <Button>Historico medico</Button>
          <Button>Enviar resultado Manualmente</Button>
          <Button>Editar dados</Button>
        </Stack>

        <Tabs marginTop="40px" isFitted variant="enclosed">
          <TabList>
            <Tab>Malaria</Tab>
            <Tab>Câncer de Mama</Tab>
            <Tab>Tuberculose</Tab>
            <Tab>Resultados</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <SimpleGrid columns={[1, 2, 3, 4]} spacing="20px" flexWrap="wrap">
                {malariaImages.map(({ id, imageUrl }) => (
                  <Box
                    key={id}
                    boxShadow="md"
                    dropShadow="md"
                    borderRadius="md"
                    overflow="hidden"
                    onClick={() => handleMalariaImageClick(id)}
                  >
                    <Image
                      src={imageUrl}
                      alt={`Imagem ${id}`}
                      width={500}
                      height={300}
                    />
                  </Box>
                ))}
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid columns={[1, 2, 3, 4]} spacing="20px" flexWrap="wrap">
                {breastCancerImages.map(({ id, imageUrl }) => (
                  <Box
                    key={id}
                    boxShadow="md"
                    dropShadow="md"
                    borderRadius="md"
                    overflow="hidden"
                    onClick={() => handleBreastCancerImageClick(id)}
                  >
                    <Image
                      src={imageUrl}
                      alt={`Imagem ${id}`}
                      width={500}
                      height={300}
                    />
                  </Box>
                ))}
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid columns={[1, 2, 3, 4]} spacing="20px" flexWrap="wrap">
                {tuberculosisImages.map(({ id, imageUrl }) => (
                  <Box
                    key={id}
                    boxShadow="md"
                    dropShadow="md"
                    borderRadius="md"
                    overflow="hidden"
                    onClick={() => handleTbImageClick(id)}
                  >
                    <Image
                      src={imageUrl}
                      alt={`Imagem ${id}`}
                      width={500}
                      height={300}
                    />
                  </Box>
                ))}
              </SimpleGrid>
            </TabPanel>

            <TabPanel>
              <TableSortDiagnostics />
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Modal isOpen={modalIsOpen} onClose={closeModal} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Pré-visualização da Imagem Selecionada</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {(selectedMalariaImage !== null ||
                selectedBreastCancerImage !== null ||
                selectedTbImage !== null) && (
                <Box
                  boxShadow="md"
                  dropShadow="md"
                  borderRadius="md"
                  overflow="hidden"
                >
                  {selectedMalariaImage !== null && (
                    <Image
                      src={malariaImages[selectedMalariaImage - 1].imageUrl}
                      alt={`Imagem ${selectedMalariaImage}`}
                      width={600}
                      height={400}
                    />
                  )}
                  {selectedBreastCancerImage !== null && (
                    <Image
                      src={
                        breastCancerImages[selectedBreastCancerImage - 1]
                          .imageUrl
                      }
                      alt={`Imagem ${selectedBreastCancerImage}`}
                      width={600}
                      height={400}
                    />
                  )}
                  {selectedTbImage !== null && (
                    <Image
                      src={tuberculosisImages[selectedTbImage - 1].imageUrl}
                      alt={`Imagem ${selectedTbImage}`}
                      width={600}
                      height={400}
                    />
                  )}
                </Box>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>

        <Footer />
      </DrawerMenu>
    </Flex>
  );
}

export default Profile;
