/*
  Warnings:

  - Made the column `email` on table `Company` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Talent` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "hidden" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "email" SET NOT NULL;

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "email" SET NOT NULL;

-- AlterTable
ALTER TABLE "Talent" ALTER COLUMN "email" SET NOT NULL;
