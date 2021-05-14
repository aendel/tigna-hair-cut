import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  Heading,
  IconButton,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const GITHUB_LINK = "https://github.com/aendel";

export default function Layout({ children }: LayoutProps) {
  const { toggleColorMode, colorMode } = useColorMode();
  const headerBg = useColorModeValue("teal.500", "teal.200");
  const cardBg = useColorModeValue("gray.50", "gray.700");

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="space-between"
      direction="column"
    >
      <Head>
        <title>Shave Your Urls</title>
        <meta
          name="description"
          content="Shave your Urls as like as you would shave your head"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        as="header"
        bg={headerBg}
        w="100%"
        h="8%"
        alignItems="center"
        justifyContent="space-around"
      >
        <Heading>Tigna's Urls Shortener</Heading>
        <IconButton
          onClick={toggleColorMode}
          aria-label="Toggle theme"
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        />
      </Flex>
      <Box as="main" w="95%" boxShadow="lg" p={16} bg={cardBg} borderRadius={8}>
        {children}
      </Box>
      <Flex
        as="footer"
        w="100%"
        h="8%"
        alignItems="center"
        justifyContent="space-evenly"
        direction="column"
      >
        <Divider />
        <Text>
          Coded with ❤️ by{" "}
          <Link href={GITHUB_LINK} isExternal>
            <Heading as="h4" size="l">
              Francesco Vattiato
            </Heading>
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
}
