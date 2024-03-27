import { ThumbnailGalleryType } from "@Storyteller/types";
import { groq } from "next-sanity";
import { client } from "../../lib/client";

export async function getAllGalleriesThumbnail(
    itemsPerPage: number,
    page: number
): Promise<ThumbnailGalleryType[]> {
    const offSet = itemsPerPage * page;
    let startIndex = offSet;
    let endIndex = startIndex + itemsPerPage;

    const query = `*[_type == "gallery"] | order(_createdAt desc) [$startIndex...$endIndex]{
        _id,
        name,
        "slug": slug.current,
        "thumbnail": thumbnail.asset->url,
    }`;

    return client.fetch(groq`${query}`, { startIndex, endIndex });
}
