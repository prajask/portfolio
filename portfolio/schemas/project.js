export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
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
            name: "main_image",
            title: "Main Image",
            type: "image",
        },
        {
            name: "description",
            title: "Description",
            type: "text"
        },
        {
            name: "body",
            title: "Body",
            type: "blockContent"
        },
    ]
}