import { Logo } from "../../icons/Icons";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="border-active-link-bg flex items-center justify-between border-b-2 p-[16px_32px]">
      <Logo className="fill-text" />

      <Navbar />
    </header>
  );
}
