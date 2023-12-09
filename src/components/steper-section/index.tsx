"use client";
import React from "react";
import {
  Box,
  Heading,
  Stack,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";

import databaseImage from "../../../public/assets/images/database.png";
import analystImage from "../../../public/assets/images/analisys.png";
import chartImage from "../../../public/assets/images/chart.png";
import doencImage from "../../../public/assets/images/doenc.png";
import diagnosImage from "../../../public/assets/images/diagnos.png";

import { Slide } from "react-awesome-reveal";

export function SteperComponent() {
  const [isSmallerThanMd] = useMediaQuery("(max-width: 48em)");

  return (
    <Stack alignSelf="center" mt="100px" h="200vh">
      <Heading mb="20px" fontSize={["xl", "2xl", "3xl"]}>
        Como funciona o processo de diagnóstico
      </Heading>
      <Stepper index={0} orientation="vertical" height="auto" gap="30px">
        <Step>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Slide>
            <Stack
              display="flex"
              alignSelf="center"
              gap={isSmallerThanMd ? "10px" : "40px"}
              flexWrap="wrap"
              flexDirection="row"
            >
              <Image
                alt="database ilustration"
                src={databaseImage}
                width={isSmallerThanMd ? 300 : 500}
                height={isSmallerThanMd ? 100 : 150}
                quality={100}
              />

              <Box
                flexShrink="0"
                width={isSmallerThanMd ? "100%" : "400px"}
                mt={isSmallerThanMd ? "10px" : "30px"} // Ajustado o espaçamento
              >
                <StepTitle
                  style={{
                    fontSize: isSmallerThanMd ? "16px" : "20px",
                    fontWeight: "600",
                  }}
                >
                  Coleta de Dados Iniciais
                </StepTitle>
                <StepDescription
                  style={{
                    fontSize: isSmallerThanMd ? "12px" : "14px",
                  }}
                >
                  Começamos entendendo você. Através de um questionário online
                  intuitivo, você fornece informações sobre seus sintomas,
                  histórico médico e outros detalhes relevantes, criando a base
                  para uma análise personalizada.
                </StepDescription>
              </Box>
            </Stack>
          </Slide>

          <StepSeparator />
        </Step>

        <Step>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Slide>
            <Stack
              display="flex"
              alignSelf="center"
              gap={isSmallerThanMd ? "10px" : "40px"}
              flexWrap="wrap"
              flexDirection="row"
            >
              <Image
                alt="database ilustration"
                src={analystImage}
                width={isSmallerThanMd ? 350 : 350}
                height={isSmallerThanMd ? 100 : 100}
                quality={100}
              />

              <Box
                flexShrink="0"
                width={isSmallerThanMd ? "100%" : "400px"}
                mt={isSmallerThanMd ? "10px" : "30px"} // Ajustado o espaçamento
              >
                <StepTitle
                  style={{
                    fontSize: isSmallerThanMd ? "16px" : "20px",
                    fontWeight: "600",
                  }}
                >
                  Análise de Dados Clínicos
                </StepTitle>
                <StepDescription
                  style={{
                    fontSize: isSmallerThanMd ? "12px" : "14px",
                  }}
                >
                  Nossos algoritmos de inteligência artificial entram em ação,
                  processando suas informações clínicas. Eles exploram padrões,
                  correlações e tendências nos dados para formar uma compreensão
                  inicial dos seus sintomas.
                </StepDescription>
              </Box>
            </Stack>
          </Slide>

          <StepSeparator />
        </Step>

        <Step>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Slide>
            <Stack
              display="flex"
              alignSelf="center"
              gap={isSmallerThanMd ? "10px" : "40px"}
              flexWrap="wrap"
              flexDirection="row"
            >
              <Image
                alt="database ilustration"
                src={doencImage}
                width={isSmallerThanMd ? 200 : 500}
                height={isSmallerThanMd ? 100 : 150}
                quality={100}
              />

              <Box
                flexShrink="0"
                width={isSmallerThanMd ? "100%" : "400px"}
                mt={isSmallerThanMd ? "10px" : "30px"} // Ajustado o espaçamento
              >
                <StepTitle
                  style={{
                    fontSize: isSmallerThanMd ? "16px" : "20px",
                    fontWeight: "600",
                  }}
                >
                  Integração com Bancos de Dados Médicos
                </StepTitle>
                <StepDescription
                  style={{
                    fontSize: isSmallerThanMd ? "12px" : "14px",
                  }}
                >
                  Amplificamos a análise, integrando nossa plataforma a bancos
                  de dados médicos, garantindo que tenhamos acesso às
                  informações mais recentes sobre condições médicas e
                  tratamentos.
                </StepDescription>
              </Box>
            </Stack>
          </Slide>

          <StepSeparator />
        </Step>

        <Step>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Slide>
            <Stack
              display="flex"
              alignSelf="center"
              gap={isSmallerThanMd ? "10px" : "40px"}
              flexWrap="wrap"
              flexDirection="row"
            >
              <Image
                alt="chart ilustration"
                src={chartImage}
                width={isSmallerThanMd ? 300 : 500}
                height={isSmallerThanMd ? 100 : 150}
                quality={100}
              />

              <Box
                flexShrink="0"
                width={isSmallerThanMd ? "100%" : "400px"}
                mt={isSmallerThanMd ? "10px" : "30px"} // Ajustado o espaçamento
              >
                <StepTitle
                  style={{
                    fontSize: isSmallerThanMd ? "16px" : "20px",
                    fontWeight: "600",
                  }}
                >
                  Aplicação de Algoritmos de Aprendizado de Máquina
                </StepTitle>
                <StepDescription
                  style={{
                    fontSize: isSmallerThanMd ? "12px" : "14px",
                  }}
                >
                  A magia acontece com algoritmos de aprendizado de máquina que
                  continuamente refinam a precisão do diagnóstico. Eles aprendem
                  com novos dados, ajustando-se e evoluindo para oferecer
                  resultados cada vez mais confiáveis
                </StepDescription>
              </Box>
            </Stack>
          </Slide>

          <StepSeparator />
        </Step>

        <Step>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Slide>
            <Stack
              display="flex"
              alignSelf="center"
              gap={isSmallerThanMd ? "10px" : "40px"}
              flexWrap="wrap"
              flexDirection="row"
            >
              <Image
                alt="diagno ilustration"
                src={diagnosImage}
                width={isSmallerThanMd ? 300 : 500}
                height={isSmallerThanMd ? 100 : 150}
                quality={100}
              />

              <Box
                flexShrink="0"
                width={isSmallerThanMd ? "100%" : "400px"}
                mt={isSmallerThanMd ? "10px" : "30px"} // Ajustado o espaçamento
              >
                <StepTitle
                  style={{
                    fontSize: isSmallerThanMd ? "16px" : "20px",
                    fontWeight: "600",
                  }}
                >
                  Geração de Hipóteses de Diagnóstico
                </StepTitle>
                <StepDescription
                  style={{
                    fontSize: isSmallerThanMd ? "12px" : "14px",
                  }}
                >
                  Com base na análise, geramos hipóteses de diagnóstico,
                  destacando possíveis condições médicas associadas aos seus
                  sintomas
                </StepDescription>
              </Box>
            </Stack>
          </Slide>

          <StepSeparator />
        </Step>
      </Stepper>
    </Stack>
  );
}
