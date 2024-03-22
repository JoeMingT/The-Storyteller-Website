import { ThumbnailGalleryType } from "@Storyteller/types";
import { client } from "@StorytellerSanity/lib/client";
import { groq } from "next-sanity";

export async function getQueriedGalleriesThumbnail(
    itemsPerPage: number,
    page: number,
    searchQuery: string[]
): Promise<ThumbnailGalleryType[]> {
    const offSet = itemsPerPage * page;
    let startIndex = offSet;
    let endIndex = startIndex + itemsPerPage;

    // Repeat the "name match X" with an "||" (OR) operator to mimic a "Fuzzy search" instead of a "Full-text match"
    // Meaning instead of a gallery must match all the words that the user provides, even partial matching will provide results.
    let matchStr = "";
    for (const word of searchQuery) {
        const filteredWord = word.replace(/\\/g, "");
        matchStr += `name match "${
            filteredWord !== "" ? filteredWord : "null"
        }"`;
        if (word !== searchQuery[searchQuery.length - 1]) {
            matchStr += " || ";
        }
    }

    const query = `*[_type == "gallery"] | score(${matchStr}) | order(_score desc) {
      _id,
      name,
      "slug": slug.current,
      "thumbnail": thumbnail.asset->url,
      "score": _score
    } [score > 0] [$startIndex...$endIndex]`;

    return client.fetch(groq`${query}`, { startIndex, endIndex });
}
