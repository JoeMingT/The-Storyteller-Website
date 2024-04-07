import { SelectedGalleryType } from "@Storyteller/types/sanity/SelectedGalleryType";
import { groq } from "next-sanity";
import { client } from "../../lib/client";

export async function getSelectedGallery(
    slug: string
): Promise<SelectedGalleryType[] | null> {
    // GROQ Query time
    // * Grabs everything in dataset
    // [] Filter or Query (Conditions)
    // {} Fields that you want from the things you queried
    const query = `*[_type == "gallery" && slug.current == $slug][0]{
        _id,
        name,
        venue,
        "clients": clients[],
        "photographers": photographers[],
        "images": images[] {
            "url": asset->url
        }
    }`;

    return client ? client.fetch(groq`${query}`, { slug }) : null;
}
