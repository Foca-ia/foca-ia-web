"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

import Link from "next/link";
import { BsChevronLeft } from "react-icons/bs";
import { API } from "@/services/api";
import { useRouter } from "next/navigation";

const About = () => {
  return (
    <Flex color="white" w="100%" h="100%">
      About
    </Flex>
  );
};

export default About;
