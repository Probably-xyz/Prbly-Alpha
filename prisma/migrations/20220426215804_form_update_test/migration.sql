/*
  Warnings:

  - You are about to drop the column `facebook` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `instagram` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `linkedin` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `twitter` on the `Company` table. All the data in the column will be lost.
  - The `industry` column on the `Company` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `size` column on the `Company` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `benefits` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `facebook` on the `Talent` table. All the data in the column will be lost.
  - You are about to drop the column `instagram` on the `Talent` table. All the data in the column will be lost.
  - Added the required column `cover` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `intro` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `website` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atsUrl` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `github` to the `Talent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `headline` to the `Talent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `otherLink` to the `Talent` table without a default value. This is not possible if the table is not empty.
  - Made the column `twitter` on table `Talent` required. This step will fail if there are existing NULL values in that column.
  - Made the column `linkedin` on table `Talent` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "facebook",
DROP COLUMN "instagram",
DROP COLUMN "linkedin",
DROP COLUMN "twitter",
ADD COLUMN     "cover" TEXT NOT NULL,
ADD COLUMN     "intro" TEXT NOT NULL,
ADD COLUMN     "website" TEXT NOT NULL,
DROP COLUMN "industry",
ADD COLUMN     "industry" TEXT[],
DROP COLUMN "size",
ADD COLUMN     "size" TEXT[];

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "atsUrl" TEXT NOT NULL,
ADD COLUMN     "featured" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "benefits",
ADD COLUMN     "benefits" TEXT[];

-- AlterTable
ALTER TABLE "Talent" DROP COLUMN "facebook",
DROP COLUMN "instagram",
ADD COLUMN     "Skills" TEXT[],
ADD COLUMN     "Status" TEXT[],
ADD COLUMN     "github" TEXT NOT NULL,
ADD COLUMN     "headline" TEXT NOT NULL,
ADD COLUMN     "otherLink" TEXT NOT NULL,
ALTER COLUMN "twitter" SET NOT NULL,
ALTER COLUMN "linkedin" SET NOT NULL;
