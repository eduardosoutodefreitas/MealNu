import Banner from "./components/Banner";
import Header from "./components/Header";
import Menu from "./components/Menu";
import MenuNavigation from "./components/MenuNavigation";

export default function Home() {
  return (
    <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
      <Header />
      <Banner />
      <MenuNavigation />
      <Menu />
    </div>
  );
}
