/*
  Warnings:

  - You are about to drop the column `featured` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "featured",
DROP COLUMN "image";
