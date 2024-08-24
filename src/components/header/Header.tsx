import Logo from "../utility/Logo/Logo";
import SearchBar from "./searchBar/SearchBar";

import "./Header.css";
export default function Header() {
  return (
    <header className="grid main-header">
      <Logo />
      <SearchBar />
    </header>
  );
}
