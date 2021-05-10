import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Layout({ children }) {
  const { toggleColorMode, colorMode } = useColorMode();
  const headerBg = useColorModeValue("teal.500", "teal.200");
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
        w="100%"
        h="8%"
        bg={headerBg}
        alignItems="center"
        justifyContent="space-around"
      >
        <Heading colorScheme="teal">Tigna's Urls Shortener</Heading>
        <IconButton
          colorScheme="teal"
          onClick={toggleColorMode}
          aria-label="Toggle theme"
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        />
      </Flex>
      {children}
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Flex>
  );
}
