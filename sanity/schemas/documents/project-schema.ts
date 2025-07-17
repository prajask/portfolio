const project = {
	name: "project",
	title: "Projects",
	type: "document",
	fields: [
		{
			name: "order",
			title: "Order",
			type: "number",
		},
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
			},
		},
		{
			name: "description",
			title: "Description",
			type: "string",
		},
		{
			name: "coverImage",
			title: "Cover Image",
			type: "image",
			fields: [
				{
					name: "alt",
					title: "Alt",
					type: "string",
				},
			],
		},
		{
			name: "tags",
			title: "Tags",
			type: "array",
			of: [{ type: "string" }],
		},
		{
			name: "color",
			title: "Color",
			type: "string",
		},
		{
			name: "team",
			title: "Team",
			type: "array",
			of: [{ type: "string" }],
		},
		{
			name: "duration",
			title: "Duration",
			type: "string",
		},
		{
			name: "tools",
			title: "Tools",
			type: "array",
			of: [{ type: "projectTool" }],
		},
		{
			name: "skills",
			title: "Skills",
			type: "array",
			of: [{ type: "string" }],
		},
		{
			name: "prototypeLinks",
			title: "Prototype Links",
			type: "array",
			of: [{ type: "prototypeLink" }],
		},
		{
			name: "content",
			title: "Content",
			type: "array",
			of: [{ type: "projectSection" }],
		},
	],
};

export default project;
