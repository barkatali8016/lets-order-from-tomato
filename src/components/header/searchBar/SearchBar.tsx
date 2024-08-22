import {
  BuildingOffice,
  CaretDown,
  CaretRight,
  CaretUp,
  GpsFix,
  House,
  MagnifyingGlass,
  MapPin,
  Plus,
  Star,
} from "@phosphor-icons/react";
import dishes from "../../../assets/z1.avif";
import "./SearchBar.css";
import { useState } from "react";
export default function SearchBar() {
  const [isFocusLocation, setIsFocusLocation] = useState(false);
  const [isFocusRestaurant, setIsFocusRestaurant] = useState(false);
  return (
    <div className="grid search-bar">
      <div className="grid search-location ">
        <MapPin className="map-pin" size={22} weight="fill" />
        <input
          type="text"
          placeholder="Kolkata"
          onFocus={() => setIsFocusLocation(true)}
          onBlur={() => setIsFocusLocation(false)}
        />
        <CaretUp
          className={isFocusLocation ? "caret" : "d-none"}
          size={20}
          weight="fill"
        />
        <CaretDown
          className={!isFocusLocation ? "caret" : "d-none"}
          size={22}
          weight="fill"
        />
        <div className={isFocusLocation ? "location-search-option" : "d-none"}>
          <ul>
            <li className="current-location-gps">
              <GpsFix className="icon-gps" size={22} weight="fill" />
              <div>
                <p className="location-type">Detect current location</p>
                <p className="location-info">Using GPS</p>
              </div>
            </li>
            <li className="add-address">
              <Plus className="icon-plus" size={22} weight="bold" />
              <div>
                <p className="location-type">Add address</p>
              </div>
            </li>
          </ul>
          <div className="saved-adresses">
            <p className="saved-addresses-text"> Saved Addresses</p>
            <ul>
              <li>
                <House size={22} />
                <div>
                  <p className="location-type">Home</p>
                  <p className="location-info">
                    Saltlake sector v ,Kolkata 700001
                  </p>
                </div>
              </li>
              <li>
                <BuildingOffice size={22} />
                <div>
                  <p className="location-type">Work</p>
                  <p className="location-info">
                    N M Motors, Patharghata, Chhapna, 3rd flore, Newtown,
                    Chhapna
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pipe">
        <p>|</p>
      </div>
      <div className="grid search-restaurant">
        <MagnifyingGlass className="search-icon" size={22} weight="light" />
        <input
          type="text"
          placeholder="Search for restaurant, cuisine or a dish"
          onFocus={() => setIsFocusRestaurant(true)}
          onBlur={() => setIsFocusRestaurant(false)}
        />
        <div
          className={
            isFocusRestaurant ? "search-option-restaurant-dish" : "d-none"
          }
        >
          <ul className="search-restaurant-list">
            <li>
              <img src={dishes} alt="retaurant image" />
              <div className="restaurant-details">
                <p className="restaurant-name">Arsalan</p>
                <p className="restaurant-ratting">
                  <span>
                    3.8 <Star size={18} weight="fill" />
                  </span>
                  DINING |
                  <span className="start-delivery">
                    4.3 <Star size={18} weight="fill" />
                  </span>
                  DELEVERY
                </p>
                <p className="restaurant-address">Park street Area, Kolkata</p>
                <button className="order-now" type="button">
                  Order Now <CaretRight size={32} weight="fill" />
                </button>
                <p className="delivery-time">Delivery in 42 min</p>
              </div>
            </li>
            <li>
              <img src={dishes} alt="retaurant image" />
              <div className="restaurant-details">
                <p className="restaurant-name">Haji Biriyani</p>
                <p className="restaurant-ratting">
                  <span>
                    3.8 <Star size={18} weight="fill" />
                  </span>
                  DINING |
                  <span className="start-delivery">
                    4.3 <Star size={18} weight="fill" />
                  </span>
                  DELEVERY
                </p>
                <p className="restaurant-address">Park street Area, Kolkata</p>
                <button className="order-now" type="button">
                  Order Now <CaretRight size={32} weight="fill" />
                </button>
                <p className="delivery-time">Delivery in 42 min</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
