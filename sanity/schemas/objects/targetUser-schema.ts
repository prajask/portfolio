const targetUser = {
	name: "targetUser",
	title: "Target User",
	type: "object",
	fields: [
		{
			name: "avatar",
			title: "Avatar",
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
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "background",
			title: "Background",
			type: "string",
		},
		{
			name: "quote",
			title: "Quote",
			type: "string",
		},
	],
};

export default targetUser;
