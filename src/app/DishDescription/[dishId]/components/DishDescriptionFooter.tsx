interface DishDescriptionFooterProps {
  price: string;
}
const DishDescriptionFooter = ({ price }: DishDescriptionFooterProps) => {
  return (
    <div className="mx-auto py-3 flex items-center justify-center border-t border-lightGray/50 w-full">
      <h4 className="font-semibold">Preço: R${price}</h4>
    </div>
  );
};

export default DishDescriptionFooter;
