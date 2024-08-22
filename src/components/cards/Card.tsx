import { SealPercent, Star } from "@phosphor-icons/react";

type CardPropType = {
  cardImage: string;
  discountValue: number;
};

export default function Card({ cardImage, discountValue }: CardPropType) {
  return (
    <div className="card">
      <div className="card-img">
        <a href="./">
          <div className="card-img-holder">
            <p className="promoted">Promoted</p>
            <img src={cardImage} alt="Card Image" />
            {discountValue && (
              <div className="offer-text">
                <SealPercent size={32} weight="bold" />
                <p>
                  Flat {discountValue}% <span className="offer-off">OFF</span>
                </p>
              </div>
            )}
          </div>
        </a>
      </div>
      <div className="card-description">
        <div>
          <p className="dish-name">Biriyani</p>
          <p className="ratting">
            4.2 <Star size={32} weight="fill" />
          </p>
        </div>
        <div>
          <p className="dish-type"> Asian, Continental</p>
          <p className="price">₹2,500 for two</p>
        </div>
        <div>
          <p className="address"> Sector 1, Salt Lake, Kolkata</p>
        </div>
        <div>
          <p className="open-close-info"> Closes in 1 hour 6 minutes</p>
        </div>
        <div>
          <p className="distance"> 8.6 km</p>
        </div>
      </div>
    </div>
  );
}
