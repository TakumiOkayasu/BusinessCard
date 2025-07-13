// components/HeaderSection.tsx
import type React from "react";

interface HeaderSectionProps {
  name: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ name }) => {
  return (
			<div className="header flex flex-col gap-1">
				<div className="flex items-center gap-2 mb-4">
					<img src="/data/code-icon.svg" alt="Code icon" className="w-5 h-5" />
					<div className="w-8 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full" />
				</div>
				<h1 className="text-xl font-bold text-slate-900 -tracking-wide mb-1 dark:text-slate-50">
					{name}
				</h1>
			</div>
		);
};

export default HeaderSection;
