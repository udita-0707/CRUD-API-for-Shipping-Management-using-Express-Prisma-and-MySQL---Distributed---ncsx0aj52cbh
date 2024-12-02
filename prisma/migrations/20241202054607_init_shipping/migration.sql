/*
  Warnings:

  - You are about to drop the column `productID` on the `Shipping` table. All the data in the column will be lost.
  - You are about to drop the column `userID` on the `Shipping` table. All the data in the column will be lost.
  - Added the required column `productId` to the `Shipping` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Shipping` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Shipping` DROP COLUMN `productID`,
    DROP COLUMN `userID`,
    ADD COLUMN `productId` INTEGER NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;
