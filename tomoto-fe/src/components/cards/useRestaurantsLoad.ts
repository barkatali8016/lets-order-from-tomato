import { useEffect, useState } from "react";
import { RestaurantDetails } from "./types";
import { db } from "../../db-utils/db-utils";

const LIMIT = 20;
const dataBase = db();
export default function useRestaurantsLoad({
  pageNumber,
}: {
  pageNumber: number;
}) {
  const [restaurantDetails, setRestaurantDetails] = useState<RestaurantDetails>(
    {
      restaurants: [],
      size: 0,
      nextCursor: 0,
      prevCursor: 0,
      totalItem: 0,
    }
  );
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      const loadData = async () => {
        const response = await dataBase.load(pageNumber, LIMIT);

        console.log(response, "response.restaurants");
        setRestaurantDetails((prevDetails: RestaurantDetails) => {
          const updatedRestaurant = [
            ...new Map(
              [...prevDetails.restaurants, ...response.restaurants].map(
                (restaurant) => [restaurant.info?.resId, restaurant]
              ) // Use resId as the key
            ).values(),
          ];

          setHasMore(updatedRestaurant.length < response.totalItem);
          setLoading(false);
          return {
            restaurants: updatedRestaurant,
            size: response.size,
            nextCursor: response.nextCursor,
            prevCursor: response.prevCursor,
            totalItem: response.totalItem,
          };
        });
      };
      loadData();
    } catch (error) {
      setLoading(false);
      if (error) setHasError(true);
    }
  }, [pageNumber]);
  return { restaurantDetails, hasMore, hasError, loading };
}
