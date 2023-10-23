import "@Storyteller/styles/globals.css";
import theme from "@Storyteller/theme";
import { Footer, Header } from "@StorytellerComponents/organisms";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>The Storyteller by Joe</title>
                <link
                    rel="icon"
                    href="/assets/favicon/favicon.ico"
                    sizes="any"
                />
                <meta
                    name="keyword"
                    content="TheStoryteller, TheStoryteller by Joe, Tham Joe Ping, Photography, Studio, Photographer, Photographers, Photography Studio, Professional Photography"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <ChakraProvider theme={theme}>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </ChakraProvider>
        </>
    );
}
