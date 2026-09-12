// type
import { type CollectionImg } from "../../data-type";

// icons
import { Img } from "../../icons/Icons";

export default function Images({
  collectionImgs,
}: {
  collectionImgs: CollectionImg[];
}) {
  function getImgClassName(i: number, total: number) {
    if (i === 0 && total === 1) return "col-span-3 row-span-2";
    if (i === 0 && (total === 2 || total === 3 || total >= 4))
      return "col-span-2 row-span-2";
    if (i === 1 && total === 2) return "row-span-2";
    if (i === 1 && (total === 3 || total >= 4)) return "col-span-1 row-span-1";
    if (i === 2 && total === 3) return "col-span-1 row-span-1";
    return "";
  }
  return (
    <div className="grid max-h-50 grid-cols-3 grid-rows-2 gap-1">
      {collectionImgs.map((img, i) => {
        const total = collectionImgs.length;
        if (total >= 4 && i === 2) {
          return (
            <div
              key={img.id}
              className="bg-active-link-bg col-span-1 row-span-1 flex items-center justify-center gap-2"
            >
              +{total - 2} img <Img className="size-5" />
            </div>
          );
        }
        if (total >= 4 && i >= 3) return "";
        return (
          <img
            key={img.id}
            src={img.urls.thumb}
            alt={img.alt}
            className={`${getImgClassName(i, total)} h-full w-full`}
          />
        );
      })}
    </div>
  );
}
