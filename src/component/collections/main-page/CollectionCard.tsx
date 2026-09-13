// component
import type { Collection } from "../../../data-type";
import Images from "../active-collection-page/Images";
import NoImg from "./NoImg";

export default function CollectionCard({
  collection,
}: {
  collection: Collection;
}) {
  const { images, title } = collection;

  return (
    <article className="bg-main-bg relative flex flex-col gap-2 overflow-hidden rounded-md">
      {images.length === 0 ? <NoImg /> : <Images collectionImgs={images} />}

      <h3 className="text-text font-medium">{title}</h3>
      <p className="font-light">{images.length} photos</p>
    </article>
  );
}
