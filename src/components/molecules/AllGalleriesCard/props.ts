import { CardProps } from "@chakra-ui/react";

export interface AllGalleriesCardProps extends CardProps {
    imgUrl: string;
    galleryTitle: string;
    galleryUrl: string;
}
