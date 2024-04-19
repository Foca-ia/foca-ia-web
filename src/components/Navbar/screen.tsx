import React, { useState } from "react";
import Link from "next/link";

import {
  Box,
  Flex,
  Text,
  Heading,
  Avatar,
  Stack,
  Button,
  Input,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";
import { BsLayoutSidebar, BsThreeDots } from "react-icons/bs";
import logo from "../../../public/assets/images/LOGO FOCA 3-02.png";
import { useParams, useRouter } from "next/navigation";
import useAuth from "@/Context/AuthProvider/useAuth";
import { API } from "@/services/api";
import { RxDashboard } from "react-icons/rx";
import { FaFileAlt, FaNotesMedical } from "react-icons/fa";

import { IconTriangleInvertedFilled } from "@tabler/icons-react";
import { CiMoneyCheck1 } from "react-icons/ci";
import { BiSolidReport } from "react-icons/bi";

const DrawerMenu = ({ children }: React.PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);

  const auth = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const { status } = await API.post("/session/logout/");

      if (status === 200) {
        auth.logout();
        router.push("/login");
      }
    } catch (error) {}
  };

  const params = useParams();

  return (
    <Box
      flexDirection="row"
      width="100%"
      height="100vh"
      background="linear-gradient(180deg, #FBFBFB, #24CEDE)"
    >
      <Stack
        style={{
          position: "fixed",
          top: "50px",
          left: "50px",
          alignSelf: "center",
        }}
      >
        <Image
          src={logo}
          height={150}
          width={150}
          quality={100}
          alt="Foca.ia logo"
        />
        <Stack marginTop="50px" gap="10px" marginLeft="-10px">
          <Button
            backgroundColor="transparent"
            paddingX="30px"
            color="#000000"
            _active={{ backgroundColor: "white", color: "#24CEDE" }}
            _focus={{ backgroundColor: "white", color: "#24CEDE" }}
            _hover={{ backgroundColor: "white", color: "#24CEDE" }}
            onClick={() => router.push(`/dashboard/${params.id}`)}
            leftIcon={<RxDashboard />}
            alignItems="center"
            justifyContent="space-between"
          >
            Dashboard
          </Button>

          <Button
            backgroundColor="transparent"
            paddingX="30px"
            color="#000000"
            _active={{ backgroundColor: "white", color: "#24CEDE" }}
            _focus={{ backgroundColor: "white", color: "#24CEDE" }}
            _hover={{ backgroundColor: "white", color: "#24CEDE" }}
            onClick={() => router.push("/")}
            leftIcon={<FaFileAlt />}
            alignItems="center"
            justifyContent="space-between"
          >
            Resultados
          </Button>

          <Button
            backgroundColor="transparent"
            paddingX="30px"
            color="#000000"
            _active={{ backgroundColor: "white", color: "#24CEDE" }}
            _focus={{ backgroundColor: "white", color: "#24CEDE" }}
            _hover={{ backgroundColor: "white", color: "#24CEDE" }}
            onClick={() => router.push("/")}
            leftIcon={<FaNotesMedical />}
            alignItems="center"
            justifyContent="space-between"
          >
            Pacientes
          </Button>

          <Button
            backgroundColor="transparent"
            paddingX="30px"
            color="#000000"
            _active={{ backgroundColor: "white", color: "#24CEDE" }}
            _focus={{ backgroundColor: "white", color: "#24CEDE" }}
            _hover={{ backgroundColor: "white", color: "#24CEDE" }}
            onClick={() => router.push(`/dashboard/${params.id}`)}
            leftIcon={<CiMoneyCheck1 />}
            justifyContent="start"
            alignItems="center"
            marginX="0px"
          >
            <Text marginLeft="10px">Planos</Text>
          </Button>

          <Button
            backgroundColor="transparent"
            paddingX="20px"
            color="#000000"
            _active={{ backgroundColor: "white", color: "#24CEDE" }}
            _focus={{ backgroundColor: "white", color: "#24CEDE" }}
            _hover={{ backgroundColor: "white", color: "#24CEDE" }}
            onClick={() => router.push("/")}
            leftIcon={<BiSolidReport />}
            justifyContent="space-evenly"
          >
            Relatorios
          </Button>
        </Stack>
      </Stack>

      <Flex
        width={sidebarVisible === true ? "82%" : "100%"}
        marginRight={sidebarVisible === true ? "-10px" : "0px  "}
        height="100vh"
        backgroundColor="#ffffff"
        borderTopRadius="40px"
        paddingX={10}
        zIndex={1}
        position="absolute"
        left={sidebarVisible === true ? 270 : 0}
        top={0}
        flexDirection="column"
        marginLeft={sidebarVisible ? "20px" : "0px"}
        transition="margin-left 0.5s ease-in-out"
        overflowY="auto"
      >
        <Box
          height="100px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap="20px"
          >
            <Button
              backgroundColor="transparent"
              onClick={() => setSidebarVisible(!sidebarVisible)}
            >
              <BsLayoutSidebar size={30} />
            </Button>

            <Stack>
              <Heading>Overview</Heading>
              <Text marginTop="-10px">Dashboard</Text>
            </Stack>
          </Stack>

          <Input
            backgroundColor="#394447"
            borderRadius="25px"
            color="#F2F2F2"
            placeholder="Pesquisar"
            width="50%"
            height="50px"
          />

          <Stack direction="row" alignItems="center" gap={3}>
            <Avatar></Avatar>
            <Stack gap="-10px">
              <Text>Edmauro Goma</Text>
              <Text fontWeight="bold">Hospital Central</Text>
            </Stack>
            <Button backgroundColor="transparent">
              <IconTriangleInvertedFilled size={10} />
            </Button>
          </Stack>
        </Box>
        {children}
      </Flex>
    </Box>
  );
};

export { DrawerMenu };
