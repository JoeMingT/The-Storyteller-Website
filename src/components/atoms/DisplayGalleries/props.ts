import { ThumbnailGalleryType } from "@Storyteller/types";

export interface DisplayGalleriesProps {
    noOfPages: number;
    initialData: ThumbnailGalleryType[];
    itemsPerPage: number;
    initialPage: number;
}
