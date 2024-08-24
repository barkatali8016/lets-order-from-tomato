import Filter from "./Filter";
import "./Filters.css";
const FILTERS = [
  {
    id: "123asd",
    filterText: "Filter",
    isActive: false,
    activeFilterCount: 1,
    isMainFilter: true,
  },
  {
    id: "124asd",
    filterText: "Offers",
    isActive: true,
  },
  {
    id: "123daa",
    filterText: "Rating: High to Low",
    isActive: false,
  },
  {
    id: "123rew",
    filterText: "Pet Friendly",
    isActive: false,
  },
  {
    id: "123uio",
    filterText: "Serves Alcohol",
    isActive: false,
  },
  {
    id: "123iop",

    filterText: "Outdoor Seating",
    isActive: false,
  },
  {
    id: "123gfd",
    filterText: "Open Now",
    isActive: false,
  },
];
export default function Filters() {
  return (
    <section className="filters">
      {FILTERS.map((filter) => (
        <Filter key={filter.id} {...filter} />
      ))}
    </section>
  );
}
