const projectSubSection = {
	name: "projectSubSection",
	title: "Sub Section",
	type: "object",
	fields: [
		{
			name: "projectRows",
			title: "Row",
			type: "array",
            of: [{type: "projectRow"}]
		},
	],
};

export default projectSubSection;
