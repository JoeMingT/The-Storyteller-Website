import { type SchemaTypeDefinition } from "sanity";
import { AboutSchema, GallerySchema, TeamMemberSchema } from "./schemas";

// What table / fields to have
export const schema: { types: SchemaTypeDefinition[] } = {
    types: [GallerySchema, TeamMemberSchema, AboutSchema],
};
