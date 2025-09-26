import { urlFor } from "@/sanity/sanity-utils";
import { SanityImage } from "@/types/SanityImage";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";

type ImageContentComponentProps = {
	image: SanityImage;
};

const ImageContentComponent = ({ image }: ImageContentComponentProps) => {
	const imageURL = urlFor(image);
	const { width, height } = getImageDimensions(imageURL);

	return (
		<figure className="w-full h-full flex items-center justify-center relative">
			<Image
				className="w-full h-full p-4 max-w-5xl border-1 border-border-secondary bg-background-primary rounded-lg object-contain"
				src={imageURL}
				width={width}
				height={height}
				alt=""
			/>
		</figure>
	);
};

export default ImageContentComponent;
