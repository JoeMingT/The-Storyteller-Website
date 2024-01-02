import { AboutType } from "@Storyteller/types";
import { groq } from "next-sanity";
import { client } from "../../lib/client";

export async function getAboutUsFullText(): Promise<AboutType> {
    const query = `*[_type == "about"][0] {
      "id": _id,
      full
    }`;

    return client.fetch(groq`${query}`);
}
