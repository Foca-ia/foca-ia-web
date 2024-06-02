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
import Image from "next/image";
import { BsHeart, BsThreeDots } from "react-icons/bs";

import BarChartComponent from "@/components/column-chart";
import logo from "../../../../public/assets/images/logo.png";
import StackedAreaChartComponent from "@/components/LineAreaChart";
import { TableSortPatients } from "@/components/TableSortPatients";
import Link from "next/link";
import { TableSortDiagnostics } from "@/components/TableSortDiagnostics";
import { DrawerMenu } from "@/components/Navbar/screen";
import Footer from "@/components/footer";

function Reports() {
  return (
    <Flex>
      <DrawerMenu>
        <TableSortDiagnostics />

        <Footer />
      </DrawerMenu>
    </Flex>
  );
}

export default Reports;
