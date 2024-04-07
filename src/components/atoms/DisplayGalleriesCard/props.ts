import { CardProps } from "@chakra-ui/react";

export interface DisplayGalleriesCardProps extends CardProps {
    imgUrl: string;
    galleryTitle: string;
    galleryUrl: string;
}
