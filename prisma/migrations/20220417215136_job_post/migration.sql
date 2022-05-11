/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Talent` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Talent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Talent" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "benefits" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "salary" TEXT,
    "image" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_companyId_key" ON "Post"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "Talent_userId_key" ON "Talent"("userId");

-- AddForeignKey
ALTER TABLE "Talent" ADD CONSTRAINT "Talent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
