import { useParams } from "react-router-dom";
import HeadingArticle from "../shared/HeadingArticle";
import { useMemo } from "react";
import { useCollections } from "../../context/CollectionsProvider";
import ImageGrid from "../shared/ImagesGrid";

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

        <ImageGrid arr={activeCollection.images} />
      </main>
    );
}
