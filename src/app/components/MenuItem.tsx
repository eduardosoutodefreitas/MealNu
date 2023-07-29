import Image from "next/image";
interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

const MenuItem = ({ description, imageUrl, name, price }: MenuItemProps) => {
  return (
    <div className="flex items-center gap-5 pb-4 border-b border-veryLightGray mb-3">
      <Image
        width={185}
        height={113}
        src={imageUrl}
        alt="food photo"
        className="rounded-lg"
      />
      <div className="text-xs">
        <p className="text-base font-semibold">{name}</p>
        <p className="my-2 max-w-[180px] text-lightGray truncate">
          {description}
        </p>
        <span className="font-medium">R${price}</span>
      </div>
    </div>
  );
};

export default MenuItem;
