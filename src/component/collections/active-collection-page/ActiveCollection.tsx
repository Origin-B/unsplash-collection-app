// component
import HeadingArticle from "../../shared/HeadingArticle";
import ImageGrid from "../../shared/ImagesGrid";
import NoCollection from "../../shared/NoCollection";

// hooks
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { useCollections } from "../../../context/CollectionsProvider";

export default function ActiveCollection() {
  const { collections } = useCollections();
  const { id } = useParams();

  const activeCollection = useMemo(() => {
    return collections.find((c) => c.id === id);
  }, [id, collections]);

  if (activeCollection)
    return (
      <main className="main-style">
        <HeadingArticle
          heading={activeCollection.title}
          p={`${activeCollection.images.length} photos`}
        />

        {activeCollection.images.length === 0 ? (
          <NoCollection
            className={{
              container: "my-5 flex-1 text-base font-medium",
              icon: "size-5 sm:size-7",
            }}
            title="images"
            icon="img"
          />
        ) : (
          <ImageGrid arr={activeCollection.images} />
        )}
      </main>
    );
}
