// hooks
import { useEffect, useState } from "react";
import { useCollections } from "../../context/CollectionsProvider";

// icons
import { Hamburger, Moon, Sun, XIcon } from "../../icons/Icons";

// components
import { Link, NavLink } from "react-router";
import NavbarBtn from "./NavbarBtn";
import Overlay from "../shared/Overlay";
import ActionBtn from "../shared/ActionBtn";
import CollectionDetails from "../image-details/CollectionDetails";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [mode, setMode] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const { collections } = useCollections();

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(mode ? "dark" : "light");
  }, [mode]);

  return (
    <nav active-page={activePage}>
      <NavbarBtn mission="open" setActive={setActive}>
        <Hamburger className="size-5" />
      </NavbarBtn>

      <Overlay display={active ? "block" : "hidden"} setActive={setActive} />

      <div
        className={`${active ? "translate-x-0" : "translate-x-full"} bg-main-bg md:items-center" fixed top-0 right-0 z-60 flex h-screen w-3/4 flex-col gap-6 p-3 transition-transform duration-500 sm:w-1/2 md:static md:h-fit md:w-fit md:translate-none md:flex-row`}
      >
        <div className="flex items-center justify-between md:hidden">
          <h2 className="text-text font-medium">content:</h2>

          <NavbarBtn mission="close" setActive={setActive}>
            <XIcon className="size-5" />
          </NavbarBtn>
        </div>

        <div className="flex flex-col gap-2 text-center *:p-[8px_16px] *:font-medium *:transition-colors md:flex-row md:items-center">
          <NavLink
            to={"/"}
            aria-label="click to go home page"
            className={({ isActive }) =>
              isActive ? "text-text bg-btn" : "text-text-muted text-btn"
            }
            onClick={() => setActivePage("home")}
          >
            Home
          </NavLink>

          <NavLink
            to={"/collection"}
            end
            aria-label="click to go collection page"
            className={({ isActive }) =>
              isActive ? "text-text bg-btn" : "text-text-muted text-btn"
            }
            onClick={() => setActivePage("collection")}
          >
            Collection
          </NavLink>
        </div>

        <div className="flex-1 md:hidden">
          <h3>Collections</h3>

          <div className="scrollbar-thumb-text-muted max-h-60 flex-col gap-2 overflow-y-auto">
            {collections.map((c) => (
              <Link to={`/collection/${c.id}`} key={c.id}>
                <CollectionDetails collection={c} action="hidden" />
              </Link>
            ))}
          </div>
        </div>

        <ActionBtn
          ariaLabel="click tp change the mode"
          className="icon-btn outline-text-muted p-2 text-sm font-medium"
          onClick={() => setMode(!mode)}
        >
          {mode ? (
            <Sun className="size-5 fill-white" />
          ) : (
            <Moon className="size-5 fill-black" />
          )}
          {mode ? "Light " : "Dark "}
          Mode
        </ActionBtn>
      </div>
    </nav>
  );
}
