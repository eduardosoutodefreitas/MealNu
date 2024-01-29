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
    <div className='relative w-full aspect-video max-h-[320px] my-3 md:px-5'>
      <Image
        fill
        src={imageUrl}
        alt={name}
        className='md:rounded-lg'
        style={{
          objectFit: "cover",
        }}
        sizes='(max-width: 768) 100vw, 700px'
      />
    </div>
  );
};

export default DishDescriptionBanner;
