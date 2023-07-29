import Image from "next/image";

const Header = () => {
  return (
    <header className="container mx-auto h-[10vh] flex items-center">
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
    </header>
  );
};

export default Header;
