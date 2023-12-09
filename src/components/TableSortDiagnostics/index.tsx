import { useState } from "react";
import {
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
  rem,
  keys,
} from "@mantine/core";
import {
  IconSelector,
  IconChevronDown,
  IconChevronUp,
  IconSearch,
} from "@tabler/icons-react";
import classes from "./TableSort.module.css";
import { Box, Button, Stack } from "@chakra-ui/react";
import { BsPlus } from "react-icons/bs";
import { CreatePatientModal } from "../create-patient-modal";
import { useRouter } from "next/navigation";

interface RowData {
  name: string;
  email: string;
  company: string;
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
  },
  {
    name: "Deangelo Runolfsson",
    company: "Greenfelder - Krajcik",
    email: "Kadin_Trantow87@yahoo.com",
  },
  {
    name: "Danny Carter",
    company: "Kohler and Sons",
    email: "Marina3@hotmail.com",
  },
  {
    name: "Trace Tremblay PhD",
    company: "Crona, Aufderhar and Senger",
    email: "Antonina.Pouros@yahoo.com",
  },
  {
    name: "Derek Dibbert",
    company: "Gottlieb LLC",
    email: "Abagail29@hotmail.com",
  },
  {
    name: "Viola Bernhard",
    company: "Funk, Rohan and Kreiger",
    email: "Jamie23@hotmail.com",
  },
  {
    name: "Austin Jacobi",
    company: "Botsford - Corwin",
    email: "Genesis42@yahoo.com",
  },
  {
    name: "Hershel Mosciski",
    company: "Okuneva, Farrell and Kilback",
    email: "Idella.Stehr28@yahoo.com",
  },
  {
    name: "Mylene Ebert",
    company: "Kirlin and Sons",
    email: "Hildegard17@hotmail.com",
  },
  {
    name: "Lou Trantow",
    company: "Parisian - Lemke",
    email: "Hillard.Barrows1@hotmail.com",
  },
  {
    name: "Dariana Weimann",
    company: "Schowalter - Donnelly",
    email: "Colleen80@gmail.com",
  },
  {
    name: "Dr. Christy Herman",
    company: "VonRueden - Labadie",
    email: "Lilyan98@gmail.com",
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
      <Table.Td>
        <Button
          fontWeight="normal"
          onClick={() => handleRoute()}
          bgColor="white"
        >
          {row.name}
        </Button>
      </Table.Td>
      <Table.Td>{row.email}</Table.Td>
      <Table.Td>{row.company}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea>
      <Stack
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
      </Stack>
      <Table
        horizontalSpacing="md"
        verticalSpacing="xs"
        miw={700}
        layout="fixed"
      >
        <Table.Tbody>
          <Table.Tr>
            <Th
              sorted={sortBy === "name"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("name")}
            >
              Name
            </Th>
            <Th
              sorted={sortBy === "email"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("email")}
            >
              Email
            </Th>
            <Th
              sorted={sortBy === "company"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("company")}
            >
              Company
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
