// type
import type { CollectionImg } from "../../data-type";

// component
import { ImageGridSkeleton } from "./Skeleton";
import { Link } from "react-router-dom";

export default function ImageGrid({ arr }: { arr: CollectionImg[] }) {
  return (
    <>
      {arr.length === 0 ? (
        <ImageGridSkeleton count={10} />
      ) : (
        <section className="animate-fadeIn my-4 columns-1 p-4 *:mb-3 *:w-full sm:w-[90%] sm:columns-2 md:columns-3 lg:columns-4">
          {arr.map((r) => (
            <Link
              to={`/photos/${r.id}`}
              key={r.id}
              className="inline-block *:mx-auto"
              aria-label="click to see the details of the img"
            >
              <img
                srcSet={`${r.urls.thumb} 200w, ${r.urls.small} 400w, ${r.urls.regular} 1080w`}
                sizes="(max-width: 639px) 90vw, (max-width: 767px) 45vw, (max-width: 1023px) 30vw, 22.5vw"
                src={r.urls.small}
                alt={r.alt}
                loading="lazy"
              />
            </Link>
          ))}
        </section>
      )}
    </>
  );
}
