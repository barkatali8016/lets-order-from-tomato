import bannerImageUrl from "../../assets/banner.avif";
import "./banner.css";
export default function Banner() {
  return (
    <section className="banner">
      <img
        className="banner-img"
        src={bannerImageUrl}
        alt="Its a banner image"
      />
    </section>
  );
}
