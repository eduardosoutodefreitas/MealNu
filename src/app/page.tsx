import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import MenuNavigation from "./components/MenuNavigation";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-5">
      <Header />
      <Banner />
      <MenuNavigation />
      <Menu />
      <Footer />
    </div>
  );
}
