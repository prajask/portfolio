const insightReference = {
	name: "insightReference",
	title: "Insight Reference",
	type: "object",
	fields: [
		{
			name: "reference",
			title: "References",
			type: "array",
			of: [
				{
					name: "referenceItem",
					title: "Reference Item",
					type: "object",
					fields: [
						{
							name: "icon",
							title: "Icon",
							type: "icon",
						},
						{
							name: "tag",
							title: "Tag",
							type: "string",
						},
					],
				},
			],
		},
	],
};

export default insightReference;
