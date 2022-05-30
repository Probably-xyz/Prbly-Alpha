/*
  Warnings:

  - You are about to drop the column `intro` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `applicationId` on the `Talent` table. All the data in the column will be lost.
  - Added the required column `options` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Talent" DROP CONSTRAINT "Talent_applicationId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "intro",
ADD COLUMN     "options" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Talent" DROP COLUMN "applicationId";
