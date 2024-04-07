import { AboutType } from "@Storyteller/types";
import { groq } from "next-sanity";
import { client } from "../../lib/client";

export async function getAboutUsPreviewText(): Promise<AboutType | null> {
    const query = `*[_type == "about"][0] {
      "_id": _id,
      preview
    }`;

    return client ? client.fetch(groq`${query}`) : null;
}
