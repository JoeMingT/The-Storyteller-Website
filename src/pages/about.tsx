import { OurCompany, OurTeam } from "@StorytellerComponents/organisms";

interface AboutPageProps {}

/**
 * Route: "/about"
 *
 * Components Related: "OurCompany", "OurTeam"
 *
 * This is the about page component. It provides more details regarding the company and the team behind the company. Meant to be informative for users to find our more
 * about the companies achievements, visions and missions, and the person in charge.
 */
export default function About(props: AboutPageProps) {
    return (
        <>
            <OurCompany />
            <OurTeam />
        </>
    );
}
