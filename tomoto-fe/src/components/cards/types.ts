/* eslint-disable @typescript-eslint/no-explicit-any */
export type Restaurant = {
  type: "restaurant";
  info: {
    resId: number;
    name: string;
    image: {
      url: string;
      urlWithParams: string;
    };
    o2FeaturedImage: {
      url: string;
    };
    rating: {
      has_fake_reviews: number;
      aggregate_rating: string;
      rating_text: string;
      rating_subtitle: string;
      rating_color: string;
      votes: string;
      subtext: string;
      is_new: boolean;
    };
    ratingNew: {
      newlyOpenedObj?: {
        text: string;
        color: string;
        bgColor: string;
        bgColorV2: {
          type: string;
          tint: string;
        };
        subtitle: string;
        ratingV2: string;
      };
      suspiciousReviewObj: null;
      ratings: {
        DINING: {
          rating_type: "DINING";
          rating: string;
          reviewCount: string;
          reviewTextSmall: string;
          subtext: string;
          color: string;
          ratingV2: string;
          subtitle: string;
          sideSubTitle: string;
          bgColorV2: {
            type: string;
            tint: string;
          };
          newOnDining: boolean;
        };
        DELIVERY: {
          rating_type: "DELIVERY";
          rating: string;
          reviewCount: string;
          reviewTextSmall: string;
          subtext: string;
          color: string;
          ratingV2: string;
          subtitle: string;
          sideSubTitle: string;
          bgColorV2: {
            type: string;
            tint: string;
          };
          newOnDelivery: boolean;
        };
      };
    };
    cft: {
      text: string;
    };
    cfo: {
      text: string;
    };
    locality: {
      name: string;
      address: string;
      localityUrl: string;
    };
    timing: {
      text: string;
      color: string;
    };
    cuisine: Array<{
      deeplink: string;
      url: string;
      name: string;
    }>;
    should_ban_ugc: boolean;
    costText: {
      text: string;
    };
  };
  order: Array<any>;
  gold?: {
    instant: number;
    welcome_offer: boolean;
    gold_offer: boolean;
    text: string;
    offerValue: string;
    isGoldIcon: boolean;
  };
  takeaway: Array<any>;
  cardAction: {
    text: string;
    clickUrl: string;
    clickActionDeeplink: string;
  };
  distance: string;
  isPromoted: boolean;
  promotedText: string;
  trackingData: Array<{
    table_name: string;
    payload: string;
    event_names: {
      tap: string;
      impression: string;
      served?: string;
    };
  }>;
  allCTA: Array<any>;
  promoOffer: string;
  checkBulkOffers: boolean;
  bulkOffers: Array<any>;
  isDisabled: boolean;
  bottomContainers: Array<any>;
};
export type RestaurantDetails = {
  restaurants: Restaurant[];
  size: number;
  totalItem: number;
  nextCursor: number;
  prevCursor: number;
};
