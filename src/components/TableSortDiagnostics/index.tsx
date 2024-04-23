import { useState } from "react";
import {
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  rem,
  keys,
} from "@mantine/core";
import {
  IconSelector,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons-react";
import classes from "./TableSort.module.css";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CreatePatientModal } from "../create-patient-modal";
import { useRouter } from "next/navigation";

interface RowData {
  name: string;
  email: string;
  company: string;
  result: string;
  doenca: string;
  age: string;
  date: string;
}

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const Icon = sorted
    ? reversed
      ? IconChevronUp
      : IconChevronDown
    : IconSelector;
  return (
    <Table.Th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

function filterData(data: RowData[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
  );
}

function sortData(
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy]);
      }

      return a[sortBy].localeCompare(b[sortBy]);
    }),
    payload.search
  );
}

const data = [
  {
    name: "Athena Weissnat",
    company: "Little - Rippin",
    email: "Elouise.Prohaska@yahoo.com",
    result: "Negativo",
    doenca: "Malaria",
    age: "24",
    date: "12/04/2024",
  },
  {
    name: "Deangelo Runolfsson",
    company: "Greenfelder - Krajcik",
    email: "Kadin_Trantow87@yahoo.com",
    result: "Positivo",
    doenca: "Malaria",
    age: "24",
    date: "12/04/2024",
  },
  {
    name: "Danny Carter",
    company: "Kohler and Sons",
    email: "Marina3@hotmail.com",
    result: "Negativo",
    doenca: "Malaria",
    age: "24",
    date: "12/04/2024",
  },
  {
    name: "Trace Tremblay PhD",
    company: "Crona, Aufderhar and Senger",
    email: "Antonina.Pouros@yahoo.com",
    result: "Negativo",
    doenca: "Malaria",
    age: "24",
    date: "12/04/2024",
  },
  {
    name: "Derek Dibbert",
    company: "Gottlieb LLC",
    email: "Abagail29@hotmail.com",
    result: "Negativo",
    doenca: "Malaria",
    age: "24",
    date: "12/04/2024",
  },
];

export function TableSortDiagnostics() {
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(data, { sortBy, reversed: reverseSortDirection, search: value })
    );
  };

  const router = useRouter();

  const href = "/diagnostic-report/id";

  const handleRoute = async () => {
    await router.push(href);
  };

  const rows = sortedData.map((row) => (
    <Table.Tr key={row.name}>
      <Table.Td>{row.name}</Table.Td>
      <Table.Td>{row.result}</Table.Td>
      <Table.Td>
        <Text>{row.doenca}</Text>
      </Table.Td>
      <Table.Td>{row.age}</Table.Td>
      <Table.Td>{row.date}</Table.Td>
      <Table.Td>
        <Button backgroundColor="transparent">
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<BsThreeDotsVertical size={10} />}
            />

            <MenuList>
              <MenuItem>Ver mais</MenuItem>
            </MenuList>
          </Menu>
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea>
      {/* <Stack
        display="flex"
        height="50px"
        flexDirection="row"
        background="#F7F9FB"
        alignItems="center"
        justifyContent="space-between"
        p="8px"
        mb="10"
        borderRadius="8px"
      >
        <CreatePatientModal />

        <TextInput
          style={{
            alignSelf: "center",
          }}
          placeholder="Search by any field"
          leftSection={
            <IconSearch
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
          value={search}
          onChange={handleSearchChange}
        />
      </Stack> */}
      <Table
        horizontalSpacing="md"
        verticalSpacing="xs"
        miw={700}
        layout="fixed"
        style={{
          marginTop: "10px",
        }}
      >
        <Table.Tbody
          style={{
            backgroundColor: "#F7F9FB",
            borderRadius: "20px",
            border: "1px",
            borderColor: "#E5E7EB",
            "&:hover": {
              backgroundColor: "#F7F9FB",
            },
          }}
        >
          <Table.Tr>
            <Th
              sorted={sortBy === "name"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("name")}
            >
              Nome
            </Th>
            <Th
              sorted={sortBy === "result"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("result")}
            >
              Resultados
            </Th>
            <Th
              sorted={sortBy === "doenca"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("doenca")}
            >
              Doença
            </Th>
            <Th
              sorted={sortBy === "age"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("age")}
            >
              Idade
            </Th>
            <Th
              sorted={sortBy === "date"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("date")}
            >
              Data
            </Th>
            <Th
              sorted={sortBy === "date"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("date")}
            >
              Ação
            </Th>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td colSpan={Object.keys(data[0]).length}>
                <Text fw={500} ta="center">
                  Nothing found
                </Text>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
