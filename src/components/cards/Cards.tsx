import RESPONSE from "../utility/RESPONSE";
import Card from "./Card";
export default function Cards() {
  return (
    <section className="cards">
      {RESPONSE.sections.SECTION_SEARCH_RESULT.map((item) => (
        <Card
          key={item.info.resId}
          cardImage={item.info.image.url}
          discountValue={15}
        />
      ))}
    </section>
  );
}
