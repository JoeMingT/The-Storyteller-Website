import { CardProps } from "@chakra-ui/react";

export interface OurTeamCardProps extends CardProps {
    name: string;
    companyPos: string;
    imgUrl: string;
}
