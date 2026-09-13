// component
import HeadingArticle from "../../shared/HeadingArticle";
import CollectionCard from "./CollectionCard";
import AddCollectionOverlay from "./AddCollectionOverlay";
import ActionBtn from "../../shared/ActionBtn";
import { Link } from "react-router-dom";

// hooks
import { useState } from "react";
import { useCollections } from "../../../context/CollectionsProvider";

// icon
import { Plus } from "../../../icons/Icons";

export default function Collections() {
  const [active, setActive] = useState(false);

  const { collections } = useCollections();

  return (
    <main className="main-style">
      <HeadingArticle
        heading="Collections"
        p="Explore the world through collections of beautiful photos free to use under the"
      >
        <span className="font-semibold underline">Unsplash License.</span>
      </HeadingArticle>

      <section className="relative container grid gap-8 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((c) => (
          <Link key={c.id} to={`${c.id}`}>
            <CollectionCard collection={c} />
          </Link>
        ))}

        <ActionBtn
          className={
            "icon-btn outline-text-muted text-btn bg-active-link-bg/50 p-4 font-semibold sm:min-h-60 sm:flex-col sm:text-xl"
          }
          ariaLabel="click to add a new collection"
          onClick={() => setActive(true)}
        >
          <Plus className={`transition-colors sm:size-8`} /> Add new Collection
        </ActionBtn>
      </section>

      <AddCollectionOverlay active={active} setActive={setActive} />
    </main>
  );
}
