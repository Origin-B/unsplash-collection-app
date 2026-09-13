// hooks
import { useCollections } from "../../context/CollectionsProvider";

// component
import ActionBtn from "../shared/ActionBtn";
import CollectionDetails from "./CollectionDetails";
import NoCollection from "../shared/NoCollection";

// icon
import { DownArrow, Plus } from "../../icons/Icons";

// type
import type { UnsplashImage } from "../../data-type";

export default function Details({
  actImg,
  setActive,
}: {
  actImg: UnsplashImage;
  setActive: (n: boolean) => void;
}) {
  const {
    user: { name, profile_image },
    created_at,
  } = actImg;

  const { collections } = useCollections();

  return (
    <section className="flex flex-col gap-4 p-4 *:w-full sm:w-[calc(50%-16px)]">
      <article className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <img
            src={profile_image.medium}
            alt={name}
            className="size-13 rounded-full md:size-fit"
          />
          <h2 className="text-text font-medium">{name}</h2>
        </div>

        <p>
          published on
          <data value={created_at}> {new Date(created_at).toDateString()}</data>
        </p>

        <div className="flex flex-col gap-3 text-base sm:flex-row sm:text-sm lg:text-base">
          <ActionBtn
            className="icon-btn outline-text-muted text-btn bg-active-link-bg/50 p-4 font-medium"
            ariaLabel="click to add to collection"
            onClick={() => setActive(true)}
          >
            <Plus className="`transition-colors" /> Add to Collection
          </ActionBtn>

          <a
            role="button"
            href={actImg.links.download}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="click to download img"
            className="icon-btn outline-text-muted text-btn fill-text-muted bg-active-link-bg/50 hover:fill-text rounded-md p-4 font-medium transition-colors"
          >
            <DownArrow className="" /> Download
          </a>
        </div>
      </article>

      <div className="flex flex-1 flex-col gap-3">
        <h2 className="text-text text-xl font-medium">Collections:</h2>

        {collections.length === 0 ? (
          <NoCollection
            className={{
              container: "my-5 flex-1 text-base font-medium",
              icon: "size-5 sm:size-7",
            }}
            title="collection"
            icon="collection"
          />
        ) : (
          <div className="scrollbar-thumb-text-muted flex max-h-130 flex-1 flex-col gap-3 overflow-y-auto">
            {collections
              .filter((c) => c.images.some((img) => img.id === actImg.id))
              .map((c) => (
                <CollectionDetails
                  key={c.id}
                  collection={c}
                  actImg={actImg}
                  action="remove"
                />
              ))}
          </div>
        )}
      </div>
    </section>
  );
}
