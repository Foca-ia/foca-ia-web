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
import { BsPlus, BsTrash } from "react-icons/bs";
import { CreatePatientModal } from "../create-patient-modal";
import { useParams, useRouter } from "next/navigation";
import { PatientRecordModal } from "../patient-record-modal";

interface RowData {
  id: string;
  name: string;
  morada: string;
  naturalidade: string;
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

export function TableSortPatients({ data }: { data: any[] }) {
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

  const params = useParams();

  const handleRoute = async (href: any) => {
    await router.push(href);
  };

  console.log(data);

  const rows = data.map((row) => (
    <Table.Tr key={row.patient_id}>
      <Table.Td>
        <Button
          fontWeight="normal"
          onClick={() => handleRoute(`/patients-profile/${row.patient_id}`)}
          bgColor="white"
        >
          {row.name}
        </Button>
      </Table.Td>
      <Table.Td>{row.morada}</Table.Td>
      <Table.Td>{row.naturalidade}</Table.Td>
      <Table.Td>
        <PatientRecordModal id={row.patient_id} />
      </Table.Td>
      <Table.Td>
        <Button leftIcon={<BsTrash color="red" />}>Delete</Button>
      </Table.Td>
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
      <Table horizontalSpacing="md" verticalSpacing="xs" layout="fixed">
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
              sorted={sortBy === "morada"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("morada")}
            >
              Email
            </Th>
            <Th
              sorted={sortBy === "naturalidade"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("naturalidade")}
            >
              Naturalidade
            </Th>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td colSpan={Object.keys(data).length}>
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
