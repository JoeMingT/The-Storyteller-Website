import { AboutType } from "@Storyteller/types";
import { groq } from "next-sanity";
import { client } from "../../lib/client";

export async function getAboutUsFullText(): Promise<AboutType | null> {
    const query = `*[_type == "about"][0] {
      "_id": _id,
      full
    }`;

    return client ? client.fetch(groq`${query}`) : null;
}
