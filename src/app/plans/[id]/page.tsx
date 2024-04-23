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
  SimpleGrid,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Button,
} from "@chakra-ui/react";

import { TableSortAnalysts } from "@/components/TableSortAnalyst";
import { API } from "@/services/api";
import { useEffect, useState } from "react";
import { DrawerMenu } from "@/components/Navbar/screen";
import { TableSortDiagnostics } from "@/components/TableSortDiagnostics";
import {
  BsFileSpreadsheetFill,
  BsFillArrowUpRightCircleFill,
  BsFillPeopleFill,
  BsHeart,
  BsPeopleFill,
} from "react-icons/bs";
import Footer from "@/components/footer";
import { BiMoney } from "react-icons/bi";

function Plans() {
  const [data, setData] = useState([]);
  const handleGet = async () => {
    try {
      const { data } = await API.get("/user/analyst/");
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGet();
  }, [data]); // Chama a função novamente quando as datas mudarem

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
            borderRadius="20px"
            border="1px solid #EBE8FF"
            padding="20px"
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" gap="10px" alignItems="center">
                <BiMoney size={28} />
                <Text fontSize="larger">Seu Plano</Text>
              </Stack>
              <Text fontSize="x-large" fontWeight="bold">
                Business
              </Text>
            </Stack>

            <Stack
              direction="row"
              marginTop="40px"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="column">
                <Text fontSize="18px">Valor pago</Text>
                <Text fontSize="28" marginTop="-10px">
                  22.000.00.kz
                </Text>
              </Stack>

              <Stack direction="row">
                <Button
                  variant="outline"
                  borderColor="#27CFDE"
                  color="#27CFDE"
                  _hover={{
                    backgroundColor: "#27CFDE",
                    color: "#FFFFFF",
                  }}
                >
                  Renovar
                </Button>
                <Button
                  backgroundColor="#27CFDE"
                  color="#FFFFFF"
                  _hover={{
                    backgroundColor: "#FFFFFF",
                    color: "#27CFDE",
                    border: "1px solid #27CFDE",
                  }}
                >
                  Upgrade
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>

        <Stack width="100%" marginTop="30px">
          <TableSortDiagnostics />
        </Stack>

        <Footer />
      </DrawerMenu>
    </Flex>
  );
}

export default Plans;
