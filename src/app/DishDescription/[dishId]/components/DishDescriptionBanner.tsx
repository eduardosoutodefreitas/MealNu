import Image from "next/image";
interface DishDescriptionBannerProps {
  imageUrl: string;
  name: string;
}
const DishDescriptionBanner = ({
  name,
  imageUrl,
}: DishDescriptionBannerProps) => {
  return (
    <div className="relative w-full h-[180px] sm:h-[250px] md:h-[320px] my-3">
      <Image
        fill
        src={imageUrl}
        alt={name}
        className="rounded-lg"
        style={{
          "objectFit": "cover",
        }}
        sizes="(max-width: 768) 100vw, 700px"
      />
    </div>
  );
};

export default DishDescriptionBanner;
