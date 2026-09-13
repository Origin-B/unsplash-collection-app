// hooks
import { useSearchResults } from "../../context/SearchResultsProvider";
import { useNavigate } from "react-router";

// type
import { type ChangeEvent } from "react";

// icon
import { Search } from "../../icons/Icons";

export default function Searchbar({ className }: { className: string }) {
  const { searchTerm, fetchPhotos, setSearchTerm } = useSearchResults();

  const navigate = useNavigate();
  const handleSearch = (e: ChangeEvent) => {
    e.preventDefault();
    if (!searchTerm.toLocaleLowerCase().trim()) return;
    fetchPhotos(searchTerm);

    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`${className} group input-container`}
    >
      <input
        type="text"
        name="query"
        placeholder="Enter your keywords..."
        className="input text-text flex-1 font-medium"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Search className="group-has-[input:focus]:stroke-text input-icon" />
    </form>
  );
}
