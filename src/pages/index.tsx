import {
    AboutUs,
    GalleryPreview,
    Splash,
} from "@StorytellerComponents/organisms";
import { getProjects } from "@StorytellerSanity/queries";
import { type GetServerSideProps } from "next";

interface LandingPageProps {
    test: string;
}

export default function Landing({ test }: LandingPageProps) {
    return (
        <>
            <Splash />
            <AboutUs />
            <GalleryPreview />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const data = await getProjects();

    return {
        props: {
            test: "test text",
            data: data,
        },
    };
};
