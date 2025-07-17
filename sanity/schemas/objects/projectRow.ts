const projectRow = {
	name: "projectRow",
	title: "Row",
	type: "object",
	fields: [
		{
			name: "columns",
			title: "Columns",
			type: "array",
			of: [{ type: "projectColumn" }],
		},
	],
};

export default projectRow;
