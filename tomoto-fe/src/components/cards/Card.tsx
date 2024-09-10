import { SealPercent, Star } from "@phosphor-icons/react";
import "./card.css";
import { forwardRef } from "react";
import { Restaurant } from "./types";

const res = {
  type: "restaurant",
  info: {
    resId: 21249933,
    name: "Cafe Bloom",
    image: {
      url: "https://b.zmtcdn.com/data/pictures/3/21249933/33a9ce26cdd21ad5d977cfda8c597c11_featured_v2.jpg",
      urlWithParams:
        "https://b.zmtcdn.com/data/pictures/3/21249933/33a9ce26cdd21ad5d977cfda8c597c11_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
    },
    o2FeaturedImage: {
      url: "https://b.zmtcdn.com/data/pictures/3/21249933/345877b3ee5f5cf413a04da4eb93b7ba_o2_featured_v2.jpg",
    },
    rating: {
      has_fake_reviews: 0,
      aggregate_rating: "4.0",
      rating_text: "4.0",
      rating_subtitle: "Very Good",
      rating_color: "5BA829",
      votes: "19",
      subtext: "REVIEWS",
      is_new: false,
    },
    ratingNew: {
      newlyOpenedObj: {
        text: "Newly Opened",
        color: "#FFFFFF",
        bgColor: "#F4A266",
        bgColorV2: {
          type: "green",
          tint: "100",
        },
        subtitle: "OUTLET",
        ratingV2: "New",
      },
      suspiciousReviewObj: null,
      ratings: {
        DINING: {
          rating_type: "DINING",
          rating: "4.0",
          reviewCount: "17",
          reviewTextSmall: "17 Reviews",
          subtext: "17 Dining Reviews",
          color: "#1C1C1C",
          ratingV2: "4.0",
          subtitle: "DINING",
          sideSubTitle: "Dining Ratings",
          bgColorV2: {
            type: "green",
            tint: "700",
          },
          newOnDining: false,
        },
        DELIVERY: {
          rating_type: "DELIVERY",
          rating: "",
          reviewCount: "2",
          reviewTextSmall: "2 Reviews",
          subtext: "Does not offer Delivery",
          color: "",
          ratingV2: "-",
          subtitle: "DELIVERY",
          sideSubTitle: "Delivery Ratings",
          bgColorV2: {
            type: "grey",
            tint: "500",
          },
          newOnDelivery: true,
        },
      },
    },
    cft: {
      text: "\u20b91,000 for two",
    },
    cfo: {
      text: "\u20b9400 for one",
    },
    locality: {
      name: "New Market Area, Kolkata",
      address: "16, 5th Floor, Sudder Street, New Market Area, Kolkata",
      localityUrl: "kolkata/new-market-area-restaurants",
    },
    timing: {
      text: "Opens at 9am",
      color: "#ab000d",
    },
    cuisine: [
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
        url: "https://www.zomato.com/kolkata/restaurants/cafes/",
        name: "Cafe",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
        url: "https://www.zomato.com/kolkata/restaurants/coffee/",
        name: "Coffee",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
        url: "https://www.zomato.com/kolkata/restaurants/continental/",
        name: "Continental",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
        url: "https://www.zomato.com/kolkata/restaurants/pizza/",
        name: "Pizza",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
        url: "https://www.zomato.com/kolkata/restaurants/pasta/",
        name: "Pasta",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
        url: "https://www.zomato.com/kolkata/restaurants/sandwich/",
        name: "Sandwich",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
        url: "https://www.zomato.com/kolkata/restaurants/fast-food/",
        name: "Fast Food",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
        url: "https://www.zomato.com/kolkata/restaurants/beverages/",
        name: "Beverages",
      },
    ],
    should_ban_ugc: false,
    costText: {
      text: "\u20b91,000 for two",
    },
  },
  order: [],
  gold: {
    instant: 10,
    welcome_offer: false,
    gold_offer: false,
    text: "Flat",
    offerValue: "10% OFF",
    isGoldIcon: false,
  },
  takeaway: [],
  cardAction: {
    text: "",
    clickUrl: "/kolkata/cafe-bloom-1-new-market-area/info",
    clickActionDeeplink: "",
  },
  distance: "2 km",
  isPromoted: true,
  promotedText: "Promoted",
  trackingData: [
    {
      table_name: "jadtracking",
      payload:
        '{"banner_id":"5066369","bzone":"0","campaign_id":"13996247","category_id":"1","location_type":"city","location_id":"2","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"21249933","isNewAd":"34","ad_position":"10","slider_position":"10","slider_sequence":"10","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":254,\\"boosted_rank\\":10,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.020554\\",\\"cost_for_two_ctr\\":\\"0\\",\\"distance\\":\\"2.121011734008789\\",\\"organic_ctr\\":\\"0.022098\\",\\"popularity_score\\":\\"0\\",\\"popularity_score_source\\":\\"default\\",\\"target_left\\":\\"430\\"},\\"ordering_parameter_normalised_value\\":{\\"ads_ctr\\":\\"0.26690733430292957\\",\\"cost_for_two_ctr\\":\\"0\\",\\"cost_per_unit\\":\\"0.7488352393053791\\",\\"distance\\":\\"1\\",\\"organic_ctr\\":\\"0.05853520711512945\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"0.045612510860121636\\"},\\"search_id\\":\\"67541339-55d2-441a-9f33-25d0dff991bd\\",\\"section_name\\":\\"featured\\",\\"total_score\\":0.4057428587545786}","subzone_id":"0"}',
      event_names: {
        tap: '{"action":"click"}',
        impression: '{"action":"impression"}',
        served: '{"action":"serve"}',
      },
    },
    {
      table_name: "zsearch_events_log",
      payload:
        '{"search_id":"67541339-55d2-441a-9f33-25d0dff991bd","location_type":"delivery_cell","location_id":"4180033504081346560","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"21249933","element_type":"listing","rank":10,"metadata":{"is_ad":"true"}}',
      event_names: {
        tap: '{"action":"tap"}',
        impression: '{"action":"impression"}',
      },
    },
  ],
  allCTA: [],
  promoOffer: "",
  checkBulkOffers: false,
  bulkOffers: [],
  isDisabled: false,
  bottomContainers: [],
};
const Card = forwardRef<HTMLDivElement, Restaurant>(function Card(props, ref) {
  let dishType = props.info.cuisine?.map((cuisine) => cuisine.name)?.join();
  if (dishType.length > 20) {
    dishType = dishType?.substring(0, 20) + "...";
  }

  return (
    <div className="card" ref={ref}>
      <div className="card-img-section">
        <a href={props.cardAction.clickUrl}>
          <div className="card-img-holder">
            {props.isPromoted && (
              <p className="promoted">{props.promotedText}</p>
            )}
            <img
              className="card-img"
              src={props.info.image.url}
              alt="Card Image"
            />
            {props.gold?.instant && (
              <div className="offer-text">
                <SealPercent size={32} weight="bold" />
                <p>
                  Flat {props.gold.instant}%
                  <span className="offer-off">OFF</span>
                </p>
              </div>
            )}
          </div>
        </a>
      </div>
      <div className="card-description">
        <div>
          <p className="dish-name">{props.info.name}</p>
          {props.info.rating.rating_text && (
            <p className="ratting">
              {props.info.rating.rating_text} <Star size={32} weight="fill" />
            </p>
          )}
        </div>
        <div>
          {dishType && <p className="dish-type">{dishType}</p>}
          <p className="price">{props.info.costText.text}</p>
        </div>
        <div>
          <p className="address">{props.info.locality.name}</p>
        </div>
        <div>
          <p
            className="open-close-info"
            style={{ color: props.info.timing.color }}
          >
            {props.info.timing.text}
          </p>
        </div>
        {props.distance && (
          <div className="distance">
            <p> {props.distance}</p>
          </div>
        )}
      </div>
    </div>
  );
});

export default Card;
