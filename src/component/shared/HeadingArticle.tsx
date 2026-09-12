import type { ReactNode } from "react";
import Heading from "../shared/Heading";

export default function HeadingArticle({
  heading,
  children,
  p,
}: {
  heading: string;
  children?: ReactNode;
  p: string;
}) {
  return (
    <article className="flex flex-col items-center gap-2 text-center">
      <Heading
        heading={heading}
        className="bg-[url(/images/gradiend-bg@2x.png)] bg-contain bg-clip-text text-transparent"
      />

      <p className="text-text max-w-[40ch] font-medium text-pretty">
        {p} {children && children}
      </p>
    </article>
  );
}
