// component
import Overlay from "../shared/Overlay";
import InputContainer from "../shared/InputContainer";
import CollectionDetails from "./CollectionDetails";

// icon
import { Search } from "../../icons/Icons";

// hook
import { useMemo, useState } from "react";
import { useCollections } from "../../context/CollectionsProvider";

// type
import type { UnsplashImage } from "../../data-type";

export default function AddImageOverlay({
  actImg,
  active,
  setActive,
}: {
  actImg: UnsplashImage;
  active: boolean;
  setActive: (n: boolean) => void;
}) {
  const [collectionN, setCollectionN] = useState("");

  const { collections } = useCollections();

  const filteredCollections = useMemo(() => {
    if (collectionN === "" || collections.length === 0) return [];

    return collections
      .filter((c) => c.title.includes(collectionN.toLocaleLowerCase().trim()))
      .filter((c) =>
        c.images.length === 0
          ? true
          : c.images.some((img) => img.id !== actImg.id),
      );
  }, [collections, collectionN, actImg]);

  return (
    <>
      <Overlay display={active ? "block" : "hidden"} setActive={setActive} />

      <div
        className={`${active ? "block" : "hidden"} animate-fadeIn fixed top-1/2 right-1/2 z-60 w-full translate-x-1/2 -translate-y-1/2 p-4 sm:w-1/2 xl:w-1/3`}
      >
        <div className="bg-main-bg flex min-h-50 w-full flex-col gap-4 rounded-md p-4">
          <h1 className="text-text text-[clamp(1.2rem,1.2rem+.12vw,2.25rem)]">
            add to collection
          </h1>

          <InputContainer
            atrValues={{
              name: "collectionName",
              placeholder: "enter your keyword...",
            }}
            input={collectionN}
            setInput={setCollectionN}
          >
            <Search className="group-has-[input:focus]:stroke-text input-icon" />
          </InputContainer>

          <div className="flex-col gap-3">
            <p>
              <span>{filteredCollections.length}</span> matches
            </p>

            <div className="scrollbar-thumb-text-muted flex max-h-45 flex-col gap-2 overflow-y-auto">
              {filteredCollections.map((c) => (
                <CollectionDetails
                  actImg={actImg}
                  collection={c}
                  key={c.id}
                  action="add"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
