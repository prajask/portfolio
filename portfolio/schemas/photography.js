export default {
    name: "photography",
    title: "Photography",
    type: "document",
    fields: [
        {
            name: "photo",
            title: "Photo",
            type: "image",
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: "location",
            title: "Location",
            type: "object",
            fields: [
                { name: "name", title: "Name", type: "string" },
                { name: "link", title: "Link", type: "url" }
            ]
        },
        {
            name: "featured",
            title: "Featured",
            type: "boolean"
        }
    ]
}