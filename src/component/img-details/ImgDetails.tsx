// hooks
import { useMemo, useState } from "react";
import { useSearchResults } from "../../context/SearchResultsProvider";
import { useParams } from "react-router-dom";

// component
import Details from "./Details";
import AddImageOverlay from "./AddImageOverlay";

export default function ImgDetails() {
  const { id } = useParams();
  const { searchResults } = useSearchResults();

  const [active, setActive] = useState(false);

  const activeImg = useMemo(
    () => searchResults.find((img) => img.id === id),
    [id, searchResults],
  );

  if (activeImg)
    return (
      <main className="container mb-8 flex flex-col flex-wrap gap-8 self-center sm:flex-row md:h-200">
        <div className="h-full rounded-md p-4 sm:w-[calc(50%-16px)]">
          <img
            srcSet={`${activeImg.urls.thumb} 200w, ${activeImg.urls.full} 400w`}
            sizes="(max-width: 639px) 90vw, (max-width: 767px) 40vw"
            src={activeImg.urls.thumb}
            alt={activeImg.alt_description}
            className="mx-auto h-full rounded-md"
          />
        </div>

        <Details actImg={activeImg} setActive={setActive} />

        <AddImageOverlay
          active={active}
          setActive={setActive}
          actImg={activeImg}
        />
      </main>
    );
  return <></>;
}
