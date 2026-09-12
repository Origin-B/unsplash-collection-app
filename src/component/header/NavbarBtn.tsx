import { type ReactNode } from "react";

export default function NavbarBtn({
  mission,
  setActive,
  children,
}: {
  mission: string;
  setActive: (n: boolean) => void;
  children: ReactNode;
}) {
  return (
    <button
      className="border-text-muted hover:border-text hover:text-text rounded-md border p-1 transition-colors md:hidden"
      aria-label={`click to ${mission} navbar`}
      onClick={() => setActive(mission === "open")}
    >
      {children}
    </button>
  );
}
