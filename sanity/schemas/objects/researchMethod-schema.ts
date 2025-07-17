const researchMethod = {
	name: "researchMethod",
	title: "Research Method",
	type: "object",
	fields: [
		{
			name: "goal",
			title: "Goal",
			type: "string",
		},
		{
			name: "method",
			title: "Method",
			type: "object",
			fields: [
				{
					name: "icon",
					title: "Icon",
					type: "icon",
				},
				{
					name: "method",
					title: "Method",
					type: "string",
				},
			],
		},
		{
			name: "resources",
			title: "Resources",
			type: "object",
			fields: [
				{
					name: "icon",
					title: "Icon",
					type: "icon",
				},
				{
					name: "resources",
					title: "Resources",
					type: "string",
				},
			],
		},
		{
			name: "image",
			title: "Image",
			type: "image"
		},
		{
			name: "keyInsights",
			title: "Key Insights",
			type: "array",
			of: [{ type: "keyInsight" }]
		}
	],
};

export default researchMethod;
