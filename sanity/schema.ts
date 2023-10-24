import { type SchemaTypeDefinition } from "sanity";
import { GallerySchema, TeamMemberSchema } from "./schemas";

// What table / fields to have
export const schema: { types: SchemaTypeDefinition[] } = {
    types: [GallerySchema, TeamMemberSchema],
};
