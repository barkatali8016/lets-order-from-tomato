import Header from "../header/Header";
import Breadcrumb from "../utility/Breadcrumb/Breadcrumb";
import Tabs from "../utility/Tabs/Tabs";

import "./Layout.css";
export default function Layout() {
  return (
    <main className="layout container">
      <Header />
      <Breadcrumb />
      <Tabs />
    </main>
  );
}
