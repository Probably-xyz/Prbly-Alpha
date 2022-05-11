/*
  Warnings:

  - Added the required column `intro` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "intro" TEXT NOT NULL;
