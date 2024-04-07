import { defaultAboutUsData } from "@Storyteller/data/defaultAboutUsData";
import { defaultTeamMembersData } from "@Storyteller/data/defaultTeamMembersData";
import { TeamMemberType } from "@Storyteller/types/sanity/TeamMemberType";
import { OurCompany, OurTeam } from "@StorytellerComponents/organisms";
import {
    getAboutUsFullText,
    getAllTeamMembers,
} from "@StorytellerSanity/queries";
import { GetServerSideProps } from "next";

interface AboutPageProps {
    ourTeamData: TeamMemberType[];
    aboutUsFullText: string;
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
    const { ourTeamData, aboutUsFullText } = props;
    return (
        <>
            <OurCompany aboutUsFullText={aboutUsFullText} />
            <OurTeam ourTeamData={ourTeamData} />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const ourTeamData = await getAllTeamMembers();
    const aboutUsFullText = await getAboutUsFullText();
    const formattedAboutUsText = aboutUsFullText ? aboutUsFullText.full
        // loop through each block
        .map((block) => {
            // if it's not a text block with children,
            // return nothing
            if (block._type !== "block" || !block.children) {
                return "";
            }
            // loop through the children spans, and join the
            // text strings
            return block.children.map((child: any) => child.text).join("");
        })
        // join the paragraphs leaving split by two linebreaks
        .join("\n\n") : defaultAboutUsData.full.body;
    return {
        props: {
            ourTeamData: ourTeamData ? ourTeamData : defaultTeamMembersData,
            aboutUsFullText: formattedAboutUsText,
        },
    };
};
