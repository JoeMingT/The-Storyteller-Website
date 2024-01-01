import { AboutType } from "@Storyteller/types";
import { groq } from "next-sanity";
import { client } from "../../lib/client";

export async function getAboutUsPreviewText(): Promise<AboutType> {
    const query = `*[_type == "about"][0] {
      "id": _id,
      preview
    }`;

    return client.fetch(groq`${query}`);
}
