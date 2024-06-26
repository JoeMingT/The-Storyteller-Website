import { ThumbnailGalleryType } from "@Storyteller/types";

export interface AllGalleriesProps {
    noOfPages: number;
    initialData: ThumbnailGalleryType[];
    itemsPerPage: number;
    initialPage: number;
}
