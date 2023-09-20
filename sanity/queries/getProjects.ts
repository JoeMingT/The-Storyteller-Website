import { groq } from "next-sanity";
import { client } from "../lib/client";

export async function getProjects() {
  // GROQ Query time
  // * Grabs everything in dataset
  // [] Filter or Query (Conditions)
  // {} Fields that you want from the things you queried
  const query = `*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content
  }`

  // Slug is weird because it's slug type
  return client.fetch(groq`${query}`)
}