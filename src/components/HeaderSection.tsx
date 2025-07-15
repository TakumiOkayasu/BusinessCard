// components/HeaderSection.tsx
import type React from 'react';

interface HeaderSectionProps {
  name: string;
  position?: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ name, position }) => {
  return (
    <div className="header flex flex-col gap-1">
      <div className="flex items-center gap-2 mb-4">
        <img
          src="/data/code-icon.svg"
          alt="Code icon"
          className="w-5 h-5 brightness-0 saturate-100 invert-[20%] dark:invert-[100%]"
        />
        <div className="w-8 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full" />
      </div>
      <h1 className="text-xl font-bold text-slate-800 -tracking-wide mb-1 mt-4 dark:text-white">
        {name}
      </h1>
      {position && (
        <p className="text-sm font-medium text-slate-800 dark:text-white">
          {position}
        </p>
      )}
    </div>
  );
};

export default HeaderSection;
