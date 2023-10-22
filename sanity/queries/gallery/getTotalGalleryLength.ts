import { client } from "@StorytellerSanity/lib/client";
import { groq } from "next-sanity";

export async function getTotalGalleryLength(): Promise<any[]> {
    const query = `count(*[_type == "gallery"])`;

    return client.fetch(groq`${query}`);
}
