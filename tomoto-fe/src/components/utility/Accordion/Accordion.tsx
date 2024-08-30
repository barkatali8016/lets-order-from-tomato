import { CaretUp } from "@phosphor-icons/react";

import "./accordion.css";
import { accordionItem } from "../../../types/types";
import { useState } from "react";
export default function Accordion({ title, description }: accordionItem) {
  const [isCollapse, setIsCollapse] = useState(false);
  return (
    <section className="accordion">
      <div
        onClick={() => setIsCollapse((prevState) => !prevState)}
        className="accordion-head"
      >
        <h1 className="title"> {title}</h1>
        <CaretUp
          className={isCollapse ? "caretup active" : "caretup"}
          size={18}
        />
      </div>
      <div className={isCollapse ? "accordion-description active" : "d-none"}>
        {description}
      </div>
    </section>
  );
}
