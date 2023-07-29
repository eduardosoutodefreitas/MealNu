-- CreateTable
CREATE TABLE "RestaurantEvent" (
    "id" TEXT NOT NULL,
    "bannerUrl" TEXT NOT NULL,

    CONSTRAINT "RestaurantEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dish" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(8,2) NOT NULL,
    "tag" TEXT NOT NULL,
    "waitingTime" INTEGER NOT NULL,
    "peopleServed" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Dish_pkey" PRIMARY KEY ("id")
);
