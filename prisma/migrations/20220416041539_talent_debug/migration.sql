/*
  Warnings:

  - You are about to drop the column `cv` on the `Talent` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Talent` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Talent" DROP COLUMN "cv",
DROP COLUMN "email";
