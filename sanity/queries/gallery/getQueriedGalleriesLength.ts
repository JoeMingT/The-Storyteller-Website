import { client } from "@StorytellerSanity/lib/client";
import { groq } from "next-sanity";

export async function getQueriedGalleriesLength(
    searchQuery: string[]
): Promise<any[]> {
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

    const query = `count(
      *[_type == "gallery"] | score(${matchStr}) | order(_score desc) {
        _id,
        name,
        "slug": slug.current,
        "thumbnail": thumbnail.asset->url,
        "score": _score
      } [score > 0]
    )`;

    return client.fetch(groq`${query}`, { searchQuery });
}
