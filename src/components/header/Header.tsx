import Logo from "../utility/Logo/Logo";
import HeaderMenu from "./headerMenu/HeaderMenu";
import SearchBar from "./searchBar/SearchBar";

import "./Header.css";
export default function Header() {
  return (
    <header className="grid main-header">
      <Logo />
      <SearchBar />
      <HeaderMenu />
    </header>
  );
}
