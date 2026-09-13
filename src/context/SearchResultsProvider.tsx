const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

// hooks
import {
  useState,
  createContext,
  useContext,
  useEffect,
  type ReactNode,
} from "react";

// type
import { type UnsplashImage } from "../data-type";

const searchResultsContext = createContext<{
  searchResults: UnsplashImage[];
  fetchPhotos: (n: string) => void;
  searchTerm: string;
  setSearchTerm: (n: string) => void;
}>({
  searchResults: [],
  fetchPhotos: (n) => console.log(n),
  searchTerm: "",
  setSearchTerm: (n) => console.log(n),
});

export default function SearchResultsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [searchResults, setSearchResults] = useState<UnsplashImage[]>(() => {
    try {
      const save = sessionStorage.getItem("searchResults");
      return save ? JSON.parse(save) : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  });

  const [searchTerm, setSearchTerm] = useState(() => {
    const save = sessionStorage.getItem("searchTerm");
    return save ? save : "";
  });

  useEffect(() => {
    sessionStorage.setItem("searchTerm", searchTerm);
    sessionStorage.setItem("searchResults", JSON.stringify(searchResults));
  }, [searchTerm, searchResults]);

  const fetchPhotos = async (query: string) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}`,
        {
          method: "GET",
          headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error("error in data transition");
      }

      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(searchResults.map((s) => s.user.profile_image));
  console.log(searchResults.map((s) => s.user.portfolio_url));

  return (
    <searchResultsContext.Provider
      value={{ searchResults, setSearchTerm, fetchPhotos, searchTerm }}
    >
      {children}
    </searchResultsContext.Provider>
  );
}

const useSearchResults = () => useContext(searchResultsContext);

export { useSearchResults };
