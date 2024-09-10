import { useCallback, useRef, useState } from "react";
import Card from "./Card";
import "./cards.css";
import useRestaurantsLoad from "./useRestaurantsLoad";
const LIMIT = 1;
const Cards: React.FC = () => {
  const observer = useRef<IntersectionObserver | null>(null);

  const [pageNumber, setPageNumber] = useState<number>(1);
  const { restaurantDetails, hasMore, hasError, loading } = useRestaurantsLoad({
    pageNumber,
  });

  const lastCardRef = useCallback(
    (node: HTMLDivElement) => {
      console.log("INSIDE_LOGIC");

      if (loading) {
        return;
      }
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setPageNumber((prevPageNumber) => prevPageNumber + LIMIT);
          }
        },
        { threshold: 0.1, rootMargin: "100px" }
      );
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore]
  );

  return (
    <section className="cards">
      {hasError && (
        <h1
          style={{
            color: "red",
            textAlign: "center",
            fontSize: "4rem",
            zIndex: 1000,
          }}
        >
          An error occurred
        </h1>
      )}
      {restaurantDetails.restaurants.length &&
        restaurantDetails.restaurants.map((restaurant, index: number) => {
          const isLastIndex =
            index + 1 === restaurantDetails.restaurants.length;
          return (
            <Card
              ref={isLastIndex ? lastCardRef : null}
              key={restaurant.info?.resId}
              {...restaurant}
            />
          );
        })}
      <h1
        style={{
          fontSize: "2rem",
          opacity: loading ? 1 : 0,
          transition: "ease-in-out",
        }}
      >
        Loading...
      </h1>
    </section>
  );
};
export default Cards;
