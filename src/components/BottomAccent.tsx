import type React from "react";

const BottomAccent: React.FC = () => {
	return (
		<div className="flex justify-end items-end">
			<div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full" />
		</div>
	);
};

export default BottomAccent;
