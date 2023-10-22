import { ThumbnailGalleryType } from "@Storyteller/types";

export interface AllGalleriesContentProps {
    noOfPages: number;
    initialData: ThumbnailGalleryType[];
    itemsPerPage: number;
    initialPage: number;
}
