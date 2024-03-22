import { client } from "@StorytellerSanity/lib/client";
import { groq } from "next-sanity";

export async function getTotalGalleriesLength(): Promise<any[]> {
    const query = `count(*[_type == "gallery"])`;

    return client.fetch(groq`${query}`);
}
