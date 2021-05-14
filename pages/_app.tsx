import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { tealTheme } from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={tealTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
