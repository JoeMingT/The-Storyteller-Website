import { type SchemaTypeDefinition } from 'sanity'
import { ProjectSchema } from './schemas'

// What table / fields to have
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ProjectSchema],
}
