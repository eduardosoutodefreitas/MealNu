import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="container mx-auto h-[10vh] flex items-center">
      <Link href="/" className="flex items-center gap-2">
        <div className="relative h-[40px] w-[40px]">
          <Image
            src="/logo.png"
            style={{
              objectFit: "cover",
            }}
            fill
            alt="logo"
          />
        </div>
        <p className="font-bold text-lg">Meal
          <span className="text-specialOrange">Nu</span>
        </p>
      </Link>
    </header>
  );
};

export default Header;
