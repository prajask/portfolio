import React from "react";

type ToolTipProps = {
	children: React.ReactNode;
	className: string;
	id: string;
};

const ToolTip = ({ children, className, id }: ToolTipProps) => {
	return (
		<div
			className={`p-4 w-full md:w-max absolute left-1/2 transform -translate-x-1/2 top-full mt-2 hidden group-hover:flex flex-col items-center justify-center space-y-4 backdrop-blur-md rounded-lg  ${className}`}
            id={id}
		>
			{children}
		</div>
	);
};

export default ToolTip;
