const AboutSchema = {
    name: "about",
    type: "document",
    title: "About",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "preview",
            title: "Preview About Us Text",
            // For Rich Text, if not cannot do rich text
            type: "array",
            of: [
                {
                    type: "block",
                },
            ],
        },
        {
            name: "full",
            title: "Full About Us Text",
            // For Rich Text, if not cannot do rich text
            type: "array",
            of: [{ type: "block" }],
        },
    ],
};

export default AboutSchema;
