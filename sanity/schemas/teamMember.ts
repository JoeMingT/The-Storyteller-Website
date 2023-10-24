const TeamMemberSchema = {
    name: "teamMembers",
    type: "document",
    title: "Team Members",
    fields: [
        { name: "name", title: "Member's Name", type: "string" },
        {
            name: "position",
            title: "Member's Position",
            type: "string",
        },
        {
            name: "priority",
            title: "Position Priority (Higher Number, Higher Priority. Same Priority, First Created will be displayed first)",
            type: "number",
        },
        {
            name: "image",
            title: "Member's Profile Picture",
            type: "image",
        },
    ],
};

export default TeamMemberSchema;
