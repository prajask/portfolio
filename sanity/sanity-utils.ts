import { Project } from "@/types/Project";
import { ProjectCardData } from "@/types/componentData/ProjectCardData";
import { createClient, groq } from "next-sanity";
import clientConfig from "./schemas/config/client-config";
import { SocialLink } from "@/types/SocialLink";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImage } from "@/types/SanityImage";

export function urlFor(source: SanityImage) {
	const builder = imageUrlBuilder(clientConfig);
	return builder.image(source).url();
}

export async function getProjects(): Promise<ProjectCardData[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type=="project"] | order(order asc){
            _id,
            name,
            description,
            "slug": slug.current,
            "image": coverImage.asset->url,
            color,
            tags
        }`
	);
}

export async function getProjectContent(slug: string): Promise<Project> {
	return createClient(clientConfig).fetch(
		groq`*[_type=="project" && slug.current==$slug][0]{
            _id,
            name,
            description,
            tags,
            "image": coverImage.asset->url,
            color,
            team,
            duration,
            tools,
            skills,
            prototypeLinks,
            content
        }`,
		{ slug }
	);
}

export async function getSocialLinks(): Promise<SocialLink[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type=="socialLink"]{
            _id,
            name,
            url,
            icon
        }`
	);
}

export async function getResumeLink(): Promise<SocialLink> {
	return createClient(clientConfig).fetch(
		groq`*[_type=="socialLink" && name=="Resume"][0]{
            _id,
            name,
            url
        }`
	);
}
