import { client } from "@StorytellerSanity/lib/client";
import { groq } from "next-sanity";

export async function getTotalGalleriesLength(): Promise<any[] | null> {
    const query = `count(*[_type == "gallery"])`;

    return client ? client.fetch(groq`${query}`) : null;
}
