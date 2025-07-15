// components/BusinessCard.tsx
import type React from 'react';
import BottomAccent from './components/BottomAccent';
import ContactInfoSection from './components/ContactInfoSection';
import HeaderSection from './components/HeaderSection';
import ThemeToggle from './components/ThemeToggle';
import type { BusinessCardData } from './types';

interface BusinessCardProps {
  data: BusinessCardData;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ data }) => {
  return (
    <div
      className="business-card relative w-full bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300 p-6 flex flex-col justify-between dark:bg-slate-800 dark:shadow-2xl overflow-hidden"
      style={{ aspectRatio: '1.4 / 1' }}
    >
      <ThemeToggle />
      <HeaderSection name={data.name} position={data.position} />
      <ContactInfoSection
        email={data.email}
        github={data.github}
        location={data.location}
        name={data.name}
        position={data.position}
      />
      <BottomAccent />
    </div>
  );
};

export default BusinessCard;
