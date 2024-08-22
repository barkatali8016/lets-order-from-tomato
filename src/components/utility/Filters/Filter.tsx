import { FadersHorizontal, X } from "@phosphor-icons/react";
import "./filter.css";
type FilterType = {
  filterText: string;
  isActive: boolean;
  activeFilterCount?: number;
  isMainFilter?: boolean;
};
export default function Filter({
  filterText,
  isActive,
  activeFilterCount,
  isMainFilter,
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
    <div className={isActive ? "filter active" : "filter"}>
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
