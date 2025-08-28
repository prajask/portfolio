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
				className="w-full p-4 max-w-4xl border-[1.5px] border-border-secondary bg-background-primary rounded-xl shadow-primary"
				src={imageURL}
				width={width}
				height={height}
				alt=""
			/>
		</figure>
	);
};

export default ImageContentComponent;
