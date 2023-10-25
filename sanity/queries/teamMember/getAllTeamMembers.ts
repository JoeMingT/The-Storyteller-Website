import { groq } from "next-sanity";
import { client } from "../../lib/client";
import { TeamMemberType } from "@Storyteller/types/sanity/TeamMemberType";

export async function getAllTeamMembers(): Promise<TeamMemberType[]> {
    const query = `*[_type == "teamMembers"] | order(priority desc, _createdAt asc){
      "id": _id,
      name,
      position,
      "profilePic": image.asset->url
    }`;

    return client.fetch(groq`${query}`);
}
