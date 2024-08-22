import Filter from "./Filter";
import "./Filters.css";
const FILTERS = [
  {
    filterText: "Filter",
    isActive: false,
    activeFilterCount: 1,
    isMainFilter: true,
  },
  {
    filterText: "Offers",
    isActive: true,
  },
  {
    filterText: "Rating: High to Low",
    isActive: false,
  },
  {
    filterText: "Pet Friendly",
    isActive: false,
  },
  {
    filterText: "Serves Alcohol",
    isActive: false,
  },
  {
    filterText: "Outdoor Seating",
    isActive: false,
  },
  {
    filterText: "Open Now",
    isActive: false,
  },
];
export default function Filters() {
  return (
    <section className="filters">
      {FILTERS.map((filter) => (
        <Filter {...filter} />
      ))}
    </section>
  );
}
