import { TeamMemberType } from "@Storyteller/types/sanity/TeamMemberType";
import { OurCompany, OurTeam } from "@StorytellerComponents/organisms";
import { getAllTeamMembers } from "@StorytellerSanity/queries";
import { GetServerSideProps } from "next";

interface AboutPageProps {
    ourTeamData: TeamMemberType[];
}

/**
 * Route: "/about"
 *
 * Components Related: "OurCompany", "OurTeam"
 *
 * This is the about page component. It provides more details regarding the company and the team behind the company. Meant to be informative for users to find our more
 * about the companies achievements, visions and missions, and the person in charge.
 */
export default function About(props: AboutPageProps) {
    const { ourTeamData } = props;

    return (
        <>
            <OurCompany />
            <OurTeam ourTeamData={ourTeamData} />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const ourTeamData = await getAllTeamMembers();

    return {
        props: {
            ourTeamData,
        },
    };
};
