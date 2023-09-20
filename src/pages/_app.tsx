import "@Storyteller/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="/assets/favicon/favicon.ico" sizes="any" />
            </Head>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}
