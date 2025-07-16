// components/HeaderSection.tsx
import type React from 'react';

interface HeaderSectionProps {
  name: string;
  position?: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ name, position }) => {
  return (
    <div className="header flex flex-col">
      <div className="flex items-center text-xs text-slate-800 transition-colors dark:text-white">
        <img
          src="/data/dollar-icon-mono.svg"
          alt="dollar icon"
          className="w-5 h-5 brightness-0 saturate-100 invert-[20%] dark:invert-[100%]"
        />
        <p className="flex text-lg transition-colors dark:text-white">
          <span className="font-medium">cat profile</span>
        </p>
      </div>
      <h1 className="text-xl font-bold text-slate-800 -trabrightness-0 saturate-100cking-wide dark:text-white">
        {name}
      </h1>
      {position && (
        <p className="text-sm text-slate-800 mb-4 font-medium dark:text-white">
          {position}
        </p>
      )}
    </div>
  );
};

export default HeaderSection;
