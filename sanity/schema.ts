import { type SchemaTypeDefinition } from "sanity";
import { GallerySchema } from "./schemas";

// What table / fields to have
export const schema: { types: SchemaTypeDefinition[] } = {
    types: [GallerySchema],
};
