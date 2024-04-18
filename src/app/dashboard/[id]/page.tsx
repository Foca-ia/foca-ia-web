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
} from "@chakra-ui/react";

import { useParams } from "next/navigation";
import { DrawerMenu } from "@/components/Navbar/screen";
import { TableSortDiagnostics } from "@/components/TableSortDiagnostics";
import {
  BsFileSpreadsheetFill,
  BsFillArrowUpRightCircleFill,
  BsFillPeopleFill,
  BsHeart,
  BsPeopleFill,
} from "react-icons/bs";
import LineAreachart from "@/components/LineAreaChart";

function Dashboard() {
  const params = useParams();

  const twoColors = { "0%": "#108ee9", "100%": "#222233" };

  return (
    <Flex flexDirection="column" width="100%">
      <DrawerMenu>
        <Box marginTop="70px" width="100%" height="100px">
          <TableSortDiagnostics />

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

          <Stack marginTop="30px" direction="row">
            <Box
              width="650px"
              height="340px"
              border="1px solid #EBE8FF"
              padding="24px"
              borderRadius="20px"
              alignItems="center"
              justifyContent="center"
            >
              <Text marginBottom="10px">Resultados Mensais</Text>

              <LineAreachart />
            </Box>

            <Box
              width="440px"
              height="340px"
              padding="24px"
              borderRadius="20px"
              alignItems="center"
              justifyContent="center"
              backgroundColor="#24CEDE"
              boxShadow="0 4px 20px #24CEDE, 0 1px 3px #24CEDE"
            >
              {/* Conteúdo do Box aqui */}
            </Box>
          </Stack>
        </Box>
      </DrawerMenu>
    </Flex>
  );
}

export default Dashboard;
