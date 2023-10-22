import { OurCompany, OurTeam } from "@StorytellerComponents/organisms";

interface AboutPageProps {}

export default function About(props: AboutPageProps) {
    return (
        <>
            <OurCompany />
            <OurTeam />
        </>
    );
}
