import type React from "react";

interface IconProps {
  className?: string;
  "aria-hidden"?: boolean;
}

export const CodeIcon: React.FC<IconProps> = ({
  className,
  "aria-hidden": ariaHidden,
}) => {
  // 装飾的な使用の場合
  if (ariaHidden) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <polyline points="16,18 22,12 16,6"></polyline>
        <polyline points="8,6 2,12 8,18"></polyline>
      </svg>
    );
  }

  // 意味を持つアイコンの場合
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      role="img"
      aria-label="コードアイコン"
    >
      <title>コードアイコン</title>
      <polyline points="16,18 22,12 16,6"></polyline>
      <polyline points="8,6 2,12 8,18"></polyline>
    </svg>
  );
};

export const EmailIcon: React.FC<IconProps> = ({
  className,
  "aria-hidden": ariaHidden,
}) => {
  if (ariaHidden) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      role="img"
      aria-label="メールアイコン"
    >
      <title>メールアイコン</title>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
};

export const GitHubIcon: React.FC<IconProps> = ({
  className,
  "aria-hidden": ariaHidden,
}) => {
  if (ariaHidden) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
        role="img"
        aria-label="GitHubアイコン"
      >
        <path d="M9 19c-5 0-8-3-8-8s3-8 8-8 8 3 8 8-3 8-8 8z"></path>
        <path d="M8.21 13.89L7 23l5.5-5.5L21 9l-11.79 4.89z"></path>
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      role="img"
      aria-label="GitHubアイコン"
    >
      <title>GitHubアイコン</title>
      <path d="M9 19c-5 0-8-3-8-8s3-8 8-8 8 3 8 8-3 8-8 8z"></path>
      <path d="M8.21 13.89L7 23l5.5-5.5L21 9l-11.79 4.89z"></path>
    </svg>
  );
};

export const LocationIcon: React.FC<IconProps> = ({
  className,
  "aria-hidden": ariaHidden,
}) => {
  if (ariaHidden) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      role="img"
      aria-label="位置アイコン"
    >
      <title>位置アイコン</title>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
};
