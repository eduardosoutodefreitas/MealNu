/*
  Warnings:

  - You are about to drop the column `tag` on the `Dish` table. All the data in the column will be lost.
  - Added the required column `foodCategory` to the `Dish` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dish" DROP COLUMN "tag",
ADD COLUMN     "foodCategory" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "FoodCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "FoodCategory_pkey" PRIMARY KEY ("id")
);
