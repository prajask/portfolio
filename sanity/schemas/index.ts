import project from "./documents/project-schema";
import socialLinks from "./documents/socialLink-schema";
import projectColumn from "./objects/projectColumn-schema";
import contentComponent from "./objects/contentComponent-schema";
import icon from "./objects/reactIcon-shema";
import projectSection from "./objects/projectSection-schema";
import projectSubSection from "./objects/projectSubsection-schema";
import projectTool from "./objects/projectTool-schema";
import projectRow from "./objects/projectRow";
import targetUser from "./objects/targetUser-schema";
import quoteSchema from "./objects/quote-schema";
import metric from "./objects/metric-schema";
import keyInsight from "./objects/keyInsight-schema";
import insightReference from "./objects/insightReference-schema";
import researchMethod from "./objects/researchMethod-schema";
import projectGoal from "./objects/projectGoal-schema";
import prototypeLink from "./objects/prototypeLink";
import callout from "./objects/callout-schema";

const documentSchemas = [project, socialLinks];
const objectSchemas = [
	projectSection,
	projectSubSection,
	projectRow,
	projectColumn,
	projectTool,
	icon,
	contentComponent,
	targetUser,
	researchMethod,
	quoteSchema,
	metric,
	keyInsight,
	insightReference,
	projectGoal,
	prototypeLink,
	callout
];

const schemas = [...documentSchemas, ...objectSchemas];

export default schemas;
