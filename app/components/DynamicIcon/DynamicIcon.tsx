"use client";

import { ReactIcon } from "@/types/ReactIcon";
import dynamic from "next/dynamic";
import type { IconType } from "react-icons";

type DynamicIconProps = {
	icon: ReactIcon;
	size: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const packMap: Record<string, () => Promise<any>> = {
	ai: () => import("react-icons/ai"),
	bi: () => import("react-icons/bi"),
	bs: () => import("react-icons/bs"),
	di: () => import("react-icons/di"),
	fa: () => import("react-icons/fa"),
	fi: () => import("react-icons/fi"),
	gi: () => import("react-icons/gi"),
	go: () => import("react-icons/go"),
	gr: () => import("react-icons/gr"),
	hi: () => import("react-icons/hi"),
	hi2: () => import("react-icons/hi2"),
	im: () => import("react-icons/im"),
	io: () => import("react-icons/io"),
	lu: () => import("react-icons/lu"),
	md: () => import("react-icons/md"),
	ri: () => import("react-icons/ri"),
	si: () => import("react-icons/si"),
	sl: () => import("react-icons/sl"),
	tb: () => import("react-icons/tb"),
	ti: () => import("react-icons/ti"),
	vsc: () => import("react-icons/vsc"),
	wi: () => import("react-icons/wi"),
};

const DynamicIcon = ({ icon, size }: DynamicIconProps) => {
	const Icon = dynamic(
		async () => {
			const packLoader = packMap[icon.iconPack.toLowerCase()];

			const icons = await packLoader();
			const IconComponent = icons[icon.name] as IconType;

			return IconComponent;
		},
		{
			ssr: false,
		}
	);

	return <Icon className="shrink-0" size={size} />;
};

export default DynamicIcon;
