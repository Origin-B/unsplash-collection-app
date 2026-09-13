// hooks
import { useSearchResults } from "../../context/SearchResultsProvider";
import ImageGrid from "../shared/ImagesGrid";

// component
import Searchbar from "./Searchbar";

export default function SearchResults() {
  const { searchResults } = useSearchResults();

  return (
    <main className="main-style">
      <div className="animate-fadeIn relative h-20 bg-[url(/images/gradiend-bg@2x.png)] bg-cover bg-center bg-no-repeat">
        <Searchbar className="bg-main-bg absolute right-1/2 bottom-0 w-[90%] translate-1/2 sm:w-1/2 md:w-1/3" />
      </div>

      <ImageGrid
        arr={searchResults.map((r) => {
          return {
            id: r.id,
            alt: r.alt_description,
            urls: {
              thumb: r.urls.thumb,
              regular: r.urls.regular,
              small: r.urls.small,
            },
          };
        })}
      />
    </main>
  );
}
