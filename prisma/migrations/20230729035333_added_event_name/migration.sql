/*
  Warnings:

  - Added the required column `eventName` to the `RestaurantEvent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RestaurantEvent" ADD COLUMN     "eventName" TEXT NOT NULL;
