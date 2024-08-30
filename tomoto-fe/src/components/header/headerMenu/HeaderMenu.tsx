import { CaretUp, CaretDown } from "@phosphor-icons/react";
import profile from "../../../assets/tomatologo.png";
import "./HeaderMenu.css";
import { useState } from "react";

const MENU_ITEMS = [
  { id: "123asd", name: "Profile" },
  { id: "124asd", name: "Notifications" },
  { id: "123daa", name: "Bookmarks" },
  { id: "123rew", name: "Reviews" },
  { id: "123uio", name: "Network" },
  { id: "123gfd", name: "Find friends" },
  { id: "123iop", name: "Settings" },
];
export default function HeaderMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="grid header-menu">
      <img className="profile-img" src={profile} alt="Profile image" />
      <p
        className="profile-name"
        onClick={() => setIsMenuOpen((prevState) => !prevState)}
      >
        Barkat Ali
        {isMenuOpen ? (
          <CaretUp className="caret up" size={18} />
        ) : (
          <CaretDown className="caret down" size={18} />
        )}
      </p>

      {isMenuOpen && (
        <>
          <menu className="profile-menu ">
            <ul>
              {MENU_ITEMS.map((menuItem) => (
                <li key={menuItem.id} onClick={() => setIsMenuOpen(false)}>
                  {menuItem.name}
                </li>
              ))}
              <li key={"logout-1234"} onClick={() => setIsMenuOpen(false)}>
                Logout
              </li>
            </ul>
          </menu>
          <span
            onClick={() => setIsMenuOpen(false)}
            className="profile-menu-back-drop"
          ></span>
        </>
      )}
    </div>
  );
}
