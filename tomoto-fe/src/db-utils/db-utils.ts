import { Restaurant, RestaurantDetails } from "../components/cards/types";
import RESPONSE from "../components/utility/RESPONSE";

interface DB {
  load: (start: number, limit: number) => Promise<RestaurantDetails>;
}

export function db(pageSize: number = 10): DB {
  const restaurantList = structuredClone(RESPONSE);
  for (let index = 0; index < 10; index++) {
    restaurantList.push(...structuredClone(RESPONSE));
  }

  return {
    load: (
      start: number,
      limit: number = pageSize
    ): Promise<RestaurantDetails> => {
      const restaurants = restaurantList.slice(
        start,
        start + limit
      ) as unknown as Restaurant[];

      const response: RestaurantDetails = {
        restaurants,
        nextCursor: start + limit,
        prevCursor: start,
        size: restaurants.length,
        totalItem: restaurantList.length,
      };
      return new Promise((resolve) => resolve(response));
    },
  };
}
