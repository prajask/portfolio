const contentComponent = {
	name: "contentComponent",
	title: "Component",
	type: "object",
	fields: [
		{
			name: "type",
			title: "Type",
			type: "string",
			options: {
				list: [
					{
						title: "Rich Text",
						value: "rich_text",
					},
					{
						title: "Image",
						value: "image",
					},
					{
						title: "Target User",
						value: "target_user",
					},
					{
						title: "Method Summary",
						value: "method_summary",
					},
					{
						title: "Quote",
						value: "quote",
					},
					{
						title: "Metric",
						value: "metric",
					},
					{
						title: "Research Method",
						value: "research_method",
					},
					{
						title: "Key Insight",
						value: "key_insight",
					},
					{
						title: "Insight References",
						value: "insight_references",
					},
					{
						title: "Project Goal",
						value: "project_goal",
					},
				],
			},
		},
		{
			name: "richTextContent",
			title: "Rich Text",
			type: "array",
			of: [{ type: "block" }],
			hidden: (options: { parent: { type?: string } | undefined }) => options.parent?.type != "rich_text",
		},
		{
			name: "image",
			title: "Cover Image",
			type: "image",
			fields: [
				{
					name: "alt",
					title: "Alt",
					type: "string",
				},
			],
			hidden: (options: { parent: { type?: string } | undefined }) => options.parent?.type != "image",
		},
		{
			name: "targetUser",
			title: "Target User",
			type: "targetUser",
			hidden: (options: { parent: { type?: string } | undefined }) => options.parent?.type != "target_user",
		},
		{
			name: "quote",
			title: "Quote",
			type: "quote",
			hidden: (options: { parent: { type?: string } | undefined }) => options.parent?.type != "quote",
		},
		{
			name: "metric",
			title: "Metric",
			type: "metric",
			hidden: (options: { parent: { type?: string } | undefined }) => options.parent?.type != "metric",
		},
		{
			name: "keyInsight",
			title: "Key Insight",
			type: "keyInsight",
			hidden: (options: { parent: { type?: string } | undefined }) => options.parent?.type != "key_insight",
		},
		{
			name: "insightReference",
			title: "Insight References",
			type: "insightReference",
			hidden: (options: { parent: { type?: string } | undefined }) => options.parent?.type != "insight_references",
		},
		{
			name: "researchMethod",
			title: "Research Method",
			type: "researchMethod",
			hidden: (options: { parent: { type?: string } | undefined }) => options.parent?.type != "research_method",
		},
		{
			name: "projectGoal",
			title: "Project Goal",
			type: "projectGoal",
			hidden: (options: { parent: { type?: string } | undefined }) => options.parent?.type != "project_goal",
		},
	],
};

export default contentComponent;
