import { ParsedUrlQuery } from "querystring";
import { AllGalleriesProps } from "../AllGalleries/props";

export interface GallerySearchPageProps extends AllGalleriesProps {
    queryParams: ParsedUrlQuery;
}
