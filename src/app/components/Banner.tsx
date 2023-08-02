import { prisma } from "@/lib/prisma";

import BannerSlider from "./BannerSlider";

const Banner = async () => {
  const banners = await prisma.restaurantEvent.findMany({})
  return (
    <BannerSlider banners={banners} />
  );
};

export default Banner;
