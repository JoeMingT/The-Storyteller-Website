import { TeamMemberType } from "@Storyteller/types/sanity/TeamMemberType";
import { groq } from "next-sanity";
import { client } from "../../lib/client";

export async function getAllTeamMembers(): Promise<TeamMemberType[] | null> {
    const query = `*[_type == "teamMembers"] | order(priority desc, _createdAt asc){
      "_id": _id,
      name,
      position,
      "profilePic": image.asset->url
    }`;

    return client ? client.fetch(groq`${query}`) : null;
}
