import Footer from "@/app/components/Footers";
import ShopCard from "@/app/components/shop_card";

export default function Shop() {
  return (
    <div>
      <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <ShopCard imageUrl="/images/bag1.jpeg" title="Pamooja   1" showIcon={true} />
        <ShopCard imageUrl="/images/bag2.jpeg" title="Pamooja 2" />
        <ShopCard imageUrl="/images/confident.png" title="Pamooja 3" />
        <ShopCard imageUrl="/images/artistimage1.png" title="Pamooja 4" />
      </div>
    </div>
    <div><Footer/></div>
    </div>
  );
}




