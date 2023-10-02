import { OurCompany, OurTeam } from "@StorytellerComponents/organisms";
import { getProjects } from "@StorytellerSanity/queries";
import { type GetServerSideProps } from "next";

interface AboutPageProps {
    test: string;
}

export default function About({ test }: AboutPageProps) {
    return (
        <>
            <OurCompany />
            <OurTeam />
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
