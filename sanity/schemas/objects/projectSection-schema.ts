const projectSection = {
	name: "projectSection",
	title: "Section",
	type: "object",
	fields: [
		{
			name: "heading",
			title: "Heading",
			type: "string",
		},
		{
			name: "subHeading",
			title: "Sub Heading",
			type: "string",
		},
		{
			name: "subSections",
			title: "Sub Sections",
			type: "array",
			of: [{ type: "projectSubSection" }],
		},
	],
};

export default projectSection;
