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
		<figure className="w-full flex items-center justify-center relative">
			<Image
				className="border-2 border-border-primary bg-background-secondary"
				src={imageURL}
				width={width}
				height={height}
				alt=""
			/>
		</figure>
	);
};

export default ImageContentComponent;
