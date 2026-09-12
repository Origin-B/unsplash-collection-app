// type
import type { ReactNode } from "react";

export default function ActionBtn({
  children,
  className,
  ariaLabel,
  onClick,
}: {
  children: ReactNode;
  className: string;
  ariaLabel: string;
  onClick: () => void;
}) {
  return (
    <button
      className={`${className} hover:text-text hover:fill-text`}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
