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
    <div className="w-full aspect-video relative mt-2 mb-3">
      <Image
        fill
        src={imageUrl}
        alt={name}
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default DishDescriptionBanner;
