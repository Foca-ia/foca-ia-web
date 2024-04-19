"use client";

import {
  Box,
  Flex,
  Text,
  List,
  ListItem,
  Heading,
  Avatar,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import Image from "next/image";
import {
  BsFileSpreadsheetFill,
  BsFillArrowUpRightCircleFill,
  BsFillPeopleFill,
  BsHeart,
  BsPeopleFill,
  BsThreeDots,
} from "react-icons/bs";

import BarChartComponent from "@/components/column-chart";
import logo from "../../../../public/assets/images/logo.png";
import { TableSortPatients } from "@/components/TableSortPatients";
import Link from "next/link";
import { API } from "@/services/api";
import { useEffect, useState } from "react";
import { DrawerMenu } from "@/components/Navbar/screen";
import { TableSortDiagnostics } from "@/components/TableSortDiagnostics";
import Footer from "@/components/footer";

function Patient() {
  const [data, setData] = useState([]);
  const handleGet = async () => {
    try {
      const { data } = await API.get("/patient/");
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

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
            width="260px"
            height="140px"
            borderRadius="20px"
            border="1px solid #EBE8FF"
            padding="20px"
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text>Diagnosticos Hoje</Text>
              <BsHeart size={28} />
            </Stack>

            <Text fontSize="3xl">22</Text>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              marginTop="10px"
            >
              <Stack direction="row">
                <BsFillArrowUpRightCircleFill color="#6AD2A0" />
                <Text fontSize="12px">+15% do dia anterior</Text>
              </Stack>

              <Text
                fontSize="12px"
                textDecoration="underline"
                color="#6AD2A0"
                cursor="pointer"
              >
                Ver mais
              </Text>
            </Stack>
          </Box>

          <Box
            width="260px"
            height="140px"
            borderRadius="20px"
            border="1px solid #EBE8FF"
            padding="20px"
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text>Pacientes</Text>
              <BsFillPeopleFill size={28} />
            </Stack>

            <Text fontSize="3xl">122</Text>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              marginTop="10px"
            ></Stack>
          </Box>

          <Box
            width="260px"
            height="140px"
            borderRadius="20px"
            border="1px solid #EBE8FF"
            padding="20px"
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text>Total de resultados</Text>
              <BsFileSpreadsheetFill size={28} />
            </Stack>

            <Text fontSize="3xl">22</Text>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              marginTop="10px"
            >
              <Stack direction="row">
                <BsFillArrowUpRightCircleFill color="#6AD2A0" />
                <Text fontSize="12px">+15% do dia anterior</Text>
              </Stack>

              <Text
                fontSize="12px"
                textDecoration="underline"
                color="#6AD2A0"
                cursor="pointer"
              >
                Ver mais
              </Text>
            </Stack>
          </Box>

          <Box
            width="260px"
            height="140px"
            borderRadius="20px"
            border="1px solid #EBE8FF"
            padding="20px"
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text>Novos pacientes</Text>
              <BsPeopleFill size={28} />
            </Stack>

            <Text fontSize="3xl">22</Text>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              marginTop="10px"
            >
              <Stack direction="row">
                <BsFillArrowUpRightCircleFill color="#6AD2A0" />
                <Text fontSize="12px">+15% do dia anterior</Text>
              </Stack>

              <Text
                fontSize="12px"
                textDecoration="underline"
                color="#6AD2A0"
                cursor="pointer"
              >
                Ver mais
              </Text>
            </Stack>
          </Box>
        </Stack>
        <TableSortDiagnostics />

        <Footer />
      </DrawerMenu>
    </Flex>
  );
}

export default Patient;
