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
                <title>The Storyteller Studio Malaysia</title>
                <link
                    rel="icon"
                    href="/assets/favicon/favicon.ico"
                    sizes="any"
                />
                <meta
                    name="keyword"
                    content="The Storyteller Studio Malaysia, TheStoryteller Malaysia, The Storyteller Malaysia, TheStorytellerStudios Malaysia, TheStoryteller, TheStoryteller Studios, TheStorytellerStudios, TheStoryteller by Joe, The Storyteller by Joe, The Storyteller Studios by Joe, Tham Joe Ping, Photography, Studio, Photographer, Photographers, Photography Studio, Professional Photography, Videographer, Videography, Professional Videography, Video Editing, Photo Editing, Wedding Photos, Graduation Photos, Malaysia, Selangor, Kuala Lumpur, Johor, Singapore, Professional Services"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    name="description"
                    content="The Storyteller Studio Malaysia is a Photography and Videography studio that provides a variety of photography and videography services for weddings, graduations, portraits, events, and more for clients located in Malaysia mainly in Melaka, Johor Bahru, Kuala Lumpur, and Singapore. We also provide services such as video editing for wedding, photos editing and graduation robe rental. Founded in 2017, the company is lead by Joe who has more than 10 years of experience in photography and videography. We are looking forward to capture your memorable moments!"
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
