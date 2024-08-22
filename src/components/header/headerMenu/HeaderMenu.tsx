import { CaretUp, CaretDown } from "@phosphor-icons/react";
import profile from "../../../assets/tomatologo.png";
import "./HeaderMenu.css";
export default function HeaderMenu() {
  return (
    <div className="grid header-menu">
      <img className="profile-img" src={profile} alt="Profile image" />
      <p className="profile-name">Barkat Ali</p>
      <CaretUp className="caret up" size={32} weight="fill" />
      <CaretDown className="caret down" size={32} weight="fill" />
      <menu className="profile-menu d-none">
        <ul>
          <li>Profile</li>
          <li>Notifications</li>
        </ul>
      </menu>
    </div>
  );
}
