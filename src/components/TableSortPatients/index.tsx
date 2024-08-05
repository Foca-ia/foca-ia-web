import { useState, useEffect } from "react";
import {
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
  rem,
} from "@mantine/core";
import {
  IconSelector,
  IconChevronDown,
  IconChevronUp,
  IconSearch,
} from "@tabler/icons-react";
import classes from "./TableSort.module.css";
import { Button, Stack } from "@chakra-ui/react";
import { BsPlus, BsTrash } from "react-icons/bs";
import { CreatePatientModal } from "../create-patient-modal";
import { useRouter } from "next/navigation";
import { IPatient } from "@/services/types";

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

function filterData(data: IPatient[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    Object.keys(item).some((key) => {
      const keyValue = item[key as keyof IPatient];
      if (typeof keyValue === "string") {
        return keyValue.toLowerCase().includes(query);
      }
      return false; // Handle other types as needed
    })
  );
}

function sortData(
  data: IPatient[],
  payload: { sortBy: keyof IPatient | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return String(b[sortBy]).localeCompare(String(a[sortBy]));
      }
      return String(a[sortBy]).localeCompare(String(b[sortBy]));
    }),
    payload.search
  );
}

export const TableSortPatients: React.FC<{ data: IPatient[] }> = ({ data }) => {
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof IPatient | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  useEffect(() => {
    setSortedData(data); // Update sortedData when data changes
  }, [data]);

  const setSorting = (field: keyof IPatient) => {
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

  const handleRoute = async (href: any) => {
    await router.push(href);
  };

  const rows = sortedData ? (
    sortedData.map((row) => (
      <Table.Tr key={row.id}>
        <Table.Td>
          <Button
            fontWeight="normal"
            onClick={() => handleRoute(`/patients-profile/${row.id}`)}
            bgColor="white"
          >
            {row.name}
          </Button>
        </Table.Td>
        <Table.Td>{row.email}</Table.Td>
        <Table.Td>{row.address}</Table.Td>
        <Table.Td>
          <Button leftIcon={<BsTrash color="red" />}>Delete</Button>
        </Table.Td>
      </Table.Tr>
    ))
  ) : (
    <Table.Tr>
      <Table.Td colSpan={0}>
        <Text fw={500} ta="center">
          Nothing found
        </Text>
      </Table.Td>
    </Table.Tr>
  );

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
        marginTop={"50px"}
      >
        <CreatePatientModal />

        <TextInput
          style={{
            alignSelf: "center",
          }}
          placeholder="Pesquisar"
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
              sorted={sortBy === "email"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("email")}
            >
              Email
            </Th>
            <Th
              sorted={sortBy === "address"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("address")}
            >
              Address
            </Th>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
};
