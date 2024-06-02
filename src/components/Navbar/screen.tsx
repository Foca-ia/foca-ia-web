import React, { useEffect, useState } from "react";
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
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../../public/assets/images/LOGO FOCA 3-02.png";
import { useParams, usePathname, useRouter } from "next/navigation";
import useAuth from "@/Context/AuthProvider/useAuth";
import { API } from "@/services/api";
import { RxDashboard } from "react-icons/rx";
import { FaFileAlt, FaNotesMedical } from "react-icons/fa";

import { IconTriangleInvertedFilled } from "@tabler/icons-react";
import { CiMoneyCheck1 } from "react-icons/ci";
import { BiSearch, BiSolidReport } from "react-icons/bi";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarRightCollapse,
} from "react-icons/tb";

const DrawerMenu = ({ children }: React.PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);
  const [analysts, setAnalysts] = useState<any[]>([]);
  const [patients, setPatients] = useState<any[]>([]);
  const [results, setResults] = useState<any[]>([]);
  const auth = useAuth();
  const router = useRouter();
  const path = usePathname();

  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    // Simulando busca de dados iniciais ao montar o componente
    const fetchInitialData = async () => {
      const mockAnalysts = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        { id: 3, name: "Alice Johnson" },
      ];
      const mockPatients = [
        { id: 1, name: "Patient A" },
        { id: 2, name: "Patient B" },
        { id: 3, name: "Patient C" },
      ];
      const mockResults = [
        { id: 1, title: "Result 1" },
        { id: 2, title: "Result 2" },
        { id: 3, title: "Result 3" },
      ];
      setAnalysts(mockAnalysts);
      setPatients(mockPatients);
      setResults(mockResults);
    };

    fetchInitialData();
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);

    const allResults = [...analysts, ...patients, ...results];

    const filteredResults = allResults.filter((result) => {
      if (
        result.name &&
        result.name.toLowerCase().includes(value.toLowerCase())
      ) {
        return true;
      }
      if (
        result.title &&
        result.title.toLowerCase().includes(value.toLowerCase())
      ) {
        return true;
      }
      return false;
    });

    setSearchResults(filteredResults);
    setShowPreview(value.trim() !== "");
  };

  const navigateToSearchResult = (id: number) => {
    // Lógica para navegar para a página de detalhes do resultado de pesquisa
    console.log("Navigate to search result with id:", id);
  };

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
            onClick={() => router.push(`/results/${params.id}`)}
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
            onClick={() => router.push(`/patients/${params.id}`)}
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
            onClick={() => router.push(`/plans/${params.id}`)}
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
            onClick={() => router.push(`/reports/${params.id}`)}
            leftIcon={<BiSolidReport />}
            justifyContent="space-evenly"
          >
            Relatorios
          </Button>
        </Stack>
      </Stack>

      <Flex
        width={sidebarVisible ? "82%" : "100%"}
        height="100vh"
        backgroundColor="#ffffff"
        borderTopRadius="40px"
        paddingX={10}
        zIndex={1}
        position="absolute"
        left={sidebarVisible ? "270px" : 0}
        top={0}
        flexDirection="column"
        marginLeft={sidebarVisible ? "20px" : "0px"}
        transition="margin-left 0.8s ease-in-out"
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
              {sidebarVisible === true ? (
                <TbLayoutSidebarLeftCollapse size={30} />
              ) : (
                <TbLayoutSidebarRightCollapse size={30} />
              )}
            </Button>

            <Stack>
              <Heading>
                {(() => {
                  const route = path.split("/")[1];
                  switch (route) {
                    case "dashboard":
                      return "Dashboard";
                    case "analyst":
                      return "Analista";
                    case "results":
                      return "Resultados";
                    case "patients":
                      return "Pacientes";
                    case "plans":
                      return "Planos";
                    case "reports":
                      return "Relatorios";
                    case "profile":
                      return "Profile";
                    case "settings":
                      return "Settings";
                    default:
                      return route; // Se não corresponder a nenhum caso, apenas retorna a rota
                  }
                })()}
              </Heading>
              <Text marginTop="-10px">
                {(() => {
                  const route = path.split("/")[1];
                  switch (route) {
                    case "dashboard":
                      return "Overview dos seus dados";
                    case "results":
                      return "Resultados dos seus pacientes";
                    case "patients":
                      return "Dados de seus pacientes";
                    case "plans":
                      return "Gerenciamento de seus planos";
                    case "reports":
                      return "Seus Relatorios";
                    case "profile":
                      return "Profile";
                    case "settings":
                      return "Settings";
                    // Adicione mais casos conforme necessário
                    default:
                      return route; // Se não corresponder a nenhum caso, apenas retorna a rota
                  }
                })()}
              </Text>
            </Stack>
          </Stack>

          <InputGroup width="50%" height="50px" alignItems="center">
            <InputRightElement
              marginRight="20px"
              marginTop="5px"
              pointerEvents="none"
            />
            <Input
              backgroundColor="#394447"
              borderRadius="25px"
              color="#F2F2F2"
              placeholder="Pesquisar"
              width="100%"
              height="50px"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              _hover={{ backgroundColor: "#394447" }}
              _active={{ backgroundColor: "#394447" }}
              _focus={{ backgroundColor: "#394447" }}
            />
          </InputGroup>

          <Stack direction="row" alignItems="center" gap={3}>
            <Avatar></Avatar>
            <Stack gap="-10px">
              <Text>Edmauro Goma</Text>
              <Text fontWeight="bold">Hospital Central</Text>
            </Stack>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<IconTriangleInvertedFilled size={10} />}
              />

              <MenuList>
                <MenuItem>Perfil</MenuItem>
                <MenuItem>Suporte</MenuItem>
                <MenuItem color="red">Sair</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Box>

        {showPreview && (
          <Box
            backgroundColor="#394447"
            borderRadius="10px"
            boxShadow="0 4px 20px #24CEDE, 0 1px 3px #24CEDE"
            color="#FFF"
            marginTop="10px"
            padding="10px"
            width="50%"
            height="100px"
            overflowY="auto"
            alignSelf="center"
            zIndex="10"
            position="absolute"
            top="100px"
            left="51.5%"
            transform="translateX(-50%)"
            transition="opacity 0.5s ease-in-out"
            opacity={showPreview ? 1 : 0}
            animation="fade-in 0.5s ease-in-out"
          >
            {searchResults.length > 0 ? (
              searchResults.map((result) => (
                <Text
                  key={result.id}
                  color="#FFF"
                  marginBottom="5px"
                  cursor="p ointer"
                  _hover={{ color: "#24CEDE" }}
                  onClick={() => navigateToSearchResult(result.id)}
                >
                  {result.name ? result.name : result.title}
                </Text>
              ))
            ) : (
              <Text color="#FFF" marginBottom="5px">
                Nenhum resultado encontrado
              </Text>
            )}
          </Box>
        )}

        {children}
      </Flex>
    </Box>
  );
};

export { DrawerMenu };
