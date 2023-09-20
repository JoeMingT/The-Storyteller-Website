const ProjectSchema = {
    name: "project",
    type: "document",
    title: "Project",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            // Built-in slug type
            type: "slug",
            // Slugify the name so we can use it as endpoint
            options: { source: "name" },
        },
        {
            name: "image",
            title: "Image",
            // For image, check out what other types you can use in docs
            type: "image",
            // Allow zooming in studio
            options: { hotspot: true },
            // Fields inside a field
            // In this case is for the metadata (alt) for the image
            fields: [{ name: "alt", title: "Alt", type: "string" }],
        },
        {
            name: "url",
            title: "URL",
            type: "url",
        },
        {
            name: "content",
            title: "Content",
            // For Rich Text, if not cannot do rich text
            type: "array",
            of: [{ type: "block" }],
        },
    ],
};

export default ProjectSchema;
