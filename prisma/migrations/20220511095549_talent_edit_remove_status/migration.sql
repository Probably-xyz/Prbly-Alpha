/*
  Warnings:

  - You are about to drop the column `status` on the `Talent` table. All the data in the column will be lost.
  - Added the required column `email` to the `Talent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Talent" DROP COLUMN "status",
ADD COLUMN     "email" TEXT NOT NULL;
