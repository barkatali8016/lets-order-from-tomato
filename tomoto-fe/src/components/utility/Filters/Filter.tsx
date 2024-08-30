import { FadersHorizontal, X } from "@phosphor-icons/react";
import "./filter.css";
type FilterType = {
  id: string;
  filterText: string;
  isActive: boolean;
  activeFilterCount?: number;
  isMainFilter?: boolean;
  onFilterSection: (id: string) => void;
};
export default function Filter({
  id,
  filterText,
  isActive,
  activeFilterCount,
  isMainFilter,
  onFilterSection,
}: FilterType) {
  let filterIcon;
  if (isMainFilter && activeFilterCount) {
    filterIcon = (
      <div className={activeFilterCount ? "filter-count" : "d-none"}>
        {activeFilterCount}
      </div>
    );
  } else if (isMainFilter) {
    filterIcon = (
      <div className="filter-icon">
        <FadersHorizontal size={32} weight="bold" />
      </div>
    );
  }

  return (
    <div
      className={isActive ? "filter active" : "filter"}
      onClick={() => onFilterSection(id)}
    >
      {filterIcon}
      <div className="filter-text">{filterText}</div>
      {isActive && (
        <div className="filter-icon">
          <X size={18} weight="bold" />
        </div>
      )}
    </div>
  );
}
