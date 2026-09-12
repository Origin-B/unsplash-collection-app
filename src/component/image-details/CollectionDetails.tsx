// type

import type { Collection, UnsplashImage } from "../../data-type";

// icons
import { Img, Minus, Plus } from "../../icons/Icons";
import ActionBtn from "../shared/ActionBtn";
import { useCollections } from "../../context/CollectionsProvider";

export default function CollectionDetails({
  action,
  actImg,
  collection,
}: {
  action: "add" | "remove" | "hidden";
  actImg?: UnsplashImage;
  collection: Collection;
}) {
  const { images, title } = collection;

  const lastImg = images[images.length - 1];

  const { setCollections, collections } = useCollections();

  function handelAddRemoveImg(action: "add" | "remove", id: string): void {
    if (actImg && action === "add") {
      setCollections(
        collections.map((c) =>
          c.id === id
            ? {
                ...c,
                images: [
                  ...images,
                  {
                    alt: actImg.alt_description,
                    id: actImg.id,
                    urls: {
                      regular: actImg.urls.regular,
                      small: actImg.urls.small,
                      thumb: actImg.urls.thumb,
                    },
                  },
                ],
              }
            : c,
        ),
      );
    }

    if (actImg && action === "remove") {
      setCollections(
        collections.map((c) =>
          c.id === id
            ? { ...c, images: c.images.filter((img) => img.id !== actImg.id) }
            : c,
        ),
      );
    }
  }

  return (
    <div className="group hover:bg-active-link-bg/50 flex cursor-pointer justify-center gap-3 rounded-md p-2 transition-colors">
      <div className="bg-active-link-bg flex size-15 items-center justify-center overflow-hidden rounded-md *:w-full">
        {images.length === 0 ? (
          <Img className="size-[50%]" />
        ) : (
          <img src={lastImg.urls.thumb} alt={lastImg.alt} className="h-full" />
        )}
      </div>

      <article className="flex-1 self-center">
        <h3 className="text-text mb-2 text-xs font-medium sm:text-sm">
          {title}
        </h3>

        <p className="text-xs font-light">{images.length} Photos</p>
      </article>

      {action === "add" ? (
        <ActionBtn
          onClick={() => handelAddRemoveImg("add", collection.id)}
          className={
            "icon-btn stroke-text-muted hover:stroke-text p-2 text-xs opacity-0 group-hover:opacity-100 sm:text-sm"
          }
          ariaLabel="click to add to collection"
        >
          <Plus className={`size-3 transition-colors sm:size-4`} /> Add
        </ActionBtn>
      ) : action === "remove" ? (
        <ActionBtn
          onClick={() => handelAddRemoveImg("remove", collection.id)}
          ariaLabel="click to remove to collection"
          className="icon-btn stroke-text-muted hover:stroke-text p-2 text-sm opacity-0 group-hover:opacity-100"
        >
          <Minus className="size-4" /> Remove
        </ActionBtn>
      ) : (
        ""
      )}
    </div>
  );
}
