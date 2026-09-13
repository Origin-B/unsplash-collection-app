// component
import Heading from "../shared/Heading";
import BGDev from "./BGDev";
import Searchbar from "./Searchbar";

export default function MainHome() {
  return (
    <main className="grid flex-1 gap-4 lg:grid-cols-3">
      <BGDev bg="bg-[url(/images/hero-left.png)]" />

      <div className="flex flex-col items-center gap-4 self-center p-4 text-center lg:p-0">
        <article className="flex flex-col gap-2">
          <Heading heading="search" className="text-text" />

          <p className="text-sm font-medium">
            Search high-resolution images from Unsplash
          </p>
        </article>

        <Searchbar className="w-4/5 lg:w-full" />
      </div>

      <BGDev bg="bg-[url(/images/hero-right.png)]" />
    </main>
  );
}
