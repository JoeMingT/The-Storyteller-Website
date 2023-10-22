import { groq } from "next-sanity";
import { client } from "../lib/client";

export async function getGalleries(
    slug: string,
    itemsPerPage: number,
    page: number
): Promise<any[]> {
    const offSet = itemsPerPage * page;
    let startIndex = offSet;
    let endIndex = startIndex + itemsPerPage;

    // GROQ Query time
    // * Grabs everything in dataset
    // [] Filter or Query (Conditions)
    // {} Fields that you want from the things you queried
    const query = `*[_type == "gallery" && slug.current == $slug] | order(_createdAt desc) [$startIndex...$endIndex]{
        _id,
        name,
        "slug": slug.current,
        "thumbnail": thumbnail.asset->url,
    }`;

    return client.fetch(groq`${query}`, { startIndex, endIndex, slug });
}
