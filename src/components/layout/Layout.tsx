import Banner from "../banner/Banner";
import Cards from "../cards/Cards";
import Header from "../header/Header";
import Breadcrumb from "../utility/Breadcrumb/Breadcrumb";
import Filters from "../utility/Filters/Filters";
import SectionHeading from "../utility/SectionHeading/SectionHeading";
import Tabs from "../utility/Tabs/Tabs";

import "./Layout.css";
export default function Layout() {
  return (
    <main className="layout container">
      <Header />
      <Breadcrumb />
      <Tabs />
      <Filters />
      <Banner />
      <SectionHeading />
      {/* <Cards /> */}
    </main>
  );
}
