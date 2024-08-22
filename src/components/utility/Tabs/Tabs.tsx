import Tab from "./Tab";
import diningOut from "../../../assets/dining-out.avif";
import delivery from "../../../assets/delivery.webp";
import nightlife from "../../../assets/nightlife.webp";
const TAB_ITEMS = [
  {
    id: "adfc1",
    illustrationImage: diningOut,
    illustrationText: "Dining Out",
  },
  {
    id: "adfc2",
    illustrationImage: delivery,
    illustrationText: "Delivery",
  },
  {
    id: "adfc3",
    illustrationImage: nightlife,
    illustrationText: "Nightlife",
  },
];

import "./Tabs.css";
import { useState } from "react";
export default function Tabs() {
  const [activeTab, setActiveTab] = useState("");
  const handleSetActiveTab = (illustrationText: string) => {
    setActiveTab(illustrationText);
  };
  return (
    <section className="tabs">
      <div className="tab-list">
        {TAB_ITEMS.map((tab) => (
          <Tab
            key={tab.id}
            {...tab}
            selectedTab={activeTab}
            onClickSetActiveTab={handleSetActiveTab}
          />
        ))}
      </div>
    </section>
  );
}
