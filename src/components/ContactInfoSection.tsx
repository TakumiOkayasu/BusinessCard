import type React from 'react';
import type { BusinessCardData } from '../types';

interface ContactItemProps {
  icon: React.ReactNode;
  value: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, value }) => {
  return (
    <div className="flex items-center gap-2.5 text-xs text-slate-800 transition-colors dark:text-white">
      {icon}
      <span className="font-medium">{value}</span>
    </div>
  );
};

const ContactInfoSection: React.FC<BusinessCardData> = ({
  email,
  github,
  location,
}) => {
  const emailIcon = (
    <img
      src="/data/email-icon.svg"
      alt="メールアイコン"
      className="w-3.5 h-3.5 flex-shrink-0 brightness-0 saturate-100 invert-[20%] dark:invert-[100%]"
    />
  );

  const githubIcon = (
    <img
      src="/data/github-icon.svg"
      alt="githubアイコン"
      className="w-3.5 h-3.5 flex-shrink-0 brightness-0 saturate-100 invert-[20%] dark:invert-[100%]"
    />
  );

  const locationIcon = (
    <img
      src="/data/location-icon.svg"
      alt="位置アイコン"
      className="w-3.5 h-3.5 flex-shrink-0 brightness-0 saturate-100 invert-[20%] dark:invert-[100%]"
    />
  );

  return (
    <div className="contact-info flex flex-col gap-2.5">
      <ContactItem icon={emailIcon} value={email} />
      <ContactItem icon={githubIcon} value={github} />
      <ContactItem icon={locationIcon} value={location} />
    </div>
  );
};

export default ContactInfoSection;
