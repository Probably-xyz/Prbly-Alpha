/*
  Warnings:

  - You are about to drop the column `intro` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `Company` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "intro",
DROP COLUMN "size";
