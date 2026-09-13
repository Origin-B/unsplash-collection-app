// hook
import {
  useState,
  createContext,
  useContext,
  useEffect,
  type ReactNode,
} from "react";

// type
import { type Collection } from "../data-type";

const collectionContext = createContext<{
  collections: Collection[];
  setCollections: (n: Collection[]) => void;
}>({
  collections: [],
  setCollections: (n) => console.log(n),
});

export default function CollectionsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [collections, setCollections] = useState<Collection[]>(() => {
    try {
      const save = localStorage.getItem("collections");
      return save ? JSON.parse(save) : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("collections", JSON.stringify(collections));
  }, [collections]);

  return (
    <collectionContext.Provider value={{ collections, setCollections }}>
      {children}
    </collectionContext.Provider>
  );
}

const useCollections = () => useContext(collectionContext);

export { useCollections };
