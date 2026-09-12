import { nanoid } from "nanoid";

// hooks
import { useState } from "react";
import { useCollections } from "../../context/CollectionsProvider";

// component
import Overlay from "../shared/Overlay";

// icon
import { CollectionIcon } from "../../icons/Icons";
import InputContainer from "../shared/InputContainer";

export default function AddCollectionOverlay({
  active,
  setActive,
}: {
  active: boolean;
  setActive: (n: boolean) => void;
}) {
  const [collectionN, setCollectionN] = useState("");
  const [alarm, setAlarm] = useState<{ act: boolean; textContent: string }>({
    act: false,
    textContent: "",
  });

  const { setCollections, collections } = useCollections();

  function handleSave(): void {
    if (collectionN === "") {
      setAlarm({
        act: true,
        textContent: "you must add a name",
      });
    } else if (
      collections.some(
        (c) => c.title === collectionN.toLocaleLowerCase().trim(),
      )
    ) {
      setAlarm({
        act: true,
        textContent: "sorry there is an collection has same title",
      });
    } else {
      setCollections([
        ...collections,
        {
          id: nanoid(),
          images: [],
          title: collectionN.toLowerCase().trim(),
        },
      ]);
      setAlarm({
        act: false,
        textContent: "",
      });
      setCollectionN("");
      setActive(false);
    }
  }

  function handleCancel() {
    setAlarm({
      act: false,
      textContent: "",
    });
    setCollectionN("");
    setActive(false);
  }

  return (
    <>
      <div
        className={`${active ? "block" : "hidden"} animate-fadeIn fixed top-1/2 z-60 origin-center -translate-y-1/2 p-4 sm:w-1/2 xl:w-1/3`}
      >
        <div className="bg-main-bg flex w-full flex-col items-center gap-3 rounded-md p-4">
          <h2 className="text-text font-semibold">Add Collection</h2>

          <div className="flex w-full flex-col gap-2">
            <InputContainer
              input={collectionN}
              setInput={setCollectionN}
              atrValues={{
                placeholder: "Collection name",
                name: "newCollection",
              }}
            >
              <CollectionIcon className="group-has-[input:focus]:stroke-text input-icon" />
            </InputContainer>
            <p
              className={`${alarm.act ? "block" : "hidden"} text-sm text-red-600 normal-case`}
            >
              {alarm.textContent}
            </p>
          </div>

          <div className="flex gap-3 *:rounded-md *:px-3 *:py-1 *:font-semibold *:capitalize">
            <button
              type="button"
              className="bg-active-link-bg hover:bg-active-link-bg/50 disabled:bg-active-link-bg/50"
              aria-label="click to save collection"
              onClick={() => handleSave()}
            >
              save
            </button>

            <button
              type="button"
              className="text-btn font-medium"
              aria-label="click to cancel"
              onClick={() => handleCancel()}
            >
              cancel
            </button>
          </div>
        </div>
      </div>

      <Overlay display={active ? "block" : "hidden"} setActive={setActive} />
    </>
  );
}
