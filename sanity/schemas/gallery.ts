const GallerySchema = {
    name: "gallery",
    type: "document",
    title: "Gallery",
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
            // Slugify the "name" field so we can use it as endpoint
            options: { source: "name" },
        },
        {
            name: "thumbnail",
            title: "Thumbnail",
            // For image, check out what other types you can use in docs
            type: "image",
            // Fields inside a field
            // In this case is for the metadata (alt) for the image
            fields: [{ name: "alt", title: "Alt", type: "string" }],
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [
                {
                    name: "image",
                    title: "Image",
                    type: "image",
                },
            ],
        },
    ],
};

export default GallerySchema;
