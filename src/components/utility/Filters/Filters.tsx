import { useRef } from "react";
import Dialog from "../Modal/Modal";
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dialog = useRef<any>(null);

  const handleFilterSelection = (id: string) => {
    if (id === FILTERS[0].id) {
      dialog.current?.open();
    }
  };

  return (
    <section className="filters">
      <Dialog
        title={"Filter Options"}
        description={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, doloremque!"
        }
        ref={dialog}
      />
      {FILTERS.map((filter) => (
        <Filter
          key={filter.id}
          {...filter}
          onFilterSection={handleFilterSelection}
        />
      ))}
    </section>
  );
}
