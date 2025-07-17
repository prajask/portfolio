const projectColumn = {
	name: "projectColumn",
	title: "Column",
	type: "object",
	fields: [
		{
			name: "width",
			title: "Width",
			type: "number",
		},
		{
			name: "contentComponents",
			title: "Components",
			type: "array",
			of: [{ type: "contentComponent" }],
		},
	],
};

export default projectColumn;
